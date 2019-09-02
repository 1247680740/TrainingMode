var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var CommonGameForm = (function (_super) {
    __extends(CommonGameForm, _super);
    function CommonGameForm() {
        var _this = _super.call(this) || this;
        _this.addEventListener(eui.UIEvent.COMPLETE, _this.complete, _this);
        _this.skinName = "CommonGameFormSkin";
        return _this;
    }
    CommonGameForm.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    CommonGameForm.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    CommonGameForm.prototype.complete = function () {
    };
    CommonGameForm.prototype.setPlayerData = function (playerVo) {
        this.gameIcon.setIcon(playerVo.playerIcon);
    };
    CommonGameForm.prototype.setStep = function (curNum, totalNum) {
        this.gameIcon.setStep(curNum + "/" + totalNum);
    };
    CommonGameForm.prototype.setTimeStr = function (timeNum) {
        this.gameIcon.setTimer(Global.formatTime(timeNum, 1));
    };
    CommonGameForm.prototype.setTouchNum = function (curTouch, totalTouch) {
        this.gameIcon.setTouchNum(curTouch, totalTouch);
    };
    CommonGameForm.prototype.setIconPos = function (topNum) {
        this.gameIcon.top = topNum;
    };
    CommonGameForm.prototype.setIconShow = function (isShow) {
        this.gameIcon.visible = isShow;
    };
    CommonGameForm.prototype.getStepNum = function () {
        return this.gameIcon.getStepArr();
    };
    CommonGameForm.prototype.setGame = function (gameId, index) {
        GlobalData.gameType = gameId;
        switch (gameId) {
            case 1://战神
                var commonDiamond = DisplayObjectPool.getInstance().pop(CommmonDiamond);
                commonDiamond.visible = true;
                commonDiamond.setName("ball" + index);
                this.addChildAt(commonDiamond, 0);
                break;
            case 2://花朵目标
                var commonFlower = DisplayObjectPool.getInstance().pop(CommonFlower);
                commonFlower.visible = true;
                commonFlower.setName("ball" + index);
                this.addChildAt(commonFlower, 0);
                break;
            case 3://心形目标
                var commonHeart = DisplayObjectPool.getInstance().pop(CommonHeart);
                commonHeart.visible = true;
                commonHeart.setName("ball" + index);
                this.addChildAt(commonHeart, 0);
                this.setIconPos(490);
                break;
            case 4://方形表格
                var commonTable = DisplayObjectPool.getInstance().pop(CommonTable);
                commonTable.visible = true;
                commonTable.setName("ball" + index);
                this.addChildAt(commonTable, 0);
                break;
            case 5://圆形目标
                var commonBulls = DisplayObjectPool.getInstance().pop(CommonBulls);
                commonBulls.visible = true;
                commonBulls.setName("ball" + index);
                this.addChildAt(commonBulls, 0);
                break;
            case 6://条形目标
                var commonLinear = DisplayObjectPool.getInstance().pop(CommonLinear);
                commonLinear.visible = true;
                commonLinear.setName("ball" + index);
                this.addChildAt(commonLinear, 0);
                break;
            case 7://漂浮目标点
                var commonDarts = DisplayObjectPool.getInstance().pop(CommonDarts);
                commonDarts.visible = true;
                commonDarts.setName("ball" + index);
                this.addChildAt(commonDarts, 0);
                break;
            case 8://三角菱形
                var commonTriangle = DisplayObjectPool.getInstance().pop(CommonTriangle);
                commonTriangle.visible = true;
                commonTriangle.setName("ball" + index);
                this.addChildAt(commonTriangle, 0);
                break;
            case 9://哑铃
                var commonDumbbel = DisplayObjectPool.getInstance().pop(CommonDumbbel);
                commonDumbbel.visible = true;
                commonDumbbel.setName("ball" + index);
                this.addChildAt(commonDumbbel, 0);
                break;
            case 10://竖墙
                var commonRoad = DisplayObjectPool.getInstance().pop(CommonRoad);
                commonRoad.visible = true;
                commonRoad.setName("ball" + index);
                this.addChildAt(commonRoad, 0);
                break;
            case 11://雨滴
                var commonRain = DisplayObjectPool.getInstance().pop(CommonRain);
                commonRain.visible = true;
                commonRain.setName("ball" + index);
                this.addChildAt(commonRain, 0);
                this.setIconPos(944);
                break;
            case 12://石头目标
                var commonStone = DisplayObjectPool.getInstance().pop(CommonStone);
                commonStone.visible = true;
                commonStone.setName("ball" + index);
                this.addChildAt(commonStone, 0);
                break;
            case 13://飞镖
                var commonKite = DisplayObjectPool.getInstance().pop(CommonKite);
                commonKite.visible = true;
                commonKite.setName("ball" + index);
                this.addChildAt(commonKite, 0);
                break;
            case 14://道路
                var commonTileMap = DisplayObjectPool.getInstance().pop(CommonTileMap);
                commonTileMap.visible = true;
                commonTileMap.setName("ball" + index);
                this.addChildAt(commonTileMap, 0);
                break;
            case 15://人体骨骼
                var commonJoint = DisplayObjectPool.getInstance().pop(CommonJoint);
                commonJoint.visible = true;
                commonJoint.setName("ball" + index);
                this.addChildAt(commonJoint, 0);
                break;
        }
    };
    return CommonGameForm;
}(eui.Component));
__reflect(CommonGameForm.prototype, "CommonGameForm", ["eui.UIComponent", "egret.DisplayObject"]);
