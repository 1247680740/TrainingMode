/**
 * 成绩界面
 * 
 */
module game {

    export class ResultMediator extends BaseMediator {

        public static NAME: string = "ResultMediator";
        private totalArr: Array<PlayerVO> = [];
        private pageNums: number = 0;
        private pagesArr: Array<any> = [];

        private l_arrC: eui.ArrayCollection;
        private r_arrC: eui.ArrayCollection;

        private curPage: number = 1;

        public constructor(viewComponent: any = null) {
            super(ResultMediator.NAME, viewComponent);
        }

        public listNotificationInterests(): Array<any> {
            return [
                NoficationConfig.OPEN_RESULT,
                NoficationConfig.CLOSE_RESULT
            ];
        }
        private resultPanel: ResultPanel = new ResultPanel();
        public handleNotification(notification: puremvc.INotification): void {
            var data: any = notification.getBody();
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
        }

        /**
        * 初始化面板ui
        */
        public initUI(): void {
            this.resultPanel.btn_back.addEventListener(egret.TouchEvent.TOUCH_TAP, this.backView, this);
            this.resultPanel.btn_next.addEventListener(egret.TouchEvent.TOUCH_TAP, this.nextPage, this);
            this.resultPanel.btn_pre.addEventListener(egret.TouchEvent.TOUCH_TAP, this.prePage, this);
            this.resultPanel.btn_newChange.addEventListener(egret.TouchEvent.TOUCH_TAP, this.startNewPage, this);
            this.resultPanel.list_left.itemRenderer = CommonResultItem;
            this.resultPanel.list_right.itemRenderer = CommonResultItem;
            this.resultPanel.img_bg.x = 0;
            let bgId: number = Math.floor(Math.random() * 10 + 1);
            this.resultPanel.img_bg.source = RES.getRes("bg" + bgId + "_png");
            this.resetBgPos();
        }

        private resetBgPos(): void {
            egret.Tween.removeTweens(this.resultPanel.img_bg);
            egret.Tween.get(this.resultPanel.img_bg).to({ x: -350 }, 8000).wait(350).call(() => {
                egret.Tween.get(this.resultPanel.img_bg).to({ x: 0 }, 8000).wait(350).call(this.resetBgPos, this);
            }, this);
        }

        /**
         * 初始化面板数据
         */
        public initData(): void {
            this.curPage = 1;
            this.totalArr = [];
            this.pagesArr = [];
            let l_arr: Array<PlayerVO> = P.getGameDataProxy().getLeftPlayer();
            let c_arr: Array<PlayerVO> = P.getGameDataProxy().getCenterPlayer();
            let r_arr: Array<PlayerVO> = P.getGameDataProxy().getRightPlayer();
            this.totalArr = this.totalArr.concat(l_arr).concat(c_arr).concat(r_arr);
            this.pagesArr = RegUtils.checkArrInGroups(this.totalArr, 5);
            this.pageNums = this.pagesArr.length;
            let left_index: number = 2 * this.curPage - 2;
            let right_index: number = 2 * this.curPage - 1;
            if (this.pagesArr[left_index]) {
                let l_dataArr: Array<PlayerVO> = this.pagesArr[left_index];
                this.l_arrC = <eui.ArrayCollection>this.resultPanel.list_left.dataProvider;
                if (!this.l_arrC) this.l_arrC = new eui.ArrayCollection();
                this.l_arrC.source = l_dataArr;
                this.resultPanel.list_left.dataProvider = this.l_arrC;
            }
            if (this.pagesArr[right_index]) {
                let r_dataArr: Array<PlayerVO> = this.pagesArr[right_index];
                this.r_arrC = <eui.ArrayCollection>this.resultPanel.list_right.dataProvider;
                if (!this.r_arrC) this.r_arrC = new eui.ArrayCollection();
                this.r_arrC.source = r_dataArr;
                this.resultPanel.list_right.dataProvider = this.r_arrC;
            }
        }

        private backView(): void {
            EffectUtils.playEffect(this.resultPanel.btn_back, 2);
            this.resultPanel.btn_back.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.backView, this);
            this.resultPanel.btn_next.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.nextPage, this);
            this.resultPanel.btn_pre.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.prePage, this);
            this.resultPanel.btn_newChange.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.startNewPage, this);
            this.buttonClickClose();
        }

        private nextPage(): void {
            EffectUtils.playEffect(this.resultPanel.btn_next, 2);
            let tempId: number = this.curPage + 1;
            let l_index: number = tempId * 2 - 2;
            let r_index: number = tempId * 2 - 1;
            if (this.pagesArr[l_index]) {
                this.curPage = tempId;
                this.l_arrC.source = this.pagesArr[l_index];
                this.resultPanel.list_left.dataProvider = this.l_arrC;
            } else {
                return;
            }
            if (this.pagesArr[r_index]) {
                this.r_arrC.source = this.pagesArr[r_index];
                this.resultPanel.list_right.dataProvider = this.l_arrC;
            }
        }

        private prePage(): void {
            EffectUtils.playEffect(this.resultPanel.btn_pre, 2);
            if (this.curPage <= 1) {
                return;
            } else {
                this.curPage -= 1;
                let l_index: number = this.curPage * 2 - 2;
                let r_index: number = this.curPage * 2 - 1;
                if (this.pagesArr[l_index]) {
                    this.l_arrC.source = this.pagesArr[l_index];
                    this.resultPanel.list_left.dataProvider = this.l_arrC;
                }
                if (this.pagesArr[r_index]) {
                    this.r_arrC.source = this.pagesArr[r_index];
                    this.resultPanel.list_right.dataProvider = this.l_arrC;
                }
            }
        }

        private startNewPage(): void {
            EffectUtils.playEffect(this.resultPanel.btn_newChange, 2, () => {
                game.AppFacade.getInstance().sendNotification(NoficationConfig.CLOSE_RESULT);
                game.AppFacade.getInstance().sendNotification(NoficationConfig.OPEN_HOME);
            }, this);
        }

        private buttonClickClose(): void {
            egret.Tween.removeTweens(this.resultPanel.img_bg);
            this.resultPanel.btn_back.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.backView, this);
            this.resultPanel.btn_next.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.nextPage, this);
            this.resultPanel.btn_pre.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.prePage, this);
            this.resultPanel.btn_newChange.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.startNewPage, this);
            this.closePanel(1);
        }

    }
}