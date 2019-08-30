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
/** 心形目标 */
var CommonHeart = (function (_super) {
    __extends(CommonHeart, _super);
    function CommonHeart() {
        var _this = _super.call(this) || this;
        _this.nameStr = "";
        _this.horizontalCenter = 0;
        _this.verticalCenter = -300;
        GlobalData.gamePos = _this.bottom;
        GlobalData.gameScale = _this.scaleX;
        _this.addEventListener(eui.UIEvent.COMPLETE, _this.loadComplete, _this);
        _this.addEventListener(egret.Event.REMOVED_FROM_STAGE, _this.remove, _this);
        _this.skinName = "CommonHeartSkin";
        return _this;
    }
    CommonHeart.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    CommonHeart.prototype.partRemoved = function (partName, instance) {
        _super.prototype.partRemoved.call(this, partName, instance);
        console.log("flower remove");
    };
    CommonHeart.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    CommonHeart.prototype.remove = function (event) {
        if (this.parent) {
            this.parent.removeChild(this);
        }
        this.img_touch.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touch, this);
        this.heart.removeEventListener('complete', this.onTweenGroupComplete, this);
        this.removeEventListener(eui.UIEvent.COMPLETE, this.loadComplete, this);
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.remove, this);
    };
    CommonHeart.prototype.loadComplete = function () {
        this.img_touch.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touch, this);
        this.heart.addEventListener('complete', this.onTweenGroupComplete, this);
    };
    CommonHeart.prototype.onTweenGroupComplete = function () {
        this.img_touch.touchEnabled = true;
        if (!GlobalData.checkType) {
            game.AppFacade.getInstance().sendNotification(EventConfig.Event_UPDATE_TOUCH_Task, this.getName());
        }
    };
    CommonHeart.prototype.touch = function () {
        this.img_touch.touchEnabled = false;
        this.heart.play(0);
        if (GlobalData.checkType) {
            game.AppFacade.getInstance().sendNotification(EventConfig.Event_UPDATE_TOUCH_Time, this.getName());
        }
        else {
            game.AppFacade.getInstance().sendNotification(EventConfig.Event_UPDATE_TOUCH_Task_Show, this.getName());
        }
    };
    CommonHeart.prototype.setName = function (nameStr) {
        this.nameStr = nameStr;
    };
    CommonHeart.prototype.getName = function () {
        return parseInt(this.nameStr.charAt(this.nameStr.length - 1));
    };
    CommonHeart.prototype.setPos = function (posNum) {
        this.bottom = posNum;
    };
    CommonHeart.prototype.setScale = function (scaleNum) {
        this.scaleX = scaleNum;
        this.scaleY = scaleNum;
    };
    return CommonHeart;
}(eui.Component));
__reflect(CommonHeart.prototype, "CommonHeart", ["eui.UIComponent", "egret.DisplayObject"]);
