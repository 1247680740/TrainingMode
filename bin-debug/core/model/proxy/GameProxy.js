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
  * 游戏数据读取模板
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  * 注意：
  * 不能直接操作vo数据，只能通过gameProxy操作
  */
var GameProxy = (function (_super) {
    __extends(GameProxy, _super);
    function GameProxy() {
        var _this = _super.call(this, GameProxy.NAME) || this;
        _this.leftPlayerArr = [];
        _this.centerPlayerArr = [];
        _this.rightPlayerArr = [];
        _this.vo = new GameVO();
        return _this;
    }
    /**
     * 获取游戏名称
     */
    GameProxy.prototype.getGameName = function () {
        if (!this.vo) {
            this.vo = new GameVO();
        }
        return this.vo.gameName;
    };
    /**
     * 设置游戏名称
     */
    GameProxy.prototype.setGameName = function (name) {
        if (!this.vo) {
            this.vo = new GameVO();
        }
        this.vo.gameName = name;
    };
    /** 设置游戏玩家相关数据 */
    GameProxy.prototype.setPlayerData = function (data) {
        this.leftPlayerArr = [];
        this.centerPlayerArr = [];
        this.rightPlayerArr = [];
        for (var key in data) {
            var playerData = data[key];
            if (playerData["type"] == 1) {
                var leftVo = new PlayerVO();
                leftVo.playerIcon = playerData["icon"];
                leftVo.playerName = playerData["name"];
                this.leftPlayerArr.push(leftVo);
            }
            else if (playerData["type"] == 2) {
                var centerVo = new PlayerVO();
                centerVo.playerIcon = playerData["icon"];
                centerVo.playerName = playerData["name"];
                this.centerPlayerArr.push(centerVo);
            }
            else if (playerData["type"] == 3) {
                var rightVo = new PlayerVO();
                rightVo.playerIcon = playerData["icon"];
                rightVo.playerName = playerData["name"];
                this.rightPlayerArr.push(rightVo);
            }
        }
        this.sendNotification(EventConfig.Event_UPDATE_PLAYER);
    };
    /**
     * 设置左侧玩家数据
     */
    GameProxy.prototype.setLeftPlayer = function (curPlayer) {
        if (!curPlayer) {
            return;
        }
        for (var i = 0; i < this.leftPlayerArr.length; i++) {
            if (this.leftPlayerArr[i].playerName == curPlayer.playerName) {
                var changePlayer = this.leftPlayerArr[i];
                changePlayer.playerName = curPlayer.playerName;
                changePlayer.playerIcon = curPlayer.playerIcon;
                changePlayer.playNums = curPlayer.playNums;
                changePlayer.playEveryTimes = curPlayer.playEveryTimes;
                changePlayer.playTimes = curPlayer.playTimes;
            }
        }
    };
    /**
     * 获取左侧游戏玩家数据
     */
    GameProxy.prototype.getLeftPlayer = function () {
        if (!this.leftPlayerArr) {
            this.leftPlayerArr = [];
        }
        return this.leftPlayerArr;
    };
    /**
     * 根据玩家Id获取左侧玩家数据
     */
    GameProxy.prototype.getCurLeftPlayer = function (playerName) {
        for (var i = 0; i < this.leftPlayerArr.length; i++) {
            if (this.leftPlayerArr[i].playerName == playerName) {
                return this.leftPlayerArr[i];
            }
        }
    };
    /**
     * 根据玩家Id删除相应左侧玩家数据
     */
    GameProxy.prototype.deleteLeftPlayer = function (playerVo) {
        for (var i = 0; i < this.leftPlayerArr.length; i++) {
            if (this.leftPlayerArr[i].playerName == playerVo.playerName) {
                this.leftPlayerArr.splice(i, 1);
            }
        }
    };
    /**
     * 设置中间玩家数据
     */
    GameProxy.prototype.setCenterPlayer = function (curPlayer) {
        if (!curPlayer) {
            return;
        }
        for (var i = 0; i < this.centerPlayerArr.length; i++) {
            if (this.centerPlayerArr[i].playerName == curPlayer.playerName) {
                var changePlayer = this.centerPlayerArr[i];
                changePlayer.playerName = curPlayer.playerName;
                changePlayer.playerIcon = curPlayer.playerIcon;
                changePlayer.playNums = curPlayer.playNums;
                changePlayer.playEveryTimes = curPlayer.playEveryTimes;
                changePlayer.playTimes = curPlayer.playTimes;
            }
        }
    };
    /**
     * 获取中间游戏玩家数据
     */
    GameProxy.prototype.getCenterPlayer = function () {
        if (!this.centerPlayerArr) {
            this.centerPlayerArr = [];
        }
        return this.centerPlayerArr;
    };
    /**
     * 根据玩家ID删除中间玩家数据
     */
    GameProxy.prototype.deleteCenterPlayer = function (curPlayer) {
        for (var i = 0; i < this.centerPlayerArr.length; i++) {
            if (this.centerPlayerArr[i].playerName == curPlayer.playerName) {
                this.centerPlayerArr.splice(i, 1);
            }
        }
    };
    /** 根据玩家名称获取中间玩家数据 */
    GameProxy.prototype.getCurCenterPlayer = function (playerName) {
        for (var i = 0; i < this.centerPlayerArr.length; i++) {
            if (this.centerPlayerArr[i].playerName == playerName) {
                return this.centerPlayerArr[i];
            }
        }
    };
    /**
     * 设置右侧游戏玩家数据
     */
    GameProxy.prototype.setRightPlayer = function (curPlayer) {
        if (!curPlayer) {
            return;
        }
        for (var i = 0; i < this.rightPlayerArr.length; i++) {
            if (this.rightPlayerArr[i].playerName == curPlayer.playerName) {
                var changePlayer = this.rightPlayerArr[i];
                changePlayer.playerName = curPlayer.playerName;
                changePlayer.playerIcon = curPlayer.playerIcon;
                changePlayer.playNums = curPlayer.playNums;
                changePlayer.playEveryTimes = curPlayer.playEveryTimes;
                changePlayer.playTimes = curPlayer.playTimes;
            }
        }
    };
    /**
     * 获取游戏右侧游戏玩家数据
     */
    GameProxy.prototype.getRightPlayer = function () {
        if (!this.rightPlayerArr) {
            this.rightPlayerArr = [];
        }
        return this.rightPlayerArr;
    };
    /** 根据玩家名称获取右侧玩家数据 */
    GameProxy.prototype.getCurRightPlayer = function (playerName) {
        for (var i = 0; i < this.rightPlayerArr.length; i++) {
            if (this.rightPlayerArr[i].playerName == playerName) {
                return this.rightPlayerArr[i];
            }
        }
    };
    /**
     * 根据玩家ID删除右侧玩家数据
     */
    GameProxy.prototype.deleteRightPlayer = function (curPlayer) {
        for (var i = 0; i < this.rightPlayerArr.length; i++) {
            if (this.rightPlayerArr[i].playerName == curPlayer.playerName) {
                this.rightPlayerArr.splice(i, 1);
            }
        }
    };
    GameProxy.NAME = "GameProxy"; //必须和excel导出文件一致
    return GameProxy;
}(ResourceProxyBase));
__reflect(GameProxy.prototype, "GameProxy");
