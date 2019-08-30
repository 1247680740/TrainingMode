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
 * 准备阶段界面
 *
 */
var game;
(function (game) {
    var ReadyMediator = (function (_super) {
        __extends(ReadyMediator, _super);
        function ReadyMediator(viewComponent) {
            if (viewComponent === void 0) { viewComponent = null; }
            var _this = _super.call(this, ReadyMediator.NAME, viewComponent) || this;
            _this.timer = null;
            _this.countTimeNum = 0;
            _this.readyPanel = new game.ReadyPanel();
            return _this;
        }
        ReadyMediator.prototype.listNotificationInterests = function () {
            return [
                NoficationConfig.OPEN_READY,
                NoficationConfig.CLOSE_READY
            ];
        };
        ReadyMediator.prototype.handleNotification = function (notification) {
            var data = notification.getBody();
            switch (notification.getName()) {
                case NoficationConfig.OPEN_READY: {
                    this.changeBg();
                    this.showUI(this.readyPanel, false, 0, 0, 6);
                    break;
                }
                case NoficationConfig.CLOSE_READY: {
                    if (this.timer) {
                        this.timer.stop();
                        this.timer = null;
                    }
                    this.countTimeNum = (GlobalData.checkType) ? GlobalData.timeTwoData : GlobalData.taskTwoData;
                    this.closeButtonClick();
                    break;
                }
            }
        };
        /**
         * 初始化面板ui
         */
        ReadyMediator.prototype.initUI = function () {
            var maxLength = Global.contrastArr();
            if (GlobalData.checkType) {
                if (GlobalData._curTimerTotalGroup == 1 && GlobalData._curTimerEveryGroup == 0) {
                    this.readyPanel.label_bottomTip.text = "准备开始";
                    this.readyPanel.label_tip.text = "训练即将开始，请做好准备。";
                }
                else {
                    this.readyPanel.label_bottomTip.text = "SET" + GlobalData._curTimerTotalGroup + "/" + (GlobalData.timeThreeData * maxLength);
                    this.readyPanel.label_tip.text = "请下一组做好准备";
                }
            }
            else {
                this.readyPanel.label_bottomTip.text = "准备开始";
                this.readyPanel.label_tip.text = "训练即将开始，请做好准备。";
            }
            this.readyPanel.btn_back.addEventListener(egret.TouchEvent.TOUCH_TAP, this.backView, this);
            this.readyPanel.btn_skip.addEventListener(egret.TouchEvent.TOUCH_TAP, this.skip, this);
        };
        ReadyMediator.prototype.changeBg = function () {
            var bgId = Math.floor(Math.random() * 10 + 1);
            var bgName = "bg" + bgId + "_png";
            game.AppFacade.getInstance().sendNotification(EventConfig.Event_CHANGE_GAMEBG, bgName);
        };
        /**
         * 初始化面板数据
         */
        ReadyMediator.prototype.initData = function () {
            this.countTimeNum = (GlobalData.checkType) ? GlobalData.timeTwoData : GlobalData.taskTwoData;
            this.initView();
        };
        ReadyMediator.prototype.closeButtonClick = function () {
            if (this.timer) {
                this.timer = null;
            }
            this.readyPanel.btn_back.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.backView, this);
            this.readyPanel.btn_skip.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.skip, this);
            this.closePanel(1);
        };
        ReadyMediator.prototype.initView = function () {
            var leftArr = P.getGameDataProxy().getLeftPlayer();
            var centerArr = P.getGameDataProxy().getCenterPlayer();
            var rightArr = P.getGameDataProxy().getRightPlayer();
            if (GlobalData.checkType) {
                if (leftArr[GlobalData._curTimerEveryGroup]) {
                    this.readyPanel.icon_left.visible = true;
                    this.readyPanel.img_leftBye.visible = false;
                    this.readyPanel.icon_left.setIconData(leftArr[GlobalData._curTimerEveryGroup]);
                    GlobalData.curLeftPlayerVo = leftArr[GlobalData._curTimerEveryGroup];
                }
                else {
                    this.readyPanel.icon_left.visible = false;
                    this.readyPanel.img_leftBye.visible = true;
                    GlobalData.curLeftPlayerVo = null;
                }
                if (centerArr[GlobalData._curTimerEveryGroup]) {
                    this.readyPanel.icon_center.visible = true;
                    this.readyPanel.img_centerBye.visible = false;
                    this.readyPanel.icon_center.setIconData(centerArr[GlobalData._curTimerEveryGroup]);
                    GlobalData.curCenterPlayerVo = centerArr[GlobalData._curTimerEveryGroup];
                }
                else {
                    this.readyPanel.icon_center.visible = false;
                    this.readyPanel.img_centerBye.visible = true;
                    GlobalData.curCenterPlayerVo = null;
                }
                if (rightArr[GlobalData._curTimerEveryGroup]) {
                    this.readyPanel.icon_right.visible = true;
                    this.readyPanel.img_rightBye.visible = false;
                    this.readyPanel.icon_right.setIconData(rightArr[GlobalData._curTimerEveryGroup]);
                    GlobalData.curRightPlayerVo = rightArr[GlobalData._curTimerEveryGroup];
                }
                else {
                    this.readyPanel.icon_right.visible = false;
                    this.readyPanel.img_rightBye.visible = true;
                    GlobalData.curRightPlayerVo = null;
                }
            }
            else {
                if (leftArr[GlobalData.l_curTaskEveryGroup]) {
                    this.readyPanel.icon_left.visible = true;
                    this.readyPanel.img_leftBye.visible = false;
                    this.readyPanel.icon_left.setIconData(leftArr[GlobalData.l_curTaskEveryGroup]);
                    GlobalData.curLeftPlayerVo = leftArr[GlobalData.l_curTaskEveryGroup];
                }
                else {
                    this.readyPanel.icon_left.visible = false;
                    this.readyPanel.img_leftBye.visible = true;
                    GlobalData.curLeftPlayerVo = null;
                }
                if (centerArr[GlobalData.c_curTaskEveryGroup]) {
                    this.readyPanel.icon_center.visible = true;
                    this.readyPanel.img_centerBye.visible = false;
                    this.readyPanel.icon_center.setIconData(centerArr[GlobalData.c_curTaskEveryGroup]);
                    GlobalData.curCenterPlayerVo = centerArr[GlobalData.c_curTaskEveryGroup];
                }
                else {
                    this.readyPanel.icon_center.visible = false;
                    this.readyPanel.img_centerBye.visible = true;
                    GlobalData.curCenterPlayerVo = null;
                }
                if (rightArr[GlobalData.r_curTaskEveryGroup]) {
                    this.readyPanel.icon_right.visible = true;
                    this.readyPanel.img_rightBye.visible = false;
                    this.readyPanel.icon_right.setIconData(rightArr[GlobalData.r_curTaskEveryGroup]);
                    GlobalData.curRightPlayerVo = rightArr[GlobalData.r_curTaskEveryGroup];
                }
                else {
                    this.readyPanel.icon_right.visible = false;
                    this.readyPanel.img_rightBye.visible = true;
                    GlobalData.curRightPlayerVo = null;
                }
            }
            this.initTime();
        };
        ReadyMediator.prototype.initTime = function () {
            var _this = this;
            this.readyPanel.label_time.text = this.countTimeNum + "";
            if (this.timer == null) {
                this.timer = new egret.Timer(1000);
            }
            this.timer.addEventListener(egret.TimerEvent.TIMER, function (event) {
                _this.countTimeNum--;
                if (_this.countTimeNum < 0) {
                    _this.countTimeNum = (GlobalData.checkType) ? GlobalData.timeTwoData : GlobalData.taskTwoData;
                    _this.timer.stop();
                    _this.timer = null;
                    // 跳转下一界面
                    if (GlobalData.checkType) {
                        game.AppFacade.getInstance().sendNotification(NoficationConfig.CLOSE_READY);
                        game.AppFacade.getInstance().sendNotification(NoficationConfig.OPEN_TIMETYPE);
                    }
                    else {
                        game.AppFacade.getInstance().sendNotification(NoficationConfig.CLOSE_READY);
                        game.AppFacade.getInstance().sendNotification(NoficationConfig.OPEN_TASKTYPE);
                    }
                    return;
                }
                _this.readyPanel.label_time.text = _this.countTimeNum + "";
            }, this);
            this.timer.start();
        };
        ReadyMediator.prototype.backView = function () {
            EffectUtils.playEffect(this.readyPanel.btn_back, 1, this.sendNofiCation, 1);
        };
        ReadyMediator.prototype.skip = function () {
            EffectUtils.playEffect(this.readyPanel.btn_skip, 1, this.sendNofiCation, 2);
        };
        ReadyMediator.prototype.sendNofiCation = function (data) {
            switch (data) {
                case 1:
                    game.AppFacade.getInstance().sendNotification(NoficationConfig.CLOSE_READY);
                    game.AppFacade.getInstance().sendNotification(NoficationConfig.OPEN_COUNTDOWN);
                    break;
                case 2:
                    game.AppFacade.getInstance().sendNotification(NoficationConfig.CLOSE_READY);
                    if (GlobalData.checkType) {
                        game.AppFacade.getInstance().sendNotification(NoficationConfig.OPEN_TIMETYPE);
                    }
                    else {
                        game.AppFacade.getInstance().sendNotification(NoficationConfig.OPEN_TASKTYPE);
                    }
                    break;
            }
        };
        ReadyMediator.NAME = "ReadyMediator";
        return ReadyMediator;
    }(BaseMediator));
    game.ReadyMediator = ReadyMediator;
    __reflect(ReadyMediator.prototype, "game.ReadyMediator");
})(game || (game = {}));
