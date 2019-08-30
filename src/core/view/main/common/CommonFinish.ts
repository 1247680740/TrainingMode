class CommonFinish extends eui.Component implements eui.UIComponent {

	public img_icon: eui.Image;
	public label_name: eui.Label;
	public label_tagOne: eui.Label;
	public label_tagType: eui.Label;
	public label_tagTwo: eui.Label;

	public constructor() {
		super();
		this.addEventListener(eui.UIEvent.COMPLETE, this.complete, this);
		this.skinName = "CommonFinishSkin";
	}

	private complete(): void {
		this.drawCircle();
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
	}

	public setPlayer(playerVo: PlayerVO): void {
		this.img_icon.source = RES.getRes(playerVo.playerIcon);
		this.label_name.text = playerVo.playerName;
		if (GlobalData.checkType) {
			this.label_tagType.text = "完成次数";
			this.label_tagOne.text = Global.formatTime(playerVo.playTimes, 2);
			this.label_tagTwo.text = playerVo.playNums + "";
		} else {
			this.label_tagType.text = "完成时间";
			this.label_tagOne.text = playerVo.playNums + "次";
			this.label_tagTwo.text = Global.formatTime(playerVo.playTimes, 2);;
		}
	}

	private drawCircle(): void {
		var shape: egret.Shape = new egret.Shape();
		shape.graphics.beginFill(0xff0000 + Math.floor(Math.random() * 100) * (0xffffff / 100), 1);
		shape.graphics.lineStyle(1, 0xff0000 + Math.floor(Math.random() * 100) * (0xffffff / 100));
		shape.graphics.drawRoundRect(115, 0, 170, 170, 85, 85);
		shape.graphics.endFill();
		this.addChildAt(shape, 0);
		this.img_icon.mask = shape;
	}
}