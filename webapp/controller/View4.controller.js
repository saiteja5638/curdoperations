sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    function (Controller) {
        "use strict";
        var that;
        return Controller.extend("curdoperations.controller.View4", {
            onInit: function () {
              that = this;
            },
            onView3:()=>{
                that.getOwnerComponent().getRouter().navTo("View3")
            }

        });
    });
