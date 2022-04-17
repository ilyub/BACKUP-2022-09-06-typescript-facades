[Typescript facades](../index.md) / [Exports](../modules.md) / [datetime](../modules/datetime.md) / [datetime](../modules/datetime.datetime-1.md) / Facade

# Interface: Facade

[datetime](../modules/datetime.md).[datetime](../modules/datetime.datetime-1.md).Facade

## Table of contents

### Methods

- [create](datetime.datetime-1.Facade.md#create)
- [now](datetime.datetime-1.Facade.md#now)
- [time](datetime.datetime-1.Facade.md#time)
- [timeSec](datetime.datetime-1.Facade.md#timesec)
- [validate](datetime.datetime-1.Facade.md#validate)

## Methods

### create

▸ `Readonly` **create**(`date?`): [`DateTime`](datetime.datetime-1.DateTime.md)

Creates DateTime instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `date?` | `NumStr` \| [`DateTime`](datetime.datetime-1.DateTime.md) \| `Date` | Date. |

#### Returns

[`DateTime`](datetime.datetime-1.DateTime.md)

DateTime instance.

___

### now

▸ `Readonly` **now**(): `string`

Returns current date as "yyyy-MM-dd HH:mm" / "yyyy-MM-dd HH:mm:ss" formatted string.

#### Returns

`string`

Formatted string.

___

### time

▸ `Readonly` **time**(): `number`

Returns current date as a number of milliseconds.

#### Returns

`number`

Number of milliseconds.

___

### timeSec

▸ `Readonly` **timeSec**(): `number`

Returns current date as a number of seconds.

#### Returns

`number`

Number of seconds.

___

### validate

▸ `Readonly` **validate**(`date`): `boolean`

Validates date string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `date` | `string` | Date. |

#### Returns

`boolean`

_True_ if date is valid, _false_ otherwise.
