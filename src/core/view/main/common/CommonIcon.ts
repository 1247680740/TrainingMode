module ui {
	export class CommonIcon extends eui.Component implements eui.UIComponent {

		public img_icon: eui.Image;
		public label_name: eui.Label;

		public constructor() {
			super();
			this.addEventListener(eui.UIEvent.COMPLETE, this.complete, this)
			this.skinName = "CommonIconSkin";
		}

		protected partAdded(partName: string, instance: any): void {
			super.partAdded(partName, instance);
		}


		protected childrenCreated(): void {
			super.childrenCreated();
		}

		private complete(): void {
			console.log("load CommonIcon");
			this.drawCircle();
		}

		public setIconData(playerData: PlayerVO): void {
			this.label_name.text = playerData.playerName;
			this.img_icon.source = RES.getRes(playerData.playerIcon);
		}

		private drawCircle(): void {
			var shape: egret.Shape = new egret.Shape();
			shape.graphics.beginFill(0xff0000 + Math.floor(Math.random() * 100) * (0xffffff / 100), 1);
			shape.graphics.lineStyle(1, 0xff0000 + Math.floor(Math.random() * 100) * (0xffffff / 100));
			shape.graphics.drawRoundRect(0, 0, 170, 170, 85, 85);
			shape.graphics.endFill();
			this.addChildAt(shape, 0);
			this.img_icon.mask = shape;
		}
	}
}