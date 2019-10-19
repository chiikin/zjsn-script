
var defaultOptions = {
    events: {},
};

function setMode1UI(win, runCallback) {
    var zjsnStorage = storages.create("zjsn");
    //mode1
    //加载配置
    var mode1Config = JSON.parse(zjsnStorage.get('mode1:config', JSON.stringify({
        team: 1, supplyFrequency: 1, fightingTimes: 1
    })));
    // ui.run(() => {
    if (mode1Config.team)
        win.spGoTeam.setSelection(mode1Config.team - 1);
    if (typeof mode1Config.isNightFighting === 'boolean' && mode1Config.isNightFighting)
        win.cbIsNightFighting.checked = true;
    if (mode1Config.supplyFrequency)
        win.spSupplyFrequency.setSelection(mode1Config.supplyFrequency - 1);
    if (mode1Config.fightingTimes)
        win.fightingTimes.setSelection(Math.floor((mode1Config.fightingTimes || 0) / 10));
    //});

    //绑定事件
    win.btnRunMode1.on('click', () => {
        var times = win.fightingTimes.getSelectedItemPosition();
        if (times === 0)
            times = 1;
        else
            times = times * 10;

        var config = {
            team: win.spGoTeam.getSelectedItemPosition() + 1,
            isNightFighting: win.cbIsNightFighting.checked,
            supplyFrequency: win.spSupplyFrequency.getSelectedItemPosition() + 1,
            fightingTimes: times
        };
        var configJson = JSON.stringify(config);
        //toast(configJson);
        //保存本次配置
        var zjsnStorage = storages.create("zjsn");
        zjsnStorage.put('mode1:config', configJson);
        //回调方法
        win.close();
        if (options.events && typeof options.events.runMode1 === 'function') {
            options.events.runMode1(config, runCallback);
        }
    });
    win.tab1_close.on('click', function () {
        exit();
    });
}

function setMode2UI(win, runCallback) {
    var zjsnStorage = storages.create("zjsn");
    //mode1
    //加载配置
    var mode2Config = JSON.parse(zjsnStorage.get('mode2:config', JSON.stringify({
        team: 1, fightingTimes: 1
    })));

    if (mode2Config.team)
        win.spGoTeam2.setSelection(mode2Config.team - 1);
    if (mode2Config.fightingTimes)
        win.fightingTimes2.setSelection(Math.floor((mode2Config.fightingTimes || 0) / 10));

    //绑定事件
    win.btnRunMode2.on('click', () => {
        var times = win.fightingTimes2.getSelectedItemPosition();
        if (times === 0)
            times = 1;
        else
            times = times * 10;
        var config = {
            team: win.spGoTeam2.getSelectedItemPosition() + 1,
            fightingTimes: times
        };
        var configJson = JSON.stringify(config);
        //toast(configJson);
        //保存本次配置
        var zjsnStorage = storages.create("zjsn");
        zjsnStorage.put('mode2:config', configJson);
        //回调方法
        win.close();
        if (options.events && typeof options.events.runMode2 === 'function') {
            options.events.runMode2(config, runCallback);
        }
    });
    win.tab1_close2.on('click', function () {
        exit();
    });
}

function setMode3UI(win, runCallback) {
    var zjsnStorage = storages.create("zjsn");
    //mode1
    //加载配置
    var mode3Config = JSON.parse(zjsnStorage.get('mode3:config', JSON.stringify({
        battleNo: 1, fightingTimes: 1
    })));

    if (mode3Config.battleNo)
        win.spBattleNo.setSelection(mode3Config.battleNo - 1);
    if (mode3Config.fightingTimes)
        win.fightingTimes3.setSelection(Math.floor((mode3Config.fightingTimes || 0) / 2));
    if (mode3Config.fightFormation)
        win.spFightFormation.setSelection(mode3Config.fightFormation - 1);
    //spFightFormation

    //绑定事件
    win.btnRunMode3.on('click', () => {
        var times = win.fightingTimes3.getSelectedItemPosition();
        if (!times)
            times = 1;
        else
            times *= 2;
        var config = {
            battleNo: win.spBattleNo.getSelectedItemPosition() + 1,
            fightingTimes: times,
            fightFormation: win.spFightFormation.getSelectedItemPosition() + 1
        };
        var configJson = JSON.stringify(config);
        //toast(configJson);
        //保存本次配置
        var zjsnStorage = storages.create("zjsn");
        zjsnStorage.put('mode3:config', configJson);
        //回调方法
        win.close();
        if (options.events && typeof options.events.runMode3 === 'function') {
            options.events.runMode3(config, runCallback);
        }
    });
    win.tab1_close3.on('click', function () {
        exit();
    });
}

// function setMode4UI(win, runCallback) {
//     //绑定事件
//     win.btnRunMode4.on('click', () => {
//         var times = win.fightingTimes4.getSelectedItemPosition();
//         if (!times)
//             times = 1;
//         else
//             times *= 10;
//         var config = {
//             fightingTimes: times
//         };
//         //回调方法
//         win.close();
//         if (options.events && typeof options.events.runMode4 === 'function') {
//             options.events.runMode4(config, runCallback);
//         }
//     });
//     win.tab1_close4.on('click', function () {
//         exit();
//     });
// }

function setMode5UI(win, runCallback) {
    var zjsnStorage = storages.create("zjsn");
    //mode1
    //加载配置
    var mode5Config = JSON.parse(zjsnStorage.get('mode5:config', JSON.stringify({
        team: 1, fightingTimes: 1
    })));

    if (mode5Config.team)
        win.spGoTeam5.setSelection(mode5Config.team - 1);
    if (mode5Config.fightingTimes)
        win.fightingTimes5.setSelection(Math.floor((mode5Config.fightingTimes || 0) / 10));

    //绑定事件
    win.btnRunMode5.on('click', () => {
        var times = win.fightingTimes5.getSelectedItemPosition();
        if (times === 0)
            times = 1;
        else
            times = times * 10;
        var config = {
            team: win.spGoTeam5.getSelectedItemPosition() + 1,
            fightingTimes: times
        };
        var configJson = JSON.stringify(config);
        //toast(configJson);
        //保存本次配置
        var zjsnStorage = storages.create("zjsn");
        zjsnStorage.put('mode5:config', configJson);
        //回调方法
        win.close();
        if (options.events && typeof options.events.runMode5 === 'function') {
            options.events.runMode5(config, runCallback);
        }
    });
    win.tab1_close5.on('click', function () {
        exit();
    });
}

function setWindowConfig(win) {
    //window配置
    var deviceH = device.height,
        deviceW = device.width;
    console.log("设备宽高，W:" + deviceW + ',H:' + deviceH);
    if (deviceH > deviceW) {
        var tmp = deviceW;
        deviceW = deviceH;
        deviceH = tmp;
    }
    var winWidth = 800,
        winHeight = deviceH - 100;
    console.log('dh:' + deviceH + ',dw:' + deviceW + ',wh:' + winHeight + ',ww:' + winWidth);
    win.setSize(winWidth, winHeight);
    win.setPosition(deviceW / 2 - winWidth / 2, 100);
    //win.exitOnClose();
    win.viewpager.setTitles(['模式1', '模式2', '模式3', '模式5']);
    win.tabs.setupWithViewPager(win.viewpager);
    // win.btnClose.on('click', () => {
    //     exit();
    // });
}

function showMainDialog(options, runCallback) {
    options = options || {};
    var win = floaty.window(
        <vertical bg="#FFFFFFFF">
            <appbar>
                <tabs id="tabs" />
            </appbar>
            <viewpager id="viewpager">
                <frame>
                    <vertical>
                        <text text="模式1：出门第一点"></text>
                        <horizontal>
                            <text text="出征队伍："></text>
                            <spinner id="spGoTeam" entries="队伍1|队伍2|队伍3|队伍4" spinnerMode="dialog" />
                        </horizontal>
                        <checkbox id="cbIsNightFighting" checked="false" text="夜战" />
                        <horizontal>
                            <text text="补给频率："></text>
                            <spinner id="spSupplyFrequency" entries="每1次出击后|每2次出击后|每3次出击后|每4次出击后" spinnerMode="dialog" />
                        </horizontal>
                        <horizontal>
                            <text text="出征次数:"></text>
                            <spinner id="fightingTimes" entries="1|10|20|30|40|50" spinnerMode="dialog" />
                        </horizontal>
                        <horizontal>
                            <button id="btnRunMode1" text="开始" />
                            <button id="tab1_close" text="关闭" />
                        </horizontal>
                    </vertical>
                </frame>
                <frame>
                    <vertical>
                        <text text="模式2:5-3打捞B25"></text>
                        <horizontal>
                            <text text="出征队伍："></text>
                            <spinner id="spGoTeam2" entries="队伍1|队伍2|队伍3|队伍4" spinnerMode="dialog" />
                        </horizontal>
                        <horizontal>
                            <text text="出征次数:"></text>
                            <spinner id="fightingTimes2" entries="1|10|20|30|40|50" spinnerMode="dialog" />
                        </horizontal>
                        <horizontal>
                            <button id="btnRunMode2" text="开始" />
                            <button id="tab1_close2" text="关闭" />
                        </horizontal>
                    </vertical>
                </frame>
                <frame>
                    <vertical>
                        <text text="模式3:战役"></text>
                        <horizontal>
                            <text text="战役编号："></text>
                            <spinner id="spBattleNo" entries="1号|2号|3号|4号|5号" spinnerMode="dialog" />
                        </horizontal>
                        <horizontal>
                            <text text="阵型："></text>
                            <spinner id="spFightFormation" entries="1号|2号|3号|4号|5号" spinnerMode="dialog" />
                        </horizontal>
                        <horizontal>
                            <text text="出征次数:"></text>
                            <spinner id="fightingTimes3" entries="1|2|4|8|16" spinnerMode="dialog" />
                        </horizontal>
                        <horizontal>
                            <button id="btnRunMode3" text="开始" />
                            <button id="tab1_close3" text="关闭" />
                        </horizontal>
                    </vertical>
                </frame>
                <frame>
                    <vertical>
                        <text text="模式5:2-1"></text>
                        <horizontal>
                            <text text="出征队伍："></text>
                            <spinner id="spGoTeam5" entries="队伍1|队伍2|队伍3|队伍4" spinnerMode="dialog" />
                        </horizontal>
                        <horizontal>
                            <text text="出征次数:"></text>
                            <spinner id="fightingTimes5" entries="1|10|20|30|40|50" spinnerMode="dialog" />
                        </horizontal>
                        <horizontal>
                            <button id="btnRunMode5" text="开始" />
                            <button id="tab1_close5" text="关闭" />
                        </horizontal>
                    </vertical>
                </frame>
            </viewpager>
        </vertical>
    );
    setMode1UI(win, runCallback);
    setMode2UI(win, runCallback);
    setMode3UI(win, runCallback);
    //setMode4UI(win, runCallback);
    setMode5UI(win, runCallback);

    setWindowConfig(win);
    return win;
}

const uis = {
    showMainDialog: showMainDialog
};

//var w = uis.showMainUI();

//setInterval(() => { }, 1000);//此处代码死循环是为了阻止脚本自动结束

module.exports = uis;