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
/** 三角形目标 */
var CommonTriangle = (function (_super) {
    __extends(CommonTriangle, _super);
    function CommonTriangle() {
        var _this = _super.call(this) || this;
        _this.nameStr = "";
        _this.angleArr = [0, 120, 240];
        _this.horizontalCenter = 0;
        _this.verticalCenter = 27;
        GlobalData.gamePos = _this.bottom;
        GlobalData.gameScale = _this.scaleX;
        _this.addEventListener(eui.UIEvent.COMPLETE, _this.loadComplete, _this);
        _this.addEventListener(egret.Event.REMOVED_FROM_STAGE, _this.remove, _this);
        _this.skinName = "CommonTriangleSkin";
        return _this;
    }
    CommonTriangle.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    CommonTriangle.prototype.partRemoved = function (partName, instance) {
        _super.prototype.partRemoved.call(this, partName, instance);
        console.log("triangle remove");
    };
    CommonTriangle.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    CommonTriangle.prototype.remove = function (event) {
        if (this.parent) {
            this.parent.removeChild(this);
        }
        // egret.Tween.removeTweens(this.img_touch);
        this.triangle.removeEventListener('complete', this.onTweenGroupComplete, this);
        this.img_touch.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touch, this);
        this.removeEventListener(eui.UIEvent.COMPLETE, this.loadComplete, this);
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.remove, this);
    };
    CommonTriangle.prototype.loadComplete = function () {
        this.img_touch.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touch, this);
        this.triangle.addEventListener('complete', this.onTweenGroupComplete, this);
    };
    CommonTriangle.prototype.onTweenGroupComplete = function () {
        this.img_touch.touchEnabled = true;
        if (!GlobalData.checkType) {
            game.AppFacade.getInstance().sendNotification(EventConfig.Event_UPDATE_TOUCH_Task, this.getName());
        }
    };
    CommonTriangle.prototype.touch = function () {
        this.img_touch.touchEnabled = false;
        // egret.Tween.removeTweens(this.img_touch);
        // let angle: number = this.angleArr[Math.floor(Math.random()*this.angleArr.length)];
        // egret.Tween.get(this.img_touch).to({rotation:angle},500).call(()=>{
        // 	egret.Tween.removeTweens(this.img_touch);
        // },this);
        this.triangle.play(0);
        if (GlobalData.checkType) {
            game.AppFacade.getInstance().sendNotification(EventConfig.Event_UPDATE_TOUCH_Time, this.getName());
        }
        else {
            game.AppFacade.getInstance().sendNotification(EventConfig.Event_UPDATE_TOUCH_Task_Show, this.getName());
        }
    };
    CommonTriangle.prototype.setName = function (nameStr) {
        this.nameStr = nameStr;
    };
    CommonTriangle.prototype.getName = function () {
        return parseInt(this.nameStr.charAt(this.nameStr.length - 1));
    };
    CommonTriangle.prototype.setPos = function (posNum) {
        this.bottom = posNum;
    };
    CommonTriangle.prototype.setScale = function (scaleNum) {
        this.scaleX = scaleNum;
        this.scaleY = scaleNum;
    };
    return CommonTriangle;
}(eui.Component));
__reflect(CommonTriangle.prototype, "CommonTriangle", ["eui.UIComponent", "egret.DisplayObject"]);
