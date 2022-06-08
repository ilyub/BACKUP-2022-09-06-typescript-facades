[Typescript facades](../index.md) / [Exports](../modules.md) / [datetime](../modules/datetime.md) / [datetime](../modules/datetime.datetime-1.md) / ReadonlyDateTime

# Interface: ReadonlyDateTime

[datetime](../modules/datetime.md).[datetime](../modules/datetime.datetime-1.md).ReadonlyDateTime

## Hierarchy

- **`ReadonlyDateTime`**

  ↳ [`DateTime`](datetime.datetime-1.DateTime.md)

## Table of contents

### Methods

- [clone](datetime.datetime-1.ReadonlyDateTime.md#clone)
- [dayOfMonth](datetime.datetime-1.ReadonlyDateTime.md#dayofmonth)
- [dayOfWeek](datetime.datetime-1.ReadonlyDateTime.md#dayofweek)
- [format](datetime.datetime-1.ReadonlyDateTime.md#format)
- [hours](datetime.datetime-1.ReadonlyDateTime.md#hours)
- [isSameDayOfMonth](datetime.datetime-1.ReadonlyDateTime.md#issamedayofmonth)
- [isSameHour](datetime.datetime-1.ReadonlyDateTime.md#issamehour)
- [isSameMinute](datetime.datetime-1.ReadonlyDateTime.md#issameminute)
- [isSameMonth](datetime.datetime-1.ReadonlyDateTime.md#issamemonth)
- [isSameYear](datetime.datetime-1.ReadonlyDateTime.md#issameyear)
- [minutes](datetime.datetime-1.ReadonlyDateTime.md#minutes)
- [month](datetime.datetime-1.ReadonlyDateTime.md#month)
- [toDate](datetime.datetime-1.ReadonlyDateTime.md#todate)
- [toString](datetime.datetime-1.ReadonlyDateTime.md#tostring)
- [toTime](datetime.datetime-1.ReadonlyDateTime.md#totime)
- [toTimeSec](datetime.datetime-1.ReadonlyDateTime.md#totimesec)
- [year](datetime.datetime-1.ReadonlyDateTime.md#year)

## Methods

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
