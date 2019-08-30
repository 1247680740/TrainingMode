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
 * 首页界面
 *
 */
var game;
(function (game) {
    var HomeCityMediator = (function (_super) {
        __extends(HomeCityMediator, _super);
        function HomeCityMediator(viewComponent) {
            if (viewComponent === void 0) { viewComponent = null; }
            var _this = _super.call(this, HomeCityMediator.NAME, viewComponent) || this;
            _this.homecityPanel = new game.HomeCity();
            return _this;
        }
        HomeCityMediator.prototype.listNotificationInterests = function () {
            return [
                NoficationConfig.OPEN_HOME,
                NoficationConfig.CLOSE_HOME
            ];
        };
        HomeCityMediator.prototype.handleNotification = function (notification) {
            var data = notification.getBody();
            switch (notification.getName()) {
                case NoficationConfig.OPEN_HOME: {
                    this.changeBg();
                    this.showUI(this.homecityPanel, false, 0, 0, 6);
                    break;
                }
                case NoficationConfig.CLOSE_HOME: {
                    this.closeButtonClick();
                    break;
                }
            }
        };
        /**
        * 初始化面板ui
        */
        HomeCityMediator.prototype.initUI = function () {
            this.homecityPanel.btn_back.addEventListener(egret.TouchEvent.TOUCH_TAP, this.backHome, this);
            this.homecityPanel.label_fitness.addEventListener(egret.TouchEvent.TOUCH_TAP, this.checkFitness, this);
            this.homecityPanel.label_stay.addEventListener(egret.TouchEvent.TOUCH_TAP, this.checkStay, this);
            this.homecityPanel.label_heart.addEventListener(egret.TouchEvent.TOUCH_TAP, this.checkHeart, this);
            this.homecityPanel.label_power.addEventListener(egret.TouchEvent.TOUCH_TAP, this.checkPower, this);
            this.homecityPanel.btn_startXL.addEventListener(egret.TouchEvent.TOUCH_TAP, this.startXL, this);
            this.homecityPanel.btn_startSetUp.addEventListener(egret.TouchEvent.TOUCH_TAP, this.startSetup, this);
            this.homecityPanel.btn_StartShow.addEventListener(egret.TouchEvent.TOUCH_TAP, this.startTeach, this);
        };
        /**
         * 初始化面板数据
         */
        HomeCityMediator.prototype.initData = function () {
        };
        /** 退出游戏 */
        HomeCityMediator.prototype.backHome = function () {
            EffectUtils.playEffect(this.homecityPanel.btn_back, 2);
        };
        /** 开始训练 */
        HomeCityMediator.prototype.startXL = function () {
            EffectUtils.playEffect(this.homecityPanel.btn_startXL, 2, this.sendNofigCationto, 1);
        };
        /** 开始设置 */
        HomeCityMediator.prototype.startSetup = function () {
            EffectUtils.playEffect(this.homecityPanel.btn_startSetUp, 2, this.sendNofigCationto, 2);
        };
        /** 演示教程 */
        HomeCityMediator.prototype.startTeach = function () {
            EffectUtils.playEffect(this.homecityPanel.btn_StartShow, 2, this.sendNofigCationto, 3);
        };
        HomeCityMediator.prototype.checkFitness = function () {
            EffectUtils.playEffect(this.homecityPanel.label_fitness, 1);
        };
        HomeCityMediator.prototype.checkStay = function () {
            EffectUtils.playEffect(this.homecityPanel.label_stay, 1);
        };
        HomeCityMediator.prototype.checkHeart = function () {
            EffectUtils.playEffect(this.homecityPanel.label_heart, 1);
        };
        HomeCityMediator.prototype.checkPower = function () {
            EffectUtils.playEffect(this.homecityPanel.label_power, 1);
        };
        HomeCityMediator.prototype.sendNofigCationto = function (type) {
            switch (type) {
                case 1:
                    game.AppFacade.getInstance().sendNotification(NoficationConfig.CLOSE_HOME);
                    game.AppFacade.getInstance().sendNotification(NoficationConfig.OPEN_LOGIN, 1);
                    break;
                case 2:
                    game.AppFacade.getInstance().sendNotification(NoficationConfig.CLOSE_HOME);
                    game.AppFacade.getInstance().sendNotification(NoficationConfig.OPEN_SETUP);
                    break;
                case 3:
                    game.AppFacade.getInstance().sendNotification(NoficationConfig.CLOSE_HOME);
                    game.AppFacade.getInstance().sendNotification(NoficationConfig.OPEN_TEACH);
                    break;
            }
        };
        HomeCityMediator.prototype.closeButtonClick = function () {
            this.homecityPanel.btn_back.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.backHome, this);
            this.homecityPanel.label_fitness.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.checkFitness, this);
            this.homecityPanel.label_stay.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.checkStay, this);
            this.homecityPanel.label_heart.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.checkHeart, this);
            this.homecityPanel.label_power.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.checkPower, this);
            this.homecityPanel.btn_startXL.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.startXL, this);
            this.homecityPanel.btn_startSetUp.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.startSetup, this);
            this.homecityPanel.btn_StartShow.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.startTeach, this);
            this.closePanel(1);
        };
        HomeCityMediator.prototype.changeBg = function () {
            var bgId = Math.floor(Math.random() * 10 + 1);
            var bgName = "bg" + bgId + "_png";
            game.AppFacade.getInstance().sendNotification(EventConfig.Event_CHANGE_GAMEBG, bgName);
        };
        HomeCityMediator.NAME = "HomeCityMediator";
        return HomeCityMediator;
    }(BaseMediator));
    game.HomeCityMediator = HomeCityMediator;
    __reflect(HomeCityMediator.prototype, "game.HomeCityMediator");
})(game || (game = {}));
