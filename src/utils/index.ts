import { EazyTimeConfigStructure, EazyTimeConverterStructure, EazyTimeStaticFieldStructure, MinStructure, MsStructure, SecStructure } from "../types"

const GenerateMs = (config: EazyTimeConfigStructure) :MsStructure =>{
    return {
        OneMs: config.BASE_MS,
        TwoMs: config.BASE_MS * 2,
        ThreeMs: config.BASE_MS * 3,
        FourMs: config.BASE_MS * 4,
        FiveMs: config.BASE_MS * 5,
        SixMs: config.BASE_MS * 6,
        SevenMs: config.BASE_MS * 7,
        EightMs: config.BASE_MS * 8,
        NineMs: config.BASE_MS * 9,
        TenMs: config.BASE_MS * 10,
    }
}

const GenerateSec = (config: EazyTimeConfigStructure) :SecStructure =>{
    return {
        OneSec: config.BASE_SEC * 1,
        TwoSec: config.BASE_SEC * 2,
        ThreeSec: config.BASE_SEC * 3,
        FourSec: config.BASE_SEC * 4,
        FiveSec: config.BASE_SEC * 5,
        SixSec: config.BASE_SEC * 6,
        SevenSec: config.BASE_SEC * 7,
        EightSec: config.BASE_SEC * 8,
        NineSec: config.BASE_SEC * 9,
        TenSec: config.BASE_SEC * 10,
    }
}

const GenerateMin = (config: EazyTimeConfigStructure) : MinStructure=>{
    return {
        OneMin: config.BASE_MIN * 1,
        TwoMin: config.BASE_MIN * 2,
        ThreeMin: config.BASE_MIN * 3,
        FourMin: config.BASE_MIN * 4,
        FiveMin: config.BASE_MIN * 5,
        SixMin: config.BASE_MIN * 6,
        SevenMin: config.BASE_MIN * 7,
        EightMin: config.BASE_MIN * 8,
        NineMin: config.BASE_MIN * 9,
        TenMin: config.BASE_MIN * 10,
    }
}

const GenerateConverters = (config: EazyTimeConfigStructure): EazyTimeConverterStructure => {
    const Ms = (ms: number): number => {
        return config.BASE_MS * ms;
    }
    const Sec = (sec: number): number => {
        return config.BASE_SEC * sec;
    }
    const Min = (min: number): number => {
        return config.BASE_MIN * min;
    }

    return {
        Ms,
        Sec,
        Min
    }
}

export {
    GenerateMs,
    GenerateSec,
    GenerateMin,
    GenerateConverters,
}