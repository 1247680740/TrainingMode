class CommonTileMap extends eui.Component implements eui.UIComponent {

	public img_circle: eui.Image;
	public img_finish: eui.Image;
	public circle: egret.tween.TweenGroup;

	private nameStr: string = "";
	private bgSpeed: number = 2;

	public constructor() {
		super();
		this.horizontalCenter = 0;
		this.bottom = 0;
		GlobalData.gamePos = this.bottom;
		GlobalData.gameScale = this.scaleX;
		this.addEventListener(eui.UIEvent.COMPLETE, this.loadComplete, this);
		this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.remove, this);
		this.skinName = "CommonTileMapSkin";
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
	}

	private loadComplete(): void {
		this.removeEventListener(eui.UIEvent.COMPLETE, this.loadComplete, this);
		this.img_circle.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touch, this);
		this.circle.addEventListener('complete', this.onTweenGroupComplete, this);
		this.img_finish.visible = false;
		this.img_circle.visible = true;
	}

	private touch(event: egret.TouchEvent): void {
		this.img_circle.touchEnabled = false;
		this.circle.play(0);
		if (GlobalData.checkType) {
			game.AppFacade.getInstance().sendNotification(EventConfig.Event_UPDATE_TOUCH_Time, this.getName());
		} else {
			game.AppFacade.getInstance().sendNotification(EventConfig.Event_UPDATE_TOUCH_Task_Show, this.getName());
		}
	}

	private onTweenGroupComplete(): void {
		this.img_circle.touchEnabled = true;
		if (!GlobalData.checkType) {
			if (this.img_finish.visible) {
				egret.setTimeout(() => {
					game.AppFacade.getInstance().sendNotification(EventConfig.Event_UPDATE_TOUCH_Task, this.getName());
				}, this, 1000);
			} else {
				game.AppFacade.getInstance().sendNotification(EventConfig.Event_UPDATE_TOUCH_Task, this.getName());
			}
		}
	}

	public setFinishShow(isShow: boolean): void {
		this.img_finish.visible = isShow;
		this.img_circle.visible = !isShow;
	}

	private remove(): void {
		if (this.parent) {
			this.parent.removeChild(this);
		}
		this.img_circle.removeEventListener('complete', this.onTweenGroupComplete, this);
		this.img_circle.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touch, this);
		this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.remove, this);
	}

	private createMoive(): void {
		let moive: egret.MovieClip = Global.createMoive("test", "test", 0, 0);
		this.addChildAt(moive, 0);
		moive.play(-1);
	}


	public setName(nameStr: string): void {
		this.nameStr = nameStr;
	}

	public getName(): number {
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