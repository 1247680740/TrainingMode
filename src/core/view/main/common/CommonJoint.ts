class CommonJoint extends eui.Component implements eui.UIComponent {

	public img_1: eui.Image;
	public img_2: eui.Image;
	public img_3: eui.Image;
	public img_4: eui.Image;
	public img_5: eui.Image;
	public img_6: eui.Image;
	public img_7: eui.Image;
	public img_8: eui.Image;
	public img_9: eui.Image;
	public img_10: eui.Image;
	public img_11: eui.Image;
	public img_12: eui.Image;
	public img_13: eui.Image;

	private curArr: Array<number> = [];
	private nameStr: string = "";
	public constructor() {
		super();
		this.top = 342;
		this.horizontalCenter = 0;
		GlobalData.gamePos = this.bottom;
		GlobalData.gameScale = this.scaleX;
		this.addEventListener(eui.UIEvent.COMPLETE, this.loadComplete, this);
		this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.remove, this);
		this.skinName = "CommonJointSkin";
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
	}


	private loadComplete(): void {
		for (let i: number = 1; i < 14; i++) {
			let join: eui.Image = this.getChildByName("img_" + i) as eui.Image;
			join.visible = false;
			join.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touch, this);
		}
		this.showObj();
	}

	private showObj(): void {
		this.curArr = [];
		let ranLength: number = Math.floor(Math.random() * 4 + 1);
		while (this.curArr.length < ranLength) {
			let ranNum: number = Math.floor(Math.random() * 13 + 1);
			if (this.curArr.indexOf(ranNum) == -1) {
				this.curArr.push(ranNum);
			}
		}
		for (let i: number = 0; i < this.curArr.length; i++) {
			let index: number = this.curArr[i];
			let join: eui.Image = this.getChildByName("img_" + index) as eui.Image;
			this.show(join);
		}
	}

	private remove(): void {
		if (this.parent) {
			this.parent.removeChild(this);
		}
		for (let i: number = 1; i < 14; i++) {
			let join: eui.Image = this.getChildByName("img_" + i) as eui.Image;
			join.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touch, this);
		}
		this.removeEventListener(eui.UIEvent.COMPLETE, this.loadComplete, this);
		this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.remove, this);
	}

	public setName(nameStr: string): void {
		this.nameStr = nameStr;
	}

	private getName(): number {
		return parseInt(this.nameStr.charAt(this.nameStr.length - 1));
	}

	private touch(event: egret.TouchEvent): void {
		let name: string = event.currentTarget.name;
		let index: number = parseInt(name.substring(4));
		if (this.curArr.indexOf(index) != -1) {
			this.curArr.splice(this.curArr.indexOf(index), 1);
		} else {
			return;
		}
		let join: eui.Image = this.getChildByName("img_" + index) as eui.Image;
		this.scale(join);
		if (this.curArr.length <= 0) {
			if (GlobalData.checkType) {
				game.AppFacade.getInstance().sendNotification(EventConfig.Event_UPDATE_TOUCH_Time, this.getName());
			} else {
				game.AppFacade.getInstance().sendNotification(EventConfig.Event_UPDATE_TOUCH_Task_Show, this.getName());
				game.AppFacade.getInstance().sendNotification(EventConfig.Event_UPDATE_TOUCH_Task, this.getName());
			}
			this.showObj();
		}
	}

	private show(obj: egret.DisplayObject): void {
		egret.Tween.removeTweens(obj);
		obj.scaleX = 0;
		obj.scaleY = 0;
		obj.visible = true;
		egret.Tween.get(obj).to({ scaleX: 1.5, scaleY: 1.5 }, 300, egret.Ease.sineInOut).call(() => {
			egret.Tween.get(obj).to({ scaleX: 1, scaleY: 1 }, 300, egret.Ease.backInOut).call(() => {
				egret.Tween.removeTweens(obj);
			}, this);
		}, this);
	}

	private scale(obj: egret.DisplayObject): void {
		egret.Tween.removeTweens(obj);
		obj.scaleX = 1;
		obj.scaleY = 1;
		obj.visible = true;
		egret.Tween.get(obj).to({ scaleX: 0, scaleY: 0 }, 300, egret.Ease.sineInOut).call(() => {
			obj.visible = false;
			egret.Tween.removeTweens(obj);
		}, this);
	}

	public setPos(posNum: number): void {
		this.bottom = posNum;
	}

	public setScale(scaleNum: number): void {
		this.scaleX = scaleNum;
		this.scaleY = scaleNum;
	}
}