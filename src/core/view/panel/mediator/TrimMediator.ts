/**
 * 调整界面
 * 
 */

module game {

    export class TrimMediator extends BaseMediator {

        public static NAME: string = "TrimMediator";

        public constructor(viewComponent: any = null) {
            super(TrimMediator.NAME, viewComponent);
        }

        public listNotificationInterests(): Array<any> {
            return [
                NoficationConfig.OPEN_TRIM,
                NoficationConfig.CLOSE_TRIM
            ];
        }

        private trimPanel: TrimPanel = new TrimPanel();
        public handleNotification(notification: puremvc.INotification): void {
            var data: any = notification.getBody();
            switch (notification.getName()) {
                case NoficationConfig.OPEN_TRIM: {
                    this.showUI(this.trimPanel, false, 0, 0, 6);
                    break;
                }
                case NoficationConfig.CLOSE_TRIM: {
                    this.clickButtom();
                    break;
                }
            }
        }

        /**
         * 初始化面板ui
         */
        public initUI(): void {
            this.trimPanel.btn_back.addEventListener(egret.TouchEvent.TOUCH_TAP, this.backView, this);
            this.trimPanel.img_bg.x = 0;
            let bgId: number = Math.floor(Math.random() * 10 + 1);
            this.trimPanel.img_bg.source = RES.getRes("bg" + bgId + "_png");
            this.resetBgPos();
            this.addGame();
        }

        /**
         * 初始化面板数据
         */
        public initData(): void {
            this.trimPanel.game1.setIconShow(false);
            this.trimPanel.game2.setIconShow(false);
            this.trimPanel.game3.setIconShow(false);
        }

        private clickButtom(): void {
            this.trimPanel.btn_back.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.backView, this);
            egret.Tween.removeTweens(this.trimPanel.img_bg);
            this.closePanel(1);
        }

        private backView(): void {
            game.AppFacade.getInstance().sendNotification(NoficationConfig.CLOSE_TRIM);
        }

        private resetBgPos(): void {
            egret.Tween.removeTweens(this.trimPanel.img_bg);
            egret.Tween.get(this.trimPanel.img_bg).to({ x: -350 }, 8000).wait(350).call(() => {
                egret.Tween.get(this.trimPanel.img_bg).to({ x: 0 }, 8000).wait(350).call(this.resetBgPos, this);
            }, this);
        }

        private addGame(): void {
            for (let i: number = 1; i < 4; i++) {
                if (i == 1) {
                    this.trimPanel.game1.setGame(GlobalData.gameType, i);
                } else if (i == 2) {
                    this.trimPanel.game2.setGame(GlobalData.gameType, i);
                } else if (i == 3) {
                    this.trimPanel.game3.setGame(GlobalData.gameType, i);
                }
            }
        }

    }
}