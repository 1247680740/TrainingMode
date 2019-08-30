class CommonGameForm extends eui.Component implements eui.UIComponent {

	public gameIcon: CommonGameIcon;

	public constructor() {
		super();
		this.addEventListener(eui.UIEvent.COMPLETE, this.complete, this)
		this.skinName = "CommonGameFormSkin";
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
	}


	private complete(): void {

	}

	public setPlayerData(playerVo: PlayerVO): void {
		this.gameIcon.setIcon(playerVo.playerIcon);
	}

	public setStep(curNum: number, totalNum: number): void {
		this.gameIcon.setStep(curNum + "/" + totalNum);
	}

	public setTimeStr(timeNum: number): void {
		this.gameIcon.setTimer(Global.formatTime(timeNum, 1));
	}

	public setTouchNum(curTouch: number, totalTouch: number): void {
		this.gameIcon.setTouchNum(curTouch, totalTouch);
	}

	public setIconPos(topNum: number): void {
		this.gameIcon.top = topNum;
	}

	public setIconShow(isShow:boolean):void{
		this.gameIcon.visible = isShow;
	}

	public getStepNum():Array<number>{
		return this.gameIcon.getStepArr();
	}

	public setGame(gameId: number, index: number): void {
		GlobalData.gameType = gameId;
		switch (gameId) {
			case 1: //战神
				let commonDiamond: CommmonDiamond = DisplayObjectPool.getInstance().pop(CommmonDiamond);
				commonDiamond.visible = true
				commonDiamond.setName("ball" + index);
				this.addChildAt(commonDiamond, 0);
				break;
			case 2: //花朵目标
				let commonFlower: CommonFlower = DisplayObjectPool.getInstance().pop(CommonFlower);
				commonFlower.visible = true;
				commonFlower.setName("ball" + index);
				this.addChildAt(commonFlower, 0);
				break;
			case 3: //心形目标
				let commonHeart: CommonHeart = DisplayObjectPool.getInstance().pop(CommonHeart);
				commonHeart.visible = true;
				commonHeart.setName("ball" + index);
				this.addChildAt(commonHeart, 0);
				this.setIconPos(471);
				break;
			case 4: //方形表格
				let commonTable: CommonTable = DisplayObjectPool.getInstance().pop(CommonTable);
				commonTable.visible = true;
				commonTable.setName("ball" + index);
				this.addChildAt(commonTable, 0);
				break;
			case 5: //圆形目标
				let commonBulls: CommonBulls = DisplayObjectPool.getInstance().pop(CommonBulls);
				commonBulls.visible = true;
				commonBulls.setName("ball" + index);
				this.addChildAt(commonBulls, 0);
				break;
			case 6: //条形目标
				let commonLinear: CommonLinear = DisplayObjectPool.getInstance().pop(CommonLinear);
				commonLinear.visible = true;
				commonLinear.setName("ball" + index);
				this.addChildAt(commonLinear, 0);
				break;
			case 7: //漂浮目标点
				let commonDarts: CommonDarts = DisplayObjectPool.getInstance().pop(CommonDarts);
				commonDarts.visible = true;
				commonDarts.setName("ball" + index);
				this.addChildAt(commonDarts, 0);
				break;
			case 8:  //三角菱形
				let commonTriangle: CommonTriangle = DisplayObjectPool.getInstance().pop(CommonTriangle);
				commonTriangle.visible = true;
				commonTriangle.setName("ball" + index);
				this.addChildAt(commonTriangle, 0);
				break;
			case 9: //哑铃
				let commonDumbbel: CommonDumbbel = DisplayObjectPool.getInstance().pop(CommonDumbbel);
				commonDumbbel.visible = true;
				commonDumbbel.setName("ball" + index);
				this.addChildAt(commonDumbbel, 0);
				break;
			case 10: //竖墙
				let commonRoad: CommonRoad = DisplayObjectPool.getInstance().pop(CommonRoad);
				commonRoad.visible = true;
				commonRoad.setName("ball" + index);
				this.addChildAt(commonRoad, 0);
				break;
			case 11: //雨滴
				let commonRain: CommonRain = DisplayObjectPool.getInstance().pop(CommonRain);
				commonRain.visible = true;
				commonRain.setName("ball" + index);
				this.addChildAt(commonRain, 0);
				this.setIconPos(944);
				break;
			case 12: //石头目标
				let commonStone: CommonStone = DisplayObjectPool.getInstance().pop(CommonStone);
				commonStone.visible = true;
				commonStone.setName("ball" + index);
				this.addChildAt(commonStone, 0);
				break;
			case 13: //飞镖
				let commonKite: CommonKite = DisplayObjectPool.getInstance().pop(CommonKite);
				commonKite.visible = true;
				commonKite.setName("ball" + index);
				this.addChildAt(commonKite, 0);
				break;
			case 14: //道路
				let commonTileMap: CommonTileMap = DisplayObjectPool.getInstance().pop(CommonTileMap);
				commonTileMap.visible = true;
				commonTileMap.setName("ball" + index);
				this.addChildAt(commonTileMap, 0);
				break;
			case 15: //人体骨骼
				let commonJoint: CommonJoint = DisplayObjectPool.getInstance().pop(CommonJoint);
				commonJoint.visible = true;
				commonJoint.setName("ball" + index);
				this.addChildAt(commonJoint, 0);
				break;
		}
	}
}