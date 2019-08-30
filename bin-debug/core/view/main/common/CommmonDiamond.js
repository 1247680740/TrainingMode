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
/** 战神 */
var CommmonDiamond = (function (_super) {
    __extends(CommmonDiamond, _super);
    function CommmonDiamond() {
        var _this = _super.call(this) || this;
        _this.nameStr = "";
        _this.horizontalCenter = 0;
        _this.bottom = 0;
        GlobalData.gamePos = _this.bottom;
        GlobalData.gameScale = _this.scaleX;
        _this.addEventListener(eui.UIEvent.COMPLETE, _this.loadComplete, _this);
        _this.addEventListener(egret.Event.REMOVED_FROM_STAGE, _this.remove, _this);
        _this.skinName = "CommmonDiamondSkin";
        return _this;
    }
    CommmonDiamond.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    CommmonDiamond.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    CommmonDiamond.prototype.remove = function (event) {
        if (this.parent) {
            this.parent.removeChild(this);
        }
        egret.Tween.removeTweens(this);
        this.img_touch.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touch, this);
        this.removeEventListener(eui.UIEvent.COMPLETE, this.loadComplete, this);
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.remove, this);
    };
    CommmonDiamond.prototype.loadComplete = function () {
        var _this = this;
        this.img_touch.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touch, this);
        this.ani = Global.createMoive("ani_diamon", "Battle-rope", -163, -55);
        this.addChild(this.ani);
        this.ani.visible = false;
        this.ani.addEventListener(egret.Event.COMPLETE, function (e) {
            _this.img_touch.touchEnabled = true;
            _this.img_touch.visible = true;
            _this.ani.visible = false;
            if (!GlobalData.checkType) {
                game.AppFacade.getInstance().sendNotification(EventConfig.Event_UPDATE_TOUCH_Task, _this.getName());
            }
        }, this);
    };
    CommmonDiamond.prototype.touch = function () {
        this.img_touch.visible = false;
        this.ani.visible = true;
        this.ani.gotoAndPlay(1, 1);
        this.img_touch.touchEnabled = false;
        if (GlobalData.checkType) {
            game.AppFacade.getInstance().sendNotification(EventConfig.Event_UPDATE_TOUCH_Time, this.getName());
        }
        else {
            game.AppFacade.getInstance().sendNotification(EventConfig.Event_UPDATE_TOUCH_Task_Show, this.getName());
        }
    };
    CommmonDiamond.prototype.setName = function (nameStr) {
        this.nameStr = nameStr;
    };
    CommmonDiamond.prototype.getName = function () {
        return parseInt(this.nameStr.charAt(this.nameStr.length - 1));
    };
    CommmonDiamond.prototype.setPos = function (posNum) {
        this.bottom = posNum;
    };
    CommmonDiamond.prototype.setScale = function (scaleNum) {
        this.scaleX = scaleNum;
        this.scaleY = scaleNum;
    };
    return CommmonDiamond;
}(eui.Component));
__reflect(CommmonDiamond.prototype, "CommmonDiamond", ["eui.UIComponent", "egret.DisplayObject"]);
