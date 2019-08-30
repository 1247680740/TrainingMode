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
/** 竖墙 */
var CommonRoad = (function (_super) {
    __extends(CommonRoad, _super);
    function CommonRoad() {
        var _this = _super.call(this) || this;
        _this.nameStr = "";
        _this.addEventListener(eui.UIEvent.COMPLETE, _this.loadComplete, _this);
        _this.addEventListener(egret.Event.REMOVED_FROM_STAGE, _this.remove, _this);
        _this.horizontalCenter = 0;
        _this.bottom = 0;
        GlobalData.gamePos = _this.bottom;
        GlobalData.gameScale = _this.scaleX;
        _this.skinName = "CommonRoadSkin";
        return _this;
    }
    CommonRoad.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    CommonRoad.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    CommonRoad.prototype.loadComplete = function () {
        var _this = this;
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touch, this);
        this.ani = Global.createMoive("wallS", "broken", -175, -15);
        this.addChild(this.ani);
        this.ani.visible = false;
        this.ani.addEventListener(egret.Event.COMPLETE, function (e) {
            _this.img_touch.visible = true;
            _this.img_touch.touchEnabled = true;
            _this.ani.visible = false;
            if (!GlobalData.checkType) {
                game.AppFacade.getInstance().sendNotification(EventConfig.Event_UPDATE_TOUCH_Task, _this.getName());
            }
        }, this);
    };
    CommonRoad.prototype.remove = function () {
        if (this.parent) {
            this.parent.removeChild(this);
        }
        this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touch, this);
        this.removeEventListener(eui.UIEvent.COMPLETE, this.loadComplete, this);
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.remove, this);
    };
    CommonRoad.prototype.touch = function () {
        this.img_touch.visible = false;
        this.img_touch.touchEnabled = false;
        this.ani.visible = true;
        this.ani.gotoAndPlay(1, 1);
        if (GlobalData.checkType) {
            game.AppFacade.getInstance().sendNotification(EventConfig.Event_UPDATE_TOUCH_Time, this.getName());
        }
        else {
            game.AppFacade.getInstance().sendNotification(EventConfig.Event_UPDATE_TOUCH_Task_Show, this.getName());
        }
    };
    CommonRoad.prototype.setName = function (nameStr) {
        this.nameStr = nameStr;
    };
    CommonRoad.prototype.getName = function () {
        return parseInt(this.nameStr.charAt(this.nameStr.length - 1));
    };
    CommonRoad.prototype.setPos = function (posNum) {
        this.bottom = posNum;
    };
    CommonRoad.prototype.setScale = function (scaleNum) {
        this.scaleX = scaleNum;
        this.scaleY = scaleNum;
    };
    return CommonRoad;
}(eui.Component));
__reflect(CommonRoad.prototype, "CommonRoad", ["eui.UIComponent", "egret.DisplayObject"]);
