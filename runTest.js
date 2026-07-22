
    function runTest(){
        let testType;
        testType = "smoke"
switch (testType){
        case "smoke":
        console.log("running smoke test");
        break;
        case "sanity":
        console.log("running sanity test");
        break;
        case "regression":
        console.log("running regression test");
        break;
        default:
        console.log("running smoke test");
        break;

    }
}
runTest();

    
    