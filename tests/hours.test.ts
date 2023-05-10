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

describe("Eazy Time Hour Test", () => {
    it("Test The Static Hour Fields", () => {
        expect(EazyTimeTest.OneHour).toBe(config.BASE_HOUR*1);
        expect(EazyTimeTest.TwoHour).toBe(config.BASE_HOUR*2);
        expect(EazyTimeTest.ThreeHour).toBe(config.BASE_HOUR*3);
        expect(EazyTimeTest.FourHour).toBe(config.BASE_HOUR*4);
        expect(EazyTimeTest.FiveHour).toBe(config.BASE_HOUR*5);
        expect(EazyTimeTest.SixHour).toBe(config.BASE_HOUR*6);
        expect(EazyTimeTest.SevenHour).toBe(config.BASE_HOUR*7);
        expect(EazyTimeTest.EightHour).toBe(config.BASE_HOUR*8);
        expect(EazyTimeTest.NineHour).toBe(config.BASE_HOUR*9);
        expect(EazyTimeTest.TenHour).toBe(config.BASE_HOUR*10);

        const threeAndAHalfHours = config.BASE_HOUR * 3.5;
        expect(EazyTimeTest.Hour(3.5)).toBe(threeAndAHalfHours);
    });
});