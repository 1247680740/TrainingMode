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
/** 哑铃 */
var CommonDumbbel = (function (_super) {
    __extends(CommonDumbbel, _super);
    function CommonDumbbel() {
        var _this = _super.call(this) || this;
        _this.nameStr = "";
        _this.horizontalCenter = 0;
        _this.verticalCenter = 56;
        GlobalData.gamePos = _this.bottom;
        GlobalData.gameScale = _this.scaleX;
        _this.addEventListener(eui.UIEvent.COMPLETE, _this.loadComplete, _this);
        _this.skinName = "CommonDumbbelSkin";
        return _this;
    }
    CommonDumbbel.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    CommonDumbbel.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    CommonDumbbel.prototype.loadComplete = function () {
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touch, this);
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.remove, this);
        this.dumbbel.addEventListener('complete', this.onTweenGroupComplete, this);
    };
    CommonDumbbel.prototype.onTweenGroupComplete = function () {
        this.img_touch.touchEnabled = true;
        if (!GlobalData.checkType) {
            game.AppFacade.getInstance().sendNotification(EventConfig.Event_UPDATE_TOUCH_Task, this.getName());
        }
    };
    CommonDumbbel.prototype.setName = function (nameStr) {
        this.nameStr = nameStr;
    };
    CommonDumbbel.prototype.getName = function () {
        return parseInt(this.nameStr.charAt(this.nameStr.length - 1));
    };
    CommonDumbbel.prototype.remove = function () {
        if (this.parent) {
            this.parent.removeChild(this);
        }
        this.dumbbel.removeEventListener('complete', this.onTweenGroupComplete, this);
        this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touch, this);
        this.removeEventListener(eui.UIEvent.COMPLETE, this.loadComplete, this);
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.remove, this);
    };
    CommonDumbbel.prototype.touch = function (event) {
        this.img_touch.touchEnabled = false;
        this.dumbbel.play(0);
        // 传递事件回主页
        if (GlobalData.checkType) {
            game.AppFacade.getInstance().sendNotification(EventConfig.Event_UPDATE_TOUCH_Time, this.getName());
        }
        else {
            game.AppFacade.getInstance().sendNotification(EventConfig.Event_UPDATE_TOUCH_Task_Show, this.getName());
        }
    };
    CommonDumbbel.prototype.setPos = function (posNum) {
        this.bottom = posNum;
    };
    CommonDumbbel.prototype.setScale = function (scaleNum) {
        this.scaleX = scaleNum;
        this.scaleY = scaleNum;
    };
    return CommonDumbbel;
}(eui.Component));
__reflect(CommonDumbbel.prototype, "CommonDumbbel", ["eui.UIComponent", "egret.DisplayObject"]);
