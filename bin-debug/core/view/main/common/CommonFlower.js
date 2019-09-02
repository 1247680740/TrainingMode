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
/** 花朵 */
var CommonFlower = (function (_super) {
    __extends(CommonFlower, _super);
    function CommonFlower() {
        var _this = _super.call(this) || this;
        _this.nameStr = "";
        _this.horizontalCenter = 0;
        _this.verticalCenter = 47;
        GlobalData.gamePos = _this.bottom;
        GlobalData.gameScale = _this.scaleX;
        _this.addEventListener(eui.UIEvent.COMPLETE, _this.createCompleteEvent, _this);
        _this.addEventListener(egret.Event.REMOVED_FROM_STAGE, _this.remove, _this);
        _this.skinName = "CommonFlowerSkin";
        return _this;
    }
    CommonFlower.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    CommonFlower.prototype.partRemoved = function (partName, instance) {
        _super.prototype.partRemoved.call(this, partName, instance);
        console.log("flower remove");
    };
    CommonFlower.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    CommonFlower.prototype.remove = function (event) {
        if (this.parent) {
            this.parent.removeChild(this);
        }
        this.removeEventListener(eui.UIEvent.COMPLETE, this.createCompleteEvent, this);
        this.removeEventListener(egret.TimerEvent.ENTER_FRAME, this.rotationing, this);
        this.img_touch.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touCh, this);
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.remove, this);
    };
    CommonFlower.prototype.createCompleteEvent = function () {
        this.addEventListener(egret.TimerEvent.ENTER_FRAME, this.rotationing, this);
        this.img_touch.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touCh, this);
        this.flower.addEventListener('complete', this.onTweenGroupComplete, this);
    };
    CommonFlower.prototype.onTweenGroupComplete = function () {
        this.img_touch.touchEnabled = true;
        if (!GlobalData.checkType) {
            game.AppFacade.getInstance().sendNotification(EventConfig.Event_UPDATE_TOUCH_Task, this.getName());
        }
    };
    CommonFlower.prototype.rotationing = function () {
        this.rotation += 3;
    };
    CommonFlower.prototype.touCh = function () {
        this.img_touch.touchEnabled = false;
        this.flower.play(0);
        this.flower2.play(0);
        this.flower3.play(0);
        this.flower4.play(0);
        if (GlobalData.checkType) {
            game.AppFacade.getInstance().sendNotification(EventConfig.Event_UPDATE_TOUCH_Time, this.getName());
        }
        else {
            game.AppFacade.getInstance().sendNotification(EventConfig.Event_UPDATE_TOUCH_Task_Show, this.getName());
        }
    };
    CommonFlower.prototype.setName = function (nameStr) {
        this.nameStr = nameStr;
    };
    CommonFlower.prototype.getName = function () {
        return parseInt(this.nameStr.charAt(this.nameStr.length - 1));
    };
    CommonFlower.prototype.setPos = function (posNum) {
        this.bottom = posNum;
    };
    CommonFlower.prototype.setScale = function (scaleNum) {
        this.scaleX = scaleNum;
        this.scaleY = scaleNum;
    };
    return CommonFlower;
}(eui.Component));
__reflect(CommonFlower.prototype, "CommonFlower", ["eui.UIComponent", "egret.DisplayObject"]);
