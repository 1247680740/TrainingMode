/** 花朵 */
class CommonFlower extends eui.Component implements eui.UIComponent {

	private nameStr: string = "";

	public img_flower1: eui.Image;
	public img_flower2: eui.Image;
	public img_flower3: eui.Image;
	public img_flower4: eui.Image;
	public img_touch: eui.Image;

	public flower: egret.tween.TweenGroup;
	public flower2: egret.tween.TweenGroup;
	public flower3: egret.tween.TweenGroup;
	public flower4: egret.tween.TweenGroup;

	public constructor() {
		super();
		this.horizontalCenter = 0;
		this.verticalCenter = 47;
		GlobalData.gamePos = this.bottom;
		GlobalData.gameScale = this.scaleX;
		this.addEventListener(eui.UIEvent.COMPLETE, this.createCompleteEvent, this);
		this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.remove, this);
		this.skinName = "CommonFlowerSkin";
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}

	protected partRemoved(partName: string, instance: any): void {
		super.partRemoved(partName, instance);
		console.log("flower remove");
	}

	protected childrenCreated(): void {
		super.childrenCreated();
	}

	private remove(event: egret.Event): void {
		if (this.parent) {
			this.parent.removeChild(this);
		}
		this.removeEventListener(eui.UIEvent.COMPLETE, this.createCompleteEvent, this);
		this.img_touch.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touCh, this);
		this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.remove, this);
	}

	private createCompleteEvent(): void {
		this.img_touch.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touCh, this);
		this.flower.addEventListener('complete', this.onTweenGroupComplete, this);
	}

	private onTweenGroupComplete(): void {
		this.img_touch.touchEnabled = true;
		if (!GlobalData.checkType) {
			game.AppFacade.getInstance().sendNotification(EventConfig.Event_UPDATE_TOUCH_Task, this.getName());
		}
	}

	public touCh(): void {
		this.img_touch.touchEnabled = false;
		this.flower.play(0);
		this.flower2.play(0);
		this.flower3.play(0);
		this.flower4.play(0);
		if (GlobalData.checkType) {
			game.AppFacade.getInstance().sendNotification(EventConfig.Event_UPDATE_TOUCH_Time, this.getName());
		} else {
			game.AppFacade.getInstance().sendNotification(EventConfig.Event_UPDATE_TOUCH_Task_Show, this.getName());
		}
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