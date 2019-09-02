class CommonList extends eui.Component implements eui.UIComponent {

	public list_icon: eui.List;

	private tileLayout: eui.TileLayout;
	private collection: eui.ArrayCollection;
	private listIndex: number = 0;

	public constructor() {
		super();
		this.addEventListener(eui.UIEvent.COMPLETE, this.complete, this);
		this.skinName = "CommonListSkin";
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
	}

	private complete(): void {
		this.tileLayout = new eui.TileLayout();
		this.tileLayout.horizontalGap = 10;
		this.list_icon.layout = this.tileLayout;
		this.list_icon.itemRenderer = CommonListItem;
		this.list_icon.itemRendererSkinName = "CommonListItemSkin";
		this.collection = <eui.ArrayCollection>this.list_icon.dataProvider;
		if (!this.collection) this.collection = new eui.ArrayCollection();
		this.list_icon.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.selectIndex, this);
	}

	public resetListData(dataArr: Array<PlayerVO>, listIndex: number): void {  //dataArr: Array<string>
		this.collection.source = dataArr;
		this.list_icon.dataProvider = this.collection;
		this.listIndex = listIndex;
		if (dataArr.length <= 3) {
			this.tileLayout.requestedColumnCount = dataArr.length;
			this.tileLayout.requestedRowCount = 1;
		} else {
			this.tileLayout.requestedColumnCount = 3;
			this.tileLayout.requestedRowCount = 2;
		}
	}

	private selectIndex(e: eui.PropertyEvent): void {
		if (this.listIndex == 1) {
			P.getGameDataProxy().deleteLeftPlayer(this.list_icon.selectedItem);
		} else if (this.listIndex == 2) {
			P.getGameDataProxy().deleteCenterPlayer(this.list_icon.selectedItem);
		} else if (this.listIndex == 3) {
			P.getGameDataProxy().deleteRightPlayer(this.list_icon.selectedItem);
		}
		game.AppFacade.getInstance().sendNotification(EventConfig.Event_UPDATE_PLAYER);
	}
}