// class CommonResultItem extends eui.Component implements eui.UIComponent {
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
// 	public img_icon: eui.Image;
// 	public label_name: eui.Label;
// 	public label_nums: eui.Label;
// 	public label_times: eui.Label;
// 	public constructor() {
// 		super();
// 		this.addEventListener(eui.UIEvent.COMPLETE, this.complete, this);
// 		this.skinName = "CommonResultItemSkin";
// 	}
// 	protected partAdded(partName: string, instance: any): void {
// 		super.partAdded(partName, instance);
// 	}
// 	protected childrenCreated(): void {
// 		super.childrenCreated();
// 	}
// 	private complete(): void {
// 	}
// 	public setPlayerData(playerVo:PlayerVO):void{
// 		this.img_icon.source = RES.getRes(playerVo.playerIcon);
// 		this.label_name.text = playerVo.playerName;
// 		this.label_nums.text = playerVo.playNums+"次";
// 		this.label_times.text = Global.formatTime(playerVo.playTimes,2)
// 	}
// }
var CommonResultItem = (function (_super) {
    __extends(CommonResultItem, _super);
    function CommonResultItem() {
        var _this = _super.call(this) || this;
        _this.addEventListener(eui.UIEvent.COMPLETE, _this.complete, _this);
        _this.skinName = "CommonResultItemSkin";
        return _this;
    }
    CommonResultItem.prototype.initUI = function () {
        _super.prototype.initUI.call(this);
    };
    CommonResultItem.prototype.initListener = function () {
        _super.prototype.initListener.call(this);
    };
    CommonResultItem.prototype.dataChanged = function () {
        _super.prototype.dataChanged.call(this);
        if (this.data) {
            var playerVo = this.data;
            this.img_icon.source = RES.getRes(playerVo.playerIcon);
            this.label_name.text = playerVo.playerName;
            this.label_nums.text = playerVo.playNums + "次";
            this.label_times.text = Global.formatTime(playerVo.playTimes, 2);
        }
    };
    CommonResultItem.prototype.complete = function () {
        this.removeEventListener(eui.UIEvent.COMPLETE, this.complete, this);
        var shape = this.drawCircle();
        this.addChildAt(shape, 0);
        this.img_icon.mask = shape;
    };
    CommonResultItem.prototype.drawCircle = function () {
        var shape = new egret.Shape();
        shape.graphics.beginFill(0xff0000 + Math.floor(Math.random() * 100) * (0xffffff / 100), 1);
        shape.graphics.lineStyle(1, 0xff0000 + Math.floor(Math.random() * 100) * (0xffffff / 100));
        shape.graphics.drawRoundRect(0, 0, 100, 100, 40, 40);
        shape.graphics.endFill();
        return shape;
    };
    return CommonResultItem;
}(BaseRenderer));
__reflect(CommonResultItem.prototype, "CommonResultItem");
