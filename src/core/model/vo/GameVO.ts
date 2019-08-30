/**
  * 游戏数据存储vo
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved. 
  */
class GameVO {
    /**
     * 框架名称
    */
    public gameName: string = "Eger pro";
}

class StatusVo {
    public target: string = "";
    public state: number = 0;
    public isFinish: boolean = false;
}

class FillVO {
    public type: number = 0;
    public timeNum: number = 0;
    public curStep: number = 0;
    public totalStep: number = 0;

    public pro_curNum: number =0;
    public pro_totalNum: number = 0;
    public pro_timeNum: number = 0;
}

class PreparaVO{
    public type: number = 0;
    public timeNum: number = 0;
}

class ProgressVO{
    public type: number = 0;
    public touchNum: number = 0;
    public totalNum: number = 0;
}

class AndroidVO{
    public num: number = 0;
    public actId: number = 0;
    public actType: number = 0;
    public id: number = 0;
    public type: number = 0;
}
