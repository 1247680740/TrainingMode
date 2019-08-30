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
var CommonStoneItem = (function (_super) {
    __extends(CommonStoneItem, _super);
    function CommonStoneItem() {
        var _this = _super.call(this) || this;
        _this.addEventListener(eui.UIEvent.COMPLETE, _this.loadComplete, _this);
        _this.addEventListener(egret.Event.REMOVED_FROM_STAGE, _this.remove, _this);
        _this.skinName = "CommonStoneItemSkin";
        return _this;
    }
    CommonStoneItem.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    CommonStoneItem.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    CommonStoneItem.prototype.loadComplete = function () {
    };
    CommonStoneItem.prototype.remove = function () {
        if (this.parent) {
            this.parent.removeChild(this);
        }
        this.removeEventListener(eui.UIEvent.COMPLETE, this.loadComplete, this);
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.remove, this);
    };
    CommonStoneItem.prototype.setHide = function () {
        this.img_red.visible = false;
    };
    CommonStoneItem.prototype.setShow = function () {
        var _this = this;
        egret.Tween.removeTweens(this.img_red);
        this.img_red.visible = true;
        this.img_red.alpha = 0;
        this.img_red.scaleX = 0;
        this.img_red.scaleY = 0;
        egret.Tween.get(this.img_red).to({ alpha: 1, scaleX: 1, scaleY: 1 }, 500, egret.Ease.sineInOut).call(function () {
            egret.Tween.removeTweens(_this.img_red);
        }, this);
    };
    CommonStoneItem.prototype.setScale = function (touchIndex) {
        var _this = this;
        egret.Tween.removeTweens(this.img_red);
        this.img_red.visible = true;
        this.img_red.alpha = 1;
        this.img_red.scaleX = 1;
        this.img_red.scaleY = 1;
        egret.Tween.get(this.img_red).to({ alpha: 0, scaleX: 0, scaleY: 0 }, 500).call(function () {
            _this.img_red.visible = false;
            egret.Tween.removeTweens(_this.img_red);
            if (!GlobalData.checkType) {
                game.AppFacade.getInstance().sendNotification(EventConfig.Event_UPDATE_TOUCH_Task, touchIndex);
            }
        }, this);
    };
    CommonStoneItem.prototype.setImgName = function (nameStr) {
        this.img_red.name = nameStr;
    };
    return CommonStoneItem;
}(eui.Component));
__reflect(CommonStoneItem.prototype, "CommonStoneItem", ["eui.UIComponent", "egret.DisplayObject"]);
