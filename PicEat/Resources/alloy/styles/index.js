module.exports = [ {
    isApi: true,
    priority: 1000.0003,
    key: "Label",
    style: {
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000"
    }
}, {
    isClass: true,
    priority: 10000.0002,
    key: "container",
    style: {
        backgroundColor: "white"
    }
}, {
    isId: true,
    priority: 100000.0004,
    key: "viewLeft",
    style: {
        left: 0,
        width: "45%"
    }
}, {
    isId: true,
    priority: 100000.0005,
    key: "viewRight",
    style: {
        left: "50%",
        width: "45%"
    }
}, {
    isId: true,
    priority: 100000.0006,
    key: "tableRow",
    style: {
        height: 150
    }
} ];