/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"curdoperations/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
