/**
  * 时间模式界面
  */
module game {

    export class TimeTypeMediator extends BaseMediator {
        public static NAME: string = "TimeTypeMediator";

        private timer: egret.Timer = null;
        private timerNum: number = 0;

        private noNum_l: number = 0;
        private noNum_c: number = 0;
        private noNum_r: number = 0;

        public constructor(viewComponent: any = null) {
            super(TimeTypeMediator.NAME, viewComponent);
        }

        public listNotificationInterests(): Array<any> {
            return [
                NoficationConfig.OPEN_TIMETYPE,
                NoficationConfig.CLOSE_TIMETYPE,
                EventConfig.Event_UPDATE_TOUCH_Time,
                EventConfig.Event_GAME_TIME_RESET,
                EventConfig.Event_GAME_CONTAINUE,
                EventConfig.Event_GAME_UPSET
            ];
        }
        private timeTypePanel: TimeTypePanel = new TimeTypePanel();
        public handleNotification(notification: puremvc.INotification): void {
            var data: any = notification.getBody();
            switch (notification.getName()) {
                case NoficationConfig.OPEN_TIMETYPE: {
                    //显示角色面板
                    this.changeBg();
                    this.showUI(this.timeTypePanel, false, 0, 0, 6);
                    break;
                }
                case NoficationConfig.CLOSE_TIMETYPE: {
                    this.closeButtonClick();
                    break;
                }
                case EventConfig.Event_UPDATE_TOUCH_Time: {
                    this.upDateTouch(data);
                    break;
                }
                case EventConfig.Event_GAME_TIME_RESET: {
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
            this.timeTypePanel.btn_back.addEventListener(egret.TouchEvent.TOUCH_TAP, this.pauseGame, this);
            for (let i: number = 1; i < 4; i++) {
                if (i == 1) {
                    this.timeTypePanel.p_left.setGame(1, i);
                } else if (i == 2) {
                    this.timeTypePanel.p_center.setGame(1, i);
                } else if (i == 3) {
                    this.timeTypePanel.p_right.setGame(1, i);
                }
            }
        }

        private changeBg(): void {
            let bgId: number = Math.floor(Math.random() * 21 + 1);
            let bgName: string = "s_bg" + bgId + "_png";
            game.AppFacade.getInstance().sendNotification(EventConfig.Event_CHANGE_GAMEBG, bgName);
        }

        /**
         * 初始化面板数据
         */
        public initData(): void {
            // 时间模式初始化数据
            this.noNum_l = 0;
            this.noNum_c = 0;
            this.noNum_r = 0;
            let maxLength: number = Global.contrastArr();
            this.timerNum = GlobalData.timeOneData;
            let totalLength: number = maxLength * GlobalData.timeThreeData;

            if (!this.timer) {
                this.timer = new egret.Timer(1000);
            }
            this.timer.addEventListener(egret.TimerEvent.TIMER, (event: egret.TimerEvent) => {
                if (this.timerNum <= 0) {
                    this.timerNum = GlobalData.timeOneData;
                    this.timer.stop();
                    this.timer = null;
                    this.resetPlayerData();
                    if (GlobalData._curTimerEveryGroup + 1 >= maxLength) {
                        if (GlobalData._curTimerGroup + 1 > GlobalData.timeThreeData) {  //跳转结算界面
                            GlobalData._curTimerGroup = 1;
                            GlobalData._curTimerTotalGroup = 1;
                            GlobalData._curTimerEveryGroup = 0;
                            this.closeButtonClick();
                            // game.AppFacade.getInstance().sendNotification(NoficationConfig.OPEN_RESULT);
                            game.AppFacade.getInstance().sendNotification(NoficationConfig.OPEN_TIME_FINISH);
                        } else { //进入下一组第一人
                            GlobalData._curTimerGroup += 1;
                            GlobalData._curTimerTotalGroup += 1;
                            GlobalData._curTimerEveryGroup = 0;
                            game.AppFacade.getInstance().sendNotification(NoficationConfig.CLOSE_TIMETYPE);
                            game.AppFacade.getInstance().sendNotification(NoficationConfig.OPEN_READY);
                        }
                    } else { //进入本组下一人准备阶段
                        GlobalData._curTimerEveryGroup += 1;
                        GlobalData._curTimerTotalGroup += 1;
                        game.AppFacade.getInstance().sendNotification(NoficationConfig.CLOSE_TIMETYPE);
                        game.AppFacade.getInstance().sendNotification(NoficationConfig.OPEN_READY);
                    }
                    return;
                }
                this.timerNum--;
                this.timeTypePanel.p_left.gameIcon.setTimer(Global.formatTime(this.timerNum, 1));
                this.timeTypePanel.p_center.gameIcon.setTimer(Global.formatTime(this.timerNum, 1));
                this.timeTypePanel.p_right.gameIcon.setTimer(Global.formatTime(this.timerNum, 1));
            }, this);
            this.timer.start();
            this.timeTypePanel.p_left.gameIcon.setStep(GlobalData._curTimerTotalGroup + "/" + totalLength);
            this.timeTypePanel.p_center.gameIcon.setStep(GlobalData._curTimerTotalGroup + "/" + totalLength);
            this.timeTypePanel.p_right.gameIcon.setStep(GlobalData._curTimerTotalGroup + "/" + totalLength);
            if (GlobalData.curLeftPlayerVo) {
                this.timeTypePanel.p_left.gameIcon.setIcon(GlobalData.curLeftPlayerVo.playerIcon);
                this.timeTypePanel.p_left.gameIcon.setTimeTouchNum(GlobalData.curLeftPlayerVo.playNums);
            } else {
                this.timeTypePanel.p_left.gameIcon.setIcon("");
                this.timeTypePanel.p_left.gameIcon.setTimeTouchNum(0);
            }
            if (GlobalData.curCenterPlayerVo) {
                this.timeTypePanel.p_center.gameIcon.setIcon(GlobalData.curCenterPlayerVo.playerIcon);
                this.timeTypePanel.p_center.gameIcon.setTimeTouchNum(GlobalData.curCenterPlayerVo.playNums);
            } else {
                this.timeTypePanel.p_center.gameIcon.setIcon("");
                this.timeTypePanel.p_center.gameIcon.setTimeTouchNum(0);
            }
            if (GlobalData.curRightPlayerVo) {
                this.timeTypePanel.p_right.gameIcon.setIcon(GlobalData.curRightPlayerVo.playerIcon);
                this.timeTypePanel.p_right.gameIcon.setTimeTouchNum(GlobalData.curRightPlayerVo.playNums);
            } else {
                this.timeTypePanel.p_right.gameIcon.setIcon("");
                this.timeTypePanel.p_right.gameIcon.setTimeTouchNum(0);
            }
        }

        private upDateTouch(index: number): void {
            if (this.timeTypePanel) {
                switch (index) {
                    case 1:
                        if (GlobalData.curLeftPlayerVo) {
                            GlobalData.curLeftPlayerVo.playNums += 1;
                            this.timeTypePanel.p_left.gameIcon.setTimeTouchNum(GlobalData.curLeftPlayerVo.playNums);
                        } else {
                            this.noNum_l += 1;
                            this.timeTypePanel.p_left.gameIcon.setTimeTouchNum(this.noNum_l);
                        }
                        break;
                    case 2:
                        if (GlobalData.curCenterPlayerVo) {
                            GlobalData.curCenterPlayerVo.playNums += 1;
                            this.timeTypePanel.p_center.gameIcon.setTimeTouchNum(GlobalData.curCenterPlayerVo.playNums);
                        } else {
                            this.noNum_c += 1;
                            this.timeTypePanel.p_center.gameIcon.setTimeTouchNum(this.noNum_c);
                        }
                        break;
                    case 3:
                        if (GlobalData.curRightPlayerVo) {
                            GlobalData.curRightPlayerVo.playNums += 1;
                            this.timeTypePanel.p_right.gameIcon.setTimeTouchNum(GlobalData.curRightPlayerVo.playNums);
                        } else {
                            this.noNum_r += 1;
                            this.timeTypePanel.p_right.gameIcon.setTimeTouchNum(this.noNum_r);
                        }
                        break;
                }
            }
        }

        private resetPlayerData(): void {
            if (GlobalData.curLeftPlayerVo) {
                P.getGameDataProxy().setLeftPlayer(GlobalData.curLeftPlayerVo);
            }
            if (GlobalData.curCenterPlayerVo) {
                P.getGameDataProxy().setCenterPlayer(GlobalData.curCenterPlayerVo);
            }
            if (GlobalData.curRightPlayerVo) {
                P.getGameDataProxy().setRightPlayer(GlobalData.curRightPlayerVo);
            }
        }

        private containue(): void {
            if (this.timer) {
                this.timer.start();
            }
        }

        private upset(): void {

        }

        private resetGame(): void {
            this.timerNum = 0;
            this.noNum_l = 0;
            this.noNum_c = 0;
            this.noNum_r = 0;
            GlobalData.initData();
            this.closeButtonClick();
        }

        private pauseGame(): void {
            EffectUtils.playEffect(this.timeTypePanel.btn_back, 2, () => {
                if (this.timer) {
                    this.timer.stop();
                }
                game.AppFacade.getInstance().sendNotification(NoficationConfig.OPEN_PAUSE, 2);
            });
        }

        private closeButtonClick(): void {
            if (this.timer) {
                this.timer.stop();
                this.timer = null;
            }
            this.timeTypePanel.btn_back.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.pauseGame, this);
            this.closePanel(1);
        }
    }
}