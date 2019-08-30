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
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Main.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        //inject the custom material parser
        //注入自定义的素材解析器
        var assetAdapter = new AssetAdapter();
        this.stage.registerImplementation("eui.IAssetAdapter", assetAdapter);
        //资源加载--todo
        //loading条初始化显示移除
        var theme = new eui.Theme("resource/default.thm.json", this.stage);
        //游戏自定义容器添加到舞台上
        this.addChild(GameLayerManager.gameLayer());
        //初始化Resource资源加载库
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/resource.json", "resource/");
    };
    /**
     * 配置文件加载完成,开始预加载preload资源组。
     */
    Main.prototype.onConfigComplete = function (event) {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.loadGroup("loading", 1);
        RES.loadGroup("preload");
    };
    /**
     * preload资源组加载完成
     */
    Main.prototype.onResourceLoadComplete = function (event) {
        if (event.groupName == "loading") {
            //设置加载进度界面
            this.loadingView = new LoadingUI();
            GameLayerManager.gameLayer().addChild(this.loadingView);
        }
        else if (event.groupName == "preload") {
            this.loadingView.removeEvent();
            GameLayerManager.gameLayer().removeChild(this.loadingView);
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            this.connetServer();
            this.createGameScene();
        }
    };
    /**
     * preload资源组加载进度
     */
    Main.prototype.onResourceProgress = function (event) {
        if (event.groupName == "preload") {
            if (this.loadingView) {
                this.loadingView.setProgress(event.itemsLoaded, event.itemsTotal);
            }
        }
    };
    /**
     * 链接服务器
     */
    Main.prototype.connetServer = function () {
        SocketManager.SocketProxy.getInstance().connectServer("echo.websocket.org", 80);
    };
    /**
     * 创建游戏场景
     */
    Main.prototype.createGameScene = function () {
        game.AppFacade.getInstance().startUp(GameLayerManager.gameLayer());
        game.AppFacade.getInstance().sendNotification(NoficationConfig.OPEN_MAIN);
        game.AppFacade.getInstance().sendNotification(NoficationConfig.OPEN_HOME);
        this.removeEventListener(NoficationConfig.CONNECT_SERVER_SUCCESS, this.createGameScene, this);
    };
    return Main;
}(eui.UILayer));
__reflect(Main.prototype, "Main");
