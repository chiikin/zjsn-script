var fightingHelper = {};

let screenHelper;
fightingHelper.initialize = function (screenHelper_in) {
    screenHelper = screenHelper_in;
}

fightingHelper.harborFighting = function () {
    screenHelper.captureScreen();
    if (!screenHelper.isHarbour()) {
        toast("不是港区，无法启动");
        console.log("不是港区，无法启动");
        return false;
    }
    return screenHelper.touchHarbourGoFighting();
};

fightingHelper.selectMapToFighting = function () {
    if (!screenHelper.waitSelectMap(5000)) {
        toast("无法确定当前是否处于选择地图页面");
        console.log("无法确定当前是否处于选择地图页面");
        return false;
    }
    if (!screenHelper.isSelectMap_fight()) {//如果当前不是出征，（注：有可能是远征）
        screenHelper.touchSelectMap_fightBtn();
        //sleep(1000);//等1s

        if (!screenHelper.waitSelectMap(5000)) {
            toast("无法确定当前是否处于选择地图页面");
            console.log("无法确定当前是否处于选择地图页面");
            return false;
        }
    }
    return screenHelper.touchSelectMap();//点击打开地图
};

fightingHelper.prepareFightingToFighting = function (team, isSupply) {
    //检查界面
    if (!screenHelper.waitPrepareFight(5000)) {
        toast("无法确定当前是否处于准备出征页面");
        console.log("无法确定当前是否处于准备出征页面");
        return false;
    }

    //检查是否已选择了指定的队伍
    if (!screenHelper.isSelectedTeam(team)) {
        screenHelper.touchTeamLabel(team);
        sleep(1500);//等待切换
    }

    //检查舰娘状态
    if (screenHelper.isCouldnotFight()) {
        toast("舰娘大破无法出击");
        console.log("舰娘大破无法出击");
        return false;
    }

    if (isSupply) {
        screenHelper.touchSupplyLabel();
        sleep(800);//等待切换
        screenHelper.touchSupplyButton();
        sleep(800);//等待响应
    }

    return screenHelper.touchPrepareFightScreenFightButton();//电击出征按钮
};

fightingHelper.prepareFightingToFightingNoSelectTeam = function (isSupply) {
    //检查界面
    if (!screenHelper.waitPrepareFight(5000)) {
        toast("无法确定当前是否处于准备出征页面");
        console.log("无法确定当前是否处于准备出征页面");
        return false;
    }
    //检查舰娘状态
    if (screenHelper.isCouldnotFight()) {
        toast("舰娘大破无法出击");
        console.log("舰娘大破无法出击");
        return false;
    }

    if (isSupply) {
        screenHelper.touchSupplyLabel();
        sleep(800);//等待切换
        screenHelper.touchSupplyButton();
        sleep(800);//等待响应
    }

    return screenHelper.touchPrepareFightScreenFightButton();//电击出征按钮
};



fightingHelper.fightingTransition = function (formationIndex) {
    if (!screenHelper.waitEnemyPreview(8000)) {
        toast("无法确定当前是否处于敌人预览页面");
        console.log("无法确定当前是否处于敌人预览页面");
        return false;
    }
    screenHelper.touchEnemyPreviewFightButton();//出击

    if (!screenHelper.waitFightFormation(5000)) {
        toast("无法确定当前是否处于阵型选择页面");
        console.log("无法确定当前是否处于阵型选择页面");
        return false;
    }

    return screenHelper.selectFightFormation(formationIndex || 2);//选择阵型
};

fightingHelper.battleFightingTransition = function (formationIndex) {
    if (!screenHelper.waitBattleEnemyPreview(8000)) {
        toast("无法确定当前是否处于敌人预览页面");
        console.log("无法确定当前是否处于敌人预览页面");
        return false;
    }
    screenHelper.touchEnemyPreviewFightButton();//出击

    if (!screenHelper.waitFightFormation(5000)) {
        toast("无法确定当前是否处于阵型选择页面");
        console.log("无法确定当前是否处于阵型选择页面");
        return false;
    }

    return screenHelper.selectFightFormation(formationIndex || 2);//选择阵型
};

fightingHelper.fighting = function (timeout, nightFighting) {

    sleep(10000);//预先等待10s
    let isNight = false;
    let waitedTime = 10000;
    do {
        screenHelper.captureScreen();
        if (!isNight && screenHelper.isNightFightingDialog()) {
            screenHelper.touchNightFightingDialogButton(nightFighting);
            isNight = true;
        }
        else {
            if (screenHelper.isSettlement()) {
                if (screenHelper.isCouldnotFightOnFightEnd())
                    return false;
                return true;
            }
        }
        sleep(500);
    } while (waitedTime < timeout);
    toast("无法确定当前是否已过渡到结算页面");
    console.log("无法确定当前是否已过渡到结算页面");
    return false;
};

fightingHelper.nextFighting = function () {
    if (!screenHelper.waitFightendSelectDialog(10000)) {
        toast("无法确定当前是否处于战斗前进选择页面");
        console.log("无法确定当前是否处于战斗前进选择页面");
        return false;
    }

    return screenHelper.touchFightendSelectDialogButton(true);
};

fightingHelper.fightend = function () {
    if (!screenHelper.waitFightendSelectDialog(10000)) {
        toast("无法确定当前是否处于战斗前进选择页面");
        console.log("无法确定当前是否处于战斗前进选择页面");
        return false;
    }

    return screenHelper.touchFightendSelectDialogButton(false);
};

/**结束后直到跳转到选择地图页面 */
fightingHelper.fightendToSelectMap = function (timeout) {
    timeout=timeout||5000;
    if (!screenHelper.waitSelectMap2(timeout)) {
        toast("无法确定当前是否处于选择地图页面");
        console.log("无法确定当前是否处于选择地图页面");
        return false;
    }

    return true;
};

fightingHelper.skipResourceDialog = function () {
    if (!screenHelper.waitResourceDialog(10000)) {
        toast("无法确定当前是否处于资源确认页面");
        console.log("无法确定当前是否处于资源确认页面");
        return false;
    }

    return screenHelper.touchResourceDialogOK();
};

fightingHelper.selectBattle = function (battleNo) {
    if (!screenHelper.waitBattle(10000)) {
        toast("无法确定当前是否处于战役页面");
        console.log("无法确定当前是否处于战役页面");
        return false;
    }

    return screenHelper.selectBattle(battleNo);
}

module.exports = fightingHelper;