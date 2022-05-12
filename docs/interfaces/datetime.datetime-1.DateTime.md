[Typescript facades](../index.md) / [Exports](../modules.md) / [datetime](../modules/datetime.md) / [datetime](../modules/datetime.datetime-1.md) / DateTime

# Interface: DateTime

[datetime](../modules/datetime.md).[datetime](../modules/datetime.datetime-1.md).DateTime

## Table of contents

### Methods

- [add](datetime.datetime-1.DateTime.md#add)
- [clone](datetime.datetime-1.DateTime.md#clone)
- [dayOfMonth](datetime.datetime-1.DateTime.md#dayofmonth)
- [dayOfWeek](datetime.datetime-1.DateTime.md#dayofweek)
- [format](datetime.datetime-1.DateTime.md#format)
- [hours](datetime.datetime-1.DateTime.md#hours)
- [isSameDayOfMonth](datetime.datetime-1.DateTime.md#issamedayofmonth)
- [isSameHour](datetime.datetime-1.DateTime.md#issamehour)
- [isSameMinute](datetime.datetime-1.DateTime.md#issameminute)
- [isSameMonth](datetime.datetime-1.DateTime.md#issamemonth)
- [isSameYear](datetime.datetime-1.DateTime.md#issameyear)
- [minutes](datetime.datetime-1.DateTime.md#minutes)
- [month](datetime.datetime-1.DateTime.md#month)
- [setDayOfMonth](datetime.datetime-1.DateTime.md#setdayofmonth)
- [setDayOfWeek](datetime.datetime-1.DateTime.md#setdayofweek)
- [setDayOfWeekLocale](datetime.datetime-1.DateTime.md#setdayofweeklocale)
- [setHours](datetime.datetime-1.DateTime.md#sethours)
- [setMinutes](datetime.datetime-1.DateTime.md#setminutes)
- [setMonth](datetime.datetime-1.DateTime.md#setmonth)
- [setStartOfDay](datetime.datetime-1.DateTime.md#setstartofday)
- [setStartOfHour](datetime.datetime-1.DateTime.md#setstartofhour)
- [setStartOfMinute](datetime.datetime-1.DateTime.md#setstartofminute)
- [setStartOfMonth](datetime.datetime-1.DateTime.md#setstartofmonth)
- [setStartOfWeek](datetime.datetime-1.DateTime.md#setstartofweek)
- [setStartOfWeekLocale](datetime.datetime-1.DateTime.md#setstartofweeklocale)
- [setStartOfYear](datetime.datetime-1.DateTime.md#setstartofyear)
- [setYear](datetime.datetime-1.DateTime.md#setyear)
- [sub](datetime.datetime-1.DateTime.md#sub)
- [toDate](datetime.datetime-1.DateTime.md#todate)
- [toString](datetime.datetime-1.DateTime.md#tostring)
- [toTime](datetime.datetime-1.DateTime.md#totime)
- [toTimeSec](datetime.datetime-1.DateTime.md#totimesec)
- [year](datetime.datetime-1.DateTime.md#year)

## Methods

### add

▸ `Readonly` **add**(`amount`, `unit`): [`DateTime`](datetime.datetime-1.DateTime.md)

Adds time interval.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `number` | Amount to be added. |
| `unit` | [`Unit`](../modules/datetime.datetime-1.md#unit) | Unit. |

#### Returns

[`DateTime`](datetime.datetime-1.DateTime.md)

Self.

___

### clone

▸ `Readonly` **clone**(): [`DateTime`](datetime.datetime-1.DateTime.md)

Clones self.

#### Returns

[`DateTime`](datetime.datetime-1.DateTime.md)

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

▸ `Readonly` **format**(`format`): `string`

Formats date.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `format` | `string` | Format. |

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
| `date` | [`DateTime`](datetime.datetime-1.DateTime.md) | Date. |

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
| `date` | [`DateTime`](datetime.datetime-1.DateTime.md) | Date. |

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
| `date` | [`DateTime`](datetime.datetime-1.DateTime.md) | Date. |

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
| `date` | [`DateTime`](datetime.datetime-1.DateTime.md) | Date. |

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
| `date` | [`DateTime`](datetime.datetime-1.DateTime.md) | Date. |

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

▸ `Readonly` **setDayOfMonth**(`day`): [`DateTime`](datetime.datetime-1.DateTime.md)

Sets day of month.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `day` | `number` | Day of month. |

#### Returns

[`DateTime`](datetime.datetime-1.DateTime.md)

Self.

___

### setDayOfWeek

▸ `Readonly` **setDayOfWeek**(`day`, `weekStartsOn`): [`DateTime`](datetime.datetime-1.DateTime.md)

Sets day of week.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `day` | `number` | Day of week (Sunday = 0, Monday = 1). |
| `weekStartsOn` | ``0`` \| ``1`` | Start of week (Sunday = 0, Monday = 1). |

#### Returns

[`DateTime`](datetime.datetime-1.DateTime.md)

Self.

___

### setDayOfWeekLocale

▸ `Readonly` **setDayOfWeekLocale**(`day`): [`DateTime`](datetime.datetime-1.DateTime.md)

Sets day of week.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `day` | `number` | Day of week (Sunday = 0, Monday = 1). |

#### Returns

[`DateTime`](datetime.datetime-1.DateTime.md)

Self.

___

### setHours

▸ `Readonly` **setHours**(`hours`): [`DateTime`](datetime.datetime-1.DateTime.md)

Sets hours.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hours` | `number` | Hours. |

#### Returns

[`DateTime`](datetime.datetime-1.DateTime.md)

Self.

___

### setMinutes

▸ `Readonly` **setMinutes**(`minutes`): [`DateTime`](datetime.datetime-1.DateTime.md)

Sets minutes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `minutes` | `number` | Minutes. |

#### Returns

[`DateTime`](datetime.datetime-1.DateTime.md)

Self.

___

### setMonth

▸ `Readonly` **setMonth**(`month`): [`DateTime`](datetime.datetime-1.DateTime.md)

Sets month (0 = January).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `month` | `number` | Month. |

#### Returns

[`DateTime`](datetime.datetime-1.DateTime.md)

Self.

___

### setStartOfDay

▸ `Readonly` **setStartOfDay**(): [`DateTime`](datetime.datetime-1.DateTime.md)

Sets date to the start of day.

#### Returns

[`DateTime`](datetime.datetime-1.DateTime.md)

Self.

___

### setStartOfHour

▸ `Readonly` **setStartOfHour**(): [`DateTime`](datetime.datetime-1.DateTime.md)

Sets date to the start of hour.

#### Returns

[`DateTime`](datetime.datetime-1.DateTime.md)

Self.

___

### setStartOfMinute

▸ `Readonly` **setStartOfMinute**(): [`DateTime`](datetime.datetime-1.DateTime.md)

Sets date to the start of minute.

#### Returns

[`DateTime`](datetime.datetime-1.DateTime.md)

Self.

___

### setStartOfMonth

▸ `Readonly` **setStartOfMonth**(): [`DateTime`](datetime.datetime-1.DateTime.md)

Sets date to the start of month.

#### Returns

[`DateTime`](datetime.datetime-1.DateTime.md)

Self.

___

### setStartOfWeek

▸ `Readonly` **setStartOfWeek**(`weekStartsOn`): [`DateTime`](datetime.datetime-1.DateTime.md)

Sets date to the start of week.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `weekStartsOn` | ``0`` \| ``1`` | Start of week (Sunday = 0, Monday = 1). |

#### Returns

[`DateTime`](datetime.datetime-1.DateTime.md)

Self.

___

### setStartOfWeekLocale

▸ `Readonly` **setStartOfWeekLocale**(): [`DateTime`](datetime.datetime-1.DateTime.md)

Sets date to the start of week.

#### Returns

[`DateTime`](datetime.datetime-1.DateTime.md)

Self.

___

### setStartOfYear

▸ `Readonly` **setStartOfYear**(): [`DateTime`](datetime.datetime-1.DateTime.md)

Sets date to the start of year.

#### Returns

[`DateTime`](datetime.datetime-1.DateTime.md)

Self.

___

### setYear

▸ `Readonly` **setYear**(`year`): [`DateTime`](datetime.datetime-1.DateTime.md)

Sets year.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `year` | `number` | Year. |

#### Returns

[`DateTime`](datetime.datetime-1.DateTime.md)

Self.

___

### sub

▸ `Readonly` **sub**(`amount`, `unit`): [`DateTime`](datetime.datetime-1.DateTime.md)

Subtracts time interval.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `number` | Amount to be subtracted. |
| `unit` | [`Unit`](../modules/datetime.datetime-1.md#unit) | Unit. |

#### Returns

[`DateTime`](datetime.datetime-1.DateTime.md)

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
