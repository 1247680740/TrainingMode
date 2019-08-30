/**
 * 登录界面
 * 
 */
module game {

    export class LoginMediator extends BaseMediator {

        public static NAME: string = "LoginMediator";
        private openType: number = 0;

        public constructor(viewComponent: any = null) {
            super(LoginMediator.NAME, viewComponent);
        }

        public listNotificationInterests(): Array<any> {
            return [
                NoficationConfig.OPEN_LOGIN,
                NoficationConfig.CLOSE_LOGIN,
                EventConfig.Event_UPDATE_PLAYER
            ];
        }
        private loginPanel: LoginPanel = new LoginPanel();
        public handleNotification(notification: puremvc.INotification): void {
            var data: any = notification.getBody();
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
        }

        /**
        * 初始化面板ui
        */
        public initUI(): void {
            this.loginPanel.btn_back.addEventListener(egret.TouchEvent.TOUCH_TAP, this.backView, this);
            this.loginPanel.btn_start.addEventListener(egret.TouchEvent.TOUCH_TAP, this.startXL, this);
        }

        private changeBg(): void {
            let bgId: number = Math.floor(Math.random() * 10 + 1);
            let bgName:string = "bg" + bgId + "_png";
            game.AppFacade.getInstance().sendNotification(EventConfig.Event_CHANGE_GAMEBG, bgName);
        }

        /**
         * 初始化面板数据
         */
        public initData(): void {
            this.resetViewData();
            if(this.openType == 1){
                this.initView();
            }else{
                game.AppFacade.getInstance().sendNotification(EventConfig.Event_UPDATE_PLAYER);
            }
        }



        private initView(): void {
            /** 测试数据 */
            var sendObj = {
                "userId": 0,
                "userName": ""
            }
            SocketManager.SocketProxy.getInstance().changeSendInfo(ProtobufConfig.TEMPLATE_USER_LOGIN, sendObj);
        }

        private resetViewData(): void {
            var qrCode1: egret.Sprite = qr.QRCode.create("https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx2f6fda11a4c4998f&redirect_uri=https%3A%2F%2Fbanma.yiji-sport.com%2Fwx%2FgetInfoByCode&response_type=code&scope=snsapi_userinfo&state=1#wechat_redirect", 225, 225, 1, 12, 0xED1D24);
            this.loginPanel.group_code1.addChild(qrCode1);
            var qrCode2: egret.Sprite = qr.QRCode.create("https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx2f6fda11a4c4998f&redirect_uri=https%3A%2F%2Fbanma.yiji-sport.com%2Fwx%2FgetInfoByCode&response_type=code&scope=snsapi_userinfo&state=1#wechat_redirect", 230, 230, 1, 12, 0xED1D24);
            this.loginPanel.group_code2.addChild(qrCode2);
            var qrCode3: egret.Sprite = qr.QRCode.create("https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx2f6fda11a4c4998f&redirect_uri=https%3A%2F%2Fbanma.yiji-sport.com%2Fwx%2FgetInfoByCode&response_type=code&scope=snsapi_userinfo&state=1#wechat_redirect", 235, 235, 1, 12, 0xED1D24);
            this.loginPanel.group_code3.addChild(qrCode3);
        }

        public initList(): void {
            this.loginPanel.iconList1.resetListData(P.getGameDataProxy().getLeftPlayer(),1);
            this.loginPanel.iconList2.resetListData(P.getGameDataProxy().getCenterPlayer(),2);
            this.loginPanel.iconList3.resetListData(P.getGameDataProxy().getRightPlayer(),3);
        }

        private backView(): void {
            EffectUtils.playEffect(this.loginPanel.btn_back, 2, this.sendNofiCation, 1);
        }

        private startXL(): void {
            EffectUtils.playEffect(this.loginPanel.btn_start, 2, this.sendNofiCation, 2);
        }

        private sendNofiCation(data: number): void {
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
        }

        private closeButtonClick(): void {
            this.loginPanel.btn_back.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.backView, this);
            this.loginPanel.btn_start.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.startXL, this);
            this.closePanel(1);
        }
    }
}