sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    "sap/ui/model/Filter",
    "sap/ui/core/format/DateFormat"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageBox, Filter, DateFormat) {
        "use strict";

        return Controller.extend("northwindinvoices.northwindodatainvoicesproject.controller.View1", {
            onInit: function () {
                var t = this;
                var oModel = this.getOwnerComponent().getModel();
                //  var t = this;
                debugger;
                oModel.read("/Invoices", {
                    success: function (Data) {

                        for (var i = 0; i < Data.results.length; i++) {
                            var frmt = sap.ui.core.format.DateFormat.getDateInstance({ pattern: "dd/MM/yyyy" });
                            Data.results[i].OrderDate = frmt.format(new Date(Data.results[i].OrderDate));
                        }

                        for (var i = 0; i < Data.results.length; i++) {
                            var frmt = sap.ui.core.format.DateFormat.getDateInstance({ pattern: "dd/MM/yyyy" });
                            Data.results[i].RequiredDate = frmt.format(new Date(Data.results[i].RequiredDate));
                        }

                        for (var i = 0; i < Data.results.length; i++) {
                            var frmt = sap.ui.core.format.DateFormat.getDateInstance({ pattern: "dd/MM/yyyy" });
                            Data.results[i].ShippedDate = frmt.format(new Date(Data.results[i].ShippedDate));
                        }

                        var model1 = new sap.ui.model.json.JSONModel();
                        model1.setData(Data);
                        MessageBox.success("Success");

                        t.getView().setModel(model1, "model1");
                    },
                    error: function (oError) {
                        MessageBox.error("Error");
                        //  alert(oerror);
                    }
                });

            },

            onFilterSearch: function (oEvent) {

                var sQuery = oEvent.getParameter("query"),
                    oTable = this.getView().byId("Tab"),
                    oBinding = oTable.getBinding("items");

                if (oEvent.getId() == "liveChange") {
                    sQuery = oEvent.getParameter("query");
                }

                if (sQuery) {
                    var oFilter1 = new Filter("ShipName", "EQ", sQuery);
                    var oFilter2 = new Filter("ShipAddress", "EQ", sQuery);
                    var oFilter3 = new Filter("ShipCity", "EQ", sQuery);
                    var oFilter4 = new Filter("ShipRegion", "EQ", sQuery);
                    var oFilter5 = new Filter("ShipPostalCode", "EQ", sQuery);
                    var oFilter6 = new Filter("ShipCountry", "EQ", sQuery);
                    var oFilter7 = new Filter("CustomerID", "EQ", sQuery);
                    var oFilter8 = new Filter("CustomerName", "EQ", sQuery);
                    var oFilter9 = new Filter("Address", "EQ", sQuery);
                    var oFilter10 = new Filter("City", "EQ", sQuery);
                    var oFilter11 = new Filter("Region", "EQ", sQuery);
                    var oFilter12 = new Filter("PostalCode", "EQ", sQuery);
                    var oFilter13 = new Filter("Country", "EQ", sQuery);
                    var oFilter14 = new Filter("Salesperson", "EQ", sQuery);
                    var oFilter15 = new Filter("OrderID", "EQ", sQuery);
                    var oFilter16 = new Filter("OrderDate", "EQ", sQuery);
                    var oFilter17 = new Filter("RequiredDate", "EQ", sQuery);
                    var oFilter18 = new Filter("ShippedDate", "EQ", sQuery);
                    var oFilter19 = new Filter("ShipperName", "EQ", sQuery);
                    var oFilter20 = new Filter("ProductID", "EQ", sQuery);
                    var oFilter21 = new Filter("ProductName", "EQ", sQuery);
                    var oFilter22 = new Filter("UnitPrice", "EQ", sQuery);
                    var oFilter23 = new Filter("Quantity", "EQ", sQuery);
                    var oFilter24 = new Filter("Discount", "EQ", sQuery);
                    var oFilter25 = new Filter("ExtendedPrice", "EQ", sQuery);
                    var oFilter26 = new Filter("Freight", "EQ", sQuery);

                    var aFilter = new Filter([oFilter1, oFilter2, oFilter3, oFilter4, oFilter5, oFilter6, oFilter7,
                        oFilter8, oFilter9, oFilter10, oFilter11, oFilter12, oFilter13, oFilter14, oFilter15,
                        oFilter16, oFilter17, oFilter18, oFilter19, oFilter20, oFilter21, oFilter22,
                        oFilter23, oFilter24, oFilter25, oFilter26]);
                }

                oBinding.filter(aFilter);
            },

            onRowClick: function (oEvent) {
                var key = oEvent.oSource.mAggregations.cells[6].mProperties.text;
                var router = sap.ui.core.UIComponent.getRouterFor(this);
                router.navTo("View2", { Id: key });
            }

            /* onClick1: function(){
                 var router = sap.ui.core.UIComponent.getRouterFor(this);
                 router.navTo("View2");
             } */
        });
    });
