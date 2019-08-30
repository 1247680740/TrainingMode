  /**
    * 游戏玩家数据存储vo
    */
class PlayerVO {

    /** 玩家ID */
    public playerId: number = 0;
    
    /** 玩家名称 */
    public playerName: string = "";

    /** 玩家头像 */
    public playerIcon: string = "";

    /** 玩家训练次数 */
    public playNums: number = 0;

    /** 玩家本轮所用时间 */
    public playEveryTimes: number = 0;

    /** 玩家训练时间 */
    public playTimes: number = 0;
}
