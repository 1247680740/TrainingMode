/**
  * 全局数据存储
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  */
var GlobalData;
(function (GlobalData) {
    //我的名字
    GlobalData.myName = "banma";
    //当前选取的运动类型（时间or任务）
    GlobalData.checkType = true;
    // 当前游戏模块数据
    GlobalData.androidArr = [];
    /** 时间模式下当前组数 */
    GlobalData._curTimerGroup = 1;
    /** 时间模式下总轮数 */
    GlobalData._curTimerTotalGroup = 1;
    /** 时间模式下每组内的每队轮巡步数 */
    GlobalData._curTimerEveryGroup = 0;
    /** 任务模式下左侧当前组数 */
    GlobalData._curTaskLeftGroup = 1;
    //任务模式下中间当前组数
    GlobalData._curTaskCenterGroup = 1;
    //任务模式下右侧当前组数
    GlobalData._curTaskRightGroup = 1;
    /** 任务模式下左侧已做总轮数 */
    GlobalData.l_curTaskTotalGroup = 1;
    /** 任务模式下中间已做总轮数 */
    GlobalData.c_curTaskTotalGroup = 1;
    /** 任务模式下右侧已做总轮数 */
    GlobalData.r_curTaskTotalGroup = 1;
    /** 任务模式下左侧每组内的每队轮巡步数 */
    GlobalData.l_curTaskEveryGroup = 0;
    /** 任务模式下中间每组内的每队轮巡步数 */
    GlobalData.c_curTaskEveryGroup = 0;
    /** 任务模式下右侧每组内的每队轮巡步数 */
    GlobalData.r_curTaskEveryGroup = 0;
    //当前左侧玩家数据
    GlobalData.curLeftPlayerVo = null;
    //当前中间玩家数据
    GlobalData.curCenterPlayerVo = null;
    //当前右侧玩家数据
    GlobalData.curRightPlayerVo = null;
    //当前时间类型第一组数据
    GlobalData.timeOneData = 8;
    //当前时间类型第二组数据
    GlobalData.timeTwoData = 4;
    //当前时间类型第三组数据
    GlobalData.timeThreeData = 2;
    //当前任务类型第一组数据
    GlobalData.taskOneData = 5;
    //当前任务类型第二组数据
    GlobalData.taskTwoData = 5;
    //当前任务类型第三组数据
    GlobalData.taskThreeData = 2;
    //当前游戏模式
    GlobalData.gameType = 0;
    //当前游戏的位置
    GlobalData.gamePos = 0;
    //当前游戏的缩放大小
    GlobalData.gameScale = 1;
    function initData() {
        GlobalData.curLeftPlayerVo = null;
        GlobalData.curCenterPlayerVo = null;
        GlobalData.curRightPlayerVo = null;
        GlobalData.l_curTaskTotalGroup = 1;
        GlobalData.c_curTaskTotalGroup = 1;
        GlobalData.r_curTaskTotalGroup = 1;
        GlobalData.l_curTaskEveryGroup = 0;
        GlobalData.c_curTaskEveryGroup = 0;
        GlobalData.r_curTaskEveryGroup = 0;
        GlobalData._curTaskLeftGroup = 1;
        GlobalData._curTaskCenterGroup = 1;
        GlobalData._curTaskRightGroup = 1;
        GlobalData._curTimerGroup = 1;
        GlobalData._curTimerTotalGroup = 1;
        GlobalData._curTimerEveryGroup = 0;
    }
    GlobalData.initData = initData;
})(GlobalData || (GlobalData = {}));
