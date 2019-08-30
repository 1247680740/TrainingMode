/**
  * 任务模式界面
  */
module game {

    export class TaskTypeMediator extends BaseMediator {
        public static NAME: string = "TaskTypeMediator";

        public constructor(viewComponent: any = null) {
            super(TaskTypeMediator.NAME, viewComponent);
        }

        public listNotificationInterests(): Array<any> {
            return [
                NoficationConfig.OPEN_TASKTYPE,
                NoficationConfig.CLOSE_TASKTYPE,
                EventConfig.Event_UPDATE_TOUCH_Task,
                EventConfig.Event_UPDATE_TOUCH_Task_Show,
                EventConfig.Event_SKIP_TASK_PREPRA,
                EventConfig.Event_GAME_TASK_RESET,
                EventConfig.Event_GAME_CONTAINUE,
                EventConfig.Event_GAME_TASK_CHANGESTATUS,
                EventConfig.Event_GAME_TASK_FILLDATA_PREPARA,
                EventConfig.Event_GAME_TASK_FILLDATA_PROGRESS,
                EventConfig.Event_GAME_TASK_FILLDATA_FINISH,
                EventConfig.Event_GAME_TASK_SETTIME_PREPARA,
                EventConfig.Event_GAME_TASK_SETTOUCH_PROSS,
                EventConfig.Event_GAME_TASK_SETTIME_PROSS
            ];
        }
        private taskTypePanel: TaskTypePanel = new TaskTypePanel();
        public handleNotification(notification: puremvc.INotification): void {
            var data: any = notification.getBody();
            switch (notification.getName()) {
                case NoficationConfig.OPEN_TASKTYPE: {
                    this.changeBg();
                    this.showUI(this.taskTypePanel, false, 0, 0, 6);
                    break;
                }
                case NoficationConfig.CLOSE_TASKTYPE: {
                    this.closeButtonClick();
                    break;
                }
                case EventConfig.Event_UPDATE_TOUCH_Task: {
                    this.updateTouch(data);
                    break;
                }
                case EventConfig.Event_UPDATE_TOUCH_Task_Show: {
                    this.updateTouchShow(data);
                    break;
                }
                case EventConfig.Event_SKIP_TASK_PREPRA: {
                    this.skipPrepra(data);
                    break;
                }
                case EventConfig.Event_GAME_TASK_RESET: {
                    this.closeButtonClick();
                    break;
                }
                case EventConfig.Event_GAME_CONTAINUE: {
                    this.containue();
                    break;
                }
                case EventConfig.Event_GAME_TASK_CHANGESTATUS: {
                    this.setStateChange(data);
                    break;
                }
                case EventConfig.Event_GAME_TASK_FILLDATA_PREPARA: {
                    this.fillPreParaData(data);
                    break;
                }
                case EventConfig.Event_GAME_TASK_FILLDATA_PROGRESS: {
                    this.fillProData(data);
                    break;
                }
                case EventConfig.Event_GAME_TASK_FILLDATA_FINISH: {
                    this.fillFinishData(data);
                    break;
                }
                case EventConfig.Event_GAME_TASK_SETTIME_PREPARA: {
                    this.preparaSettime(data);
                    break;
                }
                case EventConfig.Event_GAME_TASK_SETTOUCH_PROSS: {
                    this.progressSetTouch(data);
                    break;
                }
                case EventConfig.Event_GAME_TASK_SETTIME_PROSS: {
                    this.progressSetTime(data);
                    break;
                }
            }
        }

        /**
         * 初始化面板ui
         */
        public initUI(): void {
            this.taskTypePanel.btn_back.addEventListener(egret.TouchEvent.TOUCH_TAP, this.pauseGame, this);
            this.taskTypePanel.btn_result.addEventListener(egret.TouchEvent.TOUCH_TAP, this.checkResult, this);
            for (let i: number = 1; i < 4; i++) {
                if (i == 1) {
                    this.taskTypePanel.l_progress.setGame(14, i);
                } else if (i == 2) {
                    this.taskTypePanel.c_progress.setGame(14, i);
                } else if (i == 3) {
                    this.taskTypePanel.r_progress.setGame(14, i);
                }
            }
            this.taskTypePanel.l_prepara.setName("prepara1");
            this.taskTypePanel.c_prepara.setName("prepara2");
            this.taskTypePanel.r_prepara.setName("prepara3");
        }

        /**
         * 初始化面板数据
         */
        public initData(): void {
            game.TaskGame.getInstance().initData();
        }

        private changeBg(): void {
            let bgId: number = Math.floor(Math.random() * 21 + 1);
            let bgName: string = "s_bg" + bgId + "_png";
            game.AppFacade.getInstance().sendNotification(EventConfig.Event_CHANGE_GAMEBG, bgName);
        }

        private closeButtonClick(): void {
            this.taskTypePanel.btn_back.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.pauseGame, this);
            this.taskTypePanel.btn_result.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.checkResult, this);
            game.TaskGame.getInstance().resetGame();
            this.closePanel(1);
        }

        private updateTouch(touchId: number): void {
            if (this.taskTypePanel) {
                switch (touchId) {
                    case 1:
                        game.TaskGame.getInstance().updateLeft();
                        break;
                    case 2:
                        game.TaskGame.getInstance().updateCenter();
                        break;
                    case 3:
                        game.TaskGame.getInstance().updateRight();
                        break;
                }
            }
        }

        private updateTouchShow(touchId: number): void {
            if (this.taskTypePanel) {
                game.TaskGame.getInstance().updateTouchShow(touchId);
            }
        }

        private checkResult(e: egret.TouchEvent): void {
            this.closeButtonClick();
            game.AppFacade.getInstance().sendNotification(NoficationConfig.OPEN_RESULT);
        }

        private skipPrepra(index: number): void {
            game.TaskGame.getInstance().skipPrepra(index);
        }

        private preparaSettime(data: PreparaVO): void {
            switch (data.type) {
                case 1:
                    this.taskTypePanel.l_prepara.setCountTime(data.timeNum);
                    break;
                case 2:
                    this.taskTypePanel.c_prepara.setCountTime(data.timeNum);
                    break;
                case 3:
                    this.taskTypePanel.r_prepara.setCountTime(data.timeNum);
                    break;
            }
        }

        private progressSetTouch(data: ProgressVO): void {
            switch (data.type) {
                case 1:
                    this.taskTypePanel.l_progress.setTouchNum(data.touchNum, GlobalData.taskOneData);
                    if (GlobalData.gameType == 14) {
                        let arr:Array<number> = this.taskTypePanel.l_progress.getStepNum();
                        if (data.touchNum == GlobalData.taskOneData && arr[0] == arr[1]) {
                            let commonMap: CommonTileMap = this.taskTypePanel.l_progress.getChildAt(0) as CommonTileMap;
                            if (commonMap) {
                                commonMap.setFinishShow(true);
                            }
                        }
                    }
                    break;
                case 2:
                    this.taskTypePanel.c_progress.setTouchNum(data.touchNum, GlobalData.taskOneData);
                    if (GlobalData.gameType == 14) {
                        let arr:Array<number> = this.taskTypePanel.c_progress.getStepNum();
                        if (data.touchNum == GlobalData.taskOneData && arr[0] == arr[1]) {
                            let commonMap: CommonTileMap = this.taskTypePanel.c_progress.getChildAt(0) as CommonTileMap;
                            if (commonMap) {
                                commonMap.setFinishShow(true);
                            }
                        }
                    }
                    break;
                case 3:
                    this.taskTypePanel.r_progress.setTouchNum(data.touchNum, GlobalData.taskOneData);
                    if (GlobalData.gameType == 14) {
                        let arr:Array<number> = this.taskTypePanel.r_progress.getStepNum();
                        if (data.touchNum == GlobalData.taskOneData && arr[0] == arr[1]) {
                            let commonMap: CommonTileMap = this.taskTypePanel.r_progress.getChildAt(0) as CommonTileMap;
                            if (commonMap) {
                                console.log("设置显示");
                                commonMap.setFinishShow(true);
                            }
                        }
                    }
                    break;
            }
        }

        private progressSetTime(data: FillVO): void {
            switch (data.type) {
                case 1:
                    this.taskTypePanel.l_progress.setTimeStr(data.pro_timeNum);
                    break;
                case 2:
                    this.taskTypePanel.c_progress.setTimeStr(data.pro_timeNum);
                    break;
                case 3:
                    this.taskTypePanel.r_progress.setTimeStr(data.pro_timeNum);
                    break;
            }
        }

        private pauseGame(): void {
            EffectUtils.playEffect(this.taskTypePanel.btn_back, 2, () => {
                game.TaskGame.getInstance().pauseGame();
                game.AppFacade.getInstance().sendNotification(NoficationConfig.OPEN_PAUSE, 3);
            });
        }

        private containue(): void {
            game.TaskGame.getInstance().containueGame();
        }

        private setStateChange(status: StatusVo): void {
            this.taskTypePanel.btn_result.visible = status.isFinish;
            switch (status.target) {
                case "L":
                    switch (status.state) {
                        case 1:
                            this.taskTypePanel.l_prepara.visible = true;
                            this.taskTypePanel.l_progress.visible = false;
                            this.taskTypePanel.l_finish.visible = false;
                            break;
                        case 2:
                            this.taskTypePanel.l_prepara.visible = false;
                            this.taskTypePanel.l_progress.visible = true;
                            this.taskTypePanel.l_finish.visible = false;
                            break;
                        case 3:
                            this.taskTypePanel.l_prepara.visible = false;
                            this.taskTypePanel.l_progress.visible = false;
                            this.taskTypePanel.l_finish.visible = true;
                            break;
                        case 4:
                            this.taskTypePanel.l_prepara.visible = false;
                            this.taskTypePanel.l_progress.visible = false;
                            this.taskTypePanel.l_finish.visible = false;
                            break;
                    }
                    break;
                case "C":
                    switch (status.state) {
                        case 1:
                            this.taskTypePanel.c_prepara.visible = true;
                            this.taskTypePanel.c_progress.visible = false;
                            this.taskTypePanel.c_finish.visible = false;
                            break;
                        case 2:
                            this.taskTypePanel.c_prepara.visible = false;
                            this.taskTypePanel.c_progress.visible = true;
                            this.taskTypePanel.c_finish.visible = false;
                            break;
                        case 3:
                            this.taskTypePanel.c_prepara.visible = false;
                            this.taskTypePanel.c_progress.visible = false;
                            this.taskTypePanel.c_finish.visible = true;
                            break;
                        case 4:
                            this.taskTypePanel.c_prepara.visible = false;
                            this.taskTypePanel.c_progress.visible = false;
                            this.taskTypePanel.c_finish.visible = false;
                            break;
                    }
                    break;
                case "R":
                    switch (status.state) {
                        case 1:
                            this.taskTypePanel.r_prepara.visible = true;
                            this.taskTypePanel.r_progress.visible = false;
                            this.taskTypePanel.r_finish.visible = false;
                            break;
                        case 2:
                            this.taskTypePanel.r_prepara.visible = false;
                            this.taskTypePanel.r_progress.visible = true;
                            this.taskTypePanel.r_finish.visible = false;
                            break;
                        case 3:
                            this.taskTypePanel.r_prepara.visible = false;
                            this.taskTypePanel.r_progress.visible = false;
                            this.taskTypePanel.r_finish.visible = true;
                            break;
                        case 4:
                            this.taskTypePanel.r_prepara.visible = false;
                            this.taskTypePanel.r_progress.visible = false;
                            this.taskTypePanel.r_finish.visible = false;
                            break;
                    }
                    break;
            }
        }

        private fillPreParaData(time: FillVO): void {
            switch (time.type) {
                case 1:
                    this.taskTypePanel.l_prepara.setCountTime(time.timeNum);
                    this.taskTypePanel.l_prepara.setPlayerData(GlobalData.curLeftPlayerVo);
                    this.taskTypePanel.l_prepara.setStep(time.curStep, time.totalStep);
                    break;
                case 2:
                    this.taskTypePanel.c_prepara.setCountTime(time.timeNum);
                    this.taskTypePanel.c_prepara.setPlayerData(GlobalData.curCenterPlayerVo);
                    this.taskTypePanel.c_prepara.setStep(time.curStep, time.totalStep);
                    break;
                case 3:
                    this.taskTypePanel.r_prepara.setCountTime(time.timeNum);
                    this.taskTypePanel.r_prepara.setPlayerData(GlobalData.curRightPlayerVo);
                    this.taskTypePanel.r_prepara.setStep(time.curStep, time.totalStep);
                    break;
            }
        }

        private fillFinishData(finish: FillVO): void {
            switch (finish.type) {
                case 1:
                    this.taskTypePanel.l_finish.setPlayer(GlobalData.curLeftPlayerVo);
                    break;
                case 2:
                    this.taskTypePanel.c_finish.setPlayer(GlobalData.curCenterPlayerVo);
                    break;
                case 3:
                    this.taskTypePanel.r_finish.setPlayer(GlobalData.curRightPlayerVo);
                    break;
            }
        }

        private fillProData(progress: FillVO): void {
            switch (progress.type) {
                case 1:
                    this.taskTypePanel.l_progress.setPlayerData(GlobalData.curLeftPlayerVo);
                    this.taskTypePanel.l_progress.setStep(progress.curStep, progress.totalStep);
                    this.taskTypePanel.l_progress.setTouchNum(progress.pro_curNum, progress.pro_totalNum);
                    this.taskTypePanel.l_progress.setTimeStr(progress.pro_timeNum);
                    break;
                case 2:
                    this.taskTypePanel.c_progress.setPlayerData(GlobalData.curCenterPlayerVo);
                    this.taskTypePanel.c_progress.setStep(progress.curStep, progress.totalStep);
                    this.taskTypePanel.c_progress.setTouchNum(progress.pro_curNum, progress.pro_totalNum);
                    this.taskTypePanel.c_progress.setTimeStr(progress.pro_timeNum);
                    break;
                case 3:
                    this.taskTypePanel.r_progress.setPlayerData(GlobalData.curRightPlayerVo);
                    this.taskTypePanel.r_progress.setStep(progress.curStep, progress.totalStep);
                    this.taskTypePanel.r_progress.setTouchNum(progress.pro_curNum, progress.pro_totalNum);
                    this.taskTypePanel.r_progress.setTimeStr(progress.pro_timeNum);
                    break;
            }
        }
    }
}