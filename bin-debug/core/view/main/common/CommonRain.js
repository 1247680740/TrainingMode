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
/** 雨滴 */
var CommonRain = (function (_super) {
    __extends(CommonRain, _super);
    function CommonRain() {
        var _this = _super.call(this) || this;
        _this.nameStr = "";
        _this.top = 0;
        _this.horizontalCenter = 0;
        _this.addEventListener(eui.UIEvent.COMPLETE, _this.loadComplete, _this);
        _this.addEventListener(egret.Event.REMOVED_FROM_STAGE, _this.remove, _this);
        _this.skinName = "CommonRainSkin";
        return _this;
    }
    CommonRain.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    CommonRain.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    CommonRain.prototype.loadComplete = function () {
        var _this = this;
        if (!this.dropTimer) {
            this.dropTimer = new egret.Timer(2000);
        }
        this.dropTimer.addEventListener(egret.TimerEvent.TIMER, function () {
            _this.rain_left = _this.createRain();
            _this.rain_left.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.touch, _this);
            _this.rain_left.horizontalCenter = -125;
            _this.tweenObj(_this.rain_left);
            setTimeout(function () {
                _this.rain_right = _this.createRain();
                _this.rain_right.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.touch, _this);
                _this.rain_right.horizontalCenter = 125;
                _this.tweenObj(_this.rain_right);
            }, 1000);
        }, this);
        this.dropTimer.start();
    };
    CommonRain.prototype.createRain = function () {
        var commonBall = DisplayObjectPool.getInstance().pop(eui.Image);
        commonBall.source = RES.getRes("commonRain_png");
        commonBall.width = 119;
        commonBall.height = 195;
        commonBall.y = -195;
        commonBall.touchEnabled = true;
        this.addChildAt(commonBall, 0);
        return commonBall;
    };
    CommonRain.prototype.remove = function () {
        if (this.parent) {
            this.parent.removeChild(this);
        }
        if (this.dropTimer) {
            this.dropTimer.stop();
            this.dropTimer = null;
        }
        this.removeEventListener(eui.UIEvent.COMPLETE, this.loadComplete, this);
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.remove, this);
    };
    CommonRain.prototype.setName = function (nameStr) {
        this.nameStr = nameStr;
    };
    CommonRain.prototype.getName = function () {
        return parseInt(this.nameStr.charAt(this.nameStr.length - 1));
    };
    CommonRain.prototype.tweenObj = function (obj) {
        egret.Tween.removeTweens(obj);
        egret.Tween.get(obj).to({ y: 1128 }, 4000, egret.Ease.sineIn).call(function () {
            egret.Tween.removeTweens(obj);
            if (obj.parent) {
                obj.parent.removeChild(obj);
            }
        }, this);
        ;
    };
    CommonRain.prototype.touch = function (event) {
        var _this = this;
        var curTarget = event.currentTarget;
        if (this.hitTest(this.img_rain1, curTarget) || this.hitTest(this.img_rain2, curTarget)) {
            egret.Tween.removeTweens(curTarget);
            egret.Tween.get(curTarget).to({ scaleX: 0, scaleY: 0, alpha: 0 }, 250, egret.Ease.backInOut).call(function () {
                egret.Tween.removeTweens(curTarget);
                if (curTarget.parent) {
                    curTarget.parent.removeChild(curTarget);
                }
                if (!GlobalData.checkType) {
                    game.AppFacade.getInstance().sendNotification(EventConfig.Event_UPDATE_TOUCH_Task, _this.getName());
                }
            }, this);
            // 向主页发送事件
            if (GlobalData.checkType) {
                game.AppFacade.getInstance().sendNotification(EventConfig.Event_UPDATE_TOUCH_Time, this.getName());
            }
            else {
                game.AppFacade.getInstance().sendNotification(EventConfig.Event_UPDATE_TOUCH_Task_Show, this.getName());
            }
        }
        else {
            return;
        }
    };
    CommonRain.prototype.hitTest = function (obj1, obj2) {
        if (obj1 == undefined) {
            return false;
        }
        if (obj2 == undefined) {
            return false;
        }
        var rect1 = obj1.getBounds();
        var rect2 = obj2.getBounds();
        rect1.x = obj1.x;
        rect1.y = obj1.y;
        rect2.x = obj2.x;
        rect2.y = obj2.y;
        return rect1.intersects(rect2);
    };
    CommonRain.prototype.setPos = function (posNum) {
        this.bottom = posNum;
    };
    CommonRain.prototype.setScale = function (scaleNum) {
        this.scaleX = scaleNum;
        this.scaleY = scaleNum;
    };
    return CommonRain;
}(eui.Component));
__reflect(CommonRain.prototype, "CommonRain", ["eui.UIComponent", "egret.DisplayObject"]);
