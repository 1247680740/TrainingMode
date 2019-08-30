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
/** 飞镖 */
var CommonKite = (function (_super) {
    __extends(CommonKite, _super);
    function CommonKite() {
        var _this = _super.call(this) || this;
        _this.nameStr = "";
        _this.curArr = [];
        _this.top = 321;
        _this.horizontalCenter = 0;
        GlobalData.gamePos = _this.bottom;
        GlobalData.gameScale = _this.scaleX;
        _this.addEventListener(eui.UIEvent.COMPLETE, _this.loadComplete, _this);
        _this.addEventListener(egret.Event.REMOVED_FROM_STAGE, _this.remove, _this);
        _this.skinName = "CommonKiteSkin";
        return _this;
    }
    CommonKite.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    CommonKite.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    CommonKite.prototype.loadComplete = function () {
        for (var i = 1; i < 7; i++) {
            var kit = this.getChildByName("kit" + i);
            kit.img_red.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touch, this);
            kit.setImgName("img" + i);
            kit.setHide();
        }
        this.showObj();
    };
    CommonKite.prototype.showObj = function () {
        this.curArr = [];
        var arr = [1, 2, 3, 4, 5, 6];
        var ranLength = Math.floor(Math.random() * 6 + 1);
        while (this.curArr.length < ranLength) {
            var ranNum = arr[Math.floor((Math.random() * arr.length))];
            if (this.curArr.indexOf(ranNum) == -1) {
                this.curArr.push(ranNum);
            }
        }
        for (var i = 0; i < this.curArr.length; i++) {
            var index = this.curArr[i];
            var kit = this.getChildByName("kit" + index);
            kit.setShow();
        }
    };
    CommonKite.prototype.remove = function () {
        this.curArr = [];
        if (this.parent) {
            this.parent.removeChild(this);
        }
        for (var i = 1; i < 7; i++) {
            var kit = this.getChildByName("kit" + i);
            kit.img_red.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touch, this);
        }
        this.removeEventListener(eui.UIEvent.COMPLETE, this.loadComplete, this);
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.remove, this);
    };
    CommonKite.prototype.touch = function (event) {
        var name = event.currentTarget.name;
        var index = parseInt(name.charAt(name.length - 1));
        if (this.curArr.indexOf(index) == -1) {
            return;
        }
        var kit = this.getChildByName("kit" + index);
        kit.setScale();
        for (var i = 0; i < this.curArr.length; i++) {
            var forIndx = this.curArr[i];
            if (forIndx == index) {
                this.curArr.splice(i, 1);
            }
        }
        if (this.curArr.length <= 0) {
            // 发送事件到主页
            if (GlobalData.checkType) {
                game.AppFacade.getInstance().sendNotification(EventConfig.Event_UPDATE_TOUCH_Time, this.getName());
            }
            else {
                game.AppFacade.getInstance().sendNotification(EventConfig.Event_UPDATE_TOUCH_Task_Show, this.getName());
                game.AppFacade.getInstance().sendNotification(EventConfig.Event_UPDATE_TOUCH_Task, this.getName());
            }
            this.showObj();
        }
    };
    CommonKite.prototype.setName = function (nameStr) {
        this.nameStr = nameStr;
    };
    CommonKite.prototype.getName = function () {
        return parseInt(this.nameStr.charAt(this.nameStr.length - 1));
    };
    CommonKite.prototype.setPos = function (posNum) {
        this.bottom = posNum;
    };
    CommonKite.prototype.setScale = function (scaleNum) {
        this.scaleX = scaleNum;
        this.scaleY = scaleNum;
    };
    return CommonKite;
}(eui.Component));
__reflect(CommonKite.prototype, "CommonKite", ["eui.UIComponent", "egret.DisplayObject"]);
