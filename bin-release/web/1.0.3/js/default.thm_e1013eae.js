
                var __extends = this && this.__extends|| function (d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = window.generateEUI||{};
                generateEUI.paths = generateEUI.paths||{};
                generateEUI.styles = undefined;
                generateEUI.skins = {"CommonList":"resource/skin/common/CommonList.exml","ui.CommonIcon":"resource/skin/common/CommonIcon.exml","ui.CommonSetting":"resource/skin/common/CommonSetting.exml","ui.CommonSettingItem":"resource/skin/common/CommonSettingItem.exml","CommonGameIcon":"resource/skin/common/CommonGameIcon.exml","CommonFinish":"resource/skin/common/CommonFinish.exml","CommonCutDown":"resource/skin/common/CommonCutDown.exml","CommonGameForm":"resource/skin/common/CommonGameForm.exml","CommonGaemForm":"resource/skin/common/CommonGaemForm.exml","CommonResultItem":"resource/skin/common/CommonResultItem.exml"};generateEUI.paths['resource/skin/common/CommonCutDown.exml'] = window.CommonCutDownSkin = (function (_super) {
	__extends(CommonCutDownSkin, _super);
	function CommonCutDownSkin() {
		_super.call(this);
		this.skinParts = ["img_icon","img_skip","label_name","label_step","label_time"];
		
		this.height = 596;
		this.width = 336;
		this.elementsContent = [this.img_icon_i(),this._Image1_i(),this.img_skip_i(),this.label_name_i(),this._Label1_i(),this.label_step_i(),this.label_time_i()];
	}
	var _proto = CommonCutDownSkin.prototype;

	_proto.img_icon_i = function () {
		var t = new eui.Image();
		this.img_icon = t;
		t.height = 170;
		t.horizontalCenter = 0;
		t.top = 0;
		t.width = 170;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 93;
		t.horizontalCenter = 0;
		t.source = "DemonstrationBg_png";
		return t;
	};
	_proto.img_skip_i = function () {
		var t = new eui.Image();
		this.img_skip = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.source = "skipBtn_png";
		return t;
	};
	_proto.label_name_i = function () {
		var t = new eui.Label();
		this.label_name = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.italic = true;
		t.size = 36;
		t.text = "Label";
		t.textAlign = "center";
		t.textColor = 0x333333;
		t.top = 180;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.italic = true;
		t.size = 48;
		t.text = "请做好准备。";
		t.textAlign = "center";
		t.textColor = 0x333333;
		t.top = 235;
		return t;
	};
	_proto.label_step_i = function () {
		var t = new eui.Label();
		this.label_step = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.italic = true;
		t.text = "STEP2/12";
		t.textAlign = "center";
		t.top = 338;
		return t;
	};
	_proto.label_time_i = function () {
		var t = new eui.Label();
		this.label_time = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.italic = true;
		t.size = 96;
		t.text = "08";
		t.textAlign = "center";
		t.top = 400;
		t.width = 336;
		return t;
	};
	return CommonCutDownSkin;
})(eui.Skin);generateEUI.paths['resource/skin/common/CommonFinish.exml'] = window.CommonFinishSkin = (function (_super) {
	__extends(CommonFinishSkin, _super);
	function CommonFinishSkin() {
		_super.call(this);
		this.skinParts = ["img_icon","label_name","label_tagOne","label_tagType","label_tagTwo"];
		
		this.height = 576;
		this.width = 400;
		this.elementsContent = [this._Image1_i(),this.img_icon_i(),this.label_name_i(),this._Label1_i(),this.label_tagOne_i(),this.label_tagType_i(),this.label_tagTwo_i()];
	}
	var _proto = CommonFinishSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "finishBg_png";
		return t;
	};
	_proto.img_icon_i = function () {
		var t = new eui.Image();
		this.img_icon = t;
		t.height = 170;
		t.horizontalCenter = 0;
		t.top = 0;
		t.width = 170;
		return t;
	};
	_proto.label_name_i = function () {
		var t = new eui.Label();
		this.label_name = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.italic = true;
		t.size = 36;
		t.text = "朱莉耶丝";
		t.textAlign = "center";
		t.textColor = 0x333333;
		t.top = 180;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.italic = true;
		t.size = 48;
		t.text = "训练完成！";
		t.textAlign = "center";
		t.textColor = 0x333333;
		t.top = 235;
		return t;
	};
	_proto.label_tagOne_i = function () {
		var t = new eui.Label();
		this.label_tagOne = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.italic = true;
		t.size = 36;
		t.text = "300次跳绳";
		t.textAlign = "center";
		t.textColor = 0x333333;
		t.top = 349;
		return t;
	};
	_proto.label_tagType_i = function () {
		var t = new eui.Label();
		this.label_tagType = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.italic = true;
		t.size = 36;
		t.text = "完成时间";
		t.textAlign = "center";
		t.textColor = 0x333333;
		t.top = 438;
		return t;
	};
	_proto.label_tagTwo_i = function () {
		var t = new eui.Label();
		this.label_tagTwo = t;
		t.bold = true;
		t.fontFamily = "雅黑";
		t.horizontalCenter = 0;
		t.italic = true;
		t.size = 48;
		t.text = "06′28″215";
		t.textAlign = "center";
		t.textColor = 0xff0000;
		t.top = 488;
		return t;
	};
	return CommonFinishSkin;
})(eui.Skin);generateEUI.paths['resource/skin/common/CommonGameForm.exml'] = window.CommonGameFormSkin = (function (_super) {
	__extends(CommonGameFormSkin, _super);
	function CommonGameFormSkin() {
		_super.call(this);
		this.skinParts = ["gameIcon","img_gameTouch"];
		
		this.height = 1080;
		this.width = 400;
		this.elementsContent = [this.gameIcon_i(),this.img_gameTouch_i()];
	}
	var _proto = CommonGameFormSkin.prototype;

	_proto.gameIcon_i = function () {
		var t = new CommonGameIcon();
		this.gameIcon = t;
		t.horizontalCenter = 0;
		t.top = 122;
		return t;
	};
	_proto.img_gameTouch_i = function () {
		var t = new eui.Image();
		this.img_gameTouch = t;
		t.height = 549;
		t.horizontalCenter = 0;
		t.verticalCenter = 264;
		t.width = 371;
		return t;
	};
	return CommonGameFormSkin;
})(eui.Skin);generateEUI.paths['resource/skin/common/CommonGameIcon.exml'] = window.CommonGameIconSkin = (function (_super) {
	__extends(CommonGameIconSkin, _super);
	function CommonGameIconSkin() {
		_super.call(this);
		this.skinParts = ["icon","label_num","label_time","label_step"];
		
		this.height = 125;
		this.width = 311;
		this.elementsContent = [this._Image1_i(),this.icon_i(),this.label_num_i(),this.label_time_i(),this.label_step_i()];
	}
	var _proto = CommonGameIconSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "gameIconBg_png";
		t.top = 0;
		return t;
	};
	_proto.icon_i = function () {
		var t = new eui.Image();
		this.icon = t;
		t.bottom = 0;
		t.left = 0;
		t.top = 0;
		t.width = 120;
		return t;
	};
	_proto.label_num_i = function () {
		var t = new eui.Label();
		this.label_num = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 60;
		t.size = 48;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xff0000;
		t.top = 10;
		return t;
	};
	_proto.label_time_i = function () {
		var t = new eui.Label();
		this.label_time = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 65;
		t.size = 26;
		t.text = "";
		t.textAlign = "center";
		t.top = 62;
		return t;
	};
	_proto.label_step_i = function () {
		var t = new eui.Label();
		this.label_step = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 65;
		t.size = 24;
		t.text = "";
		t.top = 92;
		return t;
	};
	return CommonGameIconSkin;
})(eui.Skin);generateEUI.paths['resource/skin/common/CommonIcon.exml'] = window.CommonIconSkin = (function (_super) {
	__extends(CommonIconSkin, _super);
	function CommonIconSkin() {
		_super.call(this);
		this.skinParts = ["img_icon","label_name"];
		
		this.height = 229;
		this.width = 170;
		this.elementsContent = [this.img_icon_i(),this.label_name_i()];
	}
	var _proto = CommonIconSkin.prototype;

	_proto.img_icon_i = function () {
		var t = new eui.Image();
		this.img_icon = t;
		t.height = 170;
		t.horizontalCenter = 0;
		t.top = 0;
		t.width = 170;
		return t;
	};
	_proto.label_name_i = function () {
		var t = new eui.Label();
		this.label_name = t;
		t.bottom = 0;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 36;
		t.text = "啊哈哈";
		t.textColor = 0x333333;
		return t;
	};
	return CommonIconSkin;
})(eui.Skin);generateEUI.paths['resource/skin/common/CommonList.exml'] = window.CommonListSkin = (function (_super) {
	__extends(CommonListSkin, _super);
	function CommonListSkin() {
		_super.call(this);
		this.skinParts = ["list_icon"];
		
		this.elementsContent = [this.list_icon_i()];
	}
	var _proto = CommonListSkin.prototype;

	_proto.list_icon_i = function () {
		var t = new eui.List();
		this.list_icon = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return CommonListSkin;
})(eui.Skin);generateEUI.paths['resource/skin/common/CommonListItemSkin.exml'] = window.CommonListItemSkin = (function (_super) {
	__extends(CommonListItemSkin, _super);
	function CommonListItemSkin() {
		_super.call(this);
		this.skinParts = ["img_icon"];
		
		this.height = 85;
		this.width = 85;
		this.elementsContent = [this.img_icon_i()];
	}
	var _proto = CommonListItemSkin.prototype;

	_proto.img_icon_i = function () {
		var t = new eui.Image();
		this.img_icon = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	return CommonListItemSkin;
})(eui.Skin);generateEUI.paths['resource/skin/common/CommonResultItem.exml'] = window.CommonResultItemSkin = (function (_super) {
	__extends(CommonResultItemSkin, _super);
	function CommonResultItemSkin() {
		_super.call(this);
		this.skinParts = ["img_icon","label_name","label_nums","label_times"];
		
		this.height = 100;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this.img_icon_i(),this.label_name_i(),this.label_nums_i(),this.label_times_i()];
	}
	var _proto = CommonResultItemSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "list_itemBg_png";
		t.top = 0;
		return t;
	};
	_proto.img_icon_i = function () {
		var t = new eui.Image();
		this.img_icon = t;
		t.height = 100;
		t.left = 0;
		t.top = 0;
		t.width = 100;
		return t;
	};
	_proto.label_name_i = function () {
		var t = new eui.Label();
		this.label_name = t;
		t.fontFamily = "Microsoft YaHei";
		t.italic = true;
		t.left = 110;
		t.text = "Label";
		t.textAlign = "center";
		t.textColor = 0x333333;
		t.verticalCenter = 0;
		return t;
	};
	_proto.label_nums_i = function () {
		var t = new eui.Label();
		this.label_nums = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 30;
		t.italic = true;
		t.text = "Label";
		t.textAlign = "center";
		t.textColor = 0x333333;
		t.verticalCenter = 0;
		return t;
	};
	_proto.label_times_i = function () {
		var t = new eui.Label();
		this.label_times = t;
		t.horizontalCenter = 220;
		t.text = "Label";
		t.textAlign = "center";
		t.verticalCenter = 0;
		return t;
	};
	return CommonResultItemSkin;
})(eui.Skin);generateEUI.paths['resource/skin/common/CommonSettingItem.exml'] = window.CommonSettingItemSkin = (function (_super) {
	__extends(CommonSettingItemSkin, _super);
	function CommonSettingItemSkin() {
		_super.call(this);
		this.skinParts = ["btn_reduce","btn_add","label_title","label_num"];
		
		this.height = 108;
		this.width = 316;
		this.elementsContent = [this._Image1_i(),this.btn_reduce_i(),this.btn_add_i(),this.label_title_i(),this.label_num_i()];
	}
	var _proto = CommonSettingItemSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "editBg_png";
		t.top = 48;
		return t;
	};
	_proto.btn_reduce_i = function () {
		var t = new eui.Image();
		this.btn_reduce = t;
		t.bottom = 26;
		t.left = 0;
		return t;
	};
	_proto.btn_add_i = function () {
		var t = new eui.Image();
		this.btn_add = t;
		t.bottom = 17;
		t.right = 0;
		return t;
	};
	_proto.label_title_i = function () {
		var t = new eui.Label();
		this.label_title = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 36;
		t.text = "Label";
		t.textColor = 0x3d3838;
		t.top = 0;
		return t;
	};
	_proto.label_num_i = function () {
		var t = new eui.Label();
		this.label_num = t;
		t.bottom = 10;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 36;
		t.text = "Label";
		t.textColor = 0x333333;
		return t;
	};
	return CommonSettingItemSkin;
})(eui.Skin);generateEUI.paths['resource/skin/common/CommonSetting.exml'] = window.CommonSettingSkin = (function (_super) {
	__extends(CommonSettingSkin, _super);
	function CommonSettingSkin() {
		_super.call(this);
		this.skinParts = ["img_timeTitleBg","img_timeBg","item_top","item_center","item_bottom"];
		
		this.height = 672;
		this.width = 525;
		this.elementsContent = [this.img_timeTitleBg_i(),this.img_timeBg_i(),this.item_top_i(),this.item_center_i(),this.item_bottom_i()];
	}
	var _proto = CommonSettingSkin.prototype;

	_proto.img_timeTitleBg_i = function () {
		var t = new eui.Image();
		this.img_timeTitleBg = t;
		t.left = 0;
		t.top = 0;
		return t;
	};
	_proto.img_timeBg_i = function () {
		var t = new eui.Image();
		this.img_timeBg = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		return t;
	};
	_proto.item_top_i = function () {
		var t = new ui.CommonSettingItem();
		this.item_top = t;
		t.horizontalCenter = 0;
		t.skinName = "CommonSettingItemSkin";
		t.top = 144;
		return t;
	};
	_proto.item_center_i = function () {
		var t = new ui.CommonSettingItem();
		this.item_center = t;
		t.horizontalCenter = 0;
		t.top = 321;
		return t;
	};
	_proto.item_bottom_i = function () {
		var t = new ui.CommonSettingItem();
		this.item_bottom = t;
		t.horizontalCenter = 0;
		t.top = 496;
		return t;
	};
	return CommonSettingSkin;
})(eui.Skin);generateEUI.paths['resource/skin/skins/CountDownSkin.exml'] = window.CountDownSkin = (function (_super) {
	__extends(CountDownSkin, _super);
	var CountDownSkin$Skin1 = 	(function (_super) {
		__extends(CountDownSkin$Skin1, _super);
		function CountDownSkin$Skin1() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CountDownSkin$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "pauseBtn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return CountDownSkin$Skin1;
	})(eui.Skin);

	var CountDownSkin$Skin2 = 	(function (_super) {
		__extends(CountDownSkin$Skin2, _super);
		function CountDownSkin$Skin2() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","skipBtn_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","skipBtn_png")
					])
			];
		}
		var _proto = CountDownSkin$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "skipBtn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return CountDownSkin$Skin2;
	})(eui.Skin);

	function CountDownSkin() {
		_super.call(this);
		this.skinParts = ["btn_pause","label_tip","label_time","btn_skip","list_L","list_C","list_R"];
		
		this.height = 1080;
		this.width = 1920;
		this.elementsContent = [this.btn_pause_i(),this._Group1_i(),this.btn_skip_i(),this.list_L_i(),this.list_C_i(),this.list_R_i()];
	}
	var _proto = CountDownSkin.prototype;

	_proto.btn_pause_i = function () {
		var t = new eui.Button();
		this.btn_pause = t;
		t.label = "";
		t.left = 15;
		t.top = 23;
		t.skinName = CountDownSkin$Skin1;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 131;
		t.right = 32;
		t.elementsContent = [this._Image1_i(),this.label_tip_i(),this.label_time_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "DemonstrationBg_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.label_tip_i = function () {
		var t = new eui.Label();
		this.label_tip = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.italic = true;
		t.size = 30;
		t.text = "";
		t.verticalCenter = -42.5;
		return t;
	};
	_proto.label_time_i = function () {
		var t = new eui.Label();
		this.label_time = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = -15;
		t.italic = true;
		t.size = 96;
		t.text = "";
		t.textAlign = "center";
		t.verticalCenter = 37;
		t.width = 300;
		return t;
	};
	_proto.btn_skip_i = function () {
		var t = new eui.Button();
		this.btn_skip = t;
		t.bottom = 38;
		t.label = "";
		t.right = 32;
		t.skinName = CountDownSkin$Skin2;
		return t;
	};
	_proto.list_L_i = function () {
		var t = new CommonList();
		this.list_L = t;
		t.horizontalCenter = -592.5;
		t.top = 15;
		return t;
	};
	_proto.list_C_i = function () {
		var t = new CommonList();
		this.list_C = t;
		t.horizontalCenter = 0;
		t.top = 15;
		return t;
	};
	_proto.list_R_i = function () {
		var t = new CommonList();
		this.list_R = t;
		t.horizontalCenter = 592.5;
		t.top = 15;
		return t;
	};
	return CountDownSkin;
})(eui.Skin);generateEUI.paths['resource/skin/skins/HomeCitySkin.exml'] = window.HomeCitySkin = (function (_super) {
	__extends(HomeCitySkin, _super);
	var HomeCitySkin$Skin3 = 	(function (_super) {
		__extends(HomeCitySkin$Skin3, _super);
		function HomeCitySkin$Skin3() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","backBtn_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HomeCitySkin$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "backBtn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return HomeCitySkin$Skin3;
	})(eui.Skin);

	var HomeCitySkin$Skin4 = 	(function (_super) {
		__extends(HomeCitySkin$Skin4, _super);
		function HomeCitySkin$Skin4() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","startXLImg_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HomeCitySkin$Skin4.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "startXLImg_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return HomeCitySkin$Skin4;
	})(eui.Skin);

	var HomeCitySkin$Skin5 = 	(function (_super) {
		__extends(HomeCitySkin$Skin5, _super);
		function HomeCitySkin$Skin5() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","setupImg_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HomeCitySkin$Skin5.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "setupImg_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return HomeCitySkin$Skin5;
	})(eui.Skin);

	var HomeCitySkin$Skin6 = 	(function (_super) {
		__extends(HomeCitySkin$Skin6, _super);
		function HomeCitySkin$Skin6() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","teachImg_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HomeCitySkin$Skin6.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "teachImg_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return HomeCitySkin$Skin6;
	})(eui.Skin);

	function HomeCitySkin() {
		_super.call(this);
		this.skinParts = ["btn_back","img_bottom","btn_startXL","btn_startSetUp","btn_StartShow","label_fitness","label_stay","label_heart","label_power"];
		
		this.height = 1080;
		this.width = 1920;
		this.elementsContent = [this.btn_back_i(),this._Image1_i(),this._Image2_i(),this.img_bottom_i(),this.btn_startXL_i(),this.btn_startSetUp_i(),this.btn_StartShow_i(),this.label_fitness_i(),this.label_stay_i(),this.label_heart_i(),this.label_power_i()];
	}
	var _proto = HomeCitySkin.prototype;

	_proto.btn_back_i = function () {
		var t = new eui.Button();
		this.btn_back = t;
		t.enabled = true;
		t.label = "";
		t.left = 15;
		t.top = 23;
		t.skinName = HomeCitySkin$Skin3;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.right = 15;
		t.source = "logo_png";
		t.top = 18;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.left = 86;
		t.source = "hotTitleImg_png";
		t.top = 579;
		return t;
	};
	_proto.img_bottom_i = function () {
		var t = new eui.Image();
		this.img_bottom = t;
		t.bottom = 0;
		t.right = 0;
		t.source = "rightBgImg_png";
		return t;
	};
	_proto.btn_startXL_i = function () {
		var t = new eui.Button();
		this.btn_startXL = t;
		t.enabled = true;
		t.label = "";
		t.left = 0;
		t.top = 704;
		t.skinName = HomeCitySkin$Skin4;
		return t;
	};
	_proto.btn_startSetUp_i = function () {
		var t = new eui.Button();
		this.btn_startSetUp = t;
		t.enabled = true;
		t.label = "";
		t.left = 0;
		t.top = 828;
		t.skinName = HomeCitySkin$Skin5;
		return t;
	};
	_proto.btn_StartShow_i = function () {
		var t = new eui.Button();
		this.btn_StartShow = t;
		t.enabled = true;
		t.label = "";
		t.left = 223;
		t.top = 828;
		t.skinName = HomeCitySkin$Skin6;
		return t;
	};
	_proto.label_fitness_i = function () {
		var t = new eui.Group();
		this.label_fitness = t;
		t.bottom = 18;
		t.right = 604;
		t.elementsContent = [this._Label1_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.italic = true;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 30;
		t.text = "综合体能";
		t.verticalCenter = 0;
		t.x = -416;
		t.y = -537;
		return t;
	};
	_proto.label_stay_i = function () {
		var t = new eui.Group();
		this.label_stay = t;
		t.bottom = 18;
		t.right = 420;
		t.elementsContent = [this._Label2_i()];
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.italic = true;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 30;
		t.text = "上肢耐力";
		t.verticalCenter = 0;
		t.x = -600;
		t.y = -537;
		return t;
	};
	_proto.label_heart_i = function () {
		var t = new eui.Group();
		this.label_heart = t;
		t.bottom = 18;
		t.right = 236;
		t.elementsContent = [this._Label3_i()];
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.italic = true;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 30;
		t.text = "心肺耐力";
		t.verticalCenter = 0;
		t.x = -784;
		t.y = -537;
		return t;
	};
	_proto.label_power_i = function () {
		var t = new eui.Group();
		this.label_power = t;
		t.bottom = 18;
		t.right = 67;
		t.elementsContent = [this._Label4_i()];
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.italic = true;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 30;
		t.text = "爆发力";
		t.verticalCenter = 0;
		t.x = -938;
		t.y = -537;
		return t;
	};
	return HomeCitySkin;
})(eui.Skin);generateEUI.paths['resource/skin/skins/LoginSkin.exml'] = window.LoginSkin = (function (_super) {
	__extends(LoginSkin, _super);
	var LoginSkin$Skin7 = 	(function (_super) {
		__extends(LoginSkin$Skin7, _super);
		function LoginSkin$Skin7() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","backBtn_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","backBtn_png")
					])
			];
		}
		var _proto = LoginSkin$Skin7.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "backBtn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginSkin$Skin7;
	})(eui.Skin);

	var LoginSkin$Skin8 = 	(function (_super) {
		__extends(LoginSkin$Skin8, _super);
		function LoginSkin$Skin8() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","startXLBtn_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","startXLBtn_png")
					])
			];
		}
		var _proto = LoginSkin$Skin8.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "startXLBtn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginSkin$Skin8;
	})(eui.Skin);

	function LoginSkin() {
		_super.call(this);
		this.skinParts = ["btn_back","group_code1","iconList1","grou_left","group_code2","iconList2","group_center","group_code3","iconList3","group_right","btn_start"];
		
		this.height = 1080;
		this.width = 1920;
		this.elementsContent = [this.btn_back_i(),this.grou_left_i(),this.group_center_i(),this.group_right_i(),this.btn_start_i()];
	}
	var _proto = LoginSkin.prototype;

	_proto.btn_back_i = function () {
		var t = new eui.Button();
		this.btn_back = t;
		t.enabled = true;
		t.label = "";
		t.left = 23;
		t.top = 16;
		t.skinName = LoginSkin$Skin7;
		return t;
	};
	_proto.grou_left_i = function () {
		var t = new eui.Group();
		this.grou_left = t;
		t.left = 193;
		t.top = 234;
		t.elementsContent = [this._Image1_i(),this._Label1_i(),this.group_code1_i(),this.iconList1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "IconLeftBg_png";
		t.top = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = -21;
		t.italic = true;
		t.size = 30;
		t.text = "微信扫码登录";
		t.textColor = 0x333333;
		t.top = 305;
		return t;
	};
	_proto.group_code1_i = function () {
		var t = new eui.Group();
		this.group_code1 = t;
		t.height = 225;
		t.horizontalCenter = -18;
		t.top = 55;
		t.width = 225;
		return t;
	};
	_proto.iconList1_i = function () {
		var t = new CommonList();
		this.iconList1 = t;
		t.horizontalCenter = -15;
		t.top = 357;
		return t;
	};
	_proto.group_center_i = function () {
		var t = new eui.Group();
		this.group_center = t;
		t.horizontalCenter = 0;
		t.top = 234;
		t.elementsContent = [this._Image2_i(),this._Label2_i(),this.group_code2_i(),this.iconList2_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "IconCenterBg_png";
		t.top = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.italic = true;
		t.size = 30;
		t.text = "微信扫码登录";
		t.textColor = 0x333333;
		t.top = 305;
		return t;
	};
	_proto.group_code2_i = function () {
		var t = new eui.Group();
		this.group_code2 = t;
		t.height = 230;
		t.horizontalCenter = 0;
		t.top = 50;
		t.width = 230;
		return t;
	};
	_proto.iconList2_i = function () {
		var t = new CommonList();
		this.iconList2 = t;
		t.horizontalCenter = 0;
		t.top = 357;
		return t;
	};
	_proto.group_right_i = function () {
		var t = new eui.Group();
		this.group_right = t;
		t.right = 193;
		t.top = 234;
		t.elementsContent = [this._Image3_i(),this._Label3_i(),this.group_code3_i(),this.iconList3_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "IconRightBg_png";
		t.top = 0;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 22;
		t.size = 30;
		t.text = "微信扫码登录";
		t.textColor = 0x333333;
		t.top = 305;
		return t;
	};
	_proto.group_code3_i = function () {
		var t = new eui.Group();
		this.group_code3 = t;
		t.height = 235;
		t.horizontalCenter = 20;
		t.top = 47;
		t.width = 235;
		return t;
	};
	_proto.iconList3_i = function () {
		var t = new CommonList();
		this.iconList3 = t;
		t.horizontalCenter = 15;
		t.top = 357;
		return t;
	};
	_proto.btn_start_i = function () {
		var t = new eui.Button();
		this.btn_start = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.top = 782;
		t.skinName = LoginSkin$Skin8;
		return t;
	};
	return LoginSkin;
})(eui.Skin);generateEUI.paths['resource/skin/skins/MainUISkin.exml'] = window.MainUISkin = (function (_super) {
	__extends(MainUISkin, _super);
	function MainUISkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 1080;
		this.width = 1920;
		this.elementsContent = [this._Image1_i()];
	}
	var _proto = MainUISkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "bgImg_png";
		t.top = 0;
		return t;
	};
	return MainUISkin;
})(eui.Skin);generateEUI.paths['resource/skin/skins/ReadySkin.exml'] = window.ReadySkin = (function (_super) {
	__extends(ReadySkin, _super);
	var ReadySkin$Skin9 = 	(function (_super) {
		__extends(ReadySkin$Skin9, _super);
		function ReadySkin$Skin9() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","backBtn_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ReadySkin$Skin9.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "backBtn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ReadySkin$Skin9;
	})(eui.Skin);

	var ReadySkin$Skin10 = 	(function (_super) {
		__extends(ReadySkin$Skin10, _super);
		function ReadySkin$Skin10() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","skipBtn_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","skipBtn_png")
					])
			];
		}
		var _proto = ReadySkin$Skin10.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "skipBtn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ReadySkin$Skin10;
	})(eui.Skin);

	function ReadySkin() {
		_super.call(this);
		this.skinParts = ["label_bottomTip","label_time","label_tip","icon_left","icon_center","icon_right","img_leftBye","img_centerBye","img_rightBye","btn_back","btn_skip"];
		
		this.height = 1080;
		this.width = 1920;
		this.elementsContent = [this._Group1_i(),this.label_tip_i(),this.icon_left_i(),this.icon_center_i(),this.icon_right_i(),this.img_leftBye_i(),this.img_centerBye_i(),this.img_rightBye_i(),this.btn_back_i(),this.btn_skip_i()];
	}
	var _proto = ReadySkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 131;
		t.right = 32;
		t.elementsContent = [this._Image1_i(),this.label_bottomTip_i(),this.label_time_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "DemonstrationBg_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.label_bottomTip_i = function () {
		var t = new eui.Label();
		this.label_bottomTip = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.italic = true;
		t.size = 30;
		t.text = "";
		t.verticalCenter = -42.5;
		return t;
	};
	_proto.label_time_i = function () {
		var t = new eui.Label();
		this.label_time = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = -15;
		t.italic = true;
		t.size = 96;
		t.text = "";
		t.textAlign = "center";
		t.verticalCenter = 37;
		t.width = 300;
		return t;
	};
	_proto.label_tip_i = function () {
		var t = new eui.Label();
		this.label_tip = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.italic = true;
		t.size = 48;
		t.text = "训练即将开始请做准备";
		t.textColor = 0x333333;
		t.top = 228;
		return t;
	};
	_proto.icon_left_i = function () {
		var t = new ui.CommonIcon();
		this.icon_left = t;
		t.horizontalCenter = -537;
		t.top = 410;
		return t;
	};
	_proto.icon_center_i = function () {
		var t = new ui.CommonIcon();
		this.icon_center = t;
		t.horizontalCenter = 0;
		t.top = 410;
		return t;
	};
	_proto.icon_right_i = function () {
		var t = new ui.CommonIcon();
		this.icon_right = t;
		t.horizontalCenter = 537;
		t.top = 410;
		return t;
	};
	_proto.img_leftBye_i = function () {
		var t = new eui.Image();
		this.img_leftBye = t;
		t.horizontalCenter = -537;
		t.source = "byeBg_png";
		t.top = 475;
		return t;
	};
	_proto.img_centerBye_i = function () {
		var t = new eui.Image();
		this.img_centerBye = t;
		t.horizontalCenter = 0;
		t.source = "byeBg_png";
		t.top = 475;
		return t;
	};
	_proto.img_rightBye_i = function () {
		var t = new eui.Image();
		this.img_rightBye = t;
		t.horizontalCenter = 537;
		t.source = "byeBg_png";
		t.top = 475;
		return t;
	};
	_proto.btn_back_i = function () {
		var t = new eui.Button();
		this.btn_back = t;
		t.label = "";
		t.left = 23;
		t.top = 16;
		t.skinName = ReadySkin$Skin9;
		return t;
	};
	_proto.btn_skip_i = function () {
		var t = new eui.Button();
		this.btn_skip = t;
		t.bottom = 38;
		t.label = "";
		t.right = 32;
		t.skinName = ReadySkin$Skin10;
		return t;
	};
	return ReadySkin;
})(eui.Skin);generateEUI.paths['resource/skin/skins/ResultSkin.exml'] = window.ResultSkin = (function (_super) {
	__extends(ResultSkin, _super);
	var ResultSkin$Skin11 = 	(function (_super) {
		__extends(ResultSkin$Skin11, _super);
		function ResultSkin$Skin11() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","backBtn_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","backBtn_png")
					])
			];
		}
		var _proto = ResultSkin$Skin11.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "backBtn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ResultSkin$Skin11;
	})(eui.Skin);

	var ResultSkin$Skin12 = 	(function (_super) {
		__extends(ResultSkin$Skin12, _super);
		function ResultSkin$Skin12() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_newChange_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","btn_newChange_png")
					])
			];
		}
		var _proto = ResultSkin$Skin12.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_newChange_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ResultSkin$Skin12;
	})(eui.Skin);

	var ResultSkin$Skin13 = 	(function (_super) {
		__extends(ResultSkin$Skin13, _super);
		function ResultSkin$Skin13() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","list_pre_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","list_pre_png")
					])
			];
		}
		var _proto = ResultSkin$Skin13.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "list_pre_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ResultSkin$Skin13;
	})(eui.Skin);

	var ResultSkin$Skin14 = 	(function (_super) {
		__extends(ResultSkin$Skin14, _super);
		function ResultSkin$Skin14() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","list_next_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","list_next_png")
					])
			];
		}
		var _proto = ResultSkin$Skin14.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "list_next_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ResultSkin$Skin14;
	})(eui.Skin);

	function ResultSkin() {
		_super.call(this);
		this.skinParts = ["list_left","list_right","label_title","btn_back","btn_newChange","btn_pre","btn_next"];
		
		this.height = 1080;
		this.width = 1920;
		this.elementsContent = [this._Group2_i(),this._Group4_i(),this.label_title_i(),this.btn_back_i(),this.btn_newChange_i(),this.btn_pre_i(),this.btn_next_i()];
	}
	var _proto = ResultSkin.prototype;

	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 762;
		t.horizontalCenter = -472;
		t.top = 142;
		t.width = 750;
		t.elementsContent = [this._Group1_i(),this.list_left_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image1_i(),this._Label1_i(),this._Label2_i(),this._Label3_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "list_titleBg_png";
		t.top = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = -243;
		t.italic = true;
		t.text = "名字";
		t.textAlign = "center";
		t.textColor = 0x333333;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 30;
		t.italic = true;
		t.text = "完成次数";
		t.textAlign = "center";
		t.textColor = 0x333333;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 220;
		t.italic = true;
		t.text = "训练时间";
		t.textAlign = "center";
		t.textColor = 0x333333;
		t.verticalCenter = 0;
		return t;
	};
	_proto.list_left_i = function () {
		var t = new eui.List();
		this.list_left = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 60;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.height = 762;
		t.width = 750;
		t.x = 1052;
		t.y = 140;
		t.elementsContent = [this._Group3_i(),this.list_right_i()];
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this._Label4_i(),this._Label5_i(),this._Label6_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "list_titleBg_png";
		t.top = 0;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = -243;
		t.italic = true;
		t.text = "名字";
		t.textAlign = "center";
		t.textColor = 0x333333;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 30;
		t.italic = true;
		t.text = "完成次数";
		t.textAlign = "center";
		t.textColor = 0x333333;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 220;
		t.text = "训练时间";
		t.textColor = 0x333333;
		t.verticalCenter = 0;
		return t;
	};
	_proto.list_right_i = function () {
		var t = new eui.List();
		this.list_right = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 60;
		return t;
	};
	_proto.label_title_i = function () {
		var t = new eui.Label();
		this.label_title = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.italic = true;
		t.size = 48;
		t.text = "本次成绩";
		t.textColor = 0x333333;
		t.top = 19;
		return t;
	};
	_proto.btn_back_i = function () {
		var t = new eui.Button();
		this.btn_back = t;
		t.label = "";
		t.left = 15;
		t.top = 23;
		t.skinName = ResultSkin$Skin11;
		return t;
	};
	_proto.btn_newChange_i = function () {
		var t = new eui.Button();
		this.btn_newChange = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.top = 943;
		t.skinName = ResultSkin$Skin12;
		return t;
	};
	_proto.btn_pre_i = function () {
		var t = new eui.Button();
		this.btn_pre = t;
		t.label = "";
		t.left = 113;
		t.top = 943;
		t.skinName = ResultSkin$Skin13;
		return t;
	};
	_proto.btn_next_i = function () {
		var t = new eui.Button();
		this.btn_next = t;
		t.label = "";
		t.right = 113;
		t.top = 943;
		t.skinName = ResultSkin$Skin14;
		return t;
	};
	return ResultSkin;
})(eui.Skin);generateEUI.paths['resource/skin/skins/SetUpSkin.exml'] = window.SetUpSkin = (function (_super) {
	__extends(SetUpSkin, _super);
	var SetUpSkin$Skin15 = 	(function (_super) {
		__extends(SetUpSkin$Skin15, _super);
		function SetUpSkin$Skin15() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","saveBtnImg_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = SetUpSkin$Skin15.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "saveBtnImg_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return SetUpSkin$Skin15;
	})(eui.Skin);

	var SetUpSkin$Skin16 = 	(function (_super) {
		__extends(SetUpSkin$Skin16, _super);
		function SetUpSkin$Skin16() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","cancleBtnImg_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","cancleBtnImg_png")
					])
			];
		}
		var _proto = SetUpSkin$Skin16.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "cancleBtnImg_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return SetUpSkin$Skin16;
	})(eui.Skin);

	function SetUpSkin() {
		_super.call(this);
		this.skinParts = ["btn_save","btn_cancle","btn_time","btn_task"];
		
		this.height = 1080;
		this.width = 1920;
		this.elementsContent = [this.btn_save_i(),this.btn_cancle_i(),this.btn_time_i(),this.btn_task_i()];
	}
	var _proto = SetUpSkin.prototype;

	_proto.btn_save_i = function () {
		var t = new eui.Button();
		this.btn_save = t;
		t.label = "";
		t.left = 0;
		t.verticalCenter = -47;
		t.skinName = SetUpSkin$Skin15;
		return t;
	};
	_proto.btn_cancle_i = function () {
		var t = new eui.Button();
		this.btn_cancle = t;
		t.label = "";
		t.left = 0;
		t.verticalCenter = 47;
		t.skinName = SetUpSkin$Skin16;
		return t;
	};
	_proto.btn_time_i = function () {
		var t = new ui.CommonSetting();
		this.btn_time = t;
		t.left = 415;
		t.verticalCenter = 0;
		return t;
	};
	_proto.btn_task_i = function () {
		var t = new ui.CommonSetting();
		this.btn_task = t;
		t.left = 1125;
		t.verticalCenter = 0;
		return t;
	};
	return SetUpSkin;
})(eui.Skin);generateEUI.paths['resource/skin/skins/ShopSkin.exml'] = window.ShopSkin = (function (_super) {
	__extends(ShopSkin, _super);
	function ShopSkin() {
		_super.call(this);
		this.skinParts = ["closeBtn","img1","img2","img3","img4","img5","img6","img7","img8","img9","img10","btn1","btn2","btn3","btn4","btn5","btn6","btn7","btn8","btn9","btn10"];
		
		this.height = 960;
		this.width = 1280;
		this.elementsContent = [this._Image1_i(),this.closeBtn_i(),this.img1_i(),this.img2_i(),this.img3_i(),this.img4_i(),this.img5_i(),this.img6_i(),this.img7_i(),this.img8_i(),this.img9_i(),this.img10_i(),this.btn1_i(),this.btn2_i(),this.btn3_i(),this.btn4_i(),this.btn5_i(),this.btn6_i(),this.btn7_i(),this.btn8_i(),this.btn9_i(),this.btn10_i()];
	}
	var _proto = ShopSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "homeBg3_jpg";
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Button();
		this.closeBtn = t;
		t.label = "按钮";
		t.skinName = "main.CloseBtnSkin";
		t.x = 1154;
		t.y = 14;
		return t;
	};
	_proto.img1_i = function () {
		var t = new eui.Image();
		this.img1 = t;
		t.source = "activityBtn_png";
		t.x = 138;
		t.y = 59;
		return t;
	};
	_proto.img2_i = function () {
		var t = new eui.Image();
		this.img2 = t;
		t.source = "activityBtn_png";
		t.x = 138;
		t.y = 180;
		return t;
	};
	_proto.img3_i = function () {
		var t = new eui.Image();
		this.img3 = t;
		t.source = "activityBtn_png";
		t.x = 138;
		t.y = 301;
		return t;
	};
	_proto.img4_i = function () {
		var t = new eui.Image();
		this.img4 = t;
		t.source = "activityBtn_png";
		t.x = 138;
		t.y = 422;
		return t;
	};
	_proto.img5_i = function () {
		var t = new eui.Image();
		this.img5 = t;
		t.source = "activityBtn_png";
		t.x = 138;
		t.y = 543;
		return t;
	};
	_proto.img6_i = function () {
		var t = new eui.Image();
		this.img6 = t;
		t.source = "activityBtn_png";
		t.x = 138;
		t.y = 664;
		return t;
	};
	_proto.img7_i = function () {
		var t = new eui.Image();
		this.img7 = t;
		t.source = "activityBtn_png";
		t.x = 138;
		t.y = 785;
		return t;
	};
	_proto.img8_i = function () {
		var t = new eui.Image();
		this.img8 = t;
		t.source = "activityBtn_png";
		t.x = 670;
		t.y = 61;
		return t;
	};
	_proto.img9_i = function () {
		var t = new eui.Image();
		this.img9 = t;
		t.source = "activityBtn_png";
		t.x = 670;
		t.y = 183;
		return t;
	};
	_proto.img10_i = function () {
		var t = new eui.Image();
		this.img10 = t;
		t.source = "activityBtn_png";
		t.x = 670;
		t.y = 303;
		return t;
	};
	_proto.btn1_i = function () {
		var t = new eui.Button();
		this.btn1 = t;
		t.label = "图片特效1";
		t.x = 336;
		t.y = 85;
		return t;
	};
	_proto.btn2_i = function () {
		var t = new eui.Button();
		this.btn2 = t;
		t.label = "图片特效2";
		t.x = 336;
		t.y = 208;
		return t;
	};
	_proto.btn3_i = function () {
		var t = new eui.Button();
		this.btn3 = t;
		t.label = "图片特效3";
		t.x = 336;
		t.y = 330;
		return t;
	};
	_proto.btn4_i = function () {
		var t = new eui.Button();
		this.btn4 = t;
		t.label = "图片特效4";
		t.x = 336;
		t.y = 453;
		return t;
	};
	_proto.btn5_i = function () {
		var t = new eui.Button();
		this.btn5 = t;
		t.label = "图片特效5";
		t.x = 336;
		t.y = 576;
		return t;
	};
	_proto.btn6_i = function () {
		var t = new eui.Button();
		this.btn6 = t;
		t.label = "图片特效6";
		t.x = 336;
		t.y = 698;
		return t;
	};
	_proto.btn7_i = function () {
		var t = new eui.Button();
		this.btn7 = t;
		t.label = "图片特效7";
		t.x = 336;
		t.y = 821;
		return t;
	};
	_proto.btn8_i = function () {
		var t = new eui.Button();
		this.btn8 = t;
		t.label = "图片特效8";
		t.x = 897;
		t.y = 75;
		return t;
	};
	_proto.btn9_i = function () {
		var t = new eui.Button();
		this.btn9 = t;
		t.label = "图片特效9";
		t.x = 897;
		t.y = 200;
		return t;
	};
	_proto.btn10_i = function () {
		var t = new eui.Button();
		this.btn10 = t;
		t.label = "图片特效10";
		t.x = 897;
		t.y = 320;
		return t;
	};
	return ShopSkin;
})(eui.Skin);generateEUI.paths['resource/skin/skins/TaskTypeSkin.exml'] = window.TaskTypeSkin = (function (_super) {
	__extends(TaskTypeSkin, _super);
	var TaskTypeSkin$Skin17 = 	(function (_super) {
		__extends(TaskTypeSkin$Skin17, _super);
		function TaskTypeSkin$Skin17() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","pauseBtn_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","pauseBtn_png")
					])
			];
		}
		var _proto = TaskTypeSkin$Skin17.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "pauseBtn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return TaskTypeSkin$Skin17;
	})(eui.Skin);

	var TaskTypeSkin$Skin18 = 	(function (_super) {
		__extends(TaskTypeSkin$Skin18, _super);
		function TaskTypeSkin$Skin18() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_result_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","btn_result_png")
					])
			];
		}
		var _proto = TaskTypeSkin$Skin18.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_result_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return TaskTypeSkin$Skin18;
	})(eui.Skin);

	function TaskTypeSkin() {
		_super.call(this);
		this.skinParts = ["l_finish","l_prepara","l_progress","c_finish","c_prepara","c_progress","r_finish","r_prepara","r_progress","btn_back","btn_result"];
		
		this.height = 1080;
		this.width = 1920;
		this.elementsContent = [this.l_finish_i(),this.l_prepara_i(),this.l_progress_i(),this.c_finish_i(),this.c_prepara_i(),this.c_progress_i(),this.r_finish_i(),this.r_prepara_i(),this.r_progress_i(),this.btn_back_i(),this.btn_result_i()];
	}
	var _proto = TaskTypeSkin.prototype;

	_proto.l_finish_i = function () {
		var t = new CommonFinish();
		this.l_finish = t;
		t.left = 137;
		t.top = 258;
		t.visible = false;
		return t;
	};
	_proto.l_prepara_i = function () {
		var t = new CommonCutDown();
		this.l_prepara = t;
		t.left = 169;
		t.top = 258;
		t.visible = false;
		return t;
	};
	_proto.l_progress_i = function () {
		var t = new CommonGameForm();
		this.l_progress = t;
		t.bottom = 0;
		t.horizontalCenter = -623;
		t.top = 0;
		t.visible = false;
		return t;
	};
	_proto.c_finish_i = function () {
		var t = new CommonFinish();
		this.c_finish = t;
		t.horizontalCenter = 0;
		t.top = 258;
		t.visible = false;
		return t;
	};
	_proto.c_prepara_i = function () {
		var t = new CommonCutDown();
		this.c_prepara = t;
		t.horizontalCenter = 0;
		t.top = 258;
		t.visible = false;
		return t;
	};
	_proto.c_progress_i = function () {
		var t = new CommonGameForm();
		this.c_progress = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.top = 0;
		t.visible = false;
		return t;
	};
	_proto.r_finish_i = function () {
		var t = new CommonFinish();
		this.r_finish = t;
		t.right = 137;
		t.top = 258;
		t.visible = false;
		return t;
	};
	_proto.r_prepara_i = function () {
		var t = new CommonCutDown();
		this.r_prepara = t;
		t.right = 169;
		t.top = 258;
		t.visible = false;
		return t;
	};
	_proto.r_progress_i = function () {
		var t = new CommonGameForm();
		this.r_progress = t;
		t.bottom = 0;
		t.horizontalCenter = 623;
		t.top = 0;
		t.visible = false;
		return t;
	};
	_proto.btn_back_i = function () {
		var t = new eui.Button();
		this.btn_back = t;
		t.label = "";
		t.left = 15;
		t.top = 23;
		t.skinName = TaskTypeSkin$Skin17;
		return t;
	};
	_proto.btn_result_i = function () {
		var t = new eui.Button();
		this.btn_result = t;
		t.enabled = true;
		t.horizontalCenter = 0;
		t.label = "";
		t.top = 880;
		t.skinName = TaskTypeSkin$Skin18;
		return t;
	};
	return TaskTypeSkin;
})(eui.Skin);generateEUI.paths['resource/skin/skins/TeachSkin.exml'] = window.TeachSkin = (function (_super) {
	__extends(TeachSkin, _super);
	var TeachSkin$Skin19 = 	(function (_super) {
		__extends(TeachSkin$Skin19, _super);
		function TeachSkin$Skin19() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","backBtn_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","backBtn_png")
					])
			];
		}
		var _proto = TeachSkin$Skin19.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "backBtn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return TeachSkin$Skin19;
	})(eui.Skin);

	function TeachSkin() {
		_super.call(this);
		this.skinParts = ["btn_back"];
		
		this.height = 1080;
		this.width = 1920;
		this.elementsContent = [this.btn_back_i()];
	}
	var _proto = TeachSkin.prototype;

	_proto.btn_back_i = function () {
		var t = new eui.Button();
		this.btn_back = t;
		t.label = "";
		t.left = 15;
		t.top = 23;
		t.skinName = TeachSkin$Skin19;
		return t;
	};
	return TeachSkin;
})(eui.Skin);generateEUI.paths['resource/skin/skins/TimeTypeSkin.exml'] = window.TimeTypeSkin = (function (_super) {
	__extends(TimeTypeSkin, _super);
	var TimeTypeSkin$Skin20 = 	(function (_super) {
		__extends(TimeTypeSkin$Skin20, _super);
		function TimeTypeSkin$Skin20() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","pauseBtn_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","pauseBtn_png")
					])
			];
		}
		var _proto = TimeTypeSkin$Skin20.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "pauseBtn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return TimeTypeSkin$Skin20;
	})(eui.Skin);

	function TimeTypeSkin() {
		_super.call(this);
		this.skinParts = ["btn_back","p_left","p_center","p_right","touch_left","touch_center","touch_right"];
		
		this.height = 1080;
		this.width = 1920;
		this.elementsContent = [this.btn_back_i(),this.p_left_i(),this.p_center_i(),this.p_right_i(),this.touch_left_i(),this.touch_center_i(),this.touch_right_i()];
	}
	var _proto = TimeTypeSkin.prototype;

	_proto.btn_back_i = function () {
		var t = new eui.Button();
		this.btn_back = t;
		t.label = "";
		t.left = 15;
		t.top = 23;
		t.skinName = TimeTypeSkin$Skin20;
		return t;
	};
	_proto.p_left_i = function () {
		var t = new CommonGameIcon();
		this.p_left = t;
		t.height = 125;
		t.left = 101.5;
		t.top = 122;
		t.width = 311;
		return t;
	};
	_proto.p_center_i = function () {
		var t = new CommonGameIcon();
		this.p_center = t;
		t.height = 125;
		t.horizontalCenter = 0;
		t.top = 122;
		t.width = 311;
		return t;
	};
	_proto.p_right_i = function () {
		var t = new CommonGameIcon();
		this.p_right = t;
		t.height = 125;
		t.right = 101.5;
		t.top = 122;
		t.width = 311;
		return t;
	};
	_proto.touch_left_i = function () {
		var t = new eui.Image();
		this.touch_left = t;
		t.height = 549;
		t.horizontalCenter = -695;
		t.source = "godWarBg_png";
		t.verticalCenter = 262;
		t.width = 371;
		return t;
	};
	_proto.touch_center_i = function () {
		var t = new eui.Image();
		this.touch_center = t;
		t.height = 381;
		t.horizontalCenter = 0;
		t.source = "godWarBg_png";
		t.verticalCenter = 262;
		t.width = 257;
		return t;
	};
	_proto.touch_right_i = function () {
		var t = new eui.Image();
		this.touch_right = t;
		t.height = 302;
		t.horizontalCenter = 695;
		t.source = "godWarBg_png";
		t.verticalCenter = 262;
		t.width = 204;
		return t;
	};
	return TimeTypeSkin;
})(eui.Skin);