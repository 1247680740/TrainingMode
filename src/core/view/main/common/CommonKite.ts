/** 飞镖 */
class CommonKite extends eui.Component implements eui.UIComponent {

	public kit1: CommonKiteItem;
	public kit2: CommonKiteItem;
	public kit3: CommonKiteItem;
	public kit4: CommonKiteItem;
	public kit5: CommonKiteItem;
	public kit6: CommonKiteItem;

	private nameStr: string = "";
	private curArr: Array<number> = [];

	public constructor() {
		super();
		this.top = 321;
		this.horizontalCenter = 0;
		GlobalData.gamePos = this.bottom;
		GlobalData.gameScale = this.scaleX;
		this.addEventListener(eui.UIEvent.COMPLETE, this.loadComplete, this);
		this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.remove, this);
		this.skinName = "CommonKiteSkin";
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
	}


	private loadComplete(): void {
		for (let i: number = 1; i < 7; i++) {
			let kit: CommonKiteItem = this.getChildByName("kit" + i) as CommonKiteItem;
			kit.img_red.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touch, this);
			kit.setImgName("img" + i);
			kit.setHide();
		}
		this.showObj();
	}

	private showObj(): void {
		this.curArr = [];
		let arr: Array<number> = [1, 2, 3, 4, 5, 6];
		let ranLength: number = Math.floor(Math.random() * 6 + 1);
		while (this.curArr.length < ranLength) {
			let ranNum: number = arr[Math.floor((Math.random() * arr.length))];
			if (this.curArr.indexOf(ranNum) == -1) {
				this.curArr.push(ranNum);
			}
		}
		for (let i: number = 0; i < this.curArr.length; i++) {
			let index: number = this.curArr[i];
			let kit: CommonKiteItem = this.getChildByName("kit" + index) as CommonKiteItem;
			kit.setShow();
		}
	}

	private remove(): void {
		this.curArr = [];
		if (this.parent) {
			this.parent.removeChild(this);
		}
		for (let i: number = 1; i < 7; i++) {
			let kit: CommonKiteItem = this.getChildByName("kit" + i) as CommonKiteItem;
			kit.img_red.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touch, this);
		}
		this.removeEventListener(eui.UIEvent.COMPLETE, this.loadComplete, this);
		this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.remove, this);
	}

	private touch(event: egret.TouchEvent): void {
		let name: string = event.currentTarget.name;
		let index: number = parseInt(name.charAt(name.length - 1));
		if (this.curArr.indexOf(index) == -1) {
			return;
		}
		let kit: CommonKiteItem = this.getChildByName("kit" + index) as CommonKiteItem;
		kit.setScale();
		for (let i: number = 0; i < this.curArr.length; i++) {
			let forIndx: number = this.curArr[i];
			if (forIndx == index) {
				this.curArr.splice(i, 1);
			}
		}
		if (this.curArr.length <= 0) {
			// 发送事件到主页
			if (GlobalData.checkType) {
				game.AppFacade.getInstance().sendNotification(EventConfig.Event_UPDATE_TOUCH_Time, this.getName());
			} else {
				game.AppFacade.getInstance().sendNotification(EventConfig.Event_UPDATE_TOUCH_Task_Show, this.getName());
				game.AppFacade.getInstance().sendNotification(EventConfig.Event_UPDATE_TOUCH_Task, this.getName());
			}
			this.showObj();
		}
	}

	public setName(nameStr: string): void {
		this.nameStr = nameStr;
	}

	private getName(): number {
		return parseInt(this.nameStr.charAt(this.nameStr.length - 1));
	}

	public setPos(posNum: number): void {
		this.bottom = posNum;
	}

	public setScale(scaleNum: number): void {
		this.scaleX = scaleNum;
		this.scaleY = scaleNum;
	}
}