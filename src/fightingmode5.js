
//
let screenHelper, fightingHelper;
function initialize(screenHelper_in, fightingHelper_in) {
    screenHelper = screenHelper_in;
    fightingHelper = fightingHelper_in;
}
var config, runCallback;

var skippedHarbor = false;
var gotTrophy = false;
let needSupply = true;
function fighting(fightedCount) {
    gotTrophy = false;
    if (!fightingHelper.selectMapToFighting())
        return false;//地图出击

    if (!fightingHelper.prepareFightingToFighting(config.team, needSupply))
        return false;//准备出击界面出击
    needSupply = false;

    if (!screenHelper.waitEnemyPreview(8000)) {
        toast("无法确定当前是否处于敌人预览页面");
        console.log("无法确定当前是否处于敌人预览页面");
        return false;
    }

    //判断是否有补给船(战利品)
    if (!screenHelper.hasSupplyShop()) {
        //没有补给船

        screenHelper.touchEnemyPreviewBackButton();//撤退
        return true;
    }

    screenHelper.touchEnemyPreviewFightButton();//出击

    if (!screenHelper.waitFightFormation(5000)) {
        toast("无法确定当前是否处于阵型选择页面");
        console.log("无法确定当前是否处于阵型选择页面");
        return false;
    }

    if (!screenHelper.selectFightFormation(2)) {//选择阵型
        return false;
    }

    if (!fightingHelper.fighting(30000, false))
        return false;

    if (!fightingHelper.fightendToSelectMap())
        return false;//战斗结束

    gotTrophy = true;
    needSupply = true;
    return true;
}


function innerRun() {
    toast('脚本于3秒后启动');
    sleep(3000);//等待五秒后开始
    toast('脚本启动模式5');
    let i = 0;
    try {
        while (i < config.fightingTimes) {
            if (!fighting(i))
                break;
            if (gotTrophy)
                i++;
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