/**
 * 准备阶段界面
 * 
 */
module game {

    export class ReadyMediator extends BaseMediator {

        public static NAME: string = "ReadyMediator";
        private timer: egret.Timer = null;
        private countTimeNum: number = 0;

        public constructor(viewComponent: any = null) {
            super(ReadyMediator.NAME, viewComponent);
        }

        public listNotificationInterests(): Array<any> {
            return [
                NoficationConfig.OPEN_READY,
                NoficationConfig.CLOSE_READY
            ];
        }

        private readyPanel: ReadyPanel = new ReadyPanel();
        public handleNotification(notification: puremvc.INotification): void {
            var data: any = notification.getBody();
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
        }

        /**
         * 初始化面板ui
         */
        public initUI(): void {
            let maxLength: number = Global.contrastArr();
            if (GlobalData.checkType) {
                if (GlobalData._curTimerTotalGroup == 1 && GlobalData._curTimerEveryGroup == 0) {
                    this.readyPanel.label_bottomTip.text = "准备开始";
                    this.readyPanel.label_tip.text = "训练即将开始，请做好准备。";

                } else {
                    this.readyPanel.label_bottomTip.text = "SET" + GlobalData._curTimerTotalGroup + "/" + (GlobalData.timeThreeData * maxLength);
                    this.readyPanel.label_tip.text = "请下一组做好准备";
                }
            } else {
                this.readyPanel.label_bottomTip.text = "准备开始";
                this.readyPanel.label_tip.text = "训练即将开始，请做好准备。";
            }
            this.readyPanel.btn_back.addEventListener(egret.TouchEvent.TOUCH_TAP, this.backView, this);
            this.readyPanel.btn_skip.addEventListener(egret.TouchEvent.TOUCH_TAP, this.skip, this);
        }

        private changeBg(): void {
            let bgId: number = Math.floor(Math.random() * 10 + 1);
            let bgName:string = "bg" + bgId + "_png";
            game.AppFacade.getInstance().sendNotification(EventConfig.Event_CHANGE_GAMEBG,bgName);
        }

        /**
         * 初始化面板数据
         */
        public initData(): void {
            this.countTimeNum = (GlobalData.checkType) ? GlobalData.timeTwoData : GlobalData.taskTwoData;
            this.initView();

        }

        private closeButtonClick(): void {
            if (this.timer) {
                this.timer = null;
            }
            this.readyPanel.btn_back.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.backView, this);
            this.readyPanel.btn_skip.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.skip, this);
            this.closePanel(1);
        }

        private initView(): void {
            let leftArr: Array<PlayerVO> = P.getGameDataProxy().getLeftPlayer();
            let centerArr: Array<PlayerVO> = P.getGameDataProxy().getCenterPlayer();
            let rightArr: Array<PlayerVO> = P.getGameDataProxy().getRightPlayer();
            if (GlobalData.checkType) {
                if (leftArr[GlobalData._curTimerEveryGroup]) {
                    this.readyPanel.icon_left.visible = true;
                    this.readyPanel.img_leftBye.visible = false;
                    this.readyPanel.icon_left.setIconData(leftArr[GlobalData._curTimerEveryGroup]);
                    GlobalData.curLeftPlayerVo = leftArr[GlobalData._curTimerEveryGroup];
                } else {
                    this.readyPanel.icon_left.visible = false;
                    this.readyPanel.img_leftBye.visible = true;
                    GlobalData.curLeftPlayerVo = null;
                }
                if (centerArr[GlobalData._curTimerEveryGroup]) {
                    this.readyPanel.icon_center.visible = true;
                    this.readyPanel.img_centerBye.visible = false;
                    this.readyPanel.icon_center.setIconData(centerArr[GlobalData._curTimerEveryGroup]);
                    GlobalData.curCenterPlayerVo = centerArr[GlobalData._curTimerEveryGroup];
                } else {
                    this.readyPanel.icon_center.visible = false;
                    this.readyPanel.img_centerBye.visible = true;
                    GlobalData.curCenterPlayerVo = null;
                }
                if (rightArr[GlobalData._curTimerEveryGroup]) {
                    this.readyPanel.icon_right.visible = true;
                    this.readyPanel.img_rightBye.visible = false;
                    this.readyPanel.icon_right.setIconData(rightArr[GlobalData._curTimerEveryGroup]);
                    GlobalData.curRightPlayerVo = rightArr[GlobalData._curTimerEveryGroup];
                } else {
                    this.readyPanel.icon_right.visible = false;
                    this.readyPanel.img_rightBye.visible = true;
                    GlobalData.curRightPlayerVo = null;
                }
            } else {
                if (leftArr[GlobalData.l_curTaskEveryGroup]) {
                    this.readyPanel.icon_left.visible = true;
                    this.readyPanel.img_leftBye.visible = false;
                    this.readyPanel.icon_left.setIconData(leftArr[GlobalData.l_curTaskEveryGroup]);
                    GlobalData.curLeftPlayerVo = leftArr[GlobalData.l_curTaskEveryGroup];
                } else {
                    this.readyPanel.icon_left.visible = false;
                    this.readyPanel.img_leftBye.visible = true;
                    GlobalData.curLeftPlayerVo = null;
                }
                if (centerArr[GlobalData.c_curTaskEveryGroup]) {
                    this.readyPanel.icon_center.visible = true;
                    this.readyPanel.img_centerBye.visible = false;
                    this.readyPanel.icon_center.setIconData(centerArr[GlobalData.c_curTaskEveryGroup]);
                    GlobalData.curCenterPlayerVo = centerArr[GlobalData.c_curTaskEveryGroup];
                } else {
                    this.readyPanel.icon_center.visible = false;
                    this.readyPanel.img_centerBye.visible = true;
                    GlobalData.curCenterPlayerVo = null;
                }
                if (rightArr[GlobalData.r_curTaskEveryGroup]) {
                    this.readyPanel.icon_right.visible = true;
                    this.readyPanel.img_rightBye.visible = false;
                    this.readyPanel.icon_right.setIconData(rightArr[GlobalData.r_curTaskEveryGroup]);
                    GlobalData.curRightPlayerVo = rightArr[GlobalData.r_curTaskEveryGroup];
                } else {
                    this.readyPanel.icon_right.visible = false;
                    this.readyPanel.img_rightBye.visible = true;
                    GlobalData.curRightPlayerVo = null;
                }
            }
            this.initTime();
        }

        private initTime(): void {
            this.readyPanel.label_time.text = this.countTimeNum + "";
            if (this.timer == null) {
                this.timer = new egret.Timer(1000);
            }
            this.timer.addEventListener(egret.TimerEvent.TIMER, (event: egret.TimerEvent) => {
                this.countTimeNum--;
                if (this.countTimeNum < 0) {
                    this.countTimeNum = (GlobalData.checkType) ? GlobalData.timeTwoData : GlobalData.taskTwoData;
                    this.timer.stop();
                    this.timer = null;
                    // 跳转下一界面
                    if (GlobalData.checkType) {
                        game.AppFacade.getInstance().sendNotification(NoficationConfig.CLOSE_READY);
                        game.AppFacade.getInstance().sendNotification(NoficationConfig.OPEN_TIMETYPE);
                    } else {
                        game.AppFacade.getInstance().sendNotification(NoficationConfig.CLOSE_READY);
                        game.AppFacade.getInstance().sendNotification(NoficationConfig.OPEN_TASKTYPE);
                    }
                    return;
                }
                this.readyPanel.label_time.text = this.countTimeNum + "";
            }, this);
            this.timer.start();
        }

        private backView(): void {
            EffectUtils.playEffect(this.readyPanel.btn_back, 1, this.sendNofiCation, 1);
        }

        private skip(): void {
            EffectUtils.playEffect(this.readyPanel.btn_skip, 1, this.sendNofiCation, 2);
        }

        private sendNofiCation(data: number): void {
            switch (data) {
                case 1:
                    game.AppFacade.getInstance().sendNotification(NoficationConfig.CLOSE_READY);
                    game.AppFacade.getInstance().sendNotification(NoficationConfig.OPEN_COUNTDOWN);
                    break;
                case 2:
                    game.AppFacade.getInstance().sendNotification(NoficationConfig.CLOSE_READY);
                    if (GlobalData.checkType) {
                        game.AppFacade.getInstance().sendNotification(NoficationConfig.OPEN_TIMETYPE);
                    } else {
                        game.AppFacade.getInstance().sendNotification(NoficationConfig.OPEN_TASKTYPE);
                    }
                    break;
            }
        }
    }
}