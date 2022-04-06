[Typescript facades](../index.md) / [Exports](../modules.md) / [datetime](../modules/datetime.md) / Facade

# Interface: Facade

[datetime](../modules/datetime.md).Facade

## Table of contents

### Methods

- [create](datetime.Facade.md#create)
- [now](datetime.Facade.md#now)
- [time](datetime.Facade.md#time)
- [timeSec](datetime.Facade.md#timesec)
- [validate](datetime.Facade.md#validate)

## Methods

### create

▸ `Readonly` **create**(`date?`): [`DateTime`](datetime.DateTime.md)

Creates DateTime instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `date?` | `NumStr` \| [`DateTime`](datetime.DateTime.md) \| `Date` | Date. |

#### Returns

[`DateTime`](datetime.DateTime.md)

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
