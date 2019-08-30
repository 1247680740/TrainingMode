/**
  * 游戏公用方法汇总
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  * 使用方法如：Global.setCookie()
  */
var Global;
(function (Global) {
    //显示等待界面
    function showWaritPanel() {
        Global.waitPanel = new WaitPanel(1);
        GameLayerManager.gameLayer().maskLayer.removeChildren();
        GameLayerManager.gameLayer().maskLayer.addChild(Global.waitPanel);
    }
    Global.showWaritPanel = showWaritPanel;
    //移除界面
    function hideWaritPanel() {
        if ((Global.waitPanel != null) && GameLayerManager.gameLayer().maskLayer.contains(Global.waitPanel)) {
            GameLayerManager.gameLayer().maskLayer.removeChild(Global.waitPanel);
        }
    }
    Global.hideWaritPanel = hideWaritPanel;
    //获取html文本
    function getTextFlow(str) {
        var styleParser = new egret.HtmlTextParser();
        return styleParser.parser(str);
    }
    Global.getTextFlow = getTextFlow;
    function getMessage(fileName, reqName) {
        if (Global.message == null) {
            //初始化template_proto
            Global.message = dcodeIO.ProtoBuf.loadProto(RES.getRes(fileName + "_proto"));
        }
        return Global.message.build(reqName);
    }
    Global.getMessage = getMessage;
    //获取大写数字
    function getNumber(num) {
        switch (num) {
            case 0: {
                return "零";
            }
            case 1: {
                return "一";
            }
            case 2: {
                return "二";
            }
            case 3: {
                return "三";
            }
            case 4: {
                return "四";
            }
            case 5: {
                return "五";
            }
            case 6: {
                return "六";
            }
            case 7: {
                return "七";
            }
            case 8: {
                return "八";
            }
            case 9: {
                return "九";
            }
            default: {
                // TODO: Implemente default case
                console.log("default case");
            }
        }
    }
    Global.getNumber = getNumber;
    function contrastArr() {
        var len_leftArr = P.getGameDataProxy().getLeftPlayer().length;
        var len_centerArr = P.getGameDataProxy().getCenterPlayer().length;
        var len_rightArr = P.getGameDataProxy().getRightPlayer().length;
        var trastArr = [len_leftArr, len_centerArr, len_rightArr];
        var returnNum = Math.max(len_leftArr, len_centerArr, len_rightArr);
        return returnNum;
    }
    Global.contrastArr = contrastArr;
    function formatTime(sMiao, type) {
        var h = 0;
        var i = 0;
        var s = 0;
        if (sMiao > 60) {
            i = parseInt((sMiao / 60) + "");
            s = parseInt((sMiao % 60) + "");
            if (i > 60) {
                h = parseInt((i / 60) + "");
                i = parseInt((i % 60) + "");
            }
        }
        else {
            s = sMiao;
        }
        // 补零
        var zero = function (v) {
            return (v >> 0) < 10 ? "0" + v : v;
        };
        if (type == 1) {
            var returnStr = zero(i) + "'" + zero(s) + '"';
            return returnStr;
        }
        else {
            var returnStr = zero(h) + "'" + zero(i) + '"' + zero(s);
            return returnStr;
        }
        // [zero(h),zero(i), zero(s)].join(":");  
    }
    Global.formatTime = formatTime;
    function createMoive(moiveName, clidName, xNum, yNum) {
        var data = RES.getRes(moiveName + "_json");
        var txtr = RES.getRes(moiveName + "_png");
        var mcFactory = new egret.MovieClipDataFactory(data, txtr);
        var mc = new egret.MovieClip(mcFactory.generateMovieClipData(clidName));
        mc.x = xNum;
        mc.y = yNum;
        return mc;
    }
    Global.createMoive = createMoive;
})(Global || (Global = {}));
