const assert = require("assert");

const Messenger = artifacts.require("./Messenger.sol");

contract("Messenger", (accounts) => {
    const expected = "Hello Tron";

    it("accepts message", async() => {
        const instance = await Messenger.deployed();
        assert.ok(instance);
        const response = await instance.call('postMessage', expected);
        console.log(`[DEBUG] <Test #1> response: ${response}`);
        assert.ok(response);
        assert.notEqual(response, expected);
    });

    it("returns message", async() => {
        const instance = await Messenger.deployed();
        assert.ok(instance);
        const response = await instance.call('getMessage');
        console.log(`[DEBUG] <Test #2> response: ${response}`);
        assert.ok(response);
        assert.equal(response, expected);
    });
});