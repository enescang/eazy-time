import EazyTime, { CustomEazyTime } from "../src";
import { EazyTimeConfigStructure, EazyTimeStructure } from "../src/types";

const ms = 1;
const config: EazyTimeConfigStructure = {
    BASE_MS: ms,
    BASE_SEC: ms * 1000,
    BASE_MIN: ms * 1000 * 60,
    BASE_HOUR: ms * 1000 * 60 * 60,
    BASE_DAY: ms * 1000 * 60 * 60 * 24,
}
const EazyTimeTest: EazyTimeStructure = CustomEazyTime(config);

describe("Eazy Time Test", () => {
    it("Test The Static Fields", () => {
        expect(EazyTimeTest.OneMs).toBe(1);
        expect(EazyTimeTest.TwoMs).toBe(2);
    });
});