/**
 * 数据变更事件队列
 */
class EventConfig {


    public constructor() {

    }

    //更新玩家数据
    public static Event_UPDATE_PLAYER: string = "Event_UPDATE_PLAYER";

    //更新时间模式点击数据
    public static Event_UPDATE_TOUCH_Time: string = "Event_UPDATE_TOUCH_Time";

    //更新任务模式点击数据
    public static Event_UPDATE_TOUCH_Task: string = "Event_UPDATE_TOUCH_Task";

    //更新任务模式点击数据显示
    public static Event_UPDATE_TOUCH_Task_Show: string = "Event_UPDATE_TOUCH_Task_Show";

    //任务界面跳过按钮
    public static Event_SKIP_TASK_PREPRA: string = "Event_SKIP_TASK_PREPRA";

    //切换背景图片
    public static Event_CHANGE_GAMEBG: string = "Event_CHANGE_GAMEBG";

    // 倒计时重来
    public static Event_GAME_COUNTDOWN_RESET: string = "Event_GAME_COUNTDOWN_RESET";

    // 时间模式重来
    public static Event_GAME_TIME_RESET: string = "Event_GAME_TIME_RESET";

    // 任务模式重来
    public static Event_GAME_TASK_RESET: string = "Event_GAME_TASK_RESET";

    // 游戏继续
    public static Event_GAME_CONTAINUE: string = "Event_GAME_CONTAINUE";

    // 游戏调整
    public static Event_GAME_UPSET: string = "Event_GAME_UPSET";



    //发送任务模式状态更新事件
    public static Event_GAME_TASK_CHANGESTATUS: string = "Event_GAME_TASK_CHANGESTATUS";

    //发送任务模式准备阶段数据填充事件
    public static Event_GAME_TASK_FILLDATA_PREPARA: string = "Event_GAME_TASK_FILLDATA_PREPARA";

    //发送任务模式进行阶段数据填充事件
    public static Event_GAME_TASK_FILLDATA_PROGRESS: string = "Event_GAME_TASK_FILLDATA_PROGRESS";

    //发送任务模式完成阶段数据填充事件
    public static Event_GAME_TASK_FILLDATA_FINISH: string = "Event_GAME_TASK_FILLDATA_FINISH";

    //发送任务模式准备阶段设置时间事件
    public static Event_GAME_TASK_SETTIME_PREPARA: string = "Event_GAME_TASK_SETTIME_PREPARA";

    //发送任务模式进行阶段设置点击事件
    public static Event_GAME_TASK_SETTOUCH_PROSS: string = "Event_GAME_TASK_SETTOUCH_PROSS";

    //发送任务模式进行阶段设置时间事件
    public static Event_GAME_TASK_SETTIME_PROSS: string = "Event_GAME_TASK_SETTIME_PROSS";

}