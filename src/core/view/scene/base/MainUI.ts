/**
 * 主界面
 */
module game {

    export class MainUI extends eui.Component {

        private _video: egret.Video;
        private _pauseTime: number = 0;
        public img_bg: eui.Image;

        public constructor() {
            super();
            this.addEventListener(eui.UIEvent.COMPLETE, this.loadComplete, this);
            this.skinName = "MainUISkin";
        }

        public partAdded(partName: string, instance: any): void {
            super.partAdded(partName, instance);
        }

        private loadComplete(): void {
            this.removeEventListener(eui.UIEvent.COMPLETE, this.loadComplete, this);
            this.img_bg.x = 0
        }

        private loadVideo(): void {
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
        }
        //播放
        private play(): void {
            // this.stop();
            this._video.play(this._pauseTime, true);
            this._video.fullscreen = true;
        }

        //停止
        private stop(): void {
            this._video.pause();
        }

        private resetBg(): void {
            egret.Tween.removeTweens(this.img_bg);
            egret.Tween.get(this.img_bg).to({ x: -350 }, 8000).wait(350).call(() => {
                egret.Tween.get(this.img_bg).to({ x: 0 }, 8000).wait(350).call(this.resetBg, this);
            }, this);
        }

        public changeBg(dataSource: string): void {
            this.img_bg.x = 0;
            this.img_bg.source = RES.getRes(dataSource);
            this.resetBg();
        }
    }
}