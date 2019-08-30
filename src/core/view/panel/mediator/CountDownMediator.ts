/**
 * 训练倒计时页面
 * 
 */
module game {

    export class CountDownMediator extends BaseMediator {

        public static NAME: string = "CountDownMediator";
        private countTimeNum: number = 20;
        private timer: egret.Timer = null;

        public constructor(viewComponent: any = null) {
            super(CountDownMediator.NAME, viewComponent);
        }

        public listNotificationInterests(): Array<any> {
            return [
                NoficationConfig.OPEN_COUNTDOWN,
                NoficationConfig.CLOSE_COUNTDOWN,
                EventConfig.Event_GAME_COUNTDOWN_RESET,
                EventConfig.Event_GAME_CONTAINUE,
                EventConfig.Event_GAME_UPSET
            ];
        }

        private countPanel: CountDownPanel = new CountDownPanel();
        public handleNotification(notification: puremvc.INotification): void {
            var data: any = notification.getBody();
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
        }

        /**
         * 初始化面板ui
         */
        public initUI(): void {
            this.countPanel.label_tip.text = "训练演示";
            this.countPanel.btn_pause.addEventListener(egret.TouchEvent.TOUCH_TAP, this.pauseTime, this);
            this.countPanel.btn_skip.addEventListener(egret.TouchEvent.TOUCH_TAP, this.skip, this);
        }

        private changeBg(): void {
            let bgId: number = Math.floor(Math.random() * 10 + 1);
            let bgName: string = "bg" + bgId + "_png";
            game.AppFacade.getInstance().sendNotification(EventConfig.Event_CHANGE_GAMEBG, bgName);
        }

        /**
         * 初始化面板数据
         */
        public initData(): void {
            this.countTimeNum = 20;
            this.resetPlayerData();
            this.initView();
            this.countPanel.list_L.resetListData(P.getGameDataProxy().getLeftPlayer(),1);
            this.countPanel.list_C.resetListData(P.getGameDataProxy().getCenterPlayer(),2);
            this.countPanel.list_R.resetListData(P.getGameDataProxy().getRightPlayer(),3);
        }

        private closeButtonClick(): void {
            if (this.timer) {
                this.timer.stop();
                this.timer = null;
            }
            this.countTimeNum = 20;
            this.countPanel.btn_pause.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.pauseTime, this);
            this.countPanel.btn_skip.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.skip, this);
            this.closePanel(1);
        }

        private resetPlayerData(): void {
            let leftArr: Array<PlayerVO> = P.getGameDataProxy().getLeftPlayer();
            let centerArr: Array<PlayerVO> = P.getGameDataProxy().getCenterPlayer();
            let rightArr: Array<PlayerVO> = P.getGameDataProxy().getRightPlayer();
            for (let i: number = 0; i < leftArr.length; i++) {
                let leftVO: PlayerVO = leftArr[i];
                if (GlobalData.checkType) {
                    leftVO.playNums = 0;
                    leftVO.playTimes = GlobalData.timeOneData * GlobalData.timeThreeData;
                } else {
                    leftVO.playNums = GlobalData.taskOneData * GlobalData.taskThreeData;
                    leftVO.playTimes = 0;
                }
                P.getGameDataProxy().setLeftPlayer(leftVO);
            }

            for (let i: number = 0; i < centerArr.length; i++) {
                let centerVO: PlayerVO = centerArr[i];
                if (GlobalData.checkType) {
                    centerVO.playNums = 0;
                    centerVO.playTimes = GlobalData.timeOneData * GlobalData.timeThreeData;
                } else {
                    centerVO.playNums = GlobalData.taskOneData * GlobalData.taskThreeData;
                    centerVO.playTimes = 0;
                }
                P.getGameDataProxy().setLeftPlayer(centerVO);
            }

            for (let i: number = 0; i < rightArr.length; i++) {
                let rightVO: PlayerVO = rightArr[i];
                if (GlobalData.checkType) {
                    rightVO.playNums = 0;
                    rightVO.playTimes = GlobalData.timeOneData * GlobalData.timeThreeData;
                } else {
                    rightVO.playNums = GlobalData.taskOneData * GlobalData.taskThreeData;
                    rightVO.playTimes = 0;
                }
                P.getGameDataProxy().setLeftPlayer(rightVO);
            }
        }

        private initView(): void {
            this.countPanel.label_time.text = this.countTimeNum + "";
            if (this.timer == null) {
                this.timer = new egret.Timer(1000);
            }
            this.timer.addEventListener(egret.TimerEvent.TIMER, (event: egret.TimerEvent) => {
                this.countTimeNum -= 1;
                if (this.countTimeNum < 0) {
                    this.countTimeNum = 20;
                    if (this.timer) {
                        this.timer.stop();
                        this.timer = null;
                    }
                    // 跳转下一界面
                    game.AppFacade.getInstance().sendNotification(NoficationConfig.CLOSE_COUNTDOWN);
                    game.AppFacade.getInstance().sendNotification(NoficationConfig.OPEN_READY);
                    return;
                }
                this.countPanel.label_time.text = this.countTimeNum + "";
            }, this);
            this.timer.start();
        }

        private skip(): void {
            EffectUtils.playEffect(this.countPanel.btn_skip, 2, () => {
                game.AppFacade.getInstance().sendNotification(NoficationConfig.CLOSE_COUNTDOWN);
                game.AppFacade.getInstance().sendNotification(NoficationConfig.OPEN_READY);
            });
        }

        private pauseTime(): void {
            EffectUtils.playEffect(this.countPanel.btn_pause, 2, () => {
                if (this.timer) {
                    this.timer.stop();
                }
                game.AppFacade.getInstance().sendNotification(NoficationConfig.OPEN_PAUSE,1);
            });
        }
        
        private resetGame(): void {
            this.closeButtonClick();
        }

        private containue(): void {
            if (this.timer) {
                this.timer.start();
            }
        }

        private upset(): void {

        }

    }
}