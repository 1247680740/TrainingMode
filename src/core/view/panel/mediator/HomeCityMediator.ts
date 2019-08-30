/**
 * 首页界面
 * 
 */
module game {

    export class HomeCityMediator extends BaseMediator {

        public static NAME: string = "HomeCityMediator";

        public constructor(viewComponent: any = null) {
            super(HomeCityMediator.NAME, viewComponent);
        }

        public listNotificationInterests(): Array<any> {
            return [
                NoficationConfig.OPEN_HOME,
                NoficationConfig.CLOSE_HOME
            ];
        }
        private homecityPanel: HomeCity = new HomeCity();
        public handleNotification(notification: puremvc.INotification): void {
            var data: any = notification.getBody();
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
        }

        /**
        * 初始化面板ui
        */
        public initUI(): void {
            this.homecityPanel.btn_back.addEventListener(egret.TouchEvent.TOUCH_TAP, this.backHome, this);
            this.homecityPanel.label_fitness.addEventListener(egret.TouchEvent.TOUCH_TAP, this.checkFitness, this);
            this.homecityPanel.label_stay.addEventListener(egret.TouchEvent.TOUCH_TAP, this.checkStay, this);
            this.homecityPanel.label_heart.addEventListener(egret.TouchEvent.TOUCH_TAP, this.checkHeart, this);
            this.homecityPanel.label_power.addEventListener(egret.TouchEvent.TOUCH_TAP, this.checkPower, this);
            this.homecityPanel.btn_startXL.addEventListener(egret.TouchEvent.TOUCH_TAP, this.startXL, this);
            this.homecityPanel.btn_startSetUp.addEventListener(egret.TouchEvent.TOUCH_TAP, this.startSetup, this);
            this.homecityPanel.btn_StartShow.addEventListener(egret.TouchEvent.TOUCH_TAP, this.startTeach, this);
        }

        /**
         * 初始化面板数据
         */
        public initData(): void {

        }

        /** 退出游戏 */
        private backHome(): void {
            EffectUtils.playEffect(this.homecityPanel.btn_back, 2);
        }

        /** 开始训练 */
        private startXL(): void {
            EffectUtils.playEffect(this.homecityPanel.btn_startXL, 2, this.sendNofigCationto, 1);
        }

        /** 开始设置 */
        private startSetup(): void {
            EffectUtils.playEffect(this.homecityPanel.btn_startSetUp, 2, this.sendNofigCationto, 2);
        }

        /** 演示教程 */
        private startTeach(): void {
            EffectUtils.playEffect(this.homecityPanel.btn_StartShow, 2, this.sendNofigCationto, 3);
        }

        private checkFitness(): void {
            EffectUtils.playEffect(this.homecityPanel.label_fitness, 1);
        }

        private checkStay(): void {
            EffectUtils.playEffect(this.homecityPanel.label_stay, 1);
        }

        private checkHeart(): void {
            EffectUtils.playEffect(this.homecityPanel.label_heart, 1);
        }

        private checkPower(): void {
            EffectUtils.playEffect(this.homecityPanel.label_power, 1);
        }

        private sendNofigCationto(type: number): void {
            switch (type) {
                case 1:
                    game.AppFacade.getInstance().sendNotification(NoficationConfig.CLOSE_HOME);
                    game.AppFacade.getInstance().sendNotification(NoficationConfig.OPEN_LOGIN,1);
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
        }

        private closeButtonClick(): void {
            this.homecityPanel.btn_back.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.backHome, this);
            this.homecityPanel.label_fitness.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.checkFitness, this);
            this.homecityPanel.label_stay.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.checkStay, this);
            this.homecityPanel.label_heart.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.checkHeart, this);
            this.homecityPanel.label_power.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.checkPower, this);
            this.homecityPanel.btn_startXL.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.startXL, this);
            this.homecityPanel.btn_startSetUp.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.startSetup, this);
            this.homecityPanel.btn_StartShow.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.startTeach, this);
            this.closePanel(1);
        }


        private changeBg(): void {
            let bgId: number = Math.floor(Math.random() * 10 + 1);
            let bgName:string =  "bg" + bgId + "_png";
            game.AppFacade.getInstance().sendNotification(EventConfig.Event_CHANGE_GAMEBG,bgName);
        }

    }
}