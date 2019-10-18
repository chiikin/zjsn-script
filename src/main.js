let myui = require("myui.js");

let utils = require("utils.js");
let fightingHelper = require("fightinghelper.js");
let screenhelper = require("screenhelper.js");
let fightingMode1 = require("fightingmode1.js");
let fightingMode2 = require("fightingmode2.js");
let fightingMode3 = require("fightingmode3.js");
let fightingMode4 = require("fightingmode4.js");

function initialize() {
    if (!requestScreenCapture()) {
        toast("请求截图权限失败");
        exit();
    }
    setScreenMetrics(1080, 1920);//设置脚本预制的屏幕大小
}

fightingHelper.initialize(screenhelper);
fightingMode1.initialize(screenhelper, fightingHelper);
fightingMode2.initialize(screenhelper, fightingHelper);
fightingMode3.initialize(screenhelper, fightingHelper);
fightingMode4.initialize(screenhelper, fightingHelper);

initialize();

var options = {
    events: {
        runMode1: fightingMode1.run,
        runMode2: fightingMode2.run,
        runMode3: fightingMode3.run,
        runMode4: fightingMode4.run
    }
};

var run = function () {
    myui.showMainDialog(options, run);
};

run();

setInterval(() => { }, 1000);//用于阻止脚本结束。