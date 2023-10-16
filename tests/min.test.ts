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

describe("Eazy Time Min Test", () => {
    it("Test The Static Min Fields", () => {
        expect(EazyTimeTest.OneMin).toBe(config.BASE_MIN*1);
        expect(EazyTimeTest.TwoMin).toBe(config.BASE_MIN*2);
        expect(EazyTimeTest.ThreeMin).toBe(config.BASE_MIN*3);
        expect(EazyTimeTest.FourMin).toBe(config.BASE_MIN*4);
        expect(EazyTimeTest.FiveMin).toBe(config.BASE_MIN*5);
        expect(EazyTimeTest.SixMin).toBe(config.BASE_MIN*6);
        expect(EazyTimeTest.SevenMin).toBe(config.BASE_MIN*7);
        expect(EazyTimeTest.EightMin).toBe(config.BASE_MIN*8);
        expect(EazyTimeTest.NineMin).toBe(config.BASE_MIN*9);
        expect(EazyTimeTest.TenMin).toBe(config.BASE_MIN*10);

        const ninetyNineMin = config.BASE_MIN * 99;
        expect(EazyTimeTest.Min(99)).toBe(ninetyNineMin);
    });
});