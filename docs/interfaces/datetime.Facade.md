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

▸ `Readonly` **create**(`dt?`): [`DateTime`](datetime.DateTime.md)

Creates DateTime instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dt?` | `NumStr` \| [`DateTime`](datetime.DateTime.md) \| `Date` | Date/time. |

#### Returns

[`DateTime`](datetime.DateTime.md)

DateTime instance.

___

### now

▸ `Readonly` **now**(): `string`

Returns current date/time as a "yyyy-MM-dd HH:mm:ss" formatted string.

#### Returns

`string`

Current date/time.

___

### time

▸ `Readonly` **time**(): `number`

Returns current date/time as a number of milliseconds.

#### Returns

`number`

Current date/time.

___

### timeSec

▸ `Readonly` **timeSec**(): `number`

Returns current date/time as a number of seconds.

#### Returns

`number`

Current date/time.

___

### validate

▸ `Readonly` **validate**(`dt`): `boolean`

Validates date string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dt` | `string` | Date/time. |

#### Returns

`boolean`

_True_ if date/time is valid, _false_ otherwise.
