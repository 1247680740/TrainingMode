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
 * 登录界面
 *
 */
var game;
(function (game) {
    var LoginMediator = (function (_super) {
        __extends(LoginMediator, _super);
        function LoginMediator(viewComponent) {
            if (viewComponent === void 0) { viewComponent = null; }
            var _this = _super.call(this, LoginMediator.NAME, viewComponent) || this;
            _this.openType = 0;
            _this.loginPanel = new game.LoginPanel();
            return _this;
        }
        LoginMediator.prototype.listNotificationInterests = function () {
            return [
                NoficationConfig.OPEN_LOGIN,
                NoficationConfig.CLOSE_LOGIN,
                EventConfig.Event_UPDATE_PLAYER
            ];
        };
        LoginMediator.prototype.handleNotification = function (notification) {
            var data = notification.getBody();
            switch (notification.getName()) {
                case NoficationConfig.OPEN_LOGIN: {
                    this.openType = data;
                    this.changeBg();
                    this.showUI(this.loginPanel, false, 0, 0, 6);
                    break;
                }
                case NoficationConfig.CLOSE_LOGIN: {
                    this.closeButtonClick();
                    break;
                }
                case EventConfig.Event_UPDATE_PLAYER: {
                    this.initList();
                }
            }
        };
        /**
        * 初始化面板ui
        */
        LoginMediator.prototype.initUI = function () {
            this.loginPanel.btn_back.addEventListener(egret.TouchEvent.TOUCH_TAP, this.backView, this);
            this.loginPanel.btn_start.addEventListener(egret.TouchEvent.TOUCH_TAP, this.startXL, this);
        };
        LoginMediator.prototype.changeBg = function () {
            var bgId = Math.floor(Math.random() * 10 + 1);
            var bgName = "bg" + bgId + "_png";
            game.AppFacade.getInstance().sendNotification(EventConfig.Event_CHANGE_GAMEBG, bgName);
        };
        /**
         * 初始化面板数据
         */
        LoginMediator.prototype.initData = function () {
            this.resetViewData();
            if (this.openType == 1) {
                this.initView();
            }
            else {
                game.AppFacade.getInstance().sendNotification(EventConfig.Event_UPDATE_PLAYER);
            }
        };
        LoginMediator.prototype.initView = function () {
            /** 测试数据 */
            var sendObj = {
                "userId": 0,
                "userName": ""
            };
            SocketManager.SocketProxy.getInstance().changeSendInfo(ProtobufConfig.TEMPLATE_USER_LOGIN, sendObj);
        };
        LoginMediator.prototype.resetViewData = function () {
            var qrCode1 = qr.QRCode.create("https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx2f6fda11a4c4998f&redirect_uri=https%3A%2F%2Fbanma.yiji-sport.com%2Fwx%2FgetInfoByCode&response_type=code&scope=snsapi_userinfo&state=1#wechat_redirect", 225, 225, 1, 12, 0xED1D24);
            this.loginPanel.group_code1.addChild(qrCode1);
            var qrCode2 = qr.QRCode.create("https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx2f6fda11a4c4998f&redirect_uri=https%3A%2F%2Fbanma.yiji-sport.com%2Fwx%2FgetInfoByCode&response_type=code&scope=snsapi_userinfo&state=1#wechat_redirect", 230, 230, 1, 12, 0xED1D24);
            this.loginPanel.group_code2.addChild(qrCode2);
            var qrCode3 = qr.QRCode.create("https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx2f6fda11a4c4998f&redirect_uri=https%3A%2F%2Fbanma.yiji-sport.com%2Fwx%2FgetInfoByCode&response_type=code&scope=snsapi_userinfo&state=1#wechat_redirect", 235, 235, 1, 12, 0xED1D24);
            this.loginPanel.group_code3.addChild(qrCode3);
        };
        LoginMediator.prototype.initList = function () {
            this.loginPanel.iconList1.resetListData(P.getGameDataProxy().getLeftPlayer(), 1);
            this.loginPanel.iconList2.resetListData(P.getGameDataProxy().getCenterPlayer(), 2);
            this.loginPanel.iconList3.resetListData(P.getGameDataProxy().getRightPlayer(), 3);
        };
        LoginMediator.prototype.backView = function () {
            EffectUtils.playEffect(this.loginPanel.btn_back, 2, this.sendNofiCation, 1);
        };
        LoginMediator.prototype.startXL = function () {
            EffectUtils.playEffect(this.loginPanel.btn_start, 2, this.sendNofiCation, 2);
        };
        LoginMediator.prototype.sendNofiCation = function (data) {
            switch (data) {
                case 1:
                    game.AppFacade.getInstance().sendNotification(NoficationConfig.CLOSE_LOGIN);
                    game.AppFacade.getInstance().sendNotification(NoficationConfig.OPEN_HOME);
                    break;
                case 2:
                    game.AppFacade.getInstance().sendNotification(NoficationConfig.CLOSE_LOGIN);
                    game.AppFacade.getInstance().sendNotification(NoficationConfig.OPEN_COUNTDOWN);
                    break;
            }
        };
        LoginMediator.prototype.closeButtonClick = function () {
            this.loginPanel.btn_back.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.backView, this);
            this.loginPanel.btn_start.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.startXL, this);
            this.closePanel(1);
        };
        LoginMediator.NAME = "LoginMediator";
        return LoginMediator;
    }(BaseMediator));
    game.LoginMediator = LoginMediator;
    __reflect(LoginMediator.prototype, "game.LoginMediator");
})(game || (game = {}));
