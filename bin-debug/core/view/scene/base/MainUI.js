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
/**
 * 主界面
 */
var game;
(function (game) {
    var MainUI = (function (_super) {
        __extends(MainUI, _super);
        function MainUI() {
            var _this = _super.call(this) || this;
            _this._pauseTime = 0;
            _this.addEventListener(eui.UIEvent.COMPLETE, _this.loadComplete, _this);
            _this.skinName = "MainUISkin";
            return _this;
        }
        MainUI.prototype.partAdded = function (partName, instance) {
            _super.prototype.partAdded.call(this, partName, instance);
        };
        MainUI.prototype.loadComplete = function () {
            this.removeEventListener(eui.UIEvent.COMPLETE, this.loadComplete, this);
            this.img_bg.x = 0;
        };
        MainUI.prototype.loadVideo = function () {
            this._video = new egret.Video();
            this._video.width = 1920;
            this._video.height = 1080;
            this._video.poster = "resource/images/test/posterfullscreen.jpg";
            this._video.load("resource/images/test/trailer.mp4");
            this.addChild(this._video);
            this._video.addEventListener(egret.Event.COMPLETE, function (e) {
                console.log("complete");
                this.play();
            }, this);
        };
        //播放
        MainUI.prototype.play = function () {
            // this.stop();
            this._video.play(this._pauseTime, true);
            this._video.fullscreen = true;
        };
        //停止
        MainUI.prototype.stop = function () {
            this._video.pause();
        };
        MainUI.prototype.resetBg = function () {
            var _this = this;
            egret.Tween.removeTweens(this.img_bg);
            egret.Tween.get(this.img_bg).to({ x: -350 }, 8000).wait(350).call(function () {
                egret.Tween.get(_this.img_bg).to({ x: 0 }, 8000).wait(350).call(_this.resetBg, _this);
            }, this);
        };
        MainUI.prototype.changeBg = function (dataSource) {
            this.img_bg.x = 0;
            this.img_bg.source = RES.getRes(dataSource);
            this.resetBg();
        };
        return MainUI;
    }(eui.Component));
    game.MainUI = MainUI;
    __reflect(MainUI.prototype, "game.MainUI");
})(game || (game = {}));
