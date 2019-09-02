/** 雨滴 */
class CommonRain extends eui.Component implements eui.UIComponent {

	public img_rain1: eui.Image;
	public img_rain2: eui.Image;
	private nameStr: string = "";
	private dropTimer: egret.Timer;

	private rain_left: eui.Image;
	private rain_right: eui.Image;
	public constructor() {
		super();
		this.top = 0;
		this.horizontalCenter = 0;
		this.addEventListener(eui.UIEvent.COMPLETE, this.loadComplete, this);
		this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.remove, this);
		this.skinName = "CommonRainSkin";
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
	}

	private loadComplete(): void {
		if (!this.dropTimer) {
			this.dropTimer = new egret.Timer(1500);
		}
		this.dropTimer.addEventListener(egret.TimerEvent.TIMER, () => {
			this.rain_left = this.createRain();
			this.rain_left.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touch, this);
			this.rain_left.horizontalCenter = -125;
			this.tweenObj(this.rain_left);
			setTimeout(() => {
				this.rain_right = this.createRain();
				this.rain_right.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touch, this);
				this.rain_right.horizontalCenter = 125;
				this.tweenObj(this.rain_right);
			}, 1000);
		}, this);
		this.dropTimer.start();
	}

	private createRain(): eui.Image {
		let commonBall: eui.Image = DisplayObjectPool.getInstance().pop(eui.Image);
		commonBall.source = RES.getRes("commonRain_png");
		commonBall.width = 119;
		commonBall.height = 195;
		commonBall.y = -195;
		commonBall.touchEnabled = true;
		this.addChildAt(commonBall, 0);
		return commonBall;
	}

	private remove(): void {
		if (this.parent) {
			this.parent.removeChild(this);
		}
		if (this.dropTimer) {
			this.dropTimer.stop();
			this.dropTimer = null;
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

	private tweenObj(obj: egret.DisplayObject): void {
		egret.Tween.removeTweens(obj);
		egret.Tween.get(obj).to({ y: 1128 }, 4000, egret.Ease.sineIn).call(() => {
			egret.Tween.removeTweens(obj);
			if (obj.parent) {
				obj.parent.removeChild(obj);
			}
		}, this);;
	}

	private touch(event: egret.TouchEvent): void {
		let curTarget: eui.Image = event.currentTarget;
		if (this.hitTest(this.img_rain1, curTarget) || this.hitTest(this.img_rain2, curTarget)) {
			egret.Tween.removeTweens(curTarget);
			egret.Tween.get(curTarget).to({ scaleX: 2, scaleY: 2, alpha: 0 }, 500, egret.Ease.sineIn).call(() => {
				egret.Tween.removeTweens(curTarget);
				if (curTarget.parent) {
					curTarget.parent.removeChild(curTarget);
				}
				if (!GlobalData.checkType) {
					game.AppFacade.getInstance().sendNotification(EventConfig.Event_UPDATE_TOUCH_Task, this.getName());
				}
			}, this);
			// 向主页发送事件
			if (GlobalData.checkType) {
				game.AppFacade.getInstance().sendNotification(EventConfig.Event_UPDATE_TOUCH_Time, this.getName());
			} else {
				game.AppFacade.getInstance().sendNotification(EventConfig.Event_UPDATE_TOUCH_Task_Show, this.getName());
			}
		} else {
			return;
		}
	}

	private hitTest(obj1: egret.DisplayObject, obj2: egret.DisplayObject): boolean {
		if (obj1 == undefined) { return false; }
		if (obj2 == undefined) { return false; }
		var rect1: egret.Rectangle = obj1.getBounds();
		var rect2: egret.Rectangle = obj2.getBounds();
		rect1.x = obj1.x;
		rect1.y = obj1.y;
		rect2.x = obj2.x;
		rect2.y = obj2.y;
		return rect1.intersects(rect2);
	}

	public setPos(posNum: number): void {
		this.bottom = posNum;
	}

	public setScale(scaleNum: number): void {
		this.scaleX = scaleNum;
		this.scaleY = scaleNum;
	}

}