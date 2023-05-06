import { EazyTimeConfigStructure, EazyTimeStructure } from "./types";
import { GenerateConverters, GenerateDay, GenerateHour, GenerateMin, GenerateMs, GenerateSec } from "./utils";

const CustomEazyTime = (Config:EazyTimeConfigStructure) : EazyTimeStructure =>{
    const MS = GenerateMs(Config);
    const SEC = GenerateSec(Config);
    const MIN = GenerateMin(Config);
    const HOUR = GenerateHour(Config);
    const DAY = GenerateDay(Config);
    const Converters = GenerateConverters(Config);

    return {
        ...Config,
        ...MS,
        ...SEC,
        ...MIN,
        ...HOUR,
        ...DAY,

        ...Converters,
    };
}

const ms = 1;
const DefaultConfig : EazyTimeConfigStructure = {
    BASE_MS: ms,
    BASE_SEC: ms * 1000,
    BASE_MIN: ms * 1000 * 60,
    BASE_HOUR: ms * 1000 * 60 * 60,
    BASE_DAY: ms * 1000 * 60 * 60 * 24,
}

const EazyTime: EazyTimeStructure = CustomEazyTime(DefaultConfig);

export {
    CustomEazyTime,
}
export default EazyTime;