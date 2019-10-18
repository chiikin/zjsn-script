
const screenHelper = {};

const screenColors = {
    threshold: 10,
    harbour: [
        { region: { x: 72, y: 965, w: 10, h: 10 }, color: 0xfefefe },
        { region: { x: 96, y: 166, w: 10, h: 10 }, color: 0xfffeff },
        { region: { x: 1591, y: 920, w: 10, h: 10 }, color: 0xfdfffc }],
    selectMap: [
        { region: { x: 68, y: 567, w: 10, h: 10 }, color: 0xfee330 },
        { region: { x: 222, y: 566, w: 10, h: 10 }, color: 0xfee330 },
        { region: { x: 417, y: 566, w: 10, h: 10 }, color: 0xfee42d },
    ],
    selectMap_fight: [
        { region: { x: 277, y: 47, w: 10, h: 10 }, color: 0x1082e3 },
    ],
    selectMap_far_fight: [
        { region: { x: 777, y: 46, w: 10, h: 10 }, color: 0x1082e3 },
    ],
    jnStatus: [
        { region: { x: 96, y: 636, w: 1318, h: 10 }, color: 0xe2551f },//舰娘大破颜色
    ],
    prepareFight: [//出征准备页面
        // { region: { x: 1680, y: 51, w: 10, h: 10 }, color: 0xdedfda },
        // { region: { x: 1555, y: 991, w: 10, h: 10 }, color: 0xfdd72c },
        // { region: { x: 231, y: 852, w: 10, h: 10 }, color: 0x1e8bf0 },
        { region: { x: 232, y: 850, w: 10, h: 10 }, color: 0x1f8cf1 },
        { region: { x: 1547, y: 998, w: 10, h: 10 }, color: 0xffda2f },
        { region: { x: 1806, y: 996, w: 10, h: 10 }, color: 0xfed82d },
    ],
    teamLabels: [
        { region: { x: 142, y: 175, w: 10, h: 10 }, color: 0x1183e4 },
        { region: { x: 387, y: 176, w: 10, h: 10 }, color: 0x0f84e4 },
        { region: { x: 672, y: 175, w: 10, h: 10 }, color: 0x1183e4 },
        { region: { x: 862, y: 176, w: 10, h: 10 }, color: 0x0f84e4 },
    ],
    enemyPreview: [//敌人预览界面
        { region: { x: 1316, y: 1000, w: 10, h: 10 }, color: 0x6c0a0b },
        { region: { x: 1498, y: 1002, w: 10, h: 10 }, color: 0x680809 },
        { region: { x: 1848, y: 1002, w: 10, h: 10 }, color: 0xc2af2f },
    ],
    battleEnemyPreview: [//敌人预览界面
        { region: { x: 1327, y: 1000, w: 10, h: 10 }, color: 0x6e141e },
        { region: { x: 1491, y: 1003, w: 10, h: 10 }, color: 0x640d16 },
        { region: { x: 1848, y: 1000, w: 10, h: 10 }, color: 0xbfab2e },
    ],
    fightFormation: [//出击阵型界面
        { region: { x: 1547, y: 1007, w: 10, h: 10 }, color: 0x1d88da },
        { region: { x: 1568, y: 286, w: 10, h: 10 }, color: 0x1f87dc },
        { region: { x: 1110, y: 607, w: 10, h: 10 }, color: 0x226dbe },
    ],
    fightendSelectDialog: [
        { region: { x: 587, y: 706, w: 10, h: 10 }, color: 0x9d0909 },
        { region: { x: 740, y: 708, w: 10, h: 10 }, color: 0x980606 },
        { region: { x: 1160, y: 707, w: 10, h: 10 }, color: 0x2390f7 },
        { region: { x: 1357, y: 710, w: 10, h: 10 }, color: 0x218ef3 },
    ],
    nightfightSelectDialog: [
        { region: { x: 587, y: 706, w: 10, h: 10 }, color: 0x9d0909 },
        { region: { x: 740, y: 708, w: 10, h: 10 }, color: 0x980606 },
        { region: { x: 1160, y: 707, w: 10, h: 10 }, color: 0x2390f7 },
        { region: { x: 1357, y: 710, w: 10, h: 10 }, color: 0x218ef3 },
    ],
    settlement: [//结算页面
        { region: { x: 123, y: 162, w: 10, h: 10 }, color: 0xfcffff },
        { region: { x: 938, y: 87, w: 10, h: 10 }, color: 0xffffff },
        { region: { x: 1723, y: 1000, w: 10, h: 10 }, color: 0xffffff },
    ],
    resourceDialog: [
        { region: { x: 728, y: 286, w: 10, h: 10 }, color: 0x0e6cb6 },
        { region: { x: 1295, y: 288, w: 10, h: 10 }, color: 0x037dd3 },
        { region: { x: 887, y: 605, w: 10, h: 10 }, color: 0x1f8cf1 },
    ],
    fightendJnStatus: [
        { region: { x: 121, y: 280, w: 10, h: 10 }, color: 0x941212 },
        { region: { x: 125, y: 430, w: 10, h: 10 }, color: 0x941212 },
        { region: { x: 125, y: 581, w: 10, h: 10 }, color: 0x941212 },
        { region: { x: 125, y: 730, w: 10, h: 10 }, color: 0x941212 },
        { region: { x: 125, y: 880, w: 10, h: 10 }, color: 0x941212 },
        { region: { x: 125, y: 1030, w: 10, h: 10 }, color: 0x941212 },
    ],
    battle: [//战役页面
        { region: { x: 1826, y: 157, w: 10, h: 10 }, color: 0xefdb0a },
        { region: { x: 153, y: 882, w: 10, h: 10 }, color: 0xe8e8e8 },
        { region: { x: 1687, y: 881, w: 10, h: 10 }, color: 0xe5e5e5 },
    ],
};

const actionPoints = {
    harbourGoFighting: { x: 1790, y: 980 },//1790,980
    selectMap: { x: 1177, y: 557 },//1790,980
    selectMap_fightBtn: { x: 277, y: 47 },//1790,980
    supplyLabel: { x: 590, y: 850 },
    supplyButton: { x: 1771, y: 737 },
    propareScreenFightButton: { x: 1676, y: 996 },
    EnemyPreviewFightButton: { x: 1848, y: 1002 },
    fightFormations: [
        { x: 1475, y: 256 }, { x: 1475, y: 425 }, { x: 1475, y: 602 }, { x: 1475, y: 785 }, { x: 1475, y: 962 },
    ],
    fightendSelectDialogButtons: {
        continue: { x: 660, y: 708 }, back: { x: 1263, y: 705 }
    },
    nightfightSelectDialogButtons: {
        continue: { x: 660, y: 708 }, cancel: { x: 1263, y: 705 }
    },
    resourceDialogOKButton: { x: 960, y: 602 },
    battles: [//战役选择
        { x: 216, y: 520 }, { x: 600, y: 520 }, { x: 970, y: 520 }, { x: 1326, y: 520 }, { x: 1665, y: 520 },
    ],
};

function screenDirection() {
    var deviceH = device.height,
        deviceW = device.width;
    console.log("设备宽高screen，W:" + deviceW + ',H:' + deviceH);
    if (deviceH > deviceW)
        return "vertical";//竖屏
    else
        return "horizontal";
}

function initialize() {
    let direction = screenDirection();
    console.log("屏幕方向：" + direction);
    if (direction === 'vertical') {//竖屏
        //调转坐标
        for (var k in actionPoints) {
            let point = actionPoints[k];
            let t = point.x;
            point.x = 1080 - point.y;
            point.y = t;
        }
    }
}
//initialize();

var currentScreen;
var lastCaptureTime = 0;

function checkAllColors(colors) {
    if (!(colors instanceof Array))
        return false;
    for (var i = 0; i < colors.length; i++) {
        var color = colors[i];
        var ret = images.findColor(currentScreen, color.color, {
            region: [color.region.x, color.region.y, color.region.w, color.region.h],
            threshold: color.threshold || screenColors.threshold
        });
        if (!ret)
            return false;
    }
    return true;
}

function checkAnyColors(colors) {
    if (!(colors instanceof Array))
        return false;
    for (var i = 0; i < colors.length; i++) {
        var color = colors[i];
        var ret = images.findColor(currentScreen, color.color, {
            region: [color.region.x, color.region.y, color.region.w, color.region.h],
            threshold: color.threshold || screenColors.threshold
        });
        if (ret)
            return true;
    }
    return false;
}

function waitScreen(timeout, checker, extendHandler) {
    timeout = timeout || 100;
    let waitedTime = 0;
    while (waitedTime < timeout) {
        console.log('waiting',waitedTime,timeout);
        waitedTime += 100;
        if (typeof extendHandler === 'function') {
            extendHandler();
        }
        sleep(100);
        screenHelper.captureScreen();
        if (checker())
            return true;
    }
    return false;
}

/**
 * 截取屏幕,调用其他方法前需要调用该方法
 * @returns {boolean} 是否获取到新的图像
 */
screenHelper.captureScreen = function () {
    if (lastCaptureTime + 70 > new Date().valueOf()) {
        return false;
    }
    currentScreen = captureScreen();
    lastCaptureTime = new Date().valueOf();
    return true;
};

/**是否是港区 */
screenHelper.isHarbour = function () {
    if (!currentScreen)
        return false;

    var colors = screenColors.harbour;
    return checkAllColors(colors);
};

screenHelper.touchHarbourGoFighting = function () {
    //console.log("touch:", actionPoints.harbourGoFighting.x, actionPoints.harbourGoFighting.y);
    return press(actionPoints.harbourGoFighting.x, actionPoints.harbourGoFighting.y, 100);
    //return press(100,400, 2500);
};

screenHelper.isSelectMap = function () {
    if (!currentScreen)
        return false;

    var colors = screenColors.selectMap;
    return checkAllColors(colors);
};

screenHelper.isSelectMap_fight = function () {
    if (!currentScreen)
        return false;

    var colors = screenColors.selectMap_fight;
    return checkAllColors(colors);
};

screenHelper.isSelectMap_far_fight = function () {
    if (!currentScreen)
        return false;

    var colors = screenColors.selectMap_far_fight;
    return checkAllColors(colors);
};

screenHelper.touchSelectMap = function () {
    return press(actionPoints.selectMap.x, actionPoints.selectMap.y, 100);
};

screenHelper.touchSelectMap_fightBtn = function () {
    return press(actionPoints.selectMap_fightBtn.x, actionPoints.selectMap_fightBtn.y, 100);
};

screenHelper.waitSelectMap = function (timeout) {
    return waitScreen(timeout, screenHelper.isSelectMap);
};

/**版本2，增加点击事件 */
screenHelper.waitSelectMap2 = function (timeout) {
    return waitScreen(timeout, screenHelper.isSelectMap, () => {
        click(1328, 80);
    });
};

/**检查舰娘是否大破无法出击 */
screenHelper.isCouldnotFight = function () {
    //检查舰娘是否大破
    var colors = screenColors.jnStatus;
    return checkAllColors(colors);
};

screenHelper.isPrepareFight = function () {
    var colors = screenColors.prepareFight;
    return checkAllColors(colors);
};

screenHelper.waitPrepareFight = function (timeout) {
    return waitScreen(timeout, screenHelper.isPrepareFight);
};

/** 出征液界面选择队伍 */
screenHelper.isSelectedTeam = function (team) {
    if (!team)
        return false;

    return checkAllColors([screenColors.teamLabels[team - 1]]);
};

screenHelper.touchTeamLabel = function (team) {
    if (!team)
        return false;
    let labelColor = screenColors.teamLabels[team - 1];
    return press(labelColor.region.x, labelColor.region.y, 100);
};

screenHelper.touchSupplyLabel = function () {
    return press(actionPoints.supplyLabel.x, actionPoints.supplyLabel.y, 100);
};

screenHelper.touchSupplyButton = function () {
    return press(actionPoints.supplyButton.x, actionPoints.supplyButton.y, 100);
};

screenHelper.touchPrepareFightScreenFightButton = function () {
    return press(actionPoints.propareScreenFightButton.x, actionPoints.propareScreenFightButton.y, 100);
};

/** 是否是敌人预览界面 */
screenHelper.isEnemyPreview = function () {
    return checkAllColors(screenColors.enemyPreview);
};

screenHelper.waitEnemyPreview = function (timeout) {
    sleep(1000);//先等1s
    return waitScreen(timeout, screenHelper.isEnemyPreview, () => {
        click(device.width / 2, device.height / 2);//点击屏幕中间
    });
};

screenHelper.isBattleEnemyPreview = function () {
    return checkAllColors(screenColors.battleEnemyPreview);
};

screenHelper.waitBattleEnemyPreview = function (timeout) {
    sleep(1000);//先等1s
    return waitScreen(timeout, screenHelper.isBattleEnemyPreview, () => {
        click(device.width / 2, device.height / 2);//点击屏幕中间
    });
};

/** 敌人预览界面点击出击按钮 */
screenHelper.touchEnemyPreviewFightButton = function () {
    return press(actionPoints.EnemyPreviewFightButton.x, actionPoints.EnemyPreviewFightButton.y, 100);
};
//fightFormation
/** 阵型选择界面 */
screenHelper.isFightFormation = function () {
    return checkAllColors(screenColors.fightFormation);
};

screenHelper.waitFightFormation = function (timeout) {
    sleep(1000);//先等1s
    return waitScreen(timeout, screenHelper.isFightFormation, () => {
        click(device.width / 2, device.height / 2);//点击屏幕中间
    });
};

/** 阵型选择界面-选择阵型 */
screenHelper.selectFightFormation = function (formationIndex) {
    let ff = actionPoints.fightFormations[formationIndex - 1];
    return press(ff.x, ff.y, 100);
};

/**是否是夜战选择框 */
screenHelper.isNightFightingDialog = function () {
    var colors = screenColors.nightfightSelectDialog;
    return checkAllColors(colors);
}

/**是否结算界面 */
screenHelper.isSettlement = function () {
    var colors = screenColors.settlement;
    return checkAllColors(colors);
}

screenHelper.touchNightFightingDialogButton = function (isContinue) {
    let btnPoint;
    if (isContinue)
        btnPoint = actionPoints.nightfightSelectDialogButtons.continue;
    else
        btnPoint = actionPoints.nightfightSelectDialogButtons.cancel;
    return press(btnPoint.x, btnPoint.y, 100);
}

/**是否是夜战选择框 */
screenHelper.isFightendSelectDialog = function () {
    var colors = screenColors.fightendSelectDialog;
    return checkAllColors(colors);
}

screenHelper.waitFightendSelectDialog = function (timeout) {
    return waitScreen(timeout, screenHelper.isFightendSelectDialog, () => {
        click(1328, 80);
    });
};

screenHelper.touchFightendSelectDialogButton = function (isContinue) {
    let btnPoint;
    if (isContinue)
        btnPoint = actionPoints.fightendSelectDialogButtons.continue;
    else
        btnPoint = actionPoints.fightendSelectDialogButtons.back;
    return press(btnPoint.x, btnPoint.y, 100);
}

/**是否是资源确认框 */
screenHelper.isResourceDialog = function () {
    var colors = screenColors.resourceDialog;
    return checkAllColors(colors);
}

screenHelper.waitResourceDialog = function (timeout) {
    return waitScreen(timeout, screenHelper.isResourceDialog, () => {
        click(1328, 80);
    });
};

screenHelper.touchResourceDialogOK = function () {
    let btnPoint = actionPoints.resourceDialogOKButton;
    return press(btnPoint.x, btnPoint.y, 100);
}

/**是否是在战斗后舰娘大破 */
screenHelper.isCouldnotFightOnFightEnd = function () {
    var colors = screenColors.fightendJnStatus;
    return checkAnyColors(colors);
}

/**是否是战役选择页面 */
screenHelper.isBattle = function () {
    var colors = screenColors.battle;
    return checkAllColors(colors);
}

screenHelper.waitBattle = function (timeout) {
    return waitScreen(timeout, screenHelper.isBattle, () => {
        click(1328, 80);
    });
};

screenHelper.selectBattle = function (battleNo) {
    let btnPoint = actionPoints.battles[battleNo - 1];
    return press(btnPoint.x, btnPoint.y, 100);
}

//活动临时：
/**是否是活动地图选择页面 */
screenHelper.isActiveMapSelect = function () {
    var colors = [ { region: { x: 831, y: 72, w: 10, h: 10 }, color: 0xb32d22 },
        { region: { x: 1188, y: 72, w: 10, h: 10 }, color: 0xb52d21 },
        { region: { x: 45, y: 928, w: 10, h: 10 }, color: 0xfcffff }];
    return checkAllColors(colors);
}

screenHelper.waitActiveMapSelect = function (timeout) {
    return waitScreen(timeout, screenHelper.isActiveMapSelect, () => {
        click(925, 997);
    });
};

screenHelper.selectActiveMap = function (mapNo) {
    let maps = [{x:557,y:318},{x:537,y:718},{x:1287,y:328},{x:1316,y:697}]
    var mapPoint=maps[mapNo];
    return press(mapPoint.x, mapPoint.y, 100);
}

/**是否是活动地图确认页面 */
screenHelper.isActiveMapSelected = function () {
    var colors = [ { region: { x: 1517, y: 926, w: 10, h: 10 }, color: 0x228ff4 },
        { region: { x: 1795, y: 926, w: 10, h: 10 }, color: 0x1f8cf1 },
        { region: { x: 327, y: 96, w: 10, h: 10 }, color: 0x218ef5 }];
    return checkAllColors(colors);
}

screenHelper.waitActiveMapSelected = function (timeout) {
    return waitScreen(timeout, screenHelper.isActiveMapSelected, () => {
        //click(925, 997);
    });
};

screenHelper.goActiveMap = function (mapNo) {
    //let maps = [{x:557,y:318},{x:537,y:718},{x:1287,y:328},{x:1316,y:697}]
    var mapPoint={x:1646,y:925};
    return press(mapPoint.x, mapPoint.y, 100);
}

/**是否是活动地图出击准备页面 */
screenHelper.isActiveMapPrepare = function () {
    var colors = [ { region: { x: 1547, y: 1000, w: 10, h: 10 }, color: 0xffd92e },
        { region: { x: 1807, y: 1002, w: 10, h: 10 }, color: 0xfcd82c },
        { region: { x: 185, y: 47, w: 10, h: 10 }, color: 0xfefffa }];
    return checkAllColors(colors);
}

screenHelper.waitActiveMapPrepare = function (timeout) {
    return waitScreen(timeout, screenHelper.isActiveMapPrepare, () => {
        //click(925, 997);
    });
};

screenHelper.goActiveMapFinghting = function (mapNo) {
    //let maps = [{x:557,y:318},{x:537,y:718},{x:1287,y:328},{x:1316,y:697}]
    var mapPoint={x:1677,y:997};
    return press(mapPoint.x, mapPoint.y, 100);
}

screenHelper.skipAchieveDialog = function () {
    if (!screenHelper.waitResourceDialog(5000)) {
    }

    return screenHelper.touchResourceDialogOK();
};

module.exports = screenHelper;