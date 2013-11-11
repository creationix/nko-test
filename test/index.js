var test = require("tape");

var nkoTest = require("../index.js");

test("nkoTest is a function", function (assert) {
    assert.equal(typeof nkoTest, "function");
    assert.end();
});

test("nkoTest adds numbers", function (assert) {
    assert.equal(nkoTest(4, 3), 7);
    assert.end();
});

