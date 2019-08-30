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
var CommonListItem = (function (_super) {
    __extends(CommonListItem, _super);
    function CommonListItem() {
        return _super.call(this) || this;
    }
    CommonListItem.prototype.dataChanged = function () {
        _super.prototype.dataChanged.call(this);
        if (this.data) {
            this.drawCircle();
            this.img_icon.source = RES.getRes(this.data.playerIcon);
        }
    };
    CommonListItem.prototype.drawCircle = function () {
        var shape = new egret.Shape();
        shape.graphics.beginFill(0xff0000 + Math.floor(Math.random() * 100) * (0xffffff / 100), 1);
        shape.graphics.lineStyle(1, 0xff0000 + Math.floor(Math.random() * 100) * (0xffffff / 100));
        shape.graphics.drawRoundRect(0, 0, 85, 85, 32, 32);
        shape.graphics.endFill();
        this.addChildAt(shape, 0);
        this.img_icon.mask = shape;
    };
    return CommonListItem;
}(eui.ItemRenderer));
__reflect(CommonListItem.prototype, "CommonListItem");
