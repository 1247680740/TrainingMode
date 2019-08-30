/**
 * 登录界面
 */

module game {

    export class LoginPanel extends eui.Component {

        public constructor() {
            super();
            this.addEventListener(eui.UIEvent.COMPLETE, this.createCompleteEvent, this);
            this.skinName = "LoginSkin";
        }

        public createCompleteEvent(event: eui.UIEvent): void {
            this.removeEventListener(eui.UIEvent.COMPLETE, this.createCompleteEvent, this);
        }
        public btn_back: eui.Button;
        public grou_left: eui.Group;
        public group_code1: eui.Group;
        public iconList1: CommonList;
        public group_center: eui.Group;
        public group_code2: eui.Group;
        public iconList2: CommonList;
        public group_right: eui.Group;
        public group_code3: eui.Group;
        public iconList3: CommonList;
        public btn_start: eui.Button;


        public partAdded(partName: string, instance: any): void {
            super.partAdded(partName, instance);
        }
    }
}