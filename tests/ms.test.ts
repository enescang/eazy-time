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

describe("Eazy Time Ms Test", () => {
    it("Test The Static Ms Fields", () => {
        expect(EazyTimeTest.OneMs).toBe(config.BASE_MS*1);
        expect(EazyTimeTest.TwoMs).toBe(config.BASE_MS*2);
        expect(EazyTimeTest.ThreeMs).toBe(config.BASE_MS*3);
        expect(EazyTimeTest.FourMs).toBe(config.BASE_MS*4);
        expect(EazyTimeTest.FiveMs).toBe(config.BASE_MS*5);
        expect(EazyTimeTest.SixMs).toBe(config.BASE_MS*6);
        expect(EazyTimeTest.SevenMs).toBe(config.BASE_MS*7);
        expect(EazyTimeTest.EightMs).toBe(config.BASE_MS*8);
        expect(EazyTimeTest.NineMs).toBe(config.BASE_MS*9);
        expect(EazyTimeTest.TenMs).toBe(config.BASE_MS*10);

        const oneHundredFortyFiveMsSec = config.BASE_MS * 145;
        expect(EazyTimeTest.Ms(145)).toBe(oneHundredFortyFiveMsSec);
    });
});