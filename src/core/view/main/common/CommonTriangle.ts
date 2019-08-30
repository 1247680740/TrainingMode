/** 三角形目标 */
class CommonTriangle extends eui.Component implements eui.UIComponent {

	public img_touch: eui.Image;
	private nameStr: string = "";
	public triangle: egret.tween.TweenGroup;

	public constructor() {
		super();
		this.horizontalCenter = 0;
		this.verticalCenter = 27;
		GlobalData.gamePos = this.bottom;
		GlobalData.gameScale = this.scaleX;
		this.addEventListener(eui.UIEvent.COMPLETE, this.loadComplete, this);
		this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.remove, this);
		this.skinName = "CommonTriangleSkin";
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}

	protected partRemoved(partName: string, instance: any): void {
		super.partRemoved(partName, instance);
		console.log("triangle remove");
	}

	protected childrenCreated(): void {
		super.childrenCreated();
	}

	private remove(event: egret.Event): void {
		if (this.parent) {
			this.parent.removeChild(this);
		}
		this.triangle.removeEventListener('complete', this.onTweenGroupComplete, this);
		this.img_touch.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touch, this)
		this.removeEventListener(eui.UIEvent.COMPLETE, this.loadComplete, this);
		this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.remove, this);
	}

	private loadComplete(): void {
		this.img_touch.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touch, this)
		this.triangle.addEventListener('complete', this.onTweenGroupComplete, this);
	}

	private onTweenGroupComplete():void{
		this.img_touch.touchEnabled = true;
		if(!GlobalData.checkType){
			game.AppFacade.getInstance().sendNotification(EventConfig.Event_UPDATE_TOUCH_Task, this.getName());
		}
	}

	private touch(): void {
		this.img_touch.touchEnabled = false;
		this.triangle.play(0);
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