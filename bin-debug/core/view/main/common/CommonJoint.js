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
var CommonJoint = (function (_super) {
    __extends(CommonJoint, _super);
    function CommonJoint() {
        var _this = _super.call(this) || this;
        _this.curArr = [];
        _this.nameStr = "";
        _this.top = 342;
        _this.horizontalCenter = 0;
        GlobalData.gamePos = _this.bottom;
        GlobalData.gameScale = _this.scaleX;
        _this.addEventListener(eui.UIEvent.COMPLETE, _this.loadComplete, _this);
        _this.addEventListener(egret.Event.REMOVED_FROM_STAGE, _this.remove, _this);
        _this.skinName = "CommonJointSkin";
        return _this;
    }
    CommonJoint.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    CommonJoint.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    CommonJoint.prototype.loadComplete = function () {
        for (var i = 1; i < 14; i++) {
            var join = this.getChildByName("img_" + i);
            join.visible = false;
            join.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touch, this);
        }
        this.showObj();
    };
    CommonJoint.prototype.showObj = function () {
        this.curArr = [];
        var ranLength = Math.floor(Math.random() * 4 + 1);
        while (this.curArr.length < ranLength) {
            var ranNum = Math.floor(Math.random() * 13 + 1);
            if (this.curArr.indexOf(ranNum) == -1) {
                this.curArr.push(ranNum);
            }
        }
        for (var i = 0; i < this.curArr.length; i++) {
            var index = this.curArr[i];
            var join = this.getChildByName("img_" + index);
            this.show(join);
        }
    };
    CommonJoint.prototype.remove = function () {
        if (this.parent) {
            this.parent.removeChild(this);
        }
        for (var i = 1; i < 14; i++) {
            var join = this.getChildByName("img_" + i);
            join.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touch, this);
        }
        this.removeEventListener(eui.UIEvent.COMPLETE, this.loadComplete, this);
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.remove, this);
    };
    CommonJoint.prototype.setName = function (nameStr) {
        this.nameStr = nameStr;
    };
    CommonJoint.prototype.getName = function () {
        return parseInt(this.nameStr.charAt(this.nameStr.length - 1));
    };
    CommonJoint.prototype.touch = function (event) {
        var name = event.currentTarget.name;
        var index = parseInt(name.substring(4));
        if (this.curArr.indexOf(index) != -1) {
            this.curArr.splice(this.curArr.indexOf(index), 1);
        }
        else {
            return;
        }
        var join = this.getChildByName("img_" + index);
        this.scale(join);
        if (this.curArr.length <= 0) {
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
    CommonJoint.prototype.show = function (obj) {
        var _this = this;
        egret.Tween.removeTweens(obj);
        obj.scaleX = 0;
        obj.scaleY = 0;
        obj.visible = true;
        egret.Tween.get(obj).to({ scaleX: 1.5, scaleY: 1.5 }, 300, egret.Ease.sineInOut).call(function () {
            egret.Tween.get(obj).to({ scaleX: 1, scaleY: 1 }, 300, egret.Ease.backInOut).call(function () {
                egret.Tween.removeTweens(obj);
            }, _this);
        }, this);
    };
    CommonJoint.prototype.scale = function (obj) {
        egret.Tween.removeTweens(obj);
        obj.scaleX = 1;
        obj.scaleY = 1;
        obj.visible = true;
        egret.Tween.get(obj).to({ scaleX: 0, scaleY: 0 }, 300, egret.Ease.sineInOut).call(function () {
            obj.visible = false;
            egret.Tween.removeTweens(obj);
        }, this);
    };
    CommonJoint.prototype.setPos = function (posNum) {
        this.bottom = posNum;
    };
    CommonJoint.prototype.setScale = function (scaleNum) {
        this.scaleX = scaleNum;
        this.scaleY = scaleNum;
    };
    return CommonJoint;
}(eui.Component));
__reflect(CommonJoint.prototype, "CommonJoint", ["eui.UIComponent", "egret.DisplayObject"]);
