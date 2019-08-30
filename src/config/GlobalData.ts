/**
  * 全局数据存储
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved. 
  */
module GlobalData {

  //我的名字
  export var myName: string = "banma";

  //当前选取的运动类型（时间or任务）
  export var checkType: boolean = true;

  // 当前游戏模块数据
  export var androidArr:Array<AndroidVO> = [];



  /** 时间模式下当前组数 */
  export var _curTimerGroup: number = 1;

  /** 时间模式下总轮数 */
  export var _curTimerTotalGroup: number = 1;

  /** 时间模式下每组内的每队轮巡步数 */
  export var _curTimerEveryGroup: number = 0;



  /** 任务模式下左侧当前组数 */
  export var _curTaskLeftGroup: number = 1;

  //任务模式下中间当前组数
  export var _curTaskCenterGroup: number = 1;

  //任务模式下右侧当前组数
  export var _curTaskRightGroup: number = 1;

  /** 任务模式下左侧已做总轮数 */
  export var l_curTaskTotalGroup: number = 1;

  /** 任务模式下中间已做总轮数 */
  export var c_curTaskTotalGroup: number = 1;

  /** 任务模式下右侧已做总轮数 */
  export var r_curTaskTotalGroup: number = 1;

  /** 任务模式下左侧每组内的每队轮巡步数 */
  export var l_curTaskEveryGroup: number = 0;

  /** 任务模式下中间每组内的每队轮巡步数 */
  export var c_curTaskEveryGroup: number = 0;

  /** 任务模式下右侧每组内的每队轮巡步数 */
  export var r_curTaskEveryGroup: number = 0;



  //当前左侧玩家数据
  export var curLeftPlayerVo: PlayerVO = null;

  //当前中间玩家数据
  export var curCenterPlayerVo: PlayerVO = null;

  //当前右侧玩家数据
  export var curRightPlayerVo: PlayerVO = null;




  //当前时间类型第一组数据
  export var timeOneData: number = 8;

  //当前时间类型第二组数据
  export var timeTwoData: number = 4;

  //当前时间类型第三组数据
  export var timeThreeData: number = 2;

  //当前任务类型第一组数据
  export var taskOneData: number = 5;

  //当前任务类型第二组数据
  export var taskTwoData: number = 5;

  //当前任务类型第三组数据
  export var taskThreeData: number = 2;

  //当前游戏模式
  export var gameType: number = 0;

  //当前游戏的位置
  export var gamePos: number = 0;

  //当前游戏的缩放大小
  export var gameScale: number = 1;

  export function initData(): void {
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

}