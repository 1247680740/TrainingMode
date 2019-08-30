var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
/**
  * 时间模式界面
  */
var game;
(function (game) {
    var TimeTypeMediator = (function (_super) {
        __extends(TimeTypeMediator, _super);
        function TimeTypeMediator(viewComponent) {
            if (viewComponent === void 0) { viewComponent = null; }
            var _this = _super.call(this, TimeTypeMediator.NAME, viewComponent) || this;
            _this.timer = null;
            _this.timerNum = 0;
            _this.noNum_l = 0;
            _this.noNum_c = 0;
            _this.noNum_r = 0;
            _this.timeTypePanel = new game.TimeTypePanel();
            return _this;
        }
        TimeTypeMediator.prototype.listNotificationInterests = function () {
            return [
                NoficationConfig.OPEN_TIMETYPE,
                NoficationConfig.CLOSE_TIMETYPE,
                EventConfig.Event_UPDATE_TOUCH_Time,
                EventConfig.Event_GAME_TIME_RESET,
                EventConfig.Event_GAME_CONTAINUE,
                EventConfig.Event_GAME_UPSET
            ];
        };
        TimeTypeMediator.prototype.handleNotification = function (notification) {
            var data = notification.getBody();
            switch (notification.getName()) {
                case NoficationConfig.OPEN_TIMETYPE: {
                    //显示角色面板
                    this.changeBg();
                    this.showUI(this.timeTypePanel, false, 0, 0, 6);
                    break;
                }
                case NoficationConfig.CLOSE_TIMETYPE: {
                    this.closeButtonClick();
                    break;
                }
                case EventConfig.Event_UPDATE_TOUCH_Time: {
                    this.upDateTouch(data);
                    break;
                }
                case EventConfig.Event_GAME_TIME_RESET: {
                    this.resetGame();
                    break;
                }
                case EventConfig.Event_GAME_CONTAINUE: {
                    this.containue();
                    break;
                }
                case EventConfig.Event_GAME_UPSET: {
                    this.closeButtonClick();
                    this.upset();
                    break;
                }
            }
        };
        /**
         * 初始化面板ui
         */
        TimeTypeMediator.prototype.initUI = function () {
            this.timeTypePanel.btn_back.addEventListener(egret.TouchEvent.TOUCH_TAP, this.pauseGame, this);
            for (var i = 1; i < 4; i++) {
                if (i == 1) {
                    this.timeTypePanel.p_left.setGame(1, i);
                }
                else if (i == 2) {
                    this.timeTypePanel.p_center.setGame(1, i);
                }
                else if (i == 3) {
                    this.timeTypePanel.p_right.setGame(1, i);
                }
            }
        };
        TimeTypeMediator.prototype.changeBg = function () {
            var bgId = Math.floor(Math.random() * 21 + 1);
            var bgName = "s_bg" + bgId + "_png";
            game.AppFacade.getInstance().sendNotification(EventConfig.Event_CHANGE_GAMEBG, bgName);
        };
        /**
         * 初始化面板数据
         */
        TimeTypeMediator.prototype.initData = function () {
            var _this = this;
            // 时间模式初始化数据
            this.noNum_l = 0;
            this.noNum_c = 0;
            this.noNum_r = 0;
            var maxLength = Global.contrastArr();
            this.timerNum = GlobalData.timeOneData;
            var totalLength = maxLength * GlobalData.timeThreeData;
            if (!this.timer) {
                this.timer = new egret.Timer(1000);
            }
            this.timer.addEventListener(egret.TimerEvent.TIMER, function (event) {
                if (_this.timerNum <= 0) {
                    _this.timerNum = GlobalData.timeOneData;
                    _this.timer.stop();
                    _this.timer = null;
                    _this.resetPlayerData();
                    if (GlobalData._curTimerEveryGroup + 1 >= maxLength) {
                        if (GlobalData._curTimerGroup + 1 > GlobalData.timeThreeData) {
                            GlobalData._curTimerGroup = 1;
                            GlobalData._curTimerTotalGroup = 1;
                            GlobalData._curTimerEveryGroup = 0;
                            console.log("进入结算界面");
                            _this.closeButtonClick();
                            // game.AppFacade.getInstance().sendNotification(NoficationConfig.OPEN_RESULT);
                            game.AppFacade.getInstance().sendNotification(NoficationConfig.OPEN_TIME_FINISH);
                        }
                        else {
                            GlobalData._curTimerGroup += 1;
                            GlobalData._curTimerTotalGroup += 1;
                            GlobalData._curTimerEveryGroup = 0;
                            game.AppFacade.getInstance().sendNotification(NoficationConfig.CLOSE_TIMETYPE);
                            game.AppFacade.getInstance().sendNotification(NoficationConfig.OPEN_READY);
                        }
                    }
                    else {
                        GlobalData._curTimerEveryGroup += 1;
                        GlobalData._curTimerTotalGroup += 1;
                        game.AppFacade.getInstance().sendNotification(NoficationConfig.CLOSE_TIMETYPE);
                        game.AppFacade.getInstance().sendNotification(NoficationConfig.OPEN_READY);
                    }
                    return;
                }
                _this.timerNum--;
                _this.timeTypePanel.p_left.gameIcon.setTimer(Global.formatTime(_this.timerNum, 1));
                _this.timeTypePanel.p_center.gameIcon.setTimer(Global.formatTime(_this.timerNum, 1));
                _this.timeTypePanel.p_right.gameIcon.setTimer(Global.formatTime(_this.timerNum, 1));
            }, this);
            this.timer.start();
            this.timeTypePanel.p_left.gameIcon.setStep(GlobalData._curTimerTotalGroup + "/" + totalLength);
            this.timeTypePanel.p_center.gameIcon.setStep(GlobalData._curTimerTotalGroup + "/" + totalLength);
            this.timeTypePanel.p_right.gameIcon.setStep(GlobalData._curTimerTotalGroup + "/" + totalLength);
            if (GlobalData.curLeftPlayerVo) {
                this.timeTypePanel.p_left.gameIcon.setIcon(GlobalData.curLeftPlayerVo.playerIcon);
                this.timeTypePanel.p_left.gameIcon.setTimeTouchNum(GlobalData.curLeftPlayerVo.playNums);
            }
            else {
                this.timeTypePanel.p_left.gameIcon.setIcon("");
                this.timeTypePanel.p_left.gameIcon.setTimeTouchNum(0);
            }
            if (GlobalData.curCenterPlayerVo) {
                this.timeTypePanel.p_center.gameIcon.setIcon(GlobalData.curCenterPlayerVo.playerIcon);
                this.timeTypePanel.p_center.gameIcon.setTimeTouchNum(GlobalData.curCenterPlayerVo.playNums);
            }
            else {
                this.timeTypePanel.p_center.gameIcon.setIcon("");
                this.timeTypePanel.p_center.gameIcon.setTimeTouchNum(0);
            }
            if (GlobalData.curRightPlayerVo) {
                this.timeTypePanel.p_right.gameIcon.setIcon(GlobalData.curRightPlayerVo.playerIcon);
                this.timeTypePanel.p_right.gameIcon.setTimeTouchNum(GlobalData.curRightPlayerVo.playNums);
            }
            else {
                this.timeTypePanel.p_right.gameIcon.setIcon("");
                this.timeTypePanel.p_right.gameIcon.setTimeTouchNum(0);
            }
        };
        TimeTypeMediator.prototype.upDateTouch = function (index) {
            if (this.timeTypePanel) {
                switch (index) {
                    case 1:
                        if (GlobalData.curLeftPlayerVo) {
                            GlobalData.curLeftPlayerVo.playNums += 1;
                            this.timeTypePanel.p_left.gameIcon.setTimeTouchNum(GlobalData.curLeftPlayerVo.playNums);
                        }
                        else {
                            this.noNum_l += 1;
                            this.timeTypePanel.p_left.gameIcon.setTimeTouchNum(this.noNum_l);
                        }
                        break;
                    case 2:
                        if (GlobalData.curCenterPlayerVo) {
                            GlobalData.curCenterPlayerVo.playNums += 1;
                            this.timeTypePanel.p_center.gameIcon.setTimeTouchNum(GlobalData.curCenterPlayerVo.playNums);
                        }
                        else {
                            this.noNum_c += 1;
                            this.timeTypePanel.p_center.gameIcon.setTimeTouchNum(this.noNum_c);
                        }
                        break;
                    case 3:
                        if (GlobalData.curRightPlayerVo) {
                            GlobalData.curRightPlayerVo.playNums += 1;
                            this.timeTypePanel.p_right.gameIcon.setTimeTouchNum(GlobalData.curRightPlayerVo.playNums);
                        }
                        else {
                            this.noNum_r += 1;
                            this.timeTypePanel.p_right.gameIcon.setTimeTouchNum(this.noNum_r);
                        }
                        break;
                }
            }
        };
        TimeTypeMediator.prototype.resetPlayerData = function () {
            if (GlobalData.curLeftPlayerVo) {
                P.getGameDataProxy().setLeftPlayer(GlobalData.curLeftPlayerVo);
            }
            if (GlobalData.curCenterPlayerVo) {
                P.getGameDataProxy().setCenterPlayer(GlobalData.curCenterPlayerVo);
            }
            if (GlobalData.curRightPlayerVo) {
                P.getGameDataProxy().setRightPlayer(GlobalData.curRightPlayerVo);
            }
        };
        TimeTypeMediator.prototype.containue = function () {
            if (this.timer) {
                this.timer.start();
            }
        };
        TimeTypeMediator.prototype.upset = function () {
        };
        TimeTypeMediator.prototype.resetGame = function () {
            this.timerNum = 0;
            this.noNum_l = 0;
            this.noNum_c = 0;
            this.noNum_r = 0;
            GlobalData.initData();
            this.closeButtonClick();
        };
        TimeTypeMediator.prototype.pauseGame = function () {
            var _this = this;
            EffectUtils.playEffect(this.timeTypePanel.btn_back, 2, function () {
                if (_this.timer) {
                    _this.timer.stop();
                }
                game.AppFacade.getInstance().sendNotification(NoficationConfig.OPEN_PAUSE, 2);
            });
        };
        TimeTypeMediator.prototype.closeButtonClick = function () {
            if (this.timer) {
                this.timer.stop();
                this.timer = null;
            }
            this.timeTypePanel.btn_back.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.pauseGame, this);
            this.closePanel(1);
        };
        TimeTypeMediator.NAME = "TimeTypeMediator";
        return TimeTypeMediator;
    }(BaseMediator));
    game.TimeTypeMediator = TimeTypeMediator;
    __reflect(TimeTypeMediator.prototype, "game.TimeTypeMediator");
})(game || (game = {}));
