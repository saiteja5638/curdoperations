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
            },
            onBindPropers:function()
            {
                let getData  =  that.getOwnerComponent().getModel("oGmodel").getData().items;

                that.byId("_IDGenImage1").setSrc(getData.PLANT_AVATAR)
                that.byId("_IDGenTitle1").setText(getData.PLANT_ID)
                that.byId("_IDGenTitle2").setText(getData.PLANT_NAME)
                that.byId("_IDGenTitle3").setText(getData.PLANT_LOC)
                that.byId("_IDGenTitle4").setText(getData.PLANT_CONT)
                that.byId("_IDGenTitle5").setText(getData.PLANT_EMAIL)
                that.byId("_IDGenTitle6").setText(getData.PLANT_HEAD)
                that.byId("_IDGenTitle7").setText(getData.PLANT_REVENUE)
            },
            onTreeProps:function()
            {
                 let TreeData = [
                    {
                        "text":"Parent1",
                         node:[
                            {
                                "text":"Children1",
                                node:[
                                    {
                                        "text":"Little Children"
                                    },
                                    {
                                        "text":"Little Children1",
                                        node:[
                                            {
                                                "text":"Little Dog Parent"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "text":"Children2"
                            },
                            {
                                "text":"Children3"
                            }
                         ]
                    },
                    {
                        "text":"Parent2",
                        node:[
                            {
                                "text":"Children"
                            }
                        ]
                    }
                 ]

                 let oModel = new sap.ui.model.json.JSONModel({
                    items:TreeData
                 })
                 that.byId("Tree").setModel(oModel)
            }

        });
    });
