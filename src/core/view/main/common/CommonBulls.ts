/** 圆形目标 */
class CommonBulls extends eui.Component implements eui.UIComponent {

	public img_touch: eui.Image;
	private nameStr: string = "";

	public constructor() {
		super();
		this.horizontalCenter = 0;
		this.verticalCenter = 28;
		GlobalData.gamePos = this.bottom;
		GlobalData.gameScale = this.scaleX;
		this.addEventListener(eui.UIEvent.COMPLETE, this.loadComplete, this);
		this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.remove, this);
		this.skinName = "CommonBullsSkin";
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}

	protected partRemoved(partName: string, instance: any): void {
		super.partRemoved(partName, instance);
		console.log("bulls remove");
	}


	protected childrenCreated(): void {
		super.childrenCreated();
	}

	private remove(event: egret.Event): void {
		if (this.parent) {
			this.parent.removeChild(this);
		}
		egret.Tween.removeTweens(this);
		this.img_touch.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touch, this)
		this.removeEventListener(eui.UIEvent.COMPLETE, this.loadComplete, this);
		this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.remove, this);
	}

	private loadComplete(): void {
		this.img_touch.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touch, this)
	}

	private touch(): void {
		this.img_touch.touchEnabled = false;
		egret.Tween.removeTweens(this);
		egret.Tween.get(this).to({ scaleX: 0, scaleY: 0, alpha: 0 }, 200, egret.Ease.sineIn).call(() => {
			egret.Tween.get(this).to({ scaleX: 1, scaleY: 1, alpha: 1 }, 200, egret.Ease.backInOut).call(() => {
				this.img_touch.touchEnabled = true;
				if (!GlobalData.checkType) {
					game.AppFacade.getInstance().sendNotification(EventConfig.Event_UPDATE_TOUCH_Task, this.getName());
				}
			}, this);
		}, this);
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