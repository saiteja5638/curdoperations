sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    function (Controller) {
        "use strict";
        var that;
        return Controller.extend("curdoperations.controller.View1", {
            onInit: function () {
                that = this;
               
                // this.byId("button1").attachBrowserEvent("mouseover", this.onButtonHover.bind(this));
                // this.byId("button2").attachBrowserEvent("mouseover", this.onButtonHover.bind(this));
                // this.byId("button3").attachBrowserEvent("mouseover", this.onButtonHover.bind(this));

                // // Attach mouseout event to remove the line
                // this.byId("button1").attachBrowserEvent("mouseout", this.onButtonMouseOut.bind(this));
                // this.byId("button2").attachBrowserEvent("mouseout", this.onButtonMouseOut.bind(this));
                // this.byId("button3").attachBrowserEvent("mouseout", this.onButtonMouseOut.bind(this));
            },

            onButtonHover: function (oEvent) {
                var index = oEvent.currentTarget.id.split("button")[1];
                this._drawHorizontalLine(index);
            },

            onButtonMouseOut: function () {
                this._removeHorizontalLine();
            },

            _drawHorizontalLine: function (index) {
                this._removeHorizontalLine();  // Remove any existing line

                // Get the DOM references for the button and the list item
                var oButton = this.byId("button" + index).getDomRef();
                var oListItem = this.byId("listItem" + index).getDomRef();

                // Calculate the positions
                var buttonRect = oButton.getBoundingClientRect();
                var listItemRect = oListItem.getBoundingClientRect();

                // Create the horizontal line
                var line = document.createElement("div");
                line.className = "horizontal-line";

                // Set the line's position and width to connect the button and list item horizontally
                line.style.left = buttonRect.right + "px";
                line.style.top = (buttonRect.top + buttonRect.height / 2) + "px";
                line.style.width = (listItemRect.left - buttonRect.right) + "px";

                // Append the line to the body
                document.body.appendChild(line);
            },

            _removeHorizontalLine: function () {
                var existingLine = document.querySelector(".horizontal-line");
                if (existingLine) {
                    existingLine.remove();
                }
            },
            Navto2:()=>{
                that.getOwnerComponent().getRouter().navTo("View2");
            },
            onTrigger:function()
            {
                let get_selected = that.byId("_IDGenList1").getSelectedItem().getBindingContext().getObject();
             

                that.getOwnerComponent().getModel("oGmodel").setData({
                    items:get_selected
                })
                that.getOwnerComponent().getRouter().navTo("View2");
                var oSecondController = sap.ui.controller("curdoperations.controller.View2"); 
                oSecondController.onBindPropers();

            }
            


        });
    });
