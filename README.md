Eazy Time (Not Completed Yet)
--

## ⏳ Getting Started
Just for quick explanation please check the examples:
```js
const one_sec = 1000;
const one_min = one_sec * 60;
const one_hour = one_min * 60;
const one_day_v1 = one_hour * 24;

//OR
const one_day_v2 = 1000 * 60 * 60 * 24;

//OR 🥳
const one_day_v3 = EazyTime.OneDay;

//OR 🥳
const one_day_v4 = EazyTime.Day(1);
```

So, <code>eazy-time</code> is a more simplified way to get the "time".

## ⬇️ Install
```shell
npm install eazy-time --save
```

## ⏰ Usage
Importing package
```js
import EazyTime from "eazy-time";
```
Now, you can get static field and functions for timestamp generator.

### Ms
#### Generator
```js
const ms = EazyTime.Ms(120);
```

#### Static Fields Table
|Property                  | Value  | Test   |
|--------------------------|--------|--------|
|OneMs|1| X
|TwoMs|2| X
|ThreeMs|3| X
|FourMs|4| X
|FiveMs|5| X
|SixMs|6| X
|SevenMs|7| X
|EightMs|8| X
|NineMs|9| X
|TenMs|10| X