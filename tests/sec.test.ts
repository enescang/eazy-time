import { CustomEazyTime } from "../src/custom";
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

describe("Eazy Time Sec Test", () => {
    it("Test The Static Sec Fields", () => {
        expect(EazyTimeTest.OneSec).toBe(config.BASE_SEC*1);
        expect(EazyTimeTest.TwoSec).toBe(config.BASE_SEC*2);
        expect(EazyTimeTest.ThreeSec).toBe(config.BASE_SEC*3);
        expect(EazyTimeTest.FourSec).toBe(config.BASE_SEC*4);
        expect(EazyTimeTest.FiveSec).toBe(config.BASE_SEC*5);
        expect(EazyTimeTest.SixSec).toBe(config.BASE_SEC*6);
        expect(EazyTimeTest.SevenSec).toBe(config.BASE_SEC*7);
        expect(EazyTimeTest.EightSec).toBe(config.BASE_SEC*8);
        expect(EazyTimeTest.NineSec).toBe(config.BASE_SEC*9);
        expect(EazyTimeTest.TenSec).toBe(config.BASE_SEC*10);

        const oneHundredSec = config.BASE_SEC * 100;
        expect(EazyTimeTest.Sec(100)).toBe(oneHundredSec);
    });
});