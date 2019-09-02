/** 表格 */
class CommonTable extends eui.Component implements eui.UIComponent {

	public touch_1: CommonTableItem;
	public touch_2: CommonTableItem;
	public touch_3: CommonTableItem;
	public touch_4: CommonTableItem;
	public touch_5: CommonTableItem;
	public touch_6: CommonTableItem;
	public touch_7: CommonTableItem;
	public touch_8: CommonTableItem;
	public touch_9: CommonTableItem;

	private nameStr: string = "";
	private curArr: Array<number> = [];

	private curTouchIndex: number = -1;
	public constructor() {
		super();
		this.top = 349;
		this.horizontalCenter = 0;
		GlobalData.gamePos = this.bottom;
		GlobalData.gameScale = this.scaleX;
		this.addEventListener(eui.UIEvent.COMPLETE, this.loadComplete, this);
		this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.remove, this);
		this.skinName = "CommonTableSkin";
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
	}

	private remove(event: egret.Event): void {
		if (this.parent) {
			this.parent.removeChild(this);
		}
		for (let i: number = 1; i < 10; i++) {
			let table: CommonTableItem = this.getChildByName("touch_" + i) as CommonTableItem;
			table.img_top.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touch, this);
		}
		this.removeEventListener(eui.UIEvent.COMPLETE, this.loadComplete, this);
		this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.remove, this);
	}

	private loadComplete(): void {
		for (let i: number = 1; i < 10; i++) {
			let table: CommonTableItem = this.getChildByName("touch_" + i) as CommonTableItem;
			table.img_top.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touch, this);
			table.setImg("table_gray_" + i + "_png", "table_red_" + i + "_png");
			table.setName("img_" + i);
			table.setHide();
		}
		this.initShowObj();
	}

	private initShowObj(): void {
		var typeArr: Array<Array<number>> = [[1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 9], [1, 3], [1, 7], [2, 8], [3, 9], [3, 7], [4, 6], [7, 9]];
		let ranNum: number = Math.floor(Math.random() * 9);
		this.curArr = typeArr[ranNum];
		for (let i: number = 0; i < this.curArr.length; i++) {
			let index: number = this.curArr[i];
			let checkTable: CommonTableItem = this.getChildByName("touch_" + index) as CommonTableItem;
			checkTable.setShow();
		}
	}

	public setName(nameStr: string): void {
		this.nameStr = nameStr;
	}

	public getName(): number {
		return parseInt(this.nameStr.charAt(this.nameStr.length - 1));
	}

	private touch(event: egret.Event): void {
		let name: string = event.currentTarget.name;
		let index: number = parseInt(name.substring(name.length - 1));
		if (index == this.curTouchIndex) {
			return;
		}
		this.curTouchIndex = index;
		let curItem: CommonTableItem = this.getChildByName("touch_" + index) as CommonTableItem;
		curItem.setScale();
		for (let i: number = 0; i < this.curArr.length; i++) {
			let targer: number = this.curArr[i];
			if (targer == index) {
				this.curArr.splice(i, 1);
			}
		}
		if (this.curArr.length <= 0) {
			this.curArr.splice(0, this.curArr.length);
			this.initShowObj();
			// 传递点击事件回主页
			if (GlobalData.checkType) {
				game.AppFacade.getInstance().sendNotification(EventConfig.Event_UPDATE_TOUCH_Time, this.getName());
			} else {
				game.AppFacade.getInstance().sendNotification(EventConfig.Event_UPDATE_TOUCH_Task_Show, this.getName());
				game.AppFacade.getInstance().sendNotification(EventConfig.Event_UPDATE_TOUCH_Task, this.getName());
			}
		}
	}

	public setPos(posNum: number): void {
		this.bottom = posNum;
	}

	public setScale(scaleNum: number): void {
		this.scaleX = scaleNum;
		this.scaleY = scaleNum;
	}
}