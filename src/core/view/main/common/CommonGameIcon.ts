class CommonGameIcon extends eui.Component implements eui.UIComponent {

	public icon: eui.Image;
	public label_num: eui.Label;
	public label_time: eui.Label;
	public label_step: eui.Label;

	public constructor() {
		super();
		this.addEventListener(eui.UIEvent.COMPLETE, this.complete, this)
		this.skinName = "CommonGameIconSkin";
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
	}

	private complete(): void {
		console.log("load CommonGameIcon");
		// this.drawCircle();
	}

	public setIcon(sourceStr: string): void {
		if (sourceStr) {
			this.icon.source = RES.getRes(sourceStr);
		} else {
			this.icon.source = "";
		}
		this.drawCircle();
	}
	public setTimeTouchNum(touchNum: number): void {
		this.label_num.text = (touchNum < 10) ? "0" + touchNum : touchNum + "";;
	}

	public setTouchNum(curNum: number, totalNum: number): void {
		let curStr: string = (curNum < 10) ? "0" + curNum : curNum + "";
		let totalStr: string = (totalNum < 10) ? "0" + totalNum : totalNum + "";
		this.label_num.text = curStr + "/" + totalStr;
	}

	public setTimer(timerStr: string): void {
		this.label_time.text = timerStr;
	}


	public setStep(stepStr: string): void {
		this.label_step.text = "SET " + stepStr;
	}

	public getStepArr(): Array<number> {
		let arr: Array<string> = this.label_step.text.split("/");
		let startIndex: number = (arr[0].indexOf("T")) + 1;
		let endIndex: number = arr[0].length;
		let leftNum: number = parseInt(arr[0].substring(startIndex, endIndex));
		let rightNum: number = parseInt(arr[1]);
		let returnArr: Array<number> = [leftNum, rightNum];
		return returnArr;
	}

	private drawCircle(): void {
		var shape: egret.Shape = new egret.Shape();
		shape.graphics.beginFill(0xff0000 + Math.floor(Math.random() * 100) * (0xffffff / 100), 1);
		shape.graphics.lineStyle(1, 0xff0000 + Math.floor(Math.random() * 100) * (0xffffff / 100));
		shape.graphics.drawRoundRect(0, 0, 120, 125, 60, 62);
		shape.graphics.endFill();
		this.addChildAt(shape, 0);
		this.icon.mask = shape;
	}

}