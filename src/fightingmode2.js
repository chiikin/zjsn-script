
//
let screenHelper, fightingHelper;
function initialize(screenHelper_in, fightingHelper_in) {
    screenHelper = screenHelper_in;
    fightingHelper = fightingHelper_in;
}
var config, runCallback;

var skippedHarbor = false;
function fighting(fightedCount) {

    if (!skippedHarbor)
        if (!fightingHelper.harborFighting())
            return false;//港区出击
    skippedHarbor = true;

    if (!fightingHelper.selectMapToFighting())
        return false;//地图出击

    if (!fightingHelper.prepareFightingToFighting(config.team, true))
        return false;//准备出击界面出击

    //第一战斗
    var formationIndex = 5;
    if (!fightingHelper.fightingTransition(formationIndex))
        return false;//战斗过渡

    if (!fightingHelper.fighting(30000, false))
        return false;

    if (!fightingHelper.nextFighting())
        return false;//战斗结束

    //第二资源点
    if (!fightingHelper.skipResourceDialog())
        return false;

    //第3战斗
    formationIndex = 5;
    if (!fightingHelper.fightingTransition(formationIndex))
        return false;//战斗过渡

    if (!fightingHelper.fighting(30000, false))
        return false;

    if (!fightingHelper.nextFighting())
        return false;//战斗结束

    //第4战斗
    formationIndex = 5;
    if (!fightingHelper.fightingTransition(formationIndex))
        return false;//战斗过渡

    if (!fightingHelper.fighting(30000, true))
        return false;

    if (!fightingHelper.fightendToSelectMap())
        return false;//战斗结束

    return true;
}


function innerRun() {
    toast('脚本于3秒后启动');
    sleep(3000);//等待五秒后开始
    toast('脚本启动模式2');
    let i
    try{
        for (i = 0; i < config.fightingTimes; i++) {
            if (!fighting(i))
                break;
        }
    }
    catch(e){
        console.log("运行异常",e);
        return;
    }
    
    if(i!=config.fightedCount){
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