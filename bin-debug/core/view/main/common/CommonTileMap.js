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
var CommonTileMap = (function (_super) {
    __extends(CommonTileMap, _super);
    function CommonTileMap() {
        var _this = _super.call(this) || this;
        _this.nameStr = "";
        _this.bgSpeed = 2;
        _this.horizontalCenter = 0;
        _this.bottom = 0;
        GlobalData.gamePos = _this.bottom;
        GlobalData.gameScale = _this.scaleX;
        _this.addEventListener(eui.UIEvent.COMPLETE, _this.loadComplete, _this);
        _this.addEventListener(egret.Event.REMOVED_FROM_STAGE, _this.remove, _this);
        _this.skinName = "CommonTileMapSkin";
        return _this;
    }
    CommonTileMap.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    CommonTileMap.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    CommonTileMap.prototype.loadComplete = function () {
        this.removeEventListener(eui.UIEvent.COMPLETE, this.loadComplete, this);
        this.img_circle.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touch, this);
        this.circle.addEventListener('complete', this.onTweenGroupComplete, this);
        this.img_finish.visible = false;
        this.img_circle.visible = true;
    };
    CommonTileMap.prototype.touch = function (event) {
        this.img_circle.touchEnabled = false;
        this.circle.play(0);
        if (GlobalData.checkType) {
            game.AppFacade.getInstance().sendNotification(EventConfig.Event_UPDATE_TOUCH_Time, this.getName());
        }
        else {
            game.AppFacade.getInstance().sendNotification(EventConfig.Event_UPDATE_TOUCH_Task_Show, this.getName());
        }
    };
    CommonTileMap.prototype.onTweenGroupComplete = function () {
        var _this = this;
        this.img_circle.touchEnabled = true;
        if (!GlobalData.checkType) {
            if (this.img_finish.visible) {
                egret.setTimeout(function () {
                    game.AppFacade.getInstance().sendNotification(EventConfig.Event_UPDATE_TOUCH_Task, _this.getName());
                }, this, 1000);
            }
            else {
                game.AppFacade.getInstance().sendNotification(EventConfig.Event_UPDATE_TOUCH_Task, this.getName());
            }
        }
    };
    CommonTileMap.prototype.setFinishShow = function (isShow) {
        this.img_finish.visible = isShow;
        this.img_circle.visible = !isShow;
    };
    CommonTileMap.prototype.remove = function () {
        if (this.parent) {
            this.parent.removeChild(this);
        }
        this.img_circle.removeEventListener('complete', this.onTweenGroupComplete, this);
        this.img_circle.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touch, this);
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.remove, this);
    };
    CommonTileMap.prototype.createMoive = function () {
        var moive = Global.createMoive("test", "test", 0, 0);
        this.addChildAt(moive, 0);
        moive.play(-1);
    };
    CommonTileMap.prototype.setName = function (nameStr) {
        this.nameStr = nameStr;
    };
    CommonTileMap.prototype.getName = function () {
        return parseInt(this.nameStr.charAt(this.nameStr.length - 1));
    };
    CommonTileMap.prototype.setPos = function (posNum) {
        this.bottom = posNum;
    };
    CommonTileMap.prototype.setScale = function (scaleNum) {
        this.scaleX = scaleNum;
        this.scaleY = scaleNum;
    };
    return CommonTileMap;
}(eui.Component));
__reflect(CommonTileMap.prototype, "CommonTileMap", ["eui.UIComponent", "egret.DisplayObject"]);
