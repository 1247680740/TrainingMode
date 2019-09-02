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
/** 圆形目标 */
var CommonBulls = (function (_super) {
    __extends(CommonBulls, _super);
    function CommonBulls() {
        var _this = _super.call(this) || this;
        _this.nameStr = "";
        _this.horizontalCenter = 0;
        _this.verticalCenter = 28;
        GlobalData.gamePos = _this.bottom;
        GlobalData.gameScale = _this.scaleX;
        _this.addEventListener(eui.UIEvent.COMPLETE, _this.loadComplete, _this);
        _this.addEventListener(egret.Event.REMOVED_FROM_STAGE, _this.remove, _this);
        _this.skinName = "CommonBullsSkin";
        return _this;
    }
    CommonBulls.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    CommonBulls.prototype.partRemoved = function (partName, instance) {
        _super.prototype.partRemoved.call(this, partName, instance);
        console.log("bulls remove");
    };
    CommonBulls.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    CommonBulls.prototype.remove = function (event) {
        if (this.parent) {
            this.parent.removeChild(this);
        }
        egret.Tween.removeTweens(this);
        this.img_touch.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touch, this);
        this.removeEventListener(eui.UIEvent.COMPLETE, this.loadComplete, this);
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.remove, this);
    };
    CommonBulls.prototype.loadComplete = function () {
        this.img_touch.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touch, this);
    };
    CommonBulls.prototype.touch = function () {
        var _this = this;
        this.img_touch.touchEnabled = false;
        egret.Tween.removeTweens(this);
        egret.Tween.get(this).to({ scaleX: 0, scaleY: 0, alpha: 0 }, 200, egret.Ease.sineIn).call(function () {
            egret.Tween.get(_this).to({ scaleX: 1, scaleY: 1, alpha: 1 }, 200, egret.Ease.backInOut).call(function () {
                _this.img_touch.touchEnabled = true;
                if (!GlobalData.checkType) {
                    game.AppFacade.getInstance().sendNotification(EventConfig.Event_UPDATE_TOUCH_Task, _this.getName());
                }
            }, _this);
        }, this);
        if (GlobalData.checkType) {
            game.AppFacade.getInstance().sendNotification(EventConfig.Event_UPDATE_TOUCH_Time, this.getName());
        }
        else {
            game.AppFacade.getInstance().sendNotification(EventConfig.Event_UPDATE_TOUCH_Task_Show, this.getName());
        }
    };
    CommonBulls.prototype.setName = function (nameStr) {
        this.nameStr = nameStr;
    };
    CommonBulls.prototype.getName = function () {
        return parseInt(this.nameStr.charAt(this.nameStr.length - 1));
    };
    CommonBulls.prototype.setPos = function (posNum) {
        this.bottom = posNum;
    };
    CommonBulls.prototype.setScale = function (scaleNum) {
        this.scaleX = scaleNum;
        this.scaleY = scaleNum;
    };
    return CommonBulls;
}(eui.Component));
__reflect(CommonBulls.prototype, "CommonBulls", ["eui.UIComponent", "egret.DisplayObject"]);
