class CommonStoneItem extends eui.Component implements eui.UIComponent {

	public img_gray: eui.Image;
	public img_red: eui.Image;

	public constructor() {
		super();
		this.addEventListener(eui.UIEvent.COMPLETE, this.loadComplete, this);
		this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.remove, this);
		this.skinName = "CommonStoneItemSkin";
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
	}

	private loadComplete(): void {

	}

	private remove(): void {
		if (this.parent) {
			this.parent.removeChild(this);
		}
		this.removeEventListener(eui.UIEvent.COMPLETE, this.loadComplete, this);
		this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.remove, this);
	}

	public setHide(): void {
		this.img_red.visible = false;
	}

	public setShow(): void {
		egret.Tween.removeTweens(this.img_red);
		this.img_red.visible = true;
		this.img_red.alpha = 0;
		this.img_red.scaleX = 0;
		this.img_red.scaleY = 0;
		egret.Tween.get(this.img_red).to({ alpha: 1, scaleX: 1, scaleY: 1 }, 500, egret.Ease.sineInOut).call(() => {
			egret.Tween.removeTweens(this.img_red);
		}, this);
	}

	public setScale(touchIndex: number): void {
		egret.Tween.removeTweens(this.img_red);
		this.img_red.visible = true;
		this.img_red.alpha = 1;
		this.img_red.scaleX = 1;
		this.img_red.scaleY = 1;
		egret.Tween.get(this.img_red).to({ alpha: 0, scaleX: 0, scaleY: 0 }, 500).call(() => {
			this.img_red.visible = false;
			egret.Tween.removeTweens(this.img_red);
			if (!GlobalData.checkType) {
				game.AppFacade.getInstance().sendNotification(EventConfig.Event_UPDATE_TOUCH_Task, touchIndex);
			}
		}, this);
	}

	public setImgName(nameStr: string): void {
		this.img_red.name = nameStr;
	}
}