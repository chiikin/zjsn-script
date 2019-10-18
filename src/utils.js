
var utils = {};

utils.screenDirection = function () {
    var deviceH = device.height,
        deviceW = device.width;
    if (deviceH > deviceW)
        return "vertical";
    else
        return "horizontal";
}

module.exports=utils;