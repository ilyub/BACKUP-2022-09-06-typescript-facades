[Typescript facades](../index.md) / [Exports](../modules.md) / [datetime](../modules/datetime.md) / [datetime](../modules/datetime.datetime.md) / ReadonlyDateTime

# Interface: ReadonlyDateTime

[datetime](../modules/datetime.md).[datetime](../modules/datetime.datetime.md).ReadonlyDateTime

## Hierarchy

- **`ReadonlyDateTime`**

  ↳ [`DateTime`](datetime.datetime.DateTime.md)

## Table of contents

### Properties

- [clone](datetime.datetime.ReadonlyDateTime.md#clone)
- [dayOfMonth](datetime.datetime.ReadonlyDateTime.md#dayofmonth)
- [dayOfWeek](datetime.datetime.ReadonlyDateTime.md#dayofweek)
- [format](datetime.datetime.ReadonlyDateTime.md#format)
- [hours](datetime.datetime.ReadonlyDateTime.md#hours)
- [isSameDayOfMonth](datetime.datetime.ReadonlyDateTime.md#issamedayofmonth)
- [isSameHour](datetime.datetime.ReadonlyDateTime.md#issamehour)
- [isSameMinute](datetime.datetime.ReadonlyDateTime.md#issameminute)
- [isSameMonth](datetime.datetime.ReadonlyDateTime.md#issamemonth)
- [isSameYear](datetime.datetime.ReadonlyDateTime.md#issameyear)
- [minutes](datetime.datetime.ReadonlyDateTime.md#minutes)
- [month](datetime.datetime.ReadonlyDateTime.md#month)
- [toDate](datetime.datetime.ReadonlyDateTime.md#todate)
- [toString](datetime.datetime.ReadonlyDateTime.md#tostring)
- [toTime](datetime.datetime.ReadonlyDateTime.md#totime)
- [toTimeSec](datetime.datetime.ReadonlyDateTime.md#totimesec)
- [year](datetime.datetime.ReadonlyDateTime.md#year)

## Properties

### clone

• `Readonly` **clone**: () => [`DateTime`](datetime.datetime.DateTime.md)

#### Type declaration

▸ (): [`DateTime`](datetime.datetime.DateTime.md)

Clones self.

##### Returns

[`DateTime`](datetime.datetime.DateTime.md)

DateTime instance.

___

### dayOfMonth

• `Readonly` **dayOfMonth**: () => `number`

#### Type declaration

▸ (): `number`

Returns day of month.

##### Returns

`number`

Day of month.

___

### dayOfWeek

• `Readonly` **dayOfWeek**: () => `number`

#### Type declaration

▸ (): `number`

Returns day of week.

##### Returns

`number`

Day of week (Sunday = 0, Monday = 1).

___

### format

• `Readonly` **format**: (`format`: `string`) => `string`

#### Type declaration

▸ (`format`): `string`

Formats date.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `format` | `string` | Format. |

##### Returns

`string`

Formatted string.

___

### hours

• `Readonly` **hours**: () => `number`

#### Type declaration

▸ (): `number`

Returns hours.

##### Returns

`number`

Hours.

___

### isSameDayOfMonth

• `Readonly` **isSameDayOfMonth**: (`date`: [`DateTime`](datetime.datetime.DateTime.md)) => `boolean`

#### Type declaration

▸ (`date`): `boolean`

Compares two dates up to day of month.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `date` | [`DateTime`](datetime.datetime.DateTime.md) | Date. |

##### Returns

`boolean`

_True_ if dates are equal, _false_ otherwise.

___

### isSameHour

• `Readonly` **isSameHour**: (`date`: [`DateTime`](datetime.datetime.DateTime.md)) => `boolean`

#### Type declaration

▸ (`date`): `boolean`

Compares two dates up to hours.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `date` | [`DateTime`](datetime.datetime.DateTime.md) | Date. |

##### Returns

`boolean`

_True_ if dates are equal, _false_ otherwise.

___

### isSameMinute

• `Readonly` **isSameMinute**: (`date`: [`DateTime`](datetime.datetime.DateTime.md)) => `boolean`

#### Type declaration

▸ (`date`): `boolean`

Compares two dates up to minutes.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `date` | [`DateTime`](datetime.datetime.DateTime.md) | Date. |

##### Returns

`boolean`

_True_ if dates are equal, _false_ otherwise.

___

### isSameMonth

• `Readonly` **isSameMonth**: (`date`: [`DateTime`](datetime.datetime.DateTime.md)) => `boolean`

#### Type declaration

▸ (`date`): `boolean`

Compares two dates up to month.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `date` | [`DateTime`](datetime.datetime.DateTime.md) | Date. |

##### Returns

`boolean`

_True_ if dates are equal, _false_ otherwise.

___

### isSameYear

• `Readonly` **isSameYear**: (`date`: [`DateTime`](datetime.datetime.DateTime.md)) => `boolean`

#### Type declaration

▸ (`date`): `boolean`

Compares two dates up to year.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `date` | [`DateTime`](datetime.datetime.DateTime.md) | Date. |

##### Returns

`boolean`

_True_ if dates are equal, _false_ otherwise.

___

### minutes

• `Readonly` **minutes**: () => `number`

#### Type declaration

▸ (): `number`

Returns minutes.

##### Returns

`number`

Minutes.

___

### month

• `Readonly` **month**: () => `number`

#### Type declaration

▸ (): `number`

Returns month.

##### Returns

`number`

Month (0 = January).

___

### toDate

• `Readonly` **toDate**: () => `Date`

#### Type declaration

▸ (): `Date`

Returns date as a Date object.

##### Returns

`Date`

Date object.

___

### toString

• `Readonly` **toString**: () => `string`

#### Type declaration

▸ (): `string`

Returns date as "yyyy-MM-dd HH:mm" / "yyyy-MM-dd HH:mm:ss" formatted string.

##### Returns

`string`

Formatted string.

___

### toTime

• `Readonly` **toTime**: () => `number`

#### Type declaration

▸ (): `number`

Returns date as a number of milliseconds.

##### Returns

`number`

Number of milliseconds.

___

### toTimeSec

• `Readonly` **toTimeSec**: () => `number`

#### Type declaration

▸ (): `number`

Returns date as a number of seconds.

##### Returns

`number`

Number of seconds.

___

### year

• `Readonly` **year**: () => `number`

#### Type declaration

▸ (): `number`

Returns year.

##### Returns

`number`

Year.
