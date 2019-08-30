/** 战神 */
class CommmonDiamond extends eui.Component implements eui.UIComponent {

	public img_touch: eui.Image;
	private nameStr: string = "";
	private ani: egret.MovieClip;

	public constructor() {
		super();
		this.horizontalCenter = 0;
		this.bottom = 0;
		GlobalData.gamePos = this.bottom;
		GlobalData.gameScale = this.scaleX;
		this.addEventListener(eui.UIEvent.COMPLETE, this.loadComplete, this);
		this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.remove, this);
		this.skinName = "CommmonDiamondSkin";
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
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
		this.ani = Global.createMoive("ani_diamon", "Battle-rope", -163, -55);
		this.addChild(this.ani);
		this.ani.visible = false;
		this.ani.addEventListener(egret.Event.COMPLETE, (e: egret.Event) => {
			this.img_touch.touchEnabled = true;
			this.img_touch.visible = true;
			this.ani.visible = false;
			if (!GlobalData.checkType) {
				game.AppFacade.getInstance().sendNotification(EventConfig.Event_UPDATE_TOUCH_Task, this.getName());
			}
		}, this);

	}

	private touch(): void {
		this.img_touch.visible = false;
		this.ani.visible = true;
		this.ani.gotoAndPlay(1, 1);
		this.img_touch.touchEnabled = false;
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