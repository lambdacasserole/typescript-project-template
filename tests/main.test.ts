// Testing framework.
import { expect } from "chai";

// Testing subject.
import { doSomeAddition } from "../src/main";

// Quick test for the doSomeAddition() function.
describe("Example Test", () => {
    it("doSomeAddition() should correctly return the sum of its arguments", () => {
        expect(doSomeAddition(7, 3)).to.equal(10);
    });
});
