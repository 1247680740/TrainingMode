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
 * 暂停界面
 *
 */
var game;
(function (game) {
    var PauseMediator = (function (_super) {
        __extends(PauseMediator, _super);
        function PauseMediator(viewComponent) {
            if (viewComponent === void 0) { viewComponent = null; }
            var _this = _super.call(this, PauseMediator.NAME, viewComponent) || this;
            _this.typeNum = 0;
            _this.pausePanel = new game.PausePanel();
            return _this;
        }
        PauseMediator.prototype.listNotificationInterests = function () {
            return [
                NoficationConfig.OPEN_PAUSE,
                NoficationConfig.CLOSE_PAUSE
            ];
        };
        PauseMediator.prototype.handleNotification = function (notification) {
            var data = notification.getBody();
            switch (notification.getName()) {
                case NoficationConfig.OPEN_PAUSE: {
                    this.setName(data);
                    this.showUI(this.pausePanel, false, 0, 0, 2);
                    break;
                }
                case NoficationConfig.CLOSE_PAUSE: {
                    this.buttonClickClose();
                    break;
                }
            }
        };
        /**
        * 初始化面板ui
        */
        PauseMediator.prototype.initUI = function () {
            this.pausePanel.btn_reset.addEventListener(egret.TouchEvent.TOUCH_TAP, this.reset, this);
            this.pausePanel.btn_containue.addEventListener(egret.TouchEvent.TOUCH_TAP, this.containue, this);
            this.pausePanel.btn_upset.addEventListener(egret.TouchEvent.TOUCH_TAP, this.upset, this);
        };
        /**
         * 初始化面板数据
         */
        PauseMediator.prototype.initData = function () {
        };
        PauseMediator.prototype.buttonClickClose = function () {
            this.pausePanel.btn_reset.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.reset, this);
            this.pausePanel.btn_containue.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.containue, this);
            this.pausePanel.btn_upset.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.upset, this);
            this.closePanel(1);
        };
        PauseMediator.prototype.reset = function () {
            var _this = this;
            EffectUtils.playEffect(this.pausePanel.btn_reset, 2, function () {
                _this.buttonClickClose();
                _this.resetPlayerData();
                if (_this.typeNum == 1) {
                    game.AppFacade.getInstance().sendNotification(EventConfig.Event_GAME_COUNTDOWN_RESET);
                }
                else if (_this.typeNum == 2) {
                    game.AppFacade.getInstance().sendNotification(EventConfig.Event_GAME_TIME_RESET);
                }
                else if (_this.typeNum == 3) {
                    game.AppFacade.getInstance().sendNotification(EventConfig.Event_GAME_TASK_RESET);
                }
                game.AppFacade.getInstance().sendNotification(NoficationConfig.OPEN_LOGIN, 2);
            }, this);
        };
        PauseMediator.prototype.resetPlayerData = function () {
            var leftArr = P.getGameDataProxy().getLeftPlayer();
            var centerArr = P.getGameDataProxy().getCenterPlayer();
            var rightArr = P.getGameDataProxy().getRightPlayer();
            this.resetData(leftArr, 1);
            this.resetData(centerArr, 2);
            this.resetData(rightArr, 3);
        };
        PauseMediator.prototype.resetData = function (arr, type) {
            for (var i = 0; i < arr.length; i++) {
                var curVo = arr[i];
                curVo.playEveryTimes = 0;
                curVo.playNums = 0;
                curVo.playTimes = 0;
                if (type == 1) {
                    P.getGameDataProxy().setLeftPlayer(curVo);
                }
                else if (type == 2) {
                    P.getGameDataProxy().setCenterPlayer(curVo);
                }
                else if (type == 3) {
                    P.getGameDataProxy().setRightPlayer(curVo);
                }
            }
        };
        PauseMediator.prototype.containue = function () {
            var _this = this;
            EffectUtils.playEffect(this.pausePanel.btn_containue, 2, function () {
                _this.buttonClickClose();
                game.AppFacade.getInstance().sendNotification(EventConfig.Event_GAME_CONTAINUE);
            }, this);
        };
        PauseMediator.prototype.upset = function () {
            EffectUtils.playEffect(this.pausePanel.btn_upset, 2, function () {
                game.AppFacade.getInstance().sendNotification(NoficationConfig.OPEN_TRIM);
            }, this);
        };
        PauseMediator.prototype.setName = function (typeNum) {
            this.typeNum = typeNum;
        };
        PauseMediator.NAME = "PauseMediator";
        return PauseMediator;
    }(BaseMediator));
    game.PauseMediator = PauseMediator;
    __reflect(PauseMediator.prototype, "game.PauseMediator");
})(game || (game = {}));
