/**
 * Copyright (c) 2014,Egret-Labs.org
 * All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of the Egret-Labs.org nor the
 *       names of its contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
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
var LoadingUI = (function (_super) {
    __extends(LoadingUI, _super);
    function LoadingUI() {
        var _this = _super.call(this) || this;
        _this.w = 0;
        _this.h = 0;
        _this.createGameScene();
        return _this;
    }
    /**
     * 创建Loading场景
     */
    LoadingUI.prototype.createGameScene = function () {
        this.w = document.body.clientWidth;
        this.h = document.body.clientHeight;
        var bgId = Math.floor(Math.random() * 10 + 1);
        this.pgBg = new egret.Bitmap;
        this.pgBg.texture = RES.getRes("bg" + bgId + "_png");
        this.addChild(this.pgBg);
        this.width = this.w;
        this.height = this.h;
        this.pgBar = new egret.Bitmap;
        this.pgBar.texture = RES.getRes("loadingCircle_png");
        this.pgBar.x = this.w / 2 - this.pgBg.width / 2;
        this.pgBar.y = this.h - this.pgBg.height - 50;
        this.addChild(this.pgBar);
        this.addEventListener(egret.TimerEvent.ENTER_FRAME, this.rotatinBg, this);
        this.textField = new egret.TextField();
        this.textField.size = 24;
        this.textField.textColor = 0x333333;
        this.textField.bold = true;
        this.textField.stroke = 1;
        this.textField.strokeColor = 0xfff000;
        this.addChild(this.textField);
        this.textField.width = 100;
        this.textField.x = this.w / 2 - this.textField.width / 2;
        this.textField.y = this.pgBar.y + 20;
        this.textField.textAlign = "center";
        this.textField.text = "0%";
    };
    LoadingUI.prototype.rotatinBg = function () {
        this.pgBar.rotation += 3;
    };
    LoadingUI.prototype.setProgress = function (current, total) {
        var rate = Math.round((current / total) * 100);
        this.textField.text = rate + "%";
    };
    LoadingUI.prototype.removeEvent = function () {
        this.removeEventListener(egret.TimerEvent.ENTER_FRAME, this.rotatinBg, this);
    };
    return LoadingUI;
}(eui.UILayer));
__reflect(LoadingUI.prototype, "LoadingUI");
