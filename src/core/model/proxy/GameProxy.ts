/**
  * 游戏数据读取模板
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved. 
  * 注意：
  * 不能直接操作vo数据，只能通过gameProxy操作
  */
class GameProxy extends ResourceProxyBase {
    public static NAME: string = "GameProxy";//必须和excel导出文件一致
    private vo: GameVO;
    private leftPlayerArr: Array<PlayerVO> = [];
    private centerPlayerArr: Array<PlayerVO> = [];
    private rightPlayerArr: Array<PlayerVO> = [];

    public constructor() {
        super(GameProxy.NAME);
        this.vo = new GameVO();
    }

    /**
     * 获取游戏名称
     */
    public getGameName(): string {
        if (!this.vo) {
            this.vo = new GameVO();
        }
        return this.vo.gameName;
    }

    /**
     * 设置游戏名称
     */
    public setGameName(name): void {
        if (!this.vo) {
            this.vo = new GameVO();
        }
        this.vo.gameName = name;
    }

    /** 设置游戏玩家相关数据 */
    public setPlayerData(data: Object): void {
        this.leftPlayerArr = [];
        this.centerPlayerArr = [];
        this.rightPlayerArr = [];
        for (var key in data) {
            let playerData: Object = data[key];
            if (playerData["type"] == 1) {
                var leftVo: PlayerVO = new PlayerVO();
                leftVo.playerIcon = playerData["icon"];
                leftVo.playerName = playerData["name"];
                this.leftPlayerArr.push(leftVo);
            } else if (playerData["type"] == 2) {
                var centerVo: PlayerVO = new PlayerVO();
                centerVo.playerIcon = playerData["icon"];
                centerVo.playerName = playerData["name"];
                this.centerPlayerArr.push(centerVo);
            } else if (playerData["type"] == 3) {
                var rightVo: PlayerVO = new PlayerVO();
                rightVo.playerIcon = playerData["icon"];
                rightVo.playerName = playerData["name"];
                this.rightPlayerArr.push(rightVo);
            }
        }
        this.sendNotification(EventConfig.Event_UPDATE_PLAYER);
    }

    /** 
     * 设置左侧玩家数据
     */
    public setLeftPlayer(curPlayer: PlayerVO): void {
        if (!curPlayer) {
            return;
        }
        for (let i: number = 0; i < this.leftPlayerArr.length; i++) {
            if (this.leftPlayerArr[i].playerName == curPlayer.playerName) {
                let changePlayer: PlayerVO = this.leftPlayerArr[i];
                changePlayer.playerName = curPlayer.playerName;
                changePlayer.playerIcon = curPlayer.playerIcon;
                changePlayer.playNums = curPlayer.playNums;
                changePlayer.playEveryTimes = curPlayer.playEveryTimes;
                changePlayer.playTimes = curPlayer.playTimes;
            }
        }
    }


    /** 
     * 获取左侧游戏玩家数据
     */
    public getLeftPlayer(): Array<PlayerVO> {
        if (!this.leftPlayerArr) {
            this.leftPlayerArr = [];
        }
        return this.leftPlayerArr;
    }

    /** 
     * 根据玩家Id获取左侧玩家数据
     */
    public getCurLeftPlayer(playerName: string): PlayerVO {
        for (let i: number = 0; i < this.leftPlayerArr.length; i++) {
            if (this.leftPlayerArr[i].playerName == playerName) {
                return this.leftPlayerArr[i];
            }
        }
    }

    /**
     * 根据玩家Id删除相应左侧玩家数据
     */
    public deleteLeftPlayer(playerVo: PlayerVO): void {
        for (let i: number = 0; i < this.leftPlayerArr.length; i++) {
            if (this.leftPlayerArr[i].playerName == playerVo.playerName) {
                this.leftPlayerArr.splice(i, 1);
            }
        }
    }


    /** 
     * 设置中间玩家数据
     */
    public setCenterPlayer(curPlayer: PlayerVO): void {
        if (!curPlayer) {
            return;
        }
        for (let i: number = 0; i < this.centerPlayerArr.length; i++) {
            if (this.centerPlayerArr[i].playerName == curPlayer.playerName) {
                let changePlayer: PlayerVO = this.centerPlayerArr[i];
                changePlayer.playerName = curPlayer.playerName;
                changePlayer.playerIcon = curPlayer.playerIcon;
                changePlayer.playNums = curPlayer.playNums;
                changePlayer.playEveryTimes = curPlayer.playEveryTimes;
                changePlayer.playTimes = curPlayer.playTimes;
            }
        }
    }

    /** 
     * 获取中间游戏玩家数据
     */
    public getCenterPlayer(): Array<PlayerVO> {
        if (!this.centerPlayerArr) {
            this.centerPlayerArr = [];
        }
        return this.centerPlayerArr;
    }

    /**
     * 根据玩家ID删除中间玩家数据
     */
    public deleteCenterPlayer(curPlayer: PlayerVO): void {
        for (let i: number = 0; i < this.centerPlayerArr.length; i++) {
            if (this.centerPlayerArr[i].playerName == curPlayer.playerName) {
                this.centerPlayerArr.splice(i, 1);
            }
        }
    }

    /** 根据玩家名称获取中间玩家数据 */
    public getCurCenterPlayer(playerName: string): PlayerVO {
        for (let i: number = 0; i < this.centerPlayerArr.length; i++) {
            if (this.centerPlayerArr[i].playerName == playerName) {
                return this.centerPlayerArr[i];
            }
        }
    }

    /**
     * 设置右侧游戏玩家数据
     */
    public setRightPlayer(curPlayer: PlayerVO): void {
        if (!curPlayer) {
            return;
        }
        for (let i: number = 0; i < this.rightPlayerArr.length; i++) {
            if (this.rightPlayerArr[i].playerName == curPlayer.playerName) {
                let changePlayer: PlayerVO = this.rightPlayerArr[i];
                changePlayer.playerName = curPlayer.playerName;
                changePlayer.playerIcon = curPlayer.playerIcon;
                changePlayer.playNums = curPlayer.playNums;
                changePlayer.playEveryTimes = curPlayer.playEveryTimes;
                changePlayer.playTimes = curPlayer.playTimes;
            }
        }
    }

    /** 
     * 获取游戏右侧游戏玩家数据
     */
    public getRightPlayer(): Array<PlayerVO> {
        if (!this.rightPlayerArr) {
            this.rightPlayerArr = [];
        }
        return this.rightPlayerArr;
    }

    /** 根据玩家名称获取右侧玩家数据 */
    public getCurRightPlayer(playerName: string): PlayerVO {
        for (let i: number = 0; i < this.rightPlayerArr.length; i++) {
            if (this.rightPlayerArr[i].playerName == playerName) {
                return this.rightPlayerArr[i];
            }
        }
    }

    /**
     * 根据玩家ID删除右侧玩家数据
     */
    public deleteRightPlayer(curPlayer: PlayerVO): void {
        for (let i: number = 0; i < this.rightPlayerArr.length; i++) {
            if (this.rightPlayerArr[i].playerName == curPlayer.playerName) {
                this.rightPlayerArr.splice(i,1);
            }
        }
    }

}
