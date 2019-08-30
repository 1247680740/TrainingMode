/**
  * 调用原生api方法汇总
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved. 
  * 使用方法如：Global.setCookie()
  */

module NativeApi {

	// 储存数据需要key和value，都必须是字符串
	export function setLocalData(key: string, value: string): void {
		egret.localStorage.setItem(key, value);
	}

	// 读取数据
	export function getLocalData(key: string): string {
		return egret.localStorage.getItem(key);
	}

	// 删除数据
	export function deleteLocalData(key: string): void {
		egret.localStorage.removeItem(key);
	}

	// 将所有数据清空
	export function clearLocalData(): void {
		egret.localStorage.clear();
	}

	//调用麦克风  
	export function getMic(): void {
		//getUserMedia API 大部分手机不支持，所以暂不考虑
	}

	//调用canvas截屏
	export function getScreen(): void {

	}

	//调用打电话功能
	export function callPhone(telNum: number): void {
		window.open("tel:" + telNum, '_self')
	}

	//调用发短信功能
	export function sendMessage(telNum: number): void {
		window.open("sms:" + telNum, '_self')
	}

	//获取当前地址
	export function getCurUrl(): string {
		return window.location.href;
	}

	//当前游戏角度
	export var curAngle: number = parseInt(window["orientation"] + "");

	// 监听Native发送过来的消息
	export function receiveMessage(): void {
		egret.ExternalInterface.addCallback("sendToJS", function (message: string) {
			if (message.indexOf("KEYCODE_BACK") != -1) {  //返回按钮
				// 返回按钮，判断是否可以返回
				// switch () {  //GlobalData.pageIndex
				// 	case 0: //主页
				// 		// NativeApi.quitGame();
				// 		break;
				// 	case 1: //游戏界面
				// 		console.log("游戏中，不可退出");
				// 		break;
				// 	case 2: //设置界面
				// 		// game.AppFacade.getInstance().sendNotification(NoficationConfig.CLOSE_SETUP);
				// 		break;
				// 	case 3: //暂停界面
				// 		// game.AppFacade.getInstance().sendNotification(NoficationConfig.CLOSE_PAUSE);
				// 		// game.AppFacade.getInstance().sendNotification(DataNoficationConfig.RESET_GAMETIMER);
				// 		break;
				// 	case 4://成绩界面
				// 		game.AppFacade.getInstance().sendNotification(NoficationConfig.CLOSE_RESULT);
				// 		game.AppFacade.getInstance().sendNotification(NoficationConfig.CLOSE_GAMESCENE);
				// 		break;
				// }
			}
		});

		egret.ExternalInterface.addCallback("sendData", function(message:string){
			let obj:Object = JSON.parse(message);
			if(obj.hasOwnProperty("actMsg")){
				GlobalData.androidArr = [];
				let arr:Array<Object> = obj["actMsg"];
				for(let i: number =0; i<arr.length; i++){
					let objItem:Object = arr[i];
					let androidVo: AndroidVO = new AndroidVO();
					androidVo.id = objItem["id"];
					androidVo.type = objItem["type"];
					androidVo.num = objItem["num"];
					androidVo.actId = objItem["actId"];
					androidVo.actType = objItem["actType"];
					GlobalData.androidArr.push(androidVo);
				}
			}else {
				return;
			}
		});
	}


}