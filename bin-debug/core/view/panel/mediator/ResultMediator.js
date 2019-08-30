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
 * 成绩界面
 *
 */
var game;
(function (game) {
    var ResultMediator = (function (_super) {
        __extends(ResultMediator, _super);
        function ResultMediator(viewComponent) {
            if (viewComponent === void 0) { viewComponent = null; }
            var _this = _super.call(this, ResultMediator.NAME, viewComponent) || this;
            _this.totalArr = [];
            _this.pageNums = 0;
            _this.pagesArr = [];
            _this.curPage = 1;
            _this.resultPanel = new game.ResultPanel();
            return _this;
        }
        ResultMediator.prototype.listNotificationInterests = function () {
            return [
                NoficationConfig.OPEN_RESULT,
                NoficationConfig.CLOSE_RESULT
            ];
        };
        ResultMediator.prototype.handleNotification = function (notification) {
            var data = notification.getBody();
            switch (notification.getName()) {
                case NoficationConfig.OPEN_RESULT: {
                    this.showUI(this.resultPanel, false, 0, 0, 6);
                    break;
                }
                case NoficationConfig.CLOSE_RESULT: {
                    this.buttonClickClose();
                    break;
                }
            }
        };
        /**
        * 初始化面板ui
        */
        ResultMediator.prototype.initUI = function () {
            this.resultPanel.btn_back.addEventListener(egret.TouchEvent.TOUCH_TAP, this.backView, this);
            this.resultPanel.btn_next.addEventListener(egret.TouchEvent.TOUCH_TAP, this.nextPage, this);
            this.resultPanel.btn_pre.addEventListener(egret.TouchEvent.TOUCH_TAP, this.prePage, this);
            this.resultPanel.btn_newChange.addEventListener(egret.TouchEvent.TOUCH_TAP, this.startNewPage, this);
            this.resultPanel.list_left.itemRenderer = CommonResultItem;
            this.resultPanel.list_right.itemRenderer = CommonResultItem;
            this.resultPanel.img_bg.x = 0;
            var bgId = Math.floor(Math.random() * 10 + 1);
            this.resultPanel.img_bg.source = RES.getRes("bg" + bgId + "_png");
            this.resetBgPos();
        };
        ResultMediator.prototype.resetBgPos = function () {
            var _this = this;
            egret.Tween.removeTweens(this.resultPanel.img_bg);
            egret.Tween.get(this.resultPanel.img_bg).to({ x: -350 }, 8000).wait(350).call(function () {
                egret.Tween.get(_this.resultPanel.img_bg).to({ x: 0 }, 8000).wait(350).call(_this.resetBgPos, _this);
            }, this);
        };
        /**
         * 初始化面板数据
         */
        ResultMediator.prototype.initData = function () {
            this.curPage = 1;
            this.totalArr = [];
            this.pagesArr = [];
            var l_arr = P.getGameDataProxy().getLeftPlayer();
            var c_arr = P.getGameDataProxy().getCenterPlayer();
            var r_arr = P.getGameDataProxy().getRightPlayer();
            this.totalArr = this.totalArr.concat(l_arr).concat(c_arr).concat(r_arr);
            this.pagesArr = RegUtils.checkArrInGroups(this.totalArr, 5);
            this.pageNums = this.pagesArr.length;
            var left_index = 2 * this.curPage - 2;
            var right_index = 2 * this.curPage - 1;
            if (this.pagesArr[left_index]) {
                var l_dataArr = this.pagesArr[left_index];
                this.l_arrC = this.resultPanel.list_left.dataProvider;
                if (!this.l_arrC)
                    this.l_arrC = new eui.ArrayCollection();
                this.l_arrC.source = l_dataArr;
                this.resultPanel.list_left.dataProvider = this.l_arrC;
            }
            if (this.pagesArr[right_index]) {
                var r_dataArr = this.pagesArr[right_index];
                this.r_arrC = this.resultPanel.list_right.dataProvider;
                if (!this.r_arrC)
                    this.r_arrC = new eui.ArrayCollection();
                this.r_arrC.source = r_dataArr;
                this.resultPanel.list_right.dataProvider = this.r_arrC;
            }
        };
        ResultMediator.prototype.backView = function () {
            EffectUtils.playEffect(this.resultPanel.btn_back, 2);
            this.resultPanel.btn_back.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.backView, this);
            this.resultPanel.btn_next.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.nextPage, this);
            this.resultPanel.btn_pre.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.prePage, this);
            this.resultPanel.btn_newChange.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.startNewPage, this);
            this.buttonClickClose();
        };
        ResultMediator.prototype.nextPage = function () {
            EffectUtils.playEffect(this.resultPanel.btn_next, 2);
            var tempId = this.curPage + 1;
            var l_index = tempId * 2 - 2;
            var r_index = tempId * 2 - 1;
            if (this.pagesArr[l_index]) {
                this.curPage = tempId;
                this.l_arrC.source = this.pagesArr[l_index];
                this.resultPanel.list_left.dataProvider = this.l_arrC;
            }
            else {
                return;
            }
            if (this.pagesArr[r_index]) {
                this.r_arrC.source = this.pagesArr[r_index];
                this.resultPanel.list_right.dataProvider = this.l_arrC;
            }
        };
        ResultMediator.prototype.prePage = function () {
            EffectUtils.playEffect(this.resultPanel.btn_pre, 2);
            if (this.curPage <= 1) {
                return;
            }
            else {
                this.curPage -= 1;
                var l_index = this.curPage * 2 - 2;
                var r_index = this.curPage * 2 - 1;
                if (this.pagesArr[l_index]) {
                    this.l_arrC.source = this.pagesArr[l_index];
                    this.resultPanel.list_left.dataProvider = this.l_arrC;
                }
                if (this.pagesArr[r_index]) {
                    this.r_arrC.source = this.pagesArr[r_index];
                    this.resultPanel.list_right.dataProvider = this.l_arrC;
                }
            }
        };
        ResultMediator.prototype.startNewPage = function () {
            EffectUtils.playEffect(this.resultPanel.btn_newChange, 2, function () {
                game.AppFacade.getInstance().sendNotification(NoficationConfig.CLOSE_RESULT);
                game.AppFacade.getInstance().sendNotification(NoficationConfig.OPEN_HOME);
            }, this);
        };
        ResultMediator.prototype.buttonClickClose = function () {
            egret.Tween.removeTweens(this.resultPanel.img_bg);
            this.resultPanel.btn_back.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.backView, this);
            this.resultPanel.btn_next.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.nextPage, this);
            this.resultPanel.btn_pre.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.prePage, this);
            this.resultPanel.btn_newChange.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.startNewPage, this);
            this.closePanel(1);
        };
        ResultMediator.NAME = "ResultMediator";
        return ResultMediator;
    }(BaseMediator));
    game.ResultMediator = ResultMediator;
    __reflect(ResultMediator.prototype, "game.ResultMediator");
})(game || (game = {}));
