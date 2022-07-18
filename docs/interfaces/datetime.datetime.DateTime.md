[Typescript facades](../index.md) / [Exports](../modules.md) / [datetime](../modules/datetime.md) / [datetime](../modules/datetime.datetime.md) / DateTime

# Interface: DateTime

[datetime](../modules/datetime.md).[datetime](../modules/datetime.datetime.md).DateTime

## Table of contents

### Properties

- [add](datetime.datetime.DateTime.md#add)
- [clone](datetime.datetime.DateTime.md#clone)
- [dayOfMonth](datetime.datetime.DateTime.md#dayofmonth)
- [dayOfWeek](datetime.datetime.DateTime.md#dayofweek)
- [format](datetime.datetime.DateTime.md#format)
- [hours](datetime.datetime.DateTime.md#hours)
- [isSameDayOfMonth](datetime.datetime.DateTime.md#issamedayofmonth)
- [isSameHour](datetime.datetime.DateTime.md#issamehour)
- [isSameMinute](datetime.datetime.DateTime.md#issameminute)
- [isSameMonth](datetime.datetime.DateTime.md#issamemonth)
- [isSameYear](datetime.datetime.DateTime.md#issameyear)
- [minutes](datetime.datetime.DateTime.md#minutes)
- [month](datetime.datetime.DateTime.md#month)
- [setDayOfMonth](datetime.datetime.DateTime.md#setdayofmonth)
- [setDayOfWeek](datetime.datetime.DateTime.md#setdayofweek)
- [setDayOfWeekLocale](datetime.datetime.DateTime.md#setdayofweeklocale)
- [setHours](datetime.datetime.DateTime.md#sethours)
- [setMinutes](datetime.datetime.DateTime.md#setminutes)
- [setMonth](datetime.datetime.DateTime.md#setmonth)
- [setStartOfDay](datetime.datetime.DateTime.md#setstartofday)
- [setStartOfHour](datetime.datetime.DateTime.md#setstartofhour)
- [setStartOfMinute](datetime.datetime.DateTime.md#setstartofminute)
- [setStartOfMonth](datetime.datetime.DateTime.md#setstartofmonth)
- [setStartOfWeek](datetime.datetime.DateTime.md#setstartofweek)
- [setStartOfWeekLocale](datetime.datetime.DateTime.md#setstartofweeklocale)
- [setStartOfYear](datetime.datetime.DateTime.md#setstartofyear)
- [setYear](datetime.datetime.DateTime.md#setyear)
- [sub](datetime.datetime.DateTime.md#sub)
- [toDate](datetime.datetime.DateTime.md#todate)
- [toString](datetime.datetime.DateTime.md#tostring)
- [toTime](datetime.datetime.DateTime.md#totime)
- [toTimeSec](datetime.datetime.DateTime.md#totimesec)
- [year](datetime.datetime.DateTime.md#year)

## Properties

### add

• `Readonly` **add**: (`amount`: `number`, `unit`: [`TimeUnit`](../enums/types.TimeUnit.md)) => [`DateTime`](datetime.datetime.DateTime.md)

#### Type declaration

▸ (`amount`, `unit`): [`DateTime`](datetime.datetime.DateTime.md)

Adds time interval.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `number` | Amount to be added. |
| `unit` | [`TimeUnit`](../enums/types.TimeUnit.md) | Unit. |

##### Returns

[`DateTime`](datetime.datetime.DateTime.md)

New instance.

___

### clone

• `Readonly` **clone**: () => [`DateTime`](datetime.datetime.DateTime.md)

#### Type declaration

▸ (): [`DateTime`](datetime.datetime.DateTime.md)

Clones self.

**`Deprecated`**

- DateTime is readonly.

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

### setDayOfMonth

• `Readonly` **setDayOfMonth**: (`day`: `number`) => [`DateTime`](datetime.datetime.DateTime.md)

#### Type declaration

▸ (`day`): [`DateTime`](datetime.datetime.DateTime.md)

Sets day of month.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `day` | `number` | Day of month. |

##### Returns

[`DateTime`](datetime.datetime.DateTime.md)

New instance.

___

### setDayOfWeek

• `Readonly` **setDayOfWeek**: (`day`: `number`, `weekStartsOn`: ``0`` \| ``1``) => [`DateTime`](datetime.datetime.DateTime.md)

#### Type declaration

▸ (`day`, `weekStartsOn`): [`DateTime`](datetime.datetime.DateTime.md)

Sets day of week.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `day` | `number` | Day of week (Sunday = 0, Monday = 1). |
| `weekStartsOn` | ``0`` \| ``1`` | Start of week (Sunday = 0, Monday = 1). |

##### Returns

[`DateTime`](datetime.datetime.DateTime.md)

New instance.

___

### setDayOfWeekLocale

• `Readonly` **setDayOfWeekLocale**: (`day`: `number`) => [`DateTime`](datetime.datetime.DateTime.md)

#### Type declaration

▸ (`day`): [`DateTime`](datetime.datetime.DateTime.md)

Sets day of week.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `day` | `number` | Day of week (Sunday = 0, Monday = 1). |

##### Returns

[`DateTime`](datetime.datetime.DateTime.md)

New instance.

___

### setHours

• `Readonly` **setHours**: (`hours`: `number`) => [`DateTime`](datetime.datetime.DateTime.md)

#### Type declaration

▸ (`hours`): [`DateTime`](datetime.datetime.DateTime.md)

Sets hours.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hours` | `number` | Hours. |

##### Returns

[`DateTime`](datetime.datetime.DateTime.md)

New instance.

___

### setMinutes

• `Readonly` **setMinutes**: (`minutes`: `number`) => [`DateTime`](datetime.datetime.DateTime.md)

#### Type declaration

▸ (`minutes`): [`DateTime`](datetime.datetime.DateTime.md)

Sets minutes.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `minutes` | `number` | Minutes. |

##### Returns

[`DateTime`](datetime.datetime.DateTime.md)

New instance.

___

### setMonth

• `Readonly` **setMonth**: (`month`: `number`) => [`DateTime`](datetime.datetime.DateTime.md)

#### Type declaration

▸ (`month`): [`DateTime`](datetime.datetime.DateTime.md)

Sets month (0 = January).

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `month` | `number` | Month. |

##### Returns

[`DateTime`](datetime.datetime.DateTime.md)

New instance.

___

### setStartOfDay

• `Readonly` **setStartOfDay**: () => [`DateTime`](datetime.datetime.DateTime.md)

#### Type declaration

▸ (): [`DateTime`](datetime.datetime.DateTime.md)

Sets date to the start of day.

##### Returns

[`DateTime`](datetime.datetime.DateTime.md)

New instance.

___

### setStartOfHour

• `Readonly` **setStartOfHour**: () => [`DateTime`](datetime.datetime.DateTime.md)

#### Type declaration

▸ (): [`DateTime`](datetime.datetime.DateTime.md)

Sets date to the start of hour.

##### Returns

[`DateTime`](datetime.datetime.DateTime.md)

New instance.

___

### setStartOfMinute

• `Readonly` **setStartOfMinute**: () => [`DateTime`](datetime.datetime.DateTime.md)

#### Type declaration

▸ (): [`DateTime`](datetime.datetime.DateTime.md)

Sets date to the start of minute.

##### Returns

[`DateTime`](datetime.datetime.DateTime.md)

New instance.

___

### setStartOfMonth

• `Readonly` **setStartOfMonth**: () => [`DateTime`](datetime.datetime.DateTime.md)

#### Type declaration

▸ (): [`DateTime`](datetime.datetime.DateTime.md)

Sets date to the start of month.

##### Returns

[`DateTime`](datetime.datetime.DateTime.md)

New instance.

___

### setStartOfWeek

• `Readonly` **setStartOfWeek**: (`weekStartsOn`: ``0`` \| ``1``) => [`DateTime`](datetime.datetime.DateTime.md)

#### Type declaration

▸ (`weekStartsOn`): [`DateTime`](datetime.datetime.DateTime.md)

Sets date to the start of week.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `weekStartsOn` | ``0`` \| ``1`` | Start of week (Sunday = 0, Monday = 1). |

##### Returns

[`DateTime`](datetime.datetime.DateTime.md)

New instance.

___

### setStartOfWeekLocale

• `Readonly` **setStartOfWeekLocale**: () => [`DateTime`](datetime.datetime.DateTime.md)

#### Type declaration

▸ (): [`DateTime`](datetime.datetime.DateTime.md)

Sets date to the start of week.

##### Returns

[`DateTime`](datetime.datetime.DateTime.md)

New instance.

___

### setStartOfYear

• `Readonly` **setStartOfYear**: () => [`DateTime`](datetime.datetime.DateTime.md)

#### Type declaration

▸ (): [`DateTime`](datetime.datetime.DateTime.md)

Sets date to the start of year.

##### Returns

[`DateTime`](datetime.datetime.DateTime.md)

New instance.

___

### setYear

• `Readonly` **setYear**: (`year`: `number`) => [`DateTime`](datetime.datetime.DateTime.md)

#### Type declaration

▸ (`year`): [`DateTime`](datetime.datetime.DateTime.md)

Sets year.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `year` | `number` | Year. |

##### Returns

[`DateTime`](datetime.datetime.DateTime.md)

New instance.

___

### sub

• `Readonly` **sub**: (`amount`: `number`, `unit`: [`TimeUnit`](../enums/types.TimeUnit.md)) => [`DateTime`](datetime.datetime.DateTime.md)

#### Type declaration

▸ (`amount`, `unit`): [`DateTime`](datetime.datetime.DateTime.md)

Subtracts time interval.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `number` | Amount to be subtracted. |
| `unit` | [`TimeUnit`](../enums/types.TimeUnit.md) | Unit. |

##### Returns

[`DateTime`](datetime.datetime.DateTime.md)

New instance.

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
