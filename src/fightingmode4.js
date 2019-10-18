
//
let screenHelper, fightingHelper;
function initialize(screenHelper_in, fightingHelper_in) {
    screenHelper = screenHelper_in;
    fightingHelper = fightingHelper_in;
}
var config, runCallback;

var skippedHarbor = false;
function fighting(fightedCount) {

    //选择地图
    if (!screenHelper.waitActiveMapSelect(10000)) {
        toast("无法确定当前是否处于活动地图选择页面");
        return false;
    }

    screenHelper.selectActiveMap(0);

    //确认地图
    if (!screenHelper.waitActiveMapSelected(10000)) {
        toast("无法确定当前是否处于活动地图确认页面");
        return false;
    }

    screenHelper.goActiveMap();

    //确认地图
    if (!screenHelper.waitActiveMapPrepare(10000)) {
        toast("无法确定当前是否处于活动地图准备页面");
        return false;
    }

    screenHelper.goActiveMapFinghting();

    //第一战斗
    var formationIndex = 2;
    if (!fightingHelper.fightingTransition(formationIndex))
        return false;//战斗过渡

    if (!fightingHelper.fighting(30000, false))
        return false;
    screenHelper.skipAchieveDialog();//跳过收获确认弹窗
    if (!fightingHelper.nextFighting())
        return false;//战斗结束

    //第2战斗
    formationIndex = 2;
    if (!fightingHelper.fightingTransition(formationIndex))
        return false;//战斗过渡

    if (!fightingHelper.fighting(30000, false))
        return false;
    screenHelper.skipAchieveDialog();//跳过收获确认弹窗
    if (!fightingHelper.nextFighting())
        return false;//战斗结束

    //第3战斗
    formationIndex = 2;
    if (!fightingHelper.fightingTransition(formationIndex))
        return false;//战斗过渡

    if (!fightingHelper.fighting(30000, false))
        return false;
    screenHelper.skipAchieveDialog();//跳过收获确认弹窗
    if (!fightingHelper.nextFighting())
        return false;//战斗结束

    //第4战斗
    formationIndex = 2;
    if (!fightingHelper.fightingTransition(formationIndex))
        return false;//战斗过渡

    if (!fightingHelper.fighting(30000, true))
        return false;
    screenHelper.skipAchieveDialog();//跳过收获确认弹窗
    return true;
}


function innerRun() {
    toast('脚本于3秒后启动');
    sleep(3000);//等待五秒后开始
    toast('脚本启动模式4');
    let i
    try {
        for (i = 0; i < config.fightingTimes; i++) {
            if (!fighting(i))
                break;
        }
    }
    catch (e) {
        console.log("运行异常", e);
        return;
    }

    if (i != config.fightedCount) {
        toast("脚本没有完整执行！");
        console.log("脚本没有完整执行！");
    }

    if (typeof runCallback === 'function') {
        console.log('回调runCallback');
        runCallback();
    }
}

function reset() {
    skippedHarbor = false;
    config = undefined;
    runCallback = undefined;
}

function run(config_in, runCallback_in) {
    reset();
    config = config_in;
    runCallback = runCallback_in;

    console.log('运行配置：', JSON.stringify(config));
    threads.start(innerRun);
}

module.exports = {
    initialize: initialize,
    run: run
};