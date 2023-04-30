type MsStructure = {
    readonly OneMs: number,
    readonly TwoMs: number,
    readonly ThreeMs: number,
    readonly FourMs: number,
    readonly FiveMs: number,
    readonly SixMs: number,
    readonly SevenMs: number,
    readonly EightMs: number,
    readonly NineMs:number,
    readonly TenMs: number,
}

type SecStructure = {
    readonly OneSec: number,
    readonly TwoSec: number,
    readonly ThreeSec: number,
    readonly FourSec: number,
    readonly FiveSec: number,
    readonly SixSec: number,
    readonly SevenSec: number,
    readonly EightSec: number,
    readonly NineSec:number,
    readonly TenSec: number,
}

type MinStructure = {
    readonly OneMin: number,
    readonly TwoMin: number,
    readonly ThreeMin: number,
    readonly FourMin: number,
    readonly FiveMin: number,
    readonly SixMin: number,
    readonly SevenMin: number,
    readonly EightMin: number,
    readonly NineMin:number,
    readonly TenMin: number,
}

type EazyTimeConfigStructure = {
    BASE_MS :number,
    BASE_SEC :number,
    BASE_MIN :number,
    BASE_HOUR :number,
    BASE_DAY :number,
}

type EazyTimeConverterStructure = {
    readonly Ms: (ms:number) => number,
    readonly Sec: (sec: number) => number,
    readonly Min: (min:number) => number,
};

type EazyTimeStaticFieldStructure = MsStructure & SecStructure & MinStructure;
type EazyTimeStructure = EazyTimeConfigStructure & EazyTimeStaticFieldStructure & EazyTimeConverterStructure;

export {
    MsStructure,
    SecStructure,
    MinStructure,

    EazyTimeConfigStructure,
    EazyTimeConverterStructure,
    EazyTimeStaticFieldStructure,
    EazyTimeStructure,
};