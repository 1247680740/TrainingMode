/**
 * 时间模式界面
 * 
 */
module game {

    export class TimeTypePanel extends eui.Component {

        public btn_back: eui.Button;
        public p_left: CommonGameForm;
        public p_center: CommonGameForm;
        public p_right: CommonGameForm;

        public constructor() {
            super();
            this.addEventListener(eui.UIEvent.COMPLETE, this.createCompleteEvent, this);
            this.skinName = "TimeTypeSkin";
        }

        public createCompleteEvent(event: eui.UIEvent): void {
            this.removeEventListener(eui.UIEvent.COMPLETE, this.createCompleteEvent, this);
        }

        public partAdded(partName: string, instance: any): void {
            super.partAdded(partName, instance);
        }

        public partRemoved(partName: string, instance: any): void {
            super.partRemoved(partName, instance);
        }

    }
}