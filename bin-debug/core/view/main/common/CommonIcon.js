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
var ui;
(function (ui) {
    var CommonIcon = (function (_super) {
        __extends(CommonIcon, _super);
        function CommonIcon() {
            var _this = _super.call(this) || this;
            _this.addEventListener(eui.UIEvent.COMPLETE, _this.complete, _this);
            _this.skinName = "CommonIconSkin";
            return _this;
        }
        CommonIcon.prototype.partAdded = function (partName, instance) {
            _super.prototype.partAdded.call(this, partName, instance);
        };
        CommonIcon.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        CommonIcon.prototype.complete = function () {
            console.log("load CommonIcon");
            this.drawCircle();
        };
        CommonIcon.prototype.setIconData = function (playerData) {
            this.label_name.text = playerData.playerName;
            this.img_icon.source = RES.getRes(playerData.playerIcon);
        };
        CommonIcon.prototype.drawCircle = function () {
            var shape = new egret.Shape();
            shape.graphics.beginFill(0xff0000 + Math.floor(Math.random() * 100) * (0xffffff / 100), 1);
            shape.graphics.lineStyle(1, 0xff0000 + Math.floor(Math.random() * 100) * (0xffffff / 100));
            shape.graphics.drawRoundRect(0, 0, 170, 170, 85, 85);
            shape.graphics.endFill();
            this.addChildAt(shape, 0);
            this.img_icon.mask = shape;
        };
        return CommonIcon;
    }(eui.Component));
    ui.CommonIcon = CommonIcon;
    __reflect(CommonIcon.prototype, "ui.CommonIcon", ["eui.UIComponent", "egret.DisplayObject"]);
})(ui || (ui = {}));
