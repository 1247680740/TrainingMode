class CommonListItem extends eui.ItemRenderer {

    public img_icon: eui.Image;

    public constructor() {
        super();
    }

    public dataChanged() {
        super.dataChanged();
        if (this.data) {
            this.drawCircle();
            this.img_icon.source = RES.getRes(this.data.playerIcon);
        }
    }

    private drawCircle(): void {
        var shape: egret.Shape = new egret.Shape();
        shape.graphics.beginFill(0xff0000 + Math.floor(Math.random() * 100) * (0xffffff / 100), 1);
        shape.graphics.lineStyle(1, 0xff0000 + Math.floor(Math.random() * 100) * (0xffffff / 100));
        shape.graphics.drawRoundRect(0, 0, 85, 85, 32, 32);
        shape.graphics.endFill();
        this.addChildAt(shape,0);
       this.img_icon.mask = shape;
    }
}