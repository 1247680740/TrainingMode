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
/** 石头目标 */
var CommonStone = (function (_super) {
    __extends(CommonStone, _super);
    function CommonStone() {
        var _this = _super.call(this) || this;
        _this.curIndex = 0;
        _this.nameStr = "";
        _this.showID = 0;
        _this.top = 347;
        _this.horizontalCenter = 0;
        GlobalData.gamePos = _this.bottom;
        GlobalData.gameScale = _this.scaleX;
        _this.addEventListener(eui.UIEvent.COMPLETE, _this.loadComplete, _this);
        _this.addEventListener(egret.Event.REMOVED_FROM_STAGE, _this.remove, _this);
        _this.skinName = "CommonStoneSkin";
        return _this;
    }
    CommonStone.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    CommonStone.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    CommonStone.prototype.loadComplete = function () {
        var ranNum = Math.floor(Math.random() * 9 + 1);
        for (var i = 1; i < 10; i++) {
            var stone = this.getChildByName("stone" + i);
            stone.setImgName("img" + i);
            stone.img_red.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touch, this);
            if (i == ranNum) {
                stone.setShow();
            }
            else {
                stone.setHide();
            }
        }
    };
    CommonStone.prototype.touch = function (event) {
        var name = event.currentTarget.name;
        var index = parseInt(name.charAt(name.length - 1));
        if (index == this.curIndex) {
            return;
        }
        this.curIndex = index;
        this.getRanNum();
        var stone = this.getChildByName("stone" + index);
        var nextStone = this.getChildByName("stone" + this.showID);
        stone.setScale(this.getName());
        nextStone.setShow();
        // 向主页发送事件
        if (GlobalData.checkType) {
            game.AppFacade.getInstance().sendNotification(EventConfig.Event_UPDATE_TOUCH_Time, this.getName());
        }
        else {
            game.AppFacade.getInstance().sendNotification(EventConfig.Event_UPDATE_TOUCH_Task_Show, this.getName());
        }
    };
    CommonStone.prototype.getRanNum = function () {
        var returnRum = Math.floor(Math.random() * 9 + 1);
        if (returnRum == this.curIndex) {
            this.getRanNum();
        }
        else {
            this.showID = returnRum;
        }
    };
    CommonStone.prototype.setName = function (nameStr) {
        this.nameStr = nameStr;
    };
    CommonStone.prototype.getName = function () {
        return parseInt(this.nameStr.charAt(this.nameStr.length - 1));
    };
    CommonStone.prototype.remove = function () {
        this.curIndex = 0;
        this.showID = 0;
        for (var i = 1; i < 10; i++) {
            var stone = this.getChildByName("stone" + i);
            stone.img_red.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touch, this);
        }
        if (this.parent) {
            this.parent.removeChild(this);
        }
        this.removeEventListener(eui.UIEvent.COMPLETE, this.loadComplete, this);
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.remove, this);
    };
    CommonStone.prototype.setPos = function (posNum) {
        this.bottom = posNum;
    };
    CommonStone.prototype.setScale = function (scaleNum) {
        this.scaleX = scaleNum;
        this.scaleY = scaleNum;
    };
    return CommonStone;
}(eui.Component));
__reflect(CommonStone.prototype, "CommonStone", ["eui.UIComponent", "egret.DisplayObject"]);
