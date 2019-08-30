/**
 * 调整界面
 *
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
var game;
(function (game) {
    var TrimMediator = (function (_super) {
        __extends(TrimMediator, _super);
        function TrimMediator(viewComponent) {
            if (viewComponent === void 0) { viewComponent = null; }
            var _this = _super.call(this, TrimMediator.NAME, viewComponent) || this;
            _this.trimPanel = new game.TrimPanel();
            return _this;
        }
        TrimMediator.prototype.listNotificationInterests = function () {
            return [
                NoficationConfig.OPEN_TRIM,
                NoficationConfig.CLOSE_TRIM
            ];
        };
        TrimMediator.prototype.handleNotification = function (notification) {
            var data = notification.getBody();
            switch (notification.getName()) {
                case NoficationConfig.OPEN_TRIM: {
                    this.showUI(this.trimPanel, false, 0, 0, 6);
                    break;
                }
                case NoficationConfig.CLOSE_TRIM: {
                    this.clickButtom();
                    break;
                }
            }
        };
        /**
         * 初始化面板ui
         */
        TrimMediator.prototype.initUI = function () {
            this.trimPanel.btn_back.addEventListener(egret.TouchEvent.TOUCH_TAP, this.backView, this);
            this.trimPanel.img_bg.x = 0;
            var bgId = Math.floor(Math.random() * 10 + 1);
            this.trimPanel.img_bg.source = RES.getRes("bg" + bgId + "_png");
            this.resetBgPos();
            this.addGame();
        };
        /**
         * 初始化面板数据
         */
        TrimMediator.prototype.initData = function () {
            this.trimPanel.game1.setIconShow(false);
            this.trimPanel.game2.setIconShow(false);
            this.trimPanel.game3.setIconShow(false);
        };
        TrimMediator.prototype.clickButtom = function () {
            this.trimPanel.btn_back.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.backView, this);
            egret.Tween.removeTweens(this.trimPanel.img_bg);
            this.closePanel(1);
        };
        TrimMediator.prototype.backView = function () {
            game.AppFacade.getInstance().sendNotification(NoficationConfig.CLOSE_TRIM);
        };
        TrimMediator.prototype.resetBgPos = function () {
            var _this = this;
            egret.Tween.removeTweens(this.trimPanel.img_bg);
            egret.Tween.get(this.trimPanel.img_bg).to({ x: -350 }, 8000).wait(350).call(function () {
                egret.Tween.get(_this.trimPanel.img_bg).to({ x: 0 }, 8000).wait(350).call(_this.resetBgPos, _this);
            }, this);
        };
        TrimMediator.prototype.addGame = function () {
            for (var i = 1; i < 4; i++) {
                if (i == 1) {
                    this.trimPanel.game1.setGame(GlobalData.gameType, i);
                }
                else if (i == 2) {
                    this.trimPanel.game2.setGame(GlobalData.gameType, i);
                }
                else if (i == 3) {
                    this.trimPanel.game3.setGame(GlobalData.gameType, i);
                }
            }
        };
        TrimMediator.NAME = "TrimMediator";
        return TrimMediator;
    }(BaseMediator));
    game.TrimMediator = TrimMediator;
    __reflect(TrimMediator.prototype, "game.TrimMediator");
})(game || (game = {}));
