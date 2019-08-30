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
var CommonFinish = (function (_super) {
    __extends(CommonFinish, _super);
    function CommonFinish() {
        var _this = _super.call(this) || this;
        _this.addEventListener(eui.UIEvent.COMPLETE, _this.complete, _this);
        _this.skinName = "CommonFinishSkin";
        return _this;
    }
    CommonFinish.prototype.complete = function () {
        this.drawCircle();
    };
    CommonFinish.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    CommonFinish.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    CommonFinish.prototype.setPlayer = function (playerVo) {
        this.img_icon.source = RES.getRes(playerVo.playerIcon);
        this.label_name.text = playerVo.playerName;
        if (GlobalData.checkType) {
            this.label_tagType.text = "完成次数";
            this.label_tagOne.text = Global.formatTime(playerVo.playTimes, 2);
            this.label_tagTwo.text = playerVo.playNums + "";
        }
        else {
            this.label_tagType.text = "完成时间";
            this.label_tagOne.text = playerVo.playNums + "次";
            this.label_tagTwo.text = Global.formatTime(playerVo.playTimes, 2);
            ;
        }
    };
    CommonFinish.prototype.drawCircle = function () {
        var shape = new egret.Shape();
        shape.graphics.beginFill(0xff0000 + Math.floor(Math.random() * 100) * (0xffffff / 100), 1);
        shape.graphics.lineStyle(1, 0xff0000 + Math.floor(Math.random() * 100) * (0xffffff / 100));
        shape.graphics.drawRoundRect(115, 0, 170, 170, 85, 85);
        shape.graphics.endFill();
        this.addChildAt(shape, 0);
        this.img_icon.mask = shape;
    };
    return CommonFinish;
}(eui.Component));
__reflect(CommonFinish.prototype, "CommonFinish", ["eui.UIComponent", "egret.DisplayObject"]);
