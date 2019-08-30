module ui {
	export class CommonSettingItem extends eui.Component implements eui.UIComponent {

		public btn_reduce: eui.Image;
		public btn_add: eui.Image;
		public label_title: eui.Label;
		public label_num: eui.Label;

		public constructor() {
			super();
			this.addEventListener(eui.UIEvent.COMPLETE, this.complete, this);
			this.skinName = "CommonSettingItemSkin";
		}

		protected partAdded(partName: string, instance: any): void {
			super.partAdded(partName, instance);
		}


		protected childrenCreated(): void {
			super.childrenCreated();
		}

		private complete(): void {
			this.btn_reduce.addEventListener(egret.TouchEvent.TOUCH_TAP, this.reduce, this);
			this.btn_add.addEventListener(egret.TouchEvent.TOUCH_TAP, this.add, this);
		}

		public setBgData(reduceBg: string, addBg: string): void {
			this.btn_reduce.source = RES.getRes(reduceBg);
			this.btn_add.source = RES.getRes(addBg);
		}

		public setLabelData(titleStr: string): void {
			this.label_title.text = titleStr;
		}

		public setNum(str: string): void {
			this.label_num.text = str
		}

		public setBtnName(reduceName: string, addName: string): void {
			this.btn_reduce.name = reduceName;
			this.btn_add.name = addName;
		}

		private reduce(e: egret.TouchEvent): void {
			EffectUtils.playEffect(this.btn_reduce, 3);
			let reduceName: string = e.currentTarget.name;
			switch (reduceName) {
				case "cut1":
					if(GlobalData.timeOneData <= 1){
						return;
					}
					GlobalData.timeOneData-=1;
					this.label_num.text = GlobalData.timeOneData+'"';	
					break;
				case "cut2":
					if(GlobalData.timeTwoData <= 1){
						return;
					}
					GlobalData.timeTwoData-=1;
					this.label_num.text = GlobalData.timeTwoData+'"';
					break; 
				case "cut3":
					if(GlobalData.timeThreeData <= 1){
						return;
					}
					GlobalData.timeThreeData-=1;
					this.label_num.text = GlobalData.timeThreeData+"";
					break;
				case "cuta":
					if(GlobalData.taskOneData <=1){
						return;
					}
					GlobalData.taskOneData-=1;
					this.label_num.text = GlobalData.taskOneData+"";
					break;
				case "cutb":
					if(GlobalData.taskTwoData<=1){
						return;
					}
					GlobalData.taskTwoData-=1;
					this.label_num.text = GlobalData.taskTwoData+'"';
					break;
				case "cutc":
					if(GlobalData.taskThreeData<=1){
						return;
					}
					GlobalData.taskThreeData-=1;
					this.label_num.text = GlobalData.taskThreeData+"";
					break;
			}
		}

		private add(e: egret.TouchEvent): void {
			EffectUtils.playEffect(this.btn_add, 3);
			let addName: string = e.currentTarget.name;
			switch (addName) {
				case "add1":
					GlobalData.timeOneData+=1;
					this.label_num.text = GlobalData.timeOneData+'"';	
					break;
				case "add2":
					GlobalData.timeTwoData+=1;
					this.label_num.text = GlobalData.timeTwoData+'"';
					break;
				case "add3":
					GlobalData.timeThreeData+=1;
					this.label_num.text = GlobalData.timeThreeData+"";
					break;
				case "adda":
					GlobalData.taskOneData+=1;
					this.label_num.text = GlobalData.taskOneData+"";
					break;
				case "addb":
					GlobalData.taskTwoData+=1;
					this.label_num.text = GlobalData.taskTwoData+'"';
					break;
				case "addc":
					GlobalData.taskThreeData+=1;
					this.label_num.text = GlobalData.taskThreeData+"";
					break;
			}
		}
	}
}