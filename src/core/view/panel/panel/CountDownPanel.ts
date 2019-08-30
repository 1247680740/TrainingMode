/**
 * 
 */

module game {

    export class CountDownPanel extends eui.Component {

        public constructor() {
            super();
            this.addEventListener(eui.UIEvent.COMPLETE, this.createCompleteEvent, this);
            // this.skinName = "src/core/view/scene/countdown/CountDownSkin.exml";
            this.skinName = "CountDownSkin";
        }

        public createCompleteEvent(event: eui.UIEvent): void {
            this.removeEventListener(eui.UIEvent.COMPLETE, this.createCompleteEvent, this);
        }
        public btn_pause: eui.Button;
        public label_tip: eui.Label;
        public label_time: eui.Label;
        public btn_skip: eui.Button;
        public list_L: CommonList;
        public list_C: CommonList;
        public list_R: CommonList;

        public partAdded(partName: string, instance: any): void {
            super.partAdded(partName, instance);
        }
    }
}