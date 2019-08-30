/**
 *  主场景（初始化场景）
 */

module game {

    export class HomeCity extends eui.Component {
        
        public btn_back: eui.Button;
        public img_bottom: eui.Image;
        public btn_startXL: eui.Button;
        public btn_startSetUp: eui.Button;
        public btn_StartShow: eui.Button;
        public label_fitness: eui.Group;
        public label_stay: eui.Group;
        public label_heart: eui.Group;
        public label_power: eui.Group;

        public constructor() {
            super();
            this.addEventListener(eui.UIEvent.COMPLETE, this.createCompleteEvent, this);
            this.skinName = "HomeCitySkin";
        }

        public createCompleteEvent(event: eui.UIEvent): void {
            this.removeEventListener(eui.UIEvent.COMPLETE, this.createCompleteEvent, this);
        }

        public partAdded(partName: string, instance: any): void {
            super.partAdded(partName, instance);
        }
    }
}