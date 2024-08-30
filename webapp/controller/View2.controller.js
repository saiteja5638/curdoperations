sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    function (Controller) {
        "use strict";
        var that;
        return Controller.extend("curdoperations.controller.View2", {
            onInit: function () {
              that = this;
            },
            onView3:()=>{
                that.getOwnerComponent().getRouter().navTo("View3")
            }

        });
    });
