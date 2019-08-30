/**
  * 时间模式完成界面
  */
module game {

    export class TimeFinishMediator extends BaseMediator {
        public static NAME: string = "TimeFinishMediator";

        public constructor(viewComponent: any = null) {
            super(TimeFinishMediator.NAME, viewComponent);
        }

        public listNotificationInterests(): Array<any> {
            return [
                NoficationConfig.OPEN_TIME_FINISH,
                NoficationConfig.CLOSE_TIME_FINISH
            ];
        }
        private timeFinishPanel: TimeFinishPanel = new TimeFinishPanel();
        public handleNotification(notification: puremvc.INotification): void {
            var data: any = notification.getBody();
            switch (notification.getName()) {
                case NoficationConfig.OPEN_TIME_FINISH: {
                    this.changeBg();
                    this.showUI(this.timeFinishPanel, false, 0, 0, 6);
                    break;
                }
                case NoficationConfig.CLOSE_TIME_FINISH: {
                    this.closeButtonClick();
                    break;
                }
            }
        }

        /**
         * 初始化面板ui
         */
        public initUI(): void {
            this.timeFinishPanel.btn_result.addEventListener(egret.TouchEvent.TOUCH_TAP, this.checkResult, this);
        }

        /**
         * 初始化面板数据
         */
        public initData(): void {
            let l_arr: Array<PlayerVO> = P.getGameDataProxy().getLeftPlayer();
            let c_arr: Array<PlayerVO> = P.getGameDataProxy().getCenterPlayer();
            let r_arr: Array<PlayerVO> = P.getGameDataProxy().getRightPlayer();
            let l_vo: PlayerVO = l_arr[l_arr.length - 1];
            let c_vo: PlayerVO = c_arr[c_arr.length - 1];
            let r_vo: PlayerVO = r_arr[r_arr.length - 1];
            if (l_vo) {
                this.timeFinishPanel.l_finish.setPlayer(l_vo);
            }
            if (c_vo) {
                this.timeFinishPanel.c_finish.setPlayer(c_vo);
            }
            if (r_vo) {
                this.timeFinishPanel.r_finish.setPlayer(r_vo);
            }
        }

        private changeBg(): void {
            let bgId: number = Math.floor(Math.random() * 10 + 1);
            let bgName: string = "bg" + bgId + "_png";
            game.AppFacade.getInstance().sendNotification(EventConfig.Event_CHANGE_GAMEBG, bgName);
        }

        private closeButtonClick(): void {
            // this.timeFinishPanel.btn_back.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.pauseGame, this);
            this.timeFinishPanel.btn_result.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.checkResult, this);
            this.closePanel(1);
        }

        private checkResult(): void {
            EffectUtils.playEffect(this.timeFinishPanel.btn_result, 2, () => {
                this.closeButtonClick();
                game.AppFacade.getInstance().sendNotification(NoficationConfig.OPEN_RESULT);
            });
        }
    }
}