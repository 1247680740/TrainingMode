/**
 * 暂停界面
 * 
 */
module game {

    export class PauseMediator extends BaseMediator {

        public static NAME: string = "PauseMediator";

        private typeNum: number = 0;

        public constructor(viewComponent: any = null) {
            super(PauseMediator.NAME, viewComponent);
        }

        public listNotificationInterests(): Array<any> {
            return [
                NoficationConfig.OPEN_PAUSE,
                NoficationConfig.CLOSE_PAUSE
            ];
        }
        private pausePanel: PausePanel = new PausePanel();
        public handleNotification(notification: puremvc.INotification): void {
            var data: any = notification.getBody();
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
        }

        /**
        * 初始化面板ui
        */
        public initUI(): void {
            this.pausePanel.btn_reset.addEventListener(egret.TouchEvent.TOUCH_TAP, this.reset, this);
            this.pausePanel.btn_containue.addEventListener(egret.TouchEvent.TOUCH_TAP, this.containue, this);
            this.pausePanel.btn_upset.addEventListener(egret.TouchEvent.TOUCH_TAP, this.upset, this);
        }

        /**
         * 初始化面板数据
         */
        public initData(): void {
        }

        private buttonClickClose(): void {
            this.pausePanel.btn_reset.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.reset, this);
            this.pausePanel.btn_containue.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.containue, this);
            this.pausePanel.btn_upset.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.upset, this);
            this.closePanel(1);
        }

        private reset(): void {
            EffectUtils.playEffect(this.pausePanel.btn_reset, 2, () => {
                this.buttonClickClose();
                this.resetPlayerData();
                if(this.typeNum == 1){
                    game.AppFacade.getInstance().sendNotification(EventConfig.Event_GAME_COUNTDOWN_RESET);
                }else if(this.typeNum == 2){
                    game.AppFacade.getInstance().sendNotification(EventConfig.Event_GAME_TIME_RESET);
                }else if(this.typeNum == 3){
                    game.AppFacade.getInstance().sendNotification(EventConfig.Event_GAME_TASK_RESET);
                }
                game.AppFacade.getInstance().sendNotification(NoficationConfig.OPEN_LOGIN,2);
            }, this);
        }

        private resetPlayerData():void{
            let leftArr:Array<PlayerVO> = P.getGameDataProxy().getLeftPlayer();
            let centerArr:Array<PlayerVO> = P.getGameDataProxy().getCenterPlayer();
            let rightArr:Array<PlayerVO> = P.getGameDataProxy().getRightPlayer();
            this.resetData(leftArr,1);
            this.resetData(centerArr,2);
            this.resetData(rightArr,3);
        }

        private resetData(arr:Array<PlayerVO>,type:number):void{
            for(let i: number=0; i<arr.length; i++){
                let curVo:PlayerVO = arr[i];
                curVo.playEveryTimes = 0;
                curVo.playNums = 0;
                curVo.playTimes = 0;
                if(type == 1){
                    P.getGameDataProxy().setLeftPlayer(curVo);
                }else if(type == 2){
                    P.getGameDataProxy().setCenterPlayer(curVo);
                }else if(type == 3){
                    P.getGameDataProxy().setRightPlayer(curVo);
                }
            }
        }

        private containue(): void {
            EffectUtils.playEffect(this.pausePanel.btn_containue, 2, () => {
                this.buttonClickClose();
                game.AppFacade.getInstance().sendNotification(EventConfig.Event_GAME_CONTAINUE);
            }, this);
        }

        private upset(): void {
            EffectUtils.playEffect(this.pausePanel.btn_upset, 2, () => {
                game.AppFacade.getInstance().sendNotification(NoficationConfig.OPEN_TRIM);
            }, this);
        }

        private setName(typeNum: number): void {
            this.typeNum = typeNum;
        }
    }
}