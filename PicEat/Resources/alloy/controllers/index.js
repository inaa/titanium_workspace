function Controller() {
    function slikaj() {
        Titanium.Media.showCamera({
            success: function(event) {
                Ti.API.debug("Our type was: " + event.mediaType);
                if (event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
                    var imageView = Ti.UI.createImageView({
                        width: win.width,
                        height: win.height,
                        image: event.media
                    });
                    win.add(imageView);
                } else alert("got the wrong type back =" + event.mediaType);
            },
            cancel: function() {},
            error: function(error) {
                var a = Titanium.UI.createAlertDialog({
                    title: "Camera"
                });
                error.code == Titanium.Media.NO_CAMERA ? a.setMessage("Please run this test on device") : a.setMessage("Unexpected error: " + error.code);
                a.show();
            },
            saveToPhotoGallery: true,
            allowEditing: true,
            mediaTypes: [ Ti.Media.MEDIA_TYPE_VIDEO, Ti.Media.MEDIA_TYPE_PHOTO ]
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.tableRow = Ti.UI.createTableViewRow({
        height: 150,
        id: "tableRow"
    });
    var __alloyId1 = [];
    __alloyId1.push($.__views.tableRow);
    $.__views.viewLeft = Ti.UI.createView({
        left: 0,
        width: "45%",
        id: "viewLeft"
    });
    $.__views.tableRow.add($.__views.viewLeft);
    $.__views.pickeat = Ti.UI.createButton({
        title: "Pickeat",
        id: "pickeat"
    });
    $.__views.viewLeft.add($.__views.pickeat);
    $.__views.viewRight = Ti.UI.createView({
        left: "50%",
        width: "45%",
        id: "viewRight"
    });
    $.__views.tableRow.add($.__views.viewRight);
    $.__views.settings = Ti.UI.createButton({
        title: "Settings",
        id: "settings"
    });
    $.__views.viewRight.add($.__views.settings);
    $.__views.tableRow = Ti.UI.createTableViewRow({
        height: 150,
        id: "tableRow"
    });
    __alloyId1.push($.__views.tableRow);
    $.__views.viewLeft = Ti.UI.createView({
        left: 0,
        width: "45%",
        id: "viewLeft"
    });
    $.__views.tableRow.add($.__views.viewLeft);
    $.__views.mealPhoto = Ti.UI.createButton({
        title: "Take a photo of your meal",
        id: "mealPhoto"
    });
    $.__views.viewLeft.add($.__views.mealPhoto);
    slikaj ? $.__views.mealPhoto.addEventListener("click", slikaj) : __defers["$.__views.mealPhoto!click!slikaj"] = true;
    $.__views.viewRight = Ti.UI.createView({
        left: "50%",
        width: "45%",
        id: "viewRight"
    });
    $.__views.tableRow.add($.__views.viewRight);
    $.__views.mealGallery = Ti.UI.createButton({
        title: "Gallery of my meals",
        id: "mealGallery"
    });
    $.__views.viewRight.add($.__views.mealGallery);
    $.__views.tableRow = Ti.UI.createTableViewRow({
        height: 150,
        id: "tableRow"
    });
    __alloyId1.push($.__views.tableRow);
    $.__views.viewLeft = Ti.UI.createView({
        left: 0,
        width: "45%",
        id: "viewLeft"
    });
    $.__views.tableRow.add($.__views.viewLeft);
    $.__views.selfPhoto = Ti.UI.createButton({
        title: "Take a photo of yourself",
        id: "selfPhoto"
    });
    $.__views.viewLeft.add($.__views.selfPhoto);
    slikaj ? $.__views.selfPhoto.addEventListener("click", slikaj) : __defers["$.__views.selfPhoto!click!slikaj"] = true;
    $.__views.viewRight = Ti.UI.createView({
        left: "50%",
        width: "45%",
        id: "viewRight"
    });
    $.__views.tableRow.add($.__views.viewRight);
    $.__views.selfGallery = Ti.UI.createButton({
        title: "My photo gallery",
        id: "selfGallery"
    });
    $.__views.viewRight.add($.__views.selfGallery);
    $.__views.idGlavnaTabela = Ti.UI.createTableView({
        data: __alloyId1,
        id: "idGlavnaTabela"
    });
    $.__views.index.add($.__views.idGlavnaTabela);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    __defers["$.__views.mealPhoto!click!slikaj"] && $.__views.mealPhoto.addEventListener("click", slikaj);
    __defers["$.__views.selfPhoto!click!slikaj"] && $.__views.selfPhoto.addEventListener("click", slikaj);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;