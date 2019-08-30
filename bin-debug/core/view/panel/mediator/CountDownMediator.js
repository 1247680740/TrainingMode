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
 * 训练倒计时页面
 *
 */
var game;
(function (game) {
    var CountDownMediator = (function (_super) {
        __extends(CountDownMediator, _super);
        function CountDownMediator(viewComponent) {
            if (viewComponent === void 0) { viewComponent = null; }
            var _this = _super.call(this, CountDownMediator.NAME, viewComponent) || this;
            _this.countTimeNum = 20;
            _this.timer = null;
            _this.countPanel = new game.CountDownPanel();
            return _this;
        }
        CountDownMediator.prototype.listNotificationInterests = function () {
            return [
                NoficationConfig.OPEN_COUNTDOWN,
                NoficationConfig.CLOSE_COUNTDOWN,
                EventConfig.Event_GAME_COUNTDOWN_RESET,
                EventConfig.Event_GAME_CONTAINUE,
                EventConfig.Event_GAME_UPSET
            ];
        };
        CountDownMediator.prototype.handleNotification = function (notification) {
            var data = notification.getBody();
            switch (notification.getName()) {
                case NoficationConfig.OPEN_COUNTDOWN: {
                    this.changeBg();
                    this.showUI(this.countPanel, false, 0, 0, 6);
                    break;
                }
                case NoficationConfig.CLOSE_COUNTDOWN: {
                    this.closeButtonClick();
                    break;
                }
                case EventConfig.Event_GAME_COUNTDOWN_RESET: {
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
        CountDownMediator.prototype.initUI = function () {
            this.countPanel.label_tip.text = "训练演示";
            this.countPanel.btn_pause.addEventListener(egret.TouchEvent.TOUCH_TAP, this.pauseTime, this);
            this.countPanel.btn_skip.addEventListener(egret.TouchEvent.TOUCH_TAP, this.skip, this);
        };
        CountDownMediator.prototype.changeBg = function () {
            var bgId = Math.floor(Math.random() * 10 + 1);
            var bgName = "bg" + bgId + "_png";
            game.AppFacade.getInstance().sendNotification(EventConfig.Event_CHANGE_GAMEBG, bgName);
        };
        /**
         * 初始化面板数据
         */
        CountDownMediator.prototype.initData = function () {
            this.countTimeNum = 20;
            this.resetPlayerData();
            this.initView();
            this.countPanel.list_L.resetListData(P.getGameDataProxy().getLeftPlayer(), 1);
            this.countPanel.list_C.resetListData(P.getGameDataProxy().getCenterPlayer(), 2);
            this.countPanel.list_R.resetListData(P.getGameDataProxy().getRightPlayer(), 3);
        };
        CountDownMediator.prototype.closeButtonClick = function () {
            if (this.timer) {
                this.timer.stop();
                this.timer = null;
            }
            this.countTimeNum = 20;
            this.countPanel.btn_pause.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.pauseTime, this);
            this.countPanel.btn_skip.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.skip, this);
            this.closePanel(1);
        };
        CountDownMediator.prototype.resetPlayerData = function () {
            var leftArr = P.getGameDataProxy().getLeftPlayer();
            var centerArr = P.getGameDataProxy().getCenterPlayer();
            var rightArr = P.getGameDataProxy().getRightPlayer();
            for (var i = 0; i < leftArr.length; i++) {
                var leftVO = leftArr[i];
                if (GlobalData.checkType) {
                    leftVO.playNums = 0;
                    leftVO.playTimes = GlobalData.timeOneData * GlobalData.timeThreeData;
                }
                else {
                    leftVO.playNums = GlobalData.taskOneData * GlobalData.taskThreeData;
                    leftVO.playTimes = 0;
                }
                P.getGameDataProxy().setLeftPlayer(leftVO);
            }
            for (var i = 0; i < centerArr.length; i++) {
                var centerVO = centerArr[i];
                if (GlobalData.checkType) {
                    centerVO.playNums = 0;
                    centerVO.playTimes = GlobalData.timeOneData * GlobalData.timeThreeData;
                }
                else {
                    centerVO.playNums = GlobalData.taskOneData * GlobalData.taskThreeData;
                    centerVO.playTimes = 0;
                }
                P.getGameDataProxy().setLeftPlayer(centerVO);
            }
            for (var i = 0; i < rightArr.length; i++) {
                var rightVO = rightArr[i];
                if (GlobalData.checkType) {
                    rightVO.playNums = 0;
                    rightVO.playTimes = GlobalData.timeOneData * GlobalData.timeThreeData;
                }
                else {
                    rightVO.playNums = GlobalData.taskOneData * GlobalData.taskThreeData;
                    rightVO.playTimes = 0;
                }
                P.getGameDataProxy().setLeftPlayer(rightVO);
            }
        };
        CountDownMediator.prototype.initView = function () {
            var _this = this;
            this.countPanel.label_time.text = this.countTimeNum + "";
            if (this.timer == null) {
                this.timer = new egret.Timer(1000);
            }
            this.timer.addEventListener(egret.TimerEvent.TIMER, function (event) {
                _this.countTimeNum -= 1;
                if (_this.countTimeNum < 0) {
                    _this.countTimeNum = 20;
                    if (_this.timer) {
                        _this.timer.stop();
                        _this.timer = null;
                    }
                    // 跳转下一界面
                    game.AppFacade.getInstance().sendNotification(NoficationConfig.CLOSE_COUNTDOWN);
                    game.AppFacade.getInstance().sendNotification(NoficationConfig.OPEN_READY);
                    return;
                }
                _this.countPanel.label_time.text = _this.countTimeNum + "";
            }, this);
            this.timer.start();
        };
        CountDownMediator.prototype.skip = function () {
            EffectUtils.playEffect(this.countPanel.btn_skip, 2, function () {
                game.AppFacade.getInstance().sendNotification(NoficationConfig.CLOSE_COUNTDOWN);
                game.AppFacade.getInstance().sendNotification(NoficationConfig.OPEN_READY);
            });
        };
        CountDownMediator.prototype.pauseTime = function () {
            var _this = this;
            EffectUtils.playEffect(this.countPanel.btn_pause, 2, function () {
                if (_this.timer) {
                    _this.timer.stop();
                }
                game.AppFacade.getInstance().sendNotification(NoficationConfig.OPEN_PAUSE, 1);
            });
        };
        CountDownMediator.prototype.resetGame = function () {
            this.closeButtonClick();
        };
        CountDownMediator.prototype.containue = function () {
            if (this.timer) {
                this.timer.start();
            }
        };
        CountDownMediator.prototype.upset = function () {
        };
        CountDownMediator.NAME = "CountDownMediator";
        return CountDownMediator;
    }(BaseMediator));
    game.CountDownMediator = CountDownMediator;
    __reflect(CountDownMediator.prototype, "game.CountDownMediator");
})(game || (game = {}));
