// class CommonResultItem extends eui.Component implements eui.UIComponent {

// 	public img_icon: eui.Image;
// 	public label_name: eui.Label;
// 	public label_nums: eui.Label;
// 	public label_times: eui.Label;

// 	public constructor() {
// 		super();
// 		this.addEventListener(eui.UIEvent.COMPLETE, this.complete, this);
// 		this.skinName = "CommonResultItemSkin";
// 	}

// 	protected partAdded(partName: string, instance: any): void {
// 		super.partAdded(partName, instance);
// 	}


// 	protected childrenCreated(): void {
// 		super.childrenCreated();
// 	}

// 	private complete(): void {

// 	}

// 	public setPlayerData(playerVo:PlayerVO):void{
// 		this.img_icon.source = RES.getRes(playerVo.playerIcon);
// 		this.label_name.text = playerVo.playerName;
// 		this.label_nums.text = playerVo.playNums+"次";
// 		this.label_times.text = Global.formatTime(playerVo.playTimes,2)
// 	}

// }

class CommonResultItem extends BaseRenderer {

	public img_icon: eui.Image;
	public label_name: eui.Label;
	public label_nums: eui.Label;
	public label_times: eui.Label;

	public constructor() {
		super();
		this.addEventListener(eui.UIEvent.COMPLETE, this.complete, this);
		this.skinName = "CommonResultItemSkin";
	}

	protected initUI(): void {
		super.initUI();
	}

	protected initListener(): void {
		super.initListener();
	}

	public dataChanged() {
		super.dataChanged();
		if (this.data) {
			let playerVo:PlayerVO = this.data;
			this.img_icon.source = RES.getRes(playerVo.playerIcon);
			this.label_name.text = playerVo.playerName;
			this.label_nums.text = playerVo.playNums+"次";
			this.label_times.text = Global.formatTime(playerVo.playTimes,2);
		}
	}

	private complete():void{
		this.removeEventListener(eui.UIEvent.COMPLETE, this.complete, this);
		var shape:egret.Shape = this.drawCircle();
        this.addChildAt(shape,0);
		this.img_icon.mask = shape;
	}

	 private drawCircle():egret.Shape {
		var shape:egret.Shape = new egret.Shape();
		shape.graphics.beginFill(0xff0000 + Math.floor(Math.random() * 100) * (0xffffff / 100), 1);
        shape.graphics.lineStyle(1, 0xff0000 + Math.floor(Math.random() * 100) * (0xffffff / 100));
		shape.graphics.drawRoundRect(0,0,100,100,40,40);
		shape.graphics.endFill();
		return shape;
    }
}