import { DayStructure, EazyTimeConfigStructure, EazyTimeConverterStructure, EazyTimeStaticFieldStructure, HourStructure, MinStructure, MsStructure, SecStructure } from "../types"

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

const GenerateHour = (config: EazyTimeConfigStructure) : HourStructure=>{
    return {
        OneHour: config.BASE_HOUR * 1,
        TwoHour: config.BASE_HOUR * 2,
        ThreeHour: config.BASE_HOUR * 3,
        FourHour: config.BASE_HOUR * 4,
        FiveHour: config.BASE_HOUR * 5,
        SixHour: config.BASE_HOUR * 6,
        SevenHour: config.BASE_HOUR * 7,
        EightHour: config.BASE_HOUR * 8,
        NineHour: config.BASE_HOUR * 9,
        TenHour: config.BASE_HOUR * 10,
    }
}

const GenerateDay = (config: EazyTimeConfigStructure) : DayStructure=>{
    return {
        OneDay: config.BASE_DAY * 1,
        TwoDay: config.BASE_DAY * 2,
        ThreeDay: config.BASE_DAY * 3,
        FourDay: config.BASE_DAY * 4,
        FiveDay: config.BASE_DAY * 5,
        SixDay: config.BASE_DAY * 6,
        SevenDay: config.BASE_DAY * 7,
        EightDay: config.BASE_DAY * 8,
        NineDay: config.BASE_DAY * 9,
        TenDay: config.BASE_DAY * 10,
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

    const Hour = (hour: number): number => {
        return config.BASE_HOUR * hour;
    }

    const Day = (day: number): number => {
        return config.BASE_DAY * day;
    }

    return {
        Ms,
        Sec,
        Min,
        Hour,
        Day,
    }
}

export {
    GenerateMs,
    GenerateSec,
    GenerateMin,
    GenerateHour,
    GenerateDay,

    GenerateConverters,
}