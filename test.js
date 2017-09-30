var fs = require("fs");
var vm = require("vm");

function loadScript(file){
    var s = fs.readFileSync(file,'utf-8');
    var script = new vm.Script(s, { 
        filename: file,
        displayErrors: true,
        lineOffset: 0,
        columnOffset: 0
    });
    script.runInThisContext();
}

global.window = {
    Atom: {

    },
    AtomBinder:{
        
    },
    AtomUI:{
        createControl: function(){

        }
    },
    WebAtoms: {

    }
};

global.WebAtoms = window.WebAtoms;

loadScript("./node_modules/web-atoms-unit/web-atoms-mock.js")
loadScript("./node_modules/web-atoms-mvvm/dist/web-atoms-mvvm.js");
loadScript("./node_modules/web-atoms-mvvm/dist/web-atoms-mvvm-mock.js");
loadScript("./node_modules/web-atoms-unit/index.js");

loadScript("./app/build/views.js.mock.js");
loadScript("./app/build/app.js");

// load your tests..
// ideally all typescript files should be transpiled into
// one js file
loadScript("./tests/build/tests.js");

// .. so on.. you can write a script to load many files....

var p = WebAtoms.Unit.TestRunner.instance.run();

p.then(function(){
    process.exit();
});

p.catch(function(error){
    console.error(error);
    process.abort();
});
