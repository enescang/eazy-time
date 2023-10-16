Eazy Time
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
|OneMs|1| 🧪
|TwoMs|2| 🧪
|ThreeMs|3| 🧪
|FourMs|4| 🧪
|FiveMs|5| 🧪
|SixMs|6| 🧪
|SevenMs|7| 🧪
|EightMs|8| 🧪
|NineMs|9| 🧪
|TenMs|10| 🧪

### Sec
#### Generator
```js
const sec = EazyTime.Sec(45);
```

#### Static Fields Table
|Property                  | Value  | Test   |
|--------------------------|--------|--------|
|OneSec    |1000   |🧪
|TwoSec    |2000   |🧪
|ThreeSec    |3000   |🧪
|FourSec    |4000   |🧪
|FiveSec    |5000   |🧪
|SixSec    |6000   |🧪
|SevenSec    |7000   |🧪
|EightSec    |8000   |🧪
|NineSec    |9000   |🧪
|TenSec    |10000   |🧪

### Min
#### Generator
```js
const min = EazyTime.Min(90);
```

#### Static Fields Table
|Property                  | Value  | Test   |
|--------------------------|--------|--------|
|OneMin    |60000   |🧪
|TwoMin    |120000   |🧪
|ThreeMin    |180000   |🧪
|FourMin    |240000   |🧪
|FiveMin    |300000   |🧪
|SixMin    |360000   |🧪
|SevenMin    |420000   |🧪
|EightMin    |480000   |🧪
|NineMin    |540000   |🧪
|TenMin    |600000   |🧪

### Hour
#### Generator
```js
const hour = EazyTime.Hour(36);
```

#### Static Fields Table
|Property                  | Value  | Test   |
|--------------------------|--------|--------|
|OneHour    |3600000   |🧪
|TwoHour    |7200000   |🧪
|ThreeHour    |10800000   |🧪
|FourHour    |14400000   |🧪
|FiveHour    |18000000   |🧪
|SixHour    |21600000   |🧪
|SevenHour    |25200000   |🧪
|EightHour    |28800000   |🧪
|NineHour    |32400000   |🧪
|TenHour    |36000000   |🧪

### Day
#### Generator
```js
const day = EazyTime.Day(9);
```

#### Static Fields Table
|Property                  | Value  | Test   |
|--------------------------|--------|--------|
|OneDay    |86400000   |🧪
|TwoDay    |172800000   |🧪
|ThreeDay    |259200000   |🧪
|FourDay    |345600000   |🧪
|FiveDay    |432000000   |🧪
|SixDay    |518400000   |🧪
|SevenDay    |604800000   |🧪
|EightDay    |691200000   |🧪
|NineDay    |777600000   |🧪
|TenDay    |864000000   |🧪

## Todo
| Task                     	| Status 	|
|--------------------------	|--------	|
| Write test cases for MS  	| ✅        |
| Write test cases for Sec 	| ✅        |
| Write test cases for Min 	| ✅        |
| Create "Contribute" file 	| ⏱️      	|
| Add license              	| ✅    	   |