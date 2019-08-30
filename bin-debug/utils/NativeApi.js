/**
  * 调用原生api方法汇总
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  * 使用方法如：Global.setCookie()
  */
var NativeApi;
(function (NativeApi) {
    // 储存数据需要key和value，都必须是字符串
    function setLocalData(key, value) {
        egret.localStorage.setItem(key, value);
    }
    NativeApi.setLocalData = setLocalData;
    // 读取数据
    function getLocalData(key) {
        return egret.localStorage.getItem(key);
    }
    NativeApi.getLocalData = getLocalData;
    // 删除数据
    function deleteLocalData(key) {
        egret.localStorage.removeItem(key);
    }
    NativeApi.deleteLocalData = deleteLocalData;
    // 将所有数据清空
    function clearLocalData() {
        egret.localStorage.clear();
    }
    NativeApi.clearLocalData = clearLocalData;
    //调用麦克风  
    function getMic() {
        //getUserMedia API 大部分手机不支持，所以暂不考虑
    }
    NativeApi.getMic = getMic;
    //调用canvas截屏
    function getScreen() {
    }
    NativeApi.getScreen = getScreen;
    //调用打电话功能
    function callPhone(telNum) {
        window.open("tel:" + telNum, '_self');
    }
    NativeApi.callPhone = callPhone;
    //调用发短信功能
    function sendMessage(telNum) {
        window.open("sms:" + telNum, '_self');
    }
    NativeApi.sendMessage = sendMessage;
    //获取当前地址
    function getCurUrl() {
        return window.location.href;
    }
    NativeApi.getCurUrl = getCurUrl;
    //当前游戏角度
    NativeApi.curAngle = parseInt(window["orientation"] + "");
    // 监听Native发送过来的消息
    function receiveMessage() {
        egret.ExternalInterface.addCallback("sendToJS", function (message) {
            if (message.indexOf("KEYCODE_BACK") != -1) {
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
        egret.ExternalInterface.addCallback("sendData", function (message) {
            var obj = JSON.parse(message);
            if (obj.hasOwnProperty("actMsg")) {
                GlobalData.androidArr = [];
                var arr = obj["actMsg"];
                for (var i = 0; i < arr.length; i++) {
                    var objItem = arr[i];
                    var androidVo = new AndroidVO();
                    androidVo.id = objItem["id"];
                    androidVo.type = objItem["type"];
                    androidVo.num = objItem["num"];
                    androidVo.actId = objItem["actId"];
                    androidVo.actType = objItem["actType"];
                    GlobalData.androidArr.push(androidVo);
                }
            }
            else {
                return;
            }
        });
    }
    NativeApi.receiveMessage = receiveMessage;
})(NativeApi || (NativeApi = {}));
