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

describe("Eazy Time Hour Test", () => {
    it("Test The Static Hour Fields", () => {
        expect(EazyTimeTest.OneHour).toBe(config.BASE_HOUR);
        expect(EazyTimeTest.TwoHour).toBe(config.BASE_HOUR*2);
    });
});