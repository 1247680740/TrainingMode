/** 条形目标 */
class CommonLinear extends eui.Component implements eui.UIComponent {

	public img_touch: eui.Image;
	private nameStr: string = "";

	public constructor() {
		super();
		this.verticalCenter = 33;
		this.horizontalCenter = 0;
		GlobalData.gamePos = this.bottom;
		GlobalData.gameScale = this.scaleX;
		this.addEventListener(eui.UIEvent.COMPLETE, this.loadComplete, this);
		this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.remove, this);
		this.skinName = "CommonLinearSkin";
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
	}

	private loadComplete(): void {
		this.img_touch.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touch, this);
	}

	private remove(): void {
		if (this.parent) {
			this.parent.removeChild(this);
		}
		egret.Tween.removeTweens(this);
		this.img_touch.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touch, this);
		this.removeEventListener(eui.UIEvent.COMPLETE, this.loadComplete, this);
		this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.remove, this);
	}

	private touch(e: egret.Event): void {
		this.initShow();
		// 发送点击事件回主页
		if (GlobalData.checkType) {
			game.AppFacade.getInstance().sendNotification(EventConfig.Event_UPDATE_TOUCH_Time, this.getName());
		} else {
			game.AppFacade.getInstance().sendNotification(EventConfig.Event_UPDATE_TOUCH_Task_Show, this.getName());
		}
	}

	private initShow(): void {
		egret.Tween.removeTweens(this);
		let angle: number = Math.floor(Math.random() * 360);
		egret.Tween.get(this).to({ rotation: angle }, 300, egret.Ease.sineInOut).call(() => {
			egret.Tween.removeTweens(this);
		}, this);
		egret.Tween.get(this).to({ scaleX: 0.5, scaleY: 0.5 }, 100, egret.Ease.sineInOut).call(() => {
			egret.Tween.get(this).to({ scaleX: 1.5, scaleY: 1.5 }, 100, egret.Ease.sineInOut).call(() => {
				egret.Tween.get(this).to({ scaleX: 1, scaleY: 1 }, 100, egret.Ease.sineInOut).call(() => {
					egret.Tween.removeTweens(this);
					if (!GlobalData.checkType) {
						game.AppFacade.getInstance().sendNotification(EventConfig.Event_UPDATE_TOUCH_Task, this.getName());
					}
				}, this);
			}, this);
		}, this);;
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