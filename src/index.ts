import { CustomEazyTime } from "./custom";
import { EazyTimeConfigStructure, EazyTimeStructure } from "./types";

const ms = 1;
const DefaultConfig : EazyTimeConfigStructure = {
    BASE_MS: ms,
    BASE_SEC: ms * 1000,
    BASE_MIN: ms * 1000 * 60,
    BASE_HOUR: ms * 1000 * 60 * 60,
    BASE_DAY: ms * 1000 * 60 * 60 * 24,
}

const EazyTime: EazyTimeStructure = CustomEazyTime(DefaultConfig);
export = EazyTime;