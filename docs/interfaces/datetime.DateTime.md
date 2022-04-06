[Typescript facades](../index.md) / [Exports](../modules.md) / [datetime](../modules/datetime.md) / DateTime

# Interface: DateTime

[datetime](../modules/datetime.md).DateTime

## Table of contents

### Methods

- [add](datetime.DateTime.md#add)
- [clone](datetime.DateTime.md#clone)
- [dayOfMonth](datetime.DateTime.md#dayofmonth)
- [dayOfWeek](datetime.DateTime.md#dayofweek)
- [format](datetime.DateTime.md#format)
- [hours](datetime.DateTime.md#hours)
- [isSameDayOfMonth](datetime.DateTime.md#issamedayofmonth)
- [isSameHour](datetime.DateTime.md#issamehour)
- [isSameMinute](datetime.DateTime.md#issameminute)
- [isSameMonth](datetime.DateTime.md#issamemonth)
- [isSameYear](datetime.DateTime.md#issameyear)
- [minutes](datetime.DateTime.md#minutes)
- [month](datetime.DateTime.md#month)
- [setDayOfMonth](datetime.DateTime.md#setdayofmonth)
- [setDayOfWeek](datetime.DateTime.md#setdayofweek)
- [setDayOfWeekLocale](datetime.DateTime.md#setdayofweeklocale)
- [setHours](datetime.DateTime.md#sethours)
- [setMinutes](datetime.DateTime.md#setminutes)
- [setMonth](datetime.DateTime.md#setmonth)
- [setStartOfDay](datetime.DateTime.md#setstartofday)
- [setStartOfHour](datetime.DateTime.md#setstartofhour)
- [setStartOfMinute](datetime.DateTime.md#setstartofminute)
- [setStartOfMonth](datetime.DateTime.md#setstartofmonth)
- [setStartOfWeek](datetime.DateTime.md#setstartofweek)
- [setStartOfWeekLocale](datetime.DateTime.md#setstartofweeklocale)
- [setStartOfYear](datetime.DateTime.md#setstartofyear)
- [setYear](datetime.DateTime.md#setyear)
- [sub](datetime.DateTime.md#sub)
- [toDate](datetime.DateTime.md#todate)
- [toString](datetime.DateTime.md#tostring)
- [toTime](datetime.DateTime.md#totime)
- [toTimeSec](datetime.DateTime.md#totimesec)
- [year](datetime.DateTime.md#year)

## Methods

### add

▸ `Readonly` **add**(`amount`, `unit`): [`DateTime`](datetime.DateTime.md)

Adds time interval.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `number` | Amount to be added. |
| `unit` | [`Unit`](../modules/datetime.md#unit) | Unit. |

#### Returns

[`DateTime`](datetime.DateTime.md)

Self.

___

### clone

▸ `Readonly` **clone**(): [`DateTime`](datetime.DateTime.md)

Clones self.

#### Returns

[`DateTime`](datetime.DateTime.md)

DateTime instance.

___

### dayOfMonth

▸ `Readonly` **dayOfMonth**(): `number`

Returns day of month.

#### Returns

`number`

Day of month.

___

### dayOfWeek

▸ `Readonly` **dayOfWeek**(): `number`

Returns day of week.

#### Returns

`number`

Day of week (Sunday = 0, Monday = 1).

___

### format

▸ `Readonly` **format**(`fmt`): `string`

Formats date.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fmt` | `string` | Format. |

#### Returns

`string`

Formatted string.

___

### hours

▸ `Readonly` **hours**(): `number`

Returns hours.

#### Returns

`number`

Hours.

___

### isSameDayOfMonth

▸ `Readonly` **isSameDayOfMonth**(`date`): `boolean`

Compares two dates up to day of month.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `date` | [`DateTime`](datetime.DateTime.md) | Date. |

#### Returns

`boolean`

_True_ if dates are equal, _false_ otherwise.

___

### isSameHour

▸ `Readonly` **isSameHour**(`date`): `boolean`

Compares two dates up to hours.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `date` | [`DateTime`](datetime.DateTime.md) | Date. |

#### Returns

`boolean`

_True_ if dates are equal, _false_ otherwise.

___

### isSameMinute

▸ `Readonly` **isSameMinute**(`date`): `boolean`

Compares two dates up to minutes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `date` | [`DateTime`](datetime.DateTime.md) | Date. |

#### Returns

`boolean`

_True_ if dates are equal, _false_ otherwise.

___

### isSameMonth

▸ `Readonly` **isSameMonth**(`date`): `boolean`

Compares two dates up to month.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `date` | [`DateTime`](datetime.DateTime.md) | Date. |

#### Returns

`boolean`

_True_ if dates are equal, _false_ otherwise.

___

### isSameYear

▸ `Readonly` **isSameYear**(`date`): `boolean`

Compares two dates up to year.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `date` | [`DateTime`](datetime.DateTime.md) | Date. |

#### Returns

`boolean`

_True_ if dates are equal, _false_ otherwise.

___

### minutes

▸ `Readonly` **minutes**(): `number`

Returns minutes.

#### Returns

`number`

Minutes.

___

### month

▸ `Readonly` **month**(): `number`

Returns month.

#### Returns

`number`

Month (0 = January).

___

### setDayOfMonth

▸ `Readonly` **setDayOfMonth**(`date`): [`DateTime`](datetime.DateTime.md)

Sets day of month.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `date` | `number` | Day of month. |

#### Returns

[`DateTime`](datetime.DateTime.md)

Self.

___

### setDayOfWeek

▸ `Readonly` **setDayOfWeek**(`day`, `weekStartsOn`): [`DateTime`](datetime.DateTime.md)

Sets day of week.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `day` | `number` | Day of week (Sunday = 0, Monday = 1). |
| `weekStartsOn` | ``0`` \| ``1`` | Start of week (Sunday = 0, Monday = 1). |

#### Returns

[`DateTime`](datetime.DateTime.md)

Self.

___

### setDayOfWeekLocale

▸ `Readonly` **setDayOfWeekLocale**(`day`): [`DateTime`](datetime.DateTime.md)

Sets day of week.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `day` | `number` | Day of week (Sunday = 0, Monday = 1). |

#### Returns

[`DateTime`](datetime.DateTime.md)

Self.

___

### setHours

▸ `Readonly` **setHours**(`hours`): [`DateTime`](datetime.DateTime.md)

Sets hours.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hours` | `number` | Hours. |

#### Returns

[`DateTime`](datetime.DateTime.md)

Self.

___

### setMinutes

▸ `Readonly` **setMinutes**(`minutes`): [`DateTime`](datetime.DateTime.md)

Sets minutes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `minutes` | `number` | Minutes. |

#### Returns

[`DateTime`](datetime.DateTime.md)

Self.

___

### setMonth

▸ `Readonly` **setMonth**(`month`): [`DateTime`](datetime.DateTime.md)

Sets month (0 = January).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `month` | `number` | Month. |

#### Returns

[`DateTime`](datetime.DateTime.md)

Self.

___

### setStartOfDay

▸ `Readonly` **setStartOfDay**(): [`DateTime`](datetime.DateTime.md)

Sets date to the start of day.

#### Returns

[`DateTime`](datetime.DateTime.md)

Self.

___

### setStartOfHour

▸ `Readonly` **setStartOfHour**(): [`DateTime`](datetime.DateTime.md)

Sets date to the start of hour.

#### Returns

[`DateTime`](datetime.DateTime.md)

Self.

___

### setStartOfMinute

▸ `Readonly` **setStartOfMinute**(): [`DateTime`](datetime.DateTime.md)

Sets date to the start of minute.

#### Returns

[`DateTime`](datetime.DateTime.md)

Self.

___

### setStartOfMonth

▸ `Readonly` **setStartOfMonth**(): [`DateTime`](datetime.DateTime.md)

Sets date to the start of month.

#### Returns

[`DateTime`](datetime.DateTime.md)

Self.

___

### setStartOfWeek

▸ `Readonly` **setStartOfWeek**(`weekStartsOn`): [`DateTime`](datetime.DateTime.md)

Sets date to the start of week.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `weekStartsOn` | ``0`` \| ``1`` | Start of week (Sunday = 0, Monday = 1). |

#### Returns

[`DateTime`](datetime.DateTime.md)

Self.

___

### setStartOfWeekLocale

▸ `Readonly` **setStartOfWeekLocale**(): [`DateTime`](datetime.DateTime.md)

Sets date to the start of week.

#### Returns

[`DateTime`](datetime.DateTime.md)

Self.

___

### setStartOfYear

▸ `Readonly` **setStartOfYear**(): [`DateTime`](datetime.DateTime.md)

Sets date to the start of year.

#### Returns

[`DateTime`](datetime.DateTime.md)

Self.

___

### setYear

▸ `Readonly` **setYear**(`year`): [`DateTime`](datetime.DateTime.md)

Sets year.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `year` | `number` | Year. |

#### Returns

[`DateTime`](datetime.DateTime.md)

Self.

___

### sub

▸ `Readonly` **sub**(`amount`, `unit`): [`DateTime`](datetime.DateTime.md)

Subtracts time interval.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `number` | Amount to be subtracted. |
| `unit` | [`Unit`](../modules/datetime.md#unit) | Unit. |

#### Returns

[`DateTime`](datetime.DateTime.md)

Self.

___

### toDate

▸ `Readonly` **toDate**(): `Date`

Returns date as a Date object.

#### Returns

`Date`

Date object.

___

### toString

▸ `Readonly` **toString**(): `string`

Returns date as "yyyy-MM-dd HH:mm" / "yyyy-MM-dd HH:mm:ss" formatted string.

#### Returns

`string`

Formatted string.

___

### toTime

▸ `Readonly` **toTime**(): `number`

Returns date as a number of milliseconds.

#### Returns

`number`

Number of milliseconds.

___

### toTimeSec

▸ `Readonly` **toTimeSec**(): `number`

Returns date as a number of seconds.

#### Returns

`number`

Number of seconds.

___

### year

▸ `Readonly` **year**(): `number`

Returns year.

#### Returns

`number`

Year.
