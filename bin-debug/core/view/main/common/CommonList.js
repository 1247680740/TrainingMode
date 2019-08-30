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
var CommonList = (function (_super) {
    __extends(CommonList, _super);
    function CommonList() {
        var _this = _super.call(this) || this;
        _this.listIndex = 0;
        _this.addEventListener(eui.UIEvent.COMPLETE, _this.complete, _this);
        _this.skinName = "CommonListSkin";
        return _this;
    }
    CommonList.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    CommonList.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    CommonList.prototype.complete = function () {
        this.tileLayout = new eui.TileLayout();
        this.tileLayout.horizontalGap = 10;
        this.list_icon.layout = this.tileLayout;
        this.list_icon.itemRenderer = CommonListItem;
        this.list_icon.itemRendererSkinName = "CommonListItemSkin";
        this.collection = this.list_icon.dataProvider;
        if (!this.collection)
            this.collection = new eui.ArrayCollection();
        this.list_icon.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.selectIndex, this);
    };
    CommonList.prototype.resetListData = function (dataArr, listIndex) {
        this.collection.source = dataArr;
        this.list_icon.dataProvider = this.collection;
        this.listIndex = listIndex;
        if (dataArr.length <= 3) {
            this.tileLayout.requestedColumnCount = dataArr.length;
            this.tileLayout.requestedRowCount = 1;
        }
        else {
            this.tileLayout.requestedColumnCount = 3;
            this.tileLayout.requestedRowCount = 2;
        }
    };
    CommonList.prototype.selectIndex = function (e) {
        console.log(this.list_icon.selectedItem, this.list_icon.selectedIndex);
        if (this.listIndex == 1) {
            P.getGameDataProxy().deleteLeftPlayer(this.list_icon.selectedItem);
        }
        else if (this.listIndex == 2) {
            P.getGameDataProxy().deleteCenterPlayer(this.list_icon.selectedItem);
        }
        else if (this.listIndex == 3) {
            P.getGameDataProxy().deleteRightPlayer(this.list_icon.selectedItem);
        }
        game.AppFacade.getInstance().sendNotification(EventConfig.Event_UPDATE_PLAYER);
    };
    return CommonList;
}(eui.Component));
__reflect(CommonList.prototype, "CommonList", ["eui.UIComponent", "egret.DisplayObject"]);
