// tslint:disable:no-console
import { TestRunner } from "web-atoms-core/bin/unit/base-test";

// import unit test modules here
import "./tests/NewTaskWindowTest";

const instance: TestRunner = TestRunner.instance;

// export Atom;
declare var process: any;

instance.run().then(() => {
    console.log("Tests ran successfully.");
    process.exit();
}).catch( (e) => {
    console.error(e);
    process.abort();
});
