"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HelloWorld_1 = require("../HelloWorld");
describe("HelloWorld", function () {
    it("should say hello", function () {
        var hello = new HelloWorld_1.default();
        expect(hello.sayHello("Microsoft")).toEqual("Hello Microsoft!");
    });
});
//# sourceMappingURL=HelloWorld.test.js.map