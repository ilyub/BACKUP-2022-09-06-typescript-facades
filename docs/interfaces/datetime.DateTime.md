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
- [setStartOfWeek](datetime.DateTime.md#setstartofweek)
- [setStartOfWeekLocale](datetime.DateTime.md#setstartofweeklocale)
- [setYear](datetime.DateTime.md#setyear)
- [sub](datetime.DateTime.md#sub)
- [toDate](datetime.DateTime.md#todate)
- [toString](datetime.DateTime.md#tostring)
- [toTime](datetime.DateTime.md#totime)
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

Self-clones.

#### Returns

[`DateTime`](datetime.DateTime.md)

Cloned DateTime instance.

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

Formats date/time. Extended date-fns notation:
- HHHH = hh or HH depending on locale.
- HHH = h or H depending on locale.
- A = a or empty string depending on locale.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fmt` | `string` | Format. |

#### Returns

`string`

- Date/time as formatted string.

___

### hours

▸ `Readonly` **hours**(): `number`

Returns hours.

#### Returns

`number`

Hours.

___

### isSameDayOfMonth

▸ `Readonly` **isSameDayOfMonth**(`dt`): `boolean`

Compares two DateTime instances up to day of month.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dt` | [`DateTime`](datetime.DateTime.md) | Date/time. |

#### Returns

`boolean`

_True_ if DateTime instances are equal, _false_ otherwise.

___

### isSameHour

▸ `Readonly` **isSameHour**(`dt`): `boolean`

Compares two DateTime instances up to hours.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dt` | [`DateTime`](datetime.DateTime.md) | Date/time. |

#### Returns

`boolean`

_True_ if DateTime instances are equal, _false_ otherwise.

___

### isSameMinute

▸ `Readonly` **isSameMinute**(`dt`): `boolean`

Compares two DateTime instances up to minutes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dt` | [`DateTime`](datetime.DateTime.md) | Date/time. |

#### Returns

`boolean`

_True_ if DateTime instances are equal, _false_ otherwise.

___

### isSameMonth

▸ `Readonly` **isSameMonth**(`dt`): `boolean`

Compares two DateTime instances up to month.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dt` | [`DateTime`](datetime.DateTime.md) | Date/time. |

#### Returns

`boolean`

_True_ if DateTime instances are equal, _false_ otherwise.

___

### isSameYear

▸ `Readonly` **isSameYear**(`dt`): `boolean`

Compares two DateTime instances up to year.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dt` | [`DateTime`](datetime.DateTime.md) | Date/time. |

#### Returns

`boolean`

_True_ if DateTime instances are equal, _false_ otherwise.

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

### setStartOfWeek

▸ `Readonly` **setStartOfWeek**(`weekStartsOn`): [`DateTime`](datetime.DateTime.md)

Sets day of week to start of week.

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

Sets day of week to start of week.

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

Returns date/time as a Date object.

#### Returns

`Date`

Date object.

___

### toString

▸ `Readonly` **toString**(): `string`

Returns date/time as "yyyy-MM-dd HH:mm:ss" formatted string.

#### Returns

`string`

Formatted string.

___

### toTime

▸ `Readonly` **toTime**(): `number`

Returns date/time as a number of seconds.

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
