/** 哑铃 */
class CommonDumbbel extends eui.Component implements eui.UIComponent {

	public img_touch: eui.Image;
	public dumbbel:egret.tween.TweenGroup;
	private nameStr: string = "";

	public constructor() {
		super();
		this.horizontalCenter = 0;
		this.verticalCenter = 56;
		GlobalData.gamePos = this.bottom;
		GlobalData.gameScale = this.scaleX;
		this.addEventListener(eui.UIEvent.COMPLETE, this.loadComplete, this);
		this.skinName = "CommonDumbbelSkin";
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
	}

	private loadComplete(): void {
		this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touch, this);
		this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.remove, this);
		this.dumbbel.addEventListener('complete', this.onTweenGroupComplete, this);
	}

	private onTweenGroupComplete():void{
		this.img_touch.touchEnabled = true;
		if(!GlobalData.checkType){
			game.AppFacade.getInstance().sendNotification(EventConfig.Event_UPDATE_TOUCH_Task, this.getName());
		}
	}

	public setName(nameStr: string): void {
		this.nameStr = nameStr;
	}

	private getName(): number {
		return parseInt(this.nameStr.charAt(this.nameStr.length - 1));
	}

	private remove(): void {
		if (this.parent) {
			this.parent.removeChild(this);
		}
		this.dumbbel.removeEventListener('complete', this.onTweenGroupComplete, this);
		this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touch, this);
		this.removeEventListener(eui.UIEvent.COMPLETE, this.loadComplete, this);
		this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.remove, this);
	}

	private touch(event: egret.TouchEvent): void {
		this.img_touch.touchEnabled = false;
		this.dumbbel.play(0);
		// 传递事件回主页
		if (GlobalData.checkType) {
			game.AppFacade.getInstance().sendNotification(EventConfig.Event_UPDATE_TOUCH_Time, this.getName());
		} else {
			game.AppFacade.getInstance().sendNotification(EventConfig.Event_UPDATE_TOUCH_Task_Show, this.getName());
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