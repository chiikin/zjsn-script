
//
let screenHelper, fightingHelper;
function initialize(screenHelper_in, fightingHelper_in) {
    screenHelper = screenHelper_in;
    fightingHelper = fightingHelper_in;
}
var config, runCallback;

function fighting(fightedCount) {

    if (!fightingHelper.selectBattle(config.battleNo))
        return false;//
    console.log('step1');
    if (!fightingHelper.prepareFightingToFightingNoSelectTeam(true))
        return false;//准备出击界面出击

    if (!fightingHelper.battleFightingTransition(config.fightFormation))
        return false;//战斗过渡

    if (!fightingHelper.fighting(30000, true))
        return false;

    return true;
}


function innerRun() {
    toast('脚本于3秒后启动');
    sleep(3000);//等待五秒后开始
    toast('脚本启动模式3');

    try {
        for (let i = 0; i < config.fightingTimes; i++) {
            if (!fighting(i))
                break;
        }
    } catch (e) {
        console.log('执行异常', e);
        return;
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