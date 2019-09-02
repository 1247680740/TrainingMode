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
/** 条形目标 */
var CommonLinear = (function (_super) {
    __extends(CommonLinear, _super);
    function CommonLinear() {
        var _this = _super.call(this) || this;
        _this.nameStr = "";
        _this.verticalCenter = 33;
        _this.horizontalCenter = 0;
        GlobalData.gamePos = _this.bottom;
        GlobalData.gameScale = _this.scaleX;
        _this.addEventListener(eui.UIEvent.COMPLETE, _this.loadComplete, _this);
        _this.addEventListener(egret.Event.REMOVED_FROM_STAGE, _this.remove, _this);
        _this.skinName = "CommonLinearSkin";
        return _this;
    }
    CommonLinear.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    CommonLinear.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    CommonLinear.prototype.loadComplete = function () {
        this.img_touch.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touch, this);
    };
    CommonLinear.prototype.remove = function () {
        if (this.parent) {
            this.parent.removeChild(this);
        }
        egret.Tween.removeTweens(this);
        this.img_touch.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touch, this);
        this.removeEventListener(eui.UIEvent.COMPLETE, this.loadComplete, this);
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.remove, this);
    };
    CommonLinear.prototype.touch = function (e) {
        this.initShow();
        // 发送点击事件回主页
        if (GlobalData.checkType) {
            game.AppFacade.getInstance().sendNotification(EventConfig.Event_UPDATE_TOUCH_Time, this.getName());
        }
        else {
            game.AppFacade.getInstance().sendNotification(EventConfig.Event_UPDATE_TOUCH_Task_Show, this.getName());
        }
    };
    CommonLinear.prototype.initShow = function () {
        var _this = this;
        egret.Tween.removeTweens(this);
        var angle = Math.floor(Math.random() * 360);
        egret.Tween.get(this).to({ rotation: angle }, 300, egret.Ease.sineInOut).call(function () {
            egret.Tween.removeTweens(_this);
        }, this);
        egret.Tween.get(this).to({ scaleX: 0.5, scaleY: 0.5 }, 100, egret.Ease.sineInOut).call(function () {
            egret.Tween.get(_this).to({ scaleX: 1.5, scaleY: 1.5 }, 100, egret.Ease.sineInOut).call(function () {
                egret.Tween.get(_this).to({ scaleX: 1, scaleY: 1 }, 100, egret.Ease.sineInOut).call(function () {
                    egret.Tween.removeTweens(_this);
                    if (!GlobalData.checkType) {
                        game.AppFacade.getInstance().sendNotification(EventConfig.Event_UPDATE_TOUCH_Task, _this.getName());
                    }
                }, _this);
            }, _this);
        }, this);
        ;
    };
    CommonLinear.prototype.setName = function (nameStr) {
        this.nameStr = nameStr;
    };
    CommonLinear.prototype.getName = function () {
        return parseInt(this.nameStr.charAt(this.nameStr.length - 1));
    };
    CommonLinear.prototype.setPos = function (posNum) {
        this.bottom = posNum;
    };
    CommonLinear.prototype.setScale = function (scaleNum) {
        this.scaleX = scaleNum;
        this.scaleY = scaleNum;
    };
    return CommonLinear;
}(eui.Component));
__reflect(CommonLinear.prototype, "CommonLinear", ["eui.UIComponent", "egret.DisplayObject"]);
