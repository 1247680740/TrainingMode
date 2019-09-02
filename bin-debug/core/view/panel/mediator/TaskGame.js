var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var game;
(function (game) {
    var TaskGame = (function () {
        function TaskGame() {
            /**
             * 准备倒计时计时器
             */
            this.leftTimer = null;
            this.centerTimer = null;
            this.rightTimer = null;
            /** 三者状态 */
            this.l_state = 1;
            this.c_state = 1;
            this.r_state = 1;
            /** 是否完成 */
            this.l_finish = false;
            this.c_finish = false;
            this.r_finish = false;
            /** 一共需要做多少轮 */
            this.l_total = 0;
            this.c_total = 0;
            this.r_total = 0;
            /** 当前做的个数 */
            this.l_curTouchNum = 0;
            this.c_curTouchNum = 0;
            this.r_curTouchNum = 0;
            /** 当前本轮所用时间 */
            this.l_curTime = 0;
            this.c_curTime = 0;
            this.r_curTime = 0;
            this.cutLeftNum = 0;
            this.cutCenterNum = 0;
            this.cutRightNum = 0;
        }
        TaskGame.getInstance = function () {
            if (!this.instance) {
                this.instance = new TaskGame();
            }
            return this.instance;
        };
        TaskGame.prototype.initData = function () {
            this.l_finish = false;
            this.c_finish = false;
            this.r_finish = false;
            this.setTaskData();
            this.judgeState("L");
            this.judgeState("C");
            this.judgeState("R");
            this.fillLeftData();
            this.fillCenterData();
            this.fillRightData();
        };
        /**
        * 初始化任务模式所需数据
        */
        TaskGame.prototype.setTaskData = function () {
            var maxLength = Global.contrastArr();
            this.l_arr = P.getGameDataProxy().getLeftPlayer();
            this.c_arr = P.getGameDataProxy().getCenterPlayer();
            this.r_arr = P.getGameDataProxy().getRightPlayer();
            GlobalData.curLeftPlayerVo = this.l_arr[GlobalData.l_curTaskEveryGroup];
            GlobalData.curCenterPlayerVo = this.c_arr[GlobalData.c_curTaskEveryGroup];
            GlobalData.curRightPlayerVo = this.r_arr[GlobalData.r_curTaskEveryGroup];
            this.l_total = this.l_arr.length * GlobalData.taskThreeData;
            this.c_total = this.c_arr.length * GlobalData.taskThreeData;
            this.r_total = this.r_arr.length * GlobalData.taskThreeData;
        };
        /** 判断状态 */
        TaskGame.prototype.judgeState = function (typeStr) {
            switch (typeStr) {
                case "L":
                    if (GlobalData.curLeftPlayerVo) {
                        if (this.leftTimer) {
                            this.setStateChange(typeStr, 1);
                        }
                        else {
                            if (GlobalData.l_curTaskTotalGroup <= this.l_total) {
                                this.setStateChange(typeStr, 2);
                            }
                            else {
                                this.setStateChange(typeStr, 3);
                            }
                        }
                    }
                    else {
                        this.setStateChange(typeStr, 4);
                    }
                    break;
                case "C":
                    if (GlobalData.curCenterPlayerVo) {
                        if (this.centerTimer) {
                            this.setStateChange(typeStr, 1);
                        }
                        else {
                            if (GlobalData.c_curTaskTotalGroup <= this.c_total) {
                                this.setStateChange(typeStr, 2);
                            }
                            else {
                                this.setStateChange(typeStr, 3);
                            }
                        }
                    }
                    else {
                        this.setStateChange(typeStr, 4);
                    }
                    break;
                case "R":
                    if (GlobalData.curRightPlayerVo) {
                        if (this.rightTimer) {
                            this.setStateChange(typeStr, 1);
                        }
                        else {
                            if (GlobalData.r_curTaskTotalGroup <= this.r_total) {
                                this.setStateChange(typeStr, 2);
                            }
                            else {
                                this.setStateChange(typeStr, 3);
                            }
                        }
                    }
                    else {
                        this.setStateChange(typeStr, 4);
                    }
                    break;
            }
        };
        /**
         * 切换状态
         * @当前切换对象
         * @当前切换状态 1:准备阶段 2：进行中 3：完成 4: 无人
         */
        TaskGame.prototype.setStateChange = function (curTag, state) {
            switch (curTag) {
                case "L":
                    this.l_state = state;
                    if (state == 1) {
                        this.l_finish = false;
                    }
                    else if (state == 2) {
                        this.l_finish = false;
                    }
                    else if (state == 3) {
                        this.l_finish = true;
                    }
                    else if (state == 4) {
                        this.l_finish = true;
                    }
                    this.judgeFinsh(curTag, state);
                    break;
                case "C":
                    this.c_state = state;
                    if (state == 1) {
                        this.c_finish = false;
                    }
                    else if (state == 2) {
                        this.c_finish = false;
                    }
                    else if (state == 3) {
                        this.c_finish = true;
                    }
                    else if (state == 4) {
                        this.c_finish = true;
                    }
                    this.judgeFinsh(curTag, state);
                    break;
                case "R":
                    this.r_state = state;
                    if (state == 1) {
                        this.r_finish = false;
                    }
                    else if (state == 2) {
                        this.r_finish = false;
                    }
                    else if (state == 3) {
                        this.r_finish = true;
                    }
                    else if (state == 4) {
                        this.r_finish = true;
                    }
                    this.judgeFinsh(curTag, state);
                    break;
            }
        };
        TaskGame.prototype.judgeFinsh = function (target, state) {
            var vo = new StatusVo();
            vo.target = target;
            vo.state = state;
            if (this.l_finish && this.c_finish && this.r_finish) {
                vo.isFinish = true;
            }
            else {
                vo.isFinish = false;
            }
            game.AppFacade.getInstance().sendNotification(EventConfig.Event_GAME_TASK_CHANGESTATUS, vo);
        };
        /** 左侧填充数据 */
        TaskGame.prototype.fillLeftData = function () {
            var _this = this;
            var left_TimeVo = new FillVO();
            left_TimeVo.type = 1;
            left_TimeVo.curStep = GlobalData.l_curTaskTotalGroup;
            left_TimeVo.totalStep = this.l_total;
            switch (this.l_state) {
                case 1:
                    this.cutLeftNum = GlobalData.taskTwoData;
                    left_TimeVo.timeNum = this.cutLeftNum;
                    game.AppFacade.getInstance().sendNotification(EventConfig.Event_GAME_TASK_FILLDATA_PREPARA, left_TimeVo);
                    if (this.leftTimer) {
                        this.leftTimer.addEventListener(egret.TimerEvent.TIMER, function () {
                            _this.cutLeftNum -= 1;
                            if (_this.cutLeftNum <= 0) {
                                _this.leftTimer.stop();
                                _this.leftTimer = null;
                                _this.cutLeftNum = 0;
                                // 进入下一阶段
                                _this.judgeState("L");
                                _this.fillLeftData();
                            }
                            var preVo = DisplayObjectPool.getInstance().pop(PreparaVO);
                            preVo.type = 1;
                            preVo.timeNum = _this.cutLeftNum;
                            game.AppFacade.getInstance().sendNotification(EventConfig.Event_GAME_TASK_SETTIME_PREPARA, preVo);
                        }, this);
                        this.leftTimer.start();
                    }
                    break;
                case 2:
                    left_TimeVo.pro_curNum = this.l_curTouchNum;
                    left_TimeVo.pro_totalNum = GlobalData.taskOneData;
                    left_TimeVo.pro_timeNum = this.l_curTime;
                    game.AppFacade.getInstance().sendNotification(EventConfig.Event_GAME_TASK_FILLDATA_PROGRESS, left_TimeVo);
                    if (!this.leftTimer) {
                        this.leftTimer = new egret.Timer(1000);
                        this.leftTimer.addEventListener(egret.TimerEvent.TIMER, function () {
                            _this.l_curTime += 1;
                            left_TimeVo.pro_timeNum = _this.l_curTime;
                            game.AppFacade.getInstance().sendNotification(EventConfig.Event_GAME_TASK_SETTIME_PROSS, left_TimeVo);
                        }, this);
                    }
                    this.leftTimer.start();
                    break;
                case 3:
                    game.AppFacade.getInstance().sendNotification(EventConfig.Event_GAME_TASK_FILLDATA_FINISH, left_TimeVo);
                    break;
            }
        };
        /** 中间填充数据 */
        TaskGame.prototype.fillCenterData = function () {
            var _this = this;
            var center_TimeVo = new FillVO();
            center_TimeVo.type = 2;
            center_TimeVo.curStep = GlobalData.c_curTaskTotalGroup;
            center_TimeVo.totalStep = this.c_total;
            switch (this.c_state) {
                case 1:
                    this.cutCenterNum = GlobalData.taskTwoData;
                    center_TimeVo.timeNum = this.cutCenterNum;
                    game.AppFacade.getInstance().sendNotification(EventConfig.Event_GAME_TASK_FILLDATA_PREPARA, center_TimeVo);
                    if (this.centerTimer) {
                        this.centerTimer.addEventListener(egret.TimerEvent.TIMER, function () {
                            _this.cutCenterNum -= 1;
                            if (_this.cutCenterNum <= 0) {
                                _this.centerTimer.stop();
                                _this.centerTimer = null;
                                _this.cutCenterNum = 0;
                                // 进入下一阶段
                                _this.judgeState("C");
                                _this.fillCenterData();
                            }
                            var preVo = DisplayObjectPool.getInstance().pop(PreparaVO);
                            preVo.type = 2;
                            preVo.timeNum = _this.cutCenterNum;
                            game.AppFacade.getInstance().sendNotification(EventConfig.Event_GAME_TASK_SETTIME_PREPARA, preVo);
                        }, this);
                        this.centerTimer.start();
                    }
                    break;
                case 2:
                    center_TimeVo.pro_curNum = this.c_curTouchNum;
                    center_TimeVo.pro_totalNum = GlobalData.taskOneData;
                    center_TimeVo.pro_timeNum = this.c_curTime;
                    game.AppFacade.getInstance().sendNotification(EventConfig.Event_GAME_TASK_FILLDATA_PROGRESS, center_TimeVo);
                    if (!this.centerTimer) {
                        this.centerTimer = new egret.Timer(1000);
                        this.centerTimer.addEventListener(egret.TimerEvent.TIMER, function () {
                            _this.c_curTime += 1;
                            center_TimeVo.pro_timeNum = _this.c_curTime;
                            game.AppFacade.getInstance().sendNotification(EventConfig.Event_GAME_TASK_SETTIME_PROSS, center_TimeVo);
                        }, this);
                    }
                    this.centerTimer.start();
                    break;
                case 3:
                    game.AppFacade.getInstance().sendNotification(EventConfig.Event_GAME_TASK_FILLDATA_FINISH, center_TimeVo);
                    break;
            }
        };
        /** 右侧侧填充数据 */
        TaskGame.prototype.fillRightData = function () {
            var _this = this;
            var right_TimeVo = new FillVO();
            right_TimeVo.type = 3;
            right_TimeVo.curStep = GlobalData.r_curTaskTotalGroup;
            right_TimeVo.totalStep = this.r_total;
            switch (this.r_state) {
                case 1:
                    this.cutRightNum = GlobalData.taskTwoData;
                    right_TimeVo.timeNum = this.cutRightNum;
                    game.AppFacade.getInstance().sendNotification(EventConfig.Event_GAME_TASK_FILLDATA_PREPARA, right_TimeVo);
                    if (this.rightTimer) {
                        this.rightTimer.addEventListener(egret.TimerEvent.TIMER, function () {
                            _this.cutRightNum -= 1;
                            if (_this.cutRightNum <= 0) {
                                _this.rightTimer.stop();
                                _this.rightTimer = null;
                                _this.cutRightNum = 0;
                                // 进入下一阶段
                                _this.judgeState("R");
                                _this.fillRightData();
                            }
                            var preVo = DisplayObjectPool.getInstance().pop(PreparaVO);
                            preVo.type = 3;
                            preVo.timeNum = _this.cutRightNum;
                            game.AppFacade.getInstance().sendNotification(EventConfig.Event_GAME_TASK_SETTIME_PREPARA, preVo);
                        }, this);
                        this.rightTimer.start();
                    }
                    break;
                case 2:
                    right_TimeVo.pro_curNum = this.r_curTouchNum;
                    right_TimeVo.pro_totalNum = GlobalData.taskOneData;
                    right_TimeVo.pro_timeNum = this.r_curTime;
                    game.AppFacade.getInstance().sendNotification(EventConfig.Event_GAME_TASK_FILLDATA_PROGRESS, right_TimeVo);
                    if (!this.rightTimer) {
                        this.rightTimer = new egret.Timer(1000);
                        this.rightTimer.addEventListener(egret.TimerEvent.TIMER, function () {
                            _this.r_curTime += 1;
                            right_TimeVo.pro_timeNum = _this.r_curTime;
                            game.AppFacade.getInstance().sendNotification(EventConfig.Event_GAME_TASK_SETTIME_PROSS, right_TimeVo);
                        }, this);
                    }
                    this.rightTimer.start();
                    break;
                case 3:
                    game.AppFacade.getInstance().sendNotification(EventConfig.Event_GAME_TASK_FILLDATA_FINISH, right_TimeVo);
                    break;
            }
        };
        /** 更新左侧信息 */
        TaskGame.prototype.updateLeft = function () {
            if (this.l_curTouchNum >= GlobalData.taskOneData) {
                this.leftTimer.stop();
                this.leftTimer = null;
                this.l_curTouchNum = 0;
                GlobalData.curLeftPlayerVo.playNums += this.l_curTouchNum;
                GlobalData.curLeftPlayerVo.playTimes += this.l_curTime;
                P.getGameDataProxy().setLeftPlayer(GlobalData.curLeftPlayerVo);
                this.l_curTime = 0;
                if (GlobalData.l_curTaskEveryGroup + 1 >= this.l_arr.length) {
                    if (GlobalData._curTaskLeftGroup + 1 > GlobalData.taskThreeData) {
                        GlobalData._curTaskLeftGroup = 1;
                        GlobalData.l_curTaskTotalGroup = 1;
                        GlobalData.l_curTaskEveryGroup = 0;
                        this.setStateChange("L", 3);
                        this.fillLeftData();
                    }
                    else {
                        GlobalData._curTaskLeftGroup += 1;
                        GlobalData.l_curTaskTotalGroup += 1;
                        GlobalData.l_curTaskEveryGroup = 0;
                        this.leftTimer = new egret.Timer(1000);
                        this.setTaskData();
                        this.judgeState("L");
                        this.fillLeftData();
                    }
                }
                else {
                    GlobalData.l_curTaskEveryGroup += 1;
                    GlobalData.l_curTaskTotalGroup += 1;
                    this.leftTimer = new egret.Timer(1000);
                    this.setTaskData();
                    this.judgeState("L");
                    this.fillLeftData();
                }
                return;
            }
        };
        /** 更新中间信息 */
        TaskGame.prototype.updateCenter = function () {
            if (this.c_curTouchNum >= GlobalData.taskOneData) {
                this.centerTimer.stop();
                this.centerTimer = null;
                this.c_curTouchNum = 0;
                GlobalData.curCenterPlayerVo.playNums += this.c_curTouchNum;
                GlobalData.curCenterPlayerVo.playTimes += this.c_curTime;
                P.getGameDataProxy().setCenterPlayer(GlobalData.curCenterPlayerVo);
                this.c_curTime = 0;
                if (GlobalData.c_curTaskEveryGroup + 1 >= this.c_arr.length) {
                    if (GlobalData._curTaskCenterGroup + 1 > GlobalData.taskThreeData) {
                        GlobalData._curTaskCenterGroup = 1;
                        GlobalData.c_curTaskTotalGroup = 1;
                        GlobalData.c_curTaskEveryGroup = 0;
                        this.setStateChange("C", 3);
                        this.fillCenterData();
                    }
                    else {
                        GlobalData._curTaskCenterGroup += 1;
                        GlobalData.c_curTaskTotalGroup += 1;
                        GlobalData.c_curTaskEveryGroup = 0;
                        this.centerTimer = new egret.Timer(1000);
                        this.setTaskData();
                        this.judgeState("C");
                        this.fillCenterData();
                    }
                }
                else {
                    GlobalData.c_curTaskEveryGroup += 1;
                    GlobalData.c_curTaskTotalGroup += 1;
                    this.centerTimer = new egret.Timer(1000);
                    this.setTaskData();
                    this.judgeState("C");
                    this.fillCenterData();
                }
            }
        };
        /** 更新右侧信息 */
        TaskGame.prototype.updateRight = function () {
            if (this.r_curTouchNum >= GlobalData.taskOneData) {
                this.rightTimer.stop();
                this.rightTimer = null;
                this.r_curTouchNum = 0;
                GlobalData.curRightPlayerVo.playNums += this.r_curTouchNum;
                GlobalData.curRightPlayerVo.playTimes += this.r_curTime;
                P.getGameDataProxy().setRightPlayer(GlobalData.curRightPlayerVo);
                this.r_curTime = 0;
                if (GlobalData.r_curTaskEveryGroup + 1 >= this.r_arr.length) {
                    if (GlobalData._curTaskRightGroup + 1 > GlobalData.taskThreeData) {
                        GlobalData._curTaskRightGroup = 1;
                        GlobalData.r_curTaskTotalGroup = 1;
                        GlobalData.r_curTaskEveryGroup = 0;
                        this.setStateChange("R", 3);
                        this.fillRightData();
                    }
                    else {
                        GlobalData._curTaskRightGroup += 1;
                        GlobalData.r_curTaskTotalGroup += 1;
                        GlobalData.r_curTaskEveryGroup = 0;
                        this.rightTimer = new egret.Timer(1000);
                        this.setTaskData();
                        this.judgeState("R");
                        this.fillRightData();
                    }
                }
                else {
                    GlobalData.r_curTaskEveryGroup += 1;
                    GlobalData.r_curTaskTotalGroup += 1;
                    this.rightTimer = new egret.Timer(1000);
                    this.setTaskData();
                    this.judgeState("R");
                    this.fillRightData();
                }
            }
        };
        TaskGame.prototype.skipPrepra = function (index) {
            var preVo = new PreparaVO();
            switch (index) {
                case 1:
                    if (this.leftTimer) {
                        this.leftTimer.stop();
                        this.leftTimer = null;
                    }
                    this.cutLeftNum = 0;
                    this.judgeState("L");
                    this.fillLeftData();
                    preVo.type = 1;
                    preVo.timeNum = this.cutLeftNum;
                    game.AppFacade.getInstance().sendNotification(EventConfig.Event_GAME_TASK_SETTIME_PREPARA, preVo);
                    break;
                case 2:
                    if (this.centerTimer) {
                        this.centerTimer.stop();
                        this.centerTimer = null;
                    }
                    this.cutCenterNum = 0;
                    this.judgeState("C");
                    this.fillCenterData();
                    preVo.type = 2;
                    preVo.timeNum = this.cutCenterNum;
                    game.AppFacade.getInstance().sendNotification(EventConfig.Event_GAME_TASK_SETTIME_PREPARA, preVo);
                    break;
                case 3:
                    if (this.rightTimer) {
                        this.rightTimer.stop();
                        this.rightTimer = null;
                    }
                    this.cutRightNum = 0;
                    this.judgeState("R");
                    this.fillRightData();
                    preVo.type = 3;
                    preVo.timeNum = this.cutRightNum;
                    game.AppFacade.getInstance().sendNotification(EventConfig.Event_GAME_TASK_SETTIME_PREPARA, preVo);
                    break;
            }
        };
        TaskGame.prototype.updateTouchShow = function (touchId) {
            var proVO = new ProgressVO();
            proVO.type = touchId;
            switch (touchId) {
                case 1:
                    this.l_curTouchNum += 1;
                    proVO.touchNum = this.l_curTouchNum;
                    game.AppFacade.getInstance().sendNotification(EventConfig.Event_GAME_TASK_SETTOUCH_PROSS, proVO);
                    break;
                case 2:
                    this.c_curTouchNum += 1;
                    proVO.touchNum = this.c_curTouchNum;
                    game.AppFacade.getInstance().sendNotification(EventConfig.Event_GAME_TASK_SETTOUCH_PROSS, proVO);
                    break;
                case 3:
                    this.r_curTouchNum += 1;
                    proVO.touchNum = this.r_curTouchNum;
                    game.AppFacade.getInstance().sendNotification(EventConfig.Event_GAME_TASK_SETTOUCH_PROSS, proVO);
                    break;
            }
        };
        TaskGame.prototype.pauseGame = function () {
            if (this.leftTimer) {
                this.leftTimer.stop();
            }
            if (this.centerTimer) {
                this.centerTimer.stop();
            }
            if (this.rightTimer) {
                this.rightTimer.stop();
            }
        };
        TaskGame.prototype.containueGame = function () {
            if (this.leftTimer) {
                this.leftTimer.start();
            }
            if (this.centerTimer) {
                this.centerTimer.start();
            }
            if (this.rightTimer) {
                this.rightTimer.start();
            }
        };
        TaskGame.prototype.resetGame = function () {
            if (this.leftTimer) {
                this.leftTimer.stop();
                this.leftTimer = null;
            }
            if (this.centerTimer) {
                this.centerTimer.stop();
                this.centerTimer = null;
            }
            if (this.rightTimer) {
                this.rightTimer.stop();
                this.rightTimer = null;
            }
            this.l_state = this.c_state = this.r_state = 1;
            this.l_finish = this.c_finish = this.r_finish = false;
            this.l_arr = this.c_arr = this.r_arr = [];
            this.l_total = this.c_total = this.r_total = 0;
            this.l_curTouchNum = this.c_curTouchNum = this.r_curTouchNum = 0;
            this.l_curTime = this.c_curTime = this.r_curTime = 0;
            this.cutLeftNum = this.cutCenterNum = this.cutRightNum = 0;
            GlobalData.initData();
        };
        return TaskGame;
    }());
    game.TaskGame = TaskGame;
    __reflect(TaskGame.prototype, "game.TaskGame");
})(game || (game = {}));
