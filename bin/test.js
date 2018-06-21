"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable:no-console
var base_test_1 = require("web-atoms-core/bin/unit/base-test");
// import unit test modules here
require("./tests/NewTaskWindowTest");
var instance = base_test_1.TestRunner.instance;
instance.run().then(function () {
    console.log("Tests ran successfully.");
    process.exit();
}).catch(function (e) {
    console.error(e);
    process.abort();
});
//# sourceMappingURL=test.js.map