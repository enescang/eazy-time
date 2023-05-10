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

export {
    CustomEazyTime,
}