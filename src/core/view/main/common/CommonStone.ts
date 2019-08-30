/** 石头目标 */
class CommonStone extends eui.Component implements eui.UIComponent {

	public stone1: CommonStoneItem;
	public stone2: CommonStoneItem;
	public stone3: CommonStoneItem;
	public stone4: CommonStoneItem;
	public stone5: CommonStoneItem;
	public stone6: CommonStoneItem;
	public stone7: CommonStoneItem;
	public stone8: CommonStoneItem;
	public stone9: CommonStoneItem;

	private curIndex: number = 0;
	private nameStr: string = "";
	private showID: number = 0;
	public constructor() {
		super();
		this.top = 347;
		this.horizontalCenter = 0;
		GlobalData.gamePos = this.bottom;
		GlobalData.gameScale = this.scaleX;
		this.addEventListener(eui.UIEvent.COMPLETE, this.loadComplete, this);
		this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.remove, this);
		this.skinName = "CommonStoneSkin";
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
	}

	private loadComplete(): void {
		let ranNum: number = Math.floor(Math.random() * 9 + 1);
		for (let i: number = 1; i < 10; i++) {
			let stone: CommonStoneItem = this.getChildByName("stone" + i) as CommonStoneItem;
			stone.setImgName("img" + i);
			stone.img_red.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touch, this);
			if (i == ranNum) {
				stone.setShow();
			} else {
				stone.setHide();
			}
		}
	}

	private touch(event: egret.TouchEvent): void {
		let name: string = event.currentTarget.name;
		let index: number = parseInt(name.charAt(name.length - 1));
		if (index == this.curIndex) {
			return;
		}
		this.curIndex = index;
		this.getRanNum();
		let stone: CommonStoneItem = this.getChildByName("stone" + index) as CommonStoneItem;
		let nextStone: CommonStoneItem = this.getChildByName("stone" + this.showID) as CommonStoneItem;
		stone.setScale(this.getName());
		nextStone.setShow();
		// 向主页发送事件
		if (GlobalData.checkType) {
			game.AppFacade.getInstance().sendNotification(EventConfig.Event_UPDATE_TOUCH_Time, this.getName());
		} else {
			game.AppFacade.getInstance().sendNotification(EventConfig.Event_UPDATE_TOUCH_Task_Show, this.getName());
		}
	}

	private getRanNum(): void {
		let returnRum: number = Math.floor(Math.random() * 9 + 1);
		if (returnRum == this.curIndex) {
			this.getRanNum()
		} else {
			this.showID = returnRum;
		}
	}

	public setName(nameStr: string): void {
		this.nameStr = nameStr;
	}

	private getName(): number {
		return parseInt(this.nameStr.charAt(this.nameStr.length - 1));
	}

	private remove(): void {
		this.curIndex = 0;
		this.showID = 0;
		for (let i: number = 1; i < 10; i++) {
			let stone: CommonStoneItem = this.getChildByName("stone" + i) as CommonStoneItem;
			stone.img_red.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touch, this);
		}
		if (this.parent) {
			this.parent.removeChild(this);
		}
		this.removeEventListener(eui.UIEvent.COMPLETE, this.loadComplete, this);
		this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.remove, this);
	}

	public setPos(posNum: number): void {
		this.bottom = posNum;
	}

	public setScale(scaleNum: number): void {
		this.scaleX = scaleNum;
		this.scaleY = scaleNum;
	}
}