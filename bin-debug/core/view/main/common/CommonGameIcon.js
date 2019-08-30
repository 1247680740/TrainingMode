var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var CommonGameIcon = (function (_super) {
    __extends(CommonGameIcon, _super);
    function CommonGameIcon() {
        var _this = _super.call(this) || this;
        _this.addEventListener(eui.UIEvent.COMPLETE, _this.complete, _this);
        _this.skinName = "CommonGameIconSkin";
        return _this;
    }
    CommonGameIcon.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    CommonGameIcon.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    CommonGameIcon.prototype.complete = function () {
        console.log("load CommonGameIcon");
        // this.drawCircle();
    };
    CommonGameIcon.prototype.setIcon = function (sourceStr) {
        if (sourceStr) {
            this.icon.source = RES.getRes(sourceStr);
        }
        else {
            this.icon.source = "";
        }
        this.drawCircle();
    };
    CommonGameIcon.prototype.setTimeTouchNum = function (touchNum) {
        this.label_num.text = (touchNum < 10) ? "0" + touchNum : touchNum + "";
        ;
    };
    CommonGameIcon.prototype.setTouchNum = function (curNum, totalNum) {
        var curStr = (curNum < 10) ? "0" + curNum : curNum + "";
        var totalStr = (totalNum < 10) ? "0" + totalNum : totalNum + "";
        this.label_num.text = curStr + "/" + totalStr;
    };
    CommonGameIcon.prototype.setTimer = function (timerStr) {
        this.label_time.text = timerStr;
    };
    CommonGameIcon.prototype.setStep = function (stepStr) {
        this.label_step.text = "SET " + stepStr;
    };
    CommonGameIcon.prototype.getStepArr = function () {
        var arr = this.label_step.text.split("/");
        var startIndex = (arr[0].indexOf("T")) + 1;
        var endIndex = arr[0].length;
        var leftNum = parseInt(arr[0].substring(startIndex, endIndex));
        var rightNum = parseInt(arr[1]);
        var returnArr = [leftNum, rightNum];
        return returnArr;
    };
    CommonGameIcon.prototype.drawCircle = function () {
        var shape = new egret.Shape();
        shape.graphics.beginFill(0xff0000 + Math.floor(Math.random() * 100) * (0xffffff / 100), 1);
        shape.graphics.lineStyle(1, 0xff0000 + Math.floor(Math.random() * 100) * (0xffffff / 100));
        shape.graphics.drawRoundRect(0, 0, 120, 125, 60, 62);
        shape.graphics.endFill();
        this.addChildAt(shape, 0);
        this.icon.mask = shape;
    };
    return CommonGameIcon;
}(eui.Component));
__reflect(CommonGameIcon.prototype, "CommonGameIcon", ["eui.UIComponent", "egret.DisplayObject"]);
