sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    function (Controller) {
        "use strict";
        var that;
        return Controller.extend("curdoperations.controller.View3", {
            onInit: function () {
                that = this;
            },
            onPressNavToDetail: function () {
                this.getSplitContObj().to(this.createId("detailDetail"));
            },

            onPressDetailBack: function () {
                this.getSplitContObj().backDetail();
            },

            onPressMasterBack: function () {
                this.getSplitContObj().backMaster();
            },

            onPressGoToMaster: function () {
                this.getSplitContObj().toMaster(this.createId("master2"));
            },

            onListItemPress: function (oEvent) {
                var sToPageId = oEvent.getParameter("listItem").getCustomData()[0].getValue();

                this.getSplitContObj().toDetail(this.createId(sToPageId));
            },

            onPressModeBtn: function (oEvent) {
                var sSplitAppMode = oEvent.getSource().getSelectedButton().getCustomData()[0].getValue();

                this.getSplitContObj().setMode(sSplitAppMode);
                sap.m.MessageToast.show("Split Container mode is changed to: " + sSplitAppMode, { duration: 5000 });
            },
            getSplitContObj: function () {
                var result = this.byId("_IDGenSplitContainer1");
                if (!result) {
                    Log.error("SplitApp object can't be found");
                }
                return result;
            },
            onBinddetails:function()
            {
                let list = that.byId("_IDGenList2").getSelectedItem().getBindingContext().getObject();

                that.byId("_IDGenObjectListItem1").setTitle(list.PLANT_NAME)
                that.byId("_IDGenObjectListItem1").setNumber(list.PLANT_REVENUE)
                that.byId("_IDGenObjectStatus2").setTitle(list.PLANT_HEAD)
                that.byId("_IDGenObjectAttribute3").setTitle(list.PLANT_LOC)
                that.byId("_IDGenObjectAttribute4").setTitle(list.PLANT_EMAIL)
                
            }

        });
    });
