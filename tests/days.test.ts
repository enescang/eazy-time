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

describe("Eazy Time Day Test", () => {
    it("Test The Static Day Fields", () => {
        expect(EazyTimeTest.OneDay).toBe(config.BASE_DAY*1);
        expect(EazyTimeTest.TwoDay).toBe(config.BASE_DAY*2);
        expect(EazyTimeTest.ThreeDay).toBe(config.BASE_DAY*3);
        expect(EazyTimeTest.FourDay).toBe(config.BASE_DAY*4);
        expect(EazyTimeTest.FiveDay).toBe(config.BASE_DAY*5);
        expect(EazyTimeTest.SixDay).toBe(config.BASE_DAY*6);
        expect(EazyTimeTest.SevenDay).toBe(config.BASE_DAY*7);
        expect(EazyTimeTest.EightDay).toBe(config.BASE_DAY*8);
        expect(EazyTimeTest.NineDay).toBe(config.BASE_DAY*9);
        expect(EazyTimeTest.TenDay).toBe(config.BASE_DAY*10);

        const threeAndAHalfDays = config.BASE_DAY * 3.5;
        expect(EazyTimeTest.Day(3.5)).toBe(threeAndAHalfDays);
    });
});