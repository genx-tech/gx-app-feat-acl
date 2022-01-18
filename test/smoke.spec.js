const testSuite = require("@genx/test");

testSuite(
    __filename,
    function (suite) {        
        suite.testCase("test case 1", async function () {                 
            await suite.startWorker_(async (app) => {
                const ok = true;
                ok.should.be.ok();
            });
        });

        suite.testCase("test case 2", async function () {                 
            await suite.startWorker_(async (app) => {
                const ng = false;
                ng.should.be.not.ok();
            });
        });
    }, 
    { verbose: true }
);
