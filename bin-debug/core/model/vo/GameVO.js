var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
  * 游戏数据存储vo
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  */
var GameVO = (function () {
    function GameVO() {
        /**
         * 框架名称
        */
        this.gameName = "Eger pro";
    }
    return GameVO;
}());
__reflect(GameVO.prototype, "GameVO");
var StatusVo = (function () {
    function StatusVo() {
        this.target = "";
        this.state = 0;
        this.isFinish = false;
    }
    return StatusVo;
}());
__reflect(StatusVo.prototype, "StatusVo");
var FillVO = (function () {
    function FillVO() {
        this.type = 0;
        this.timeNum = 0;
        this.curStep = 0;
        this.totalStep = 0;
        this.pro_curNum = 0;
        this.pro_totalNum = 0;
        this.pro_timeNum = 0;
    }
    return FillVO;
}());
__reflect(FillVO.prototype, "FillVO");
var PreparaVO = (function () {
    function PreparaVO() {
        this.type = 0;
        this.timeNum = 0;
    }
    return PreparaVO;
}());
__reflect(PreparaVO.prototype, "PreparaVO");
var ProgressVO = (function () {
    function ProgressVO() {
        this.type = 0;
        this.touchNum = 0;
        this.totalNum = 0;
    }
    return ProgressVO;
}());
__reflect(ProgressVO.prototype, "ProgressVO");
var AndroidVO = (function () {
    function AndroidVO() {
        this.num = 0;
        this.actId = 0;
        this.actType = 0;
        this.id = 0;
        this.type = 0;
    }
    return AndroidVO;
}());
__reflect(AndroidVO.prototype, "AndroidVO");
