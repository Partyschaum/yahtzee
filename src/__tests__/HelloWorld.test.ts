import HelloWorld from "../HelloWorld";

describe("HelloWorld", () => {
    it("should say hello", () => {
        const hello = new HelloWorld();
        expect(hello.sayHello("Microsoft")).toEqual("Hello Microsoft!");
    });
});
