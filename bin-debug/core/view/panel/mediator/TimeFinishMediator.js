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
  * 时间模式完成界面
  */
var game;
(function (game) {
    var TimeFinishMediator = (function (_super) {
        __extends(TimeFinishMediator, _super);
        function TimeFinishMediator(viewComponent) {
            if (viewComponent === void 0) { viewComponent = null; }
            var _this = _super.call(this, TimeFinishMediator.NAME, viewComponent) || this;
            _this.timeFinishPanel = new game.TimeFinishPanel();
            return _this;
        }
        TimeFinishMediator.prototype.listNotificationInterests = function () {
            return [
                NoficationConfig.OPEN_TIME_FINISH,
                NoficationConfig.CLOSE_TIME_FINISH
            ];
        };
        TimeFinishMediator.prototype.handleNotification = function (notification) {
            var data = notification.getBody();
            switch (notification.getName()) {
                case NoficationConfig.OPEN_TIME_FINISH: {
                    this.changeBg();
                    this.showUI(this.timeFinishPanel, false, 0, 0, 6);
                    break;
                }
                case NoficationConfig.CLOSE_TIME_FINISH: {
                    this.closeButtonClick();
                    break;
                }
            }
        };
        /**
         * 初始化面板ui
         */
        TimeFinishMediator.prototype.initUI = function () {
            this.timeFinishPanel.btn_result.addEventListener(egret.TouchEvent.TOUCH_TAP, this.checkResult, this);
        };
        /**
         * 初始化面板数据
         */
        TimeFinishMediator.prototype.initData = function () {
            var l_arr = P.getGameDataProxy().getLeftPlayer();
            var c_arr = P.getGameDataProxy().getCenterPlayer();
            var r_arr = P.getGameDataProxy().getRightPlayer();
            var l_vo = l_arr[l_arr.length - 1];
            var c_vo = c_arr[c_arr.length - 1];
            var r_vo = r_arr[r_arr.length - 1];
            if (l_vo) {
                this.timeFinishPanel.l_finish.setPlayer(l_vo);
            }
            if (c_vo) {
                this.timeFinishPanel.c_finish.setPlayer(c_vo);
            }
            if (r_vo) {
                this.timeFinishPanel.r_finish.setPlayer(r_vo);
            }
        };
        TimeFinishMediator.prototype.changeBg = function () {
            var bgId = Math.floor(Math.random() * 10 + 1);
            var bgName = "bg" + bgId + "_png";
            game.AppFacade.getInstance().sendNotification(EventConfig.Event_CHANGE_GAMEBG, bgName);
        };
        TimeFinishMediator.prototype.closeButtonClick = function () {
            // this.timeFinishPanel.btn_back.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.pauseGame, this);
            this.timeFinishPanel.btn_result.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.checkResult, this);
            this.closePanel(1);
        };
        TimeFinishMediator.prototype.checkResult = function () {
            var _this = this;
            EffectUtils.playEffect(this.timeFinishPanel.btn_result, 2, function () {
                _this.closeButtonClick();
                game.AppFacade.getInstance().sendNotification(NoficationConfig.OPEN_RESULT);
            });
        };
        TimeFinishMediator.NAME = "TimeFinishMediator";
        return TimeFinishMediator;
    }(BaseMediator));
    game.TimeFinishMediator = TimeFinishMediator;
    __reflect(TimeFinishMediator.prototype, "game.TimeFinishMediator");
})(game || (game = {}));
