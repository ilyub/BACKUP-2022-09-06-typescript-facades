[Typescript facades](../index.md) / [Exports](../modules.md) / [datetime](../modules/datetime.md) / [datetime](../modules/datetime.datetime.md) / Facade

# Interface: Facade

[datetime](../modules/datetime.md).[datetime](../modules/datetime.datetime.md).Facade

## Table of contents

### Properties

- [create](datetime.datetime.Facade.md#create)
- [now](datetime.datetime.Facade.md#now)
- [time](datetime.datetime.Facade.md#time)
- [timeSec](datetime.datetime.Facade.md#timesec)
- [validate](datetime.datetime.Facade.md#validate)

## Properties

### create

• `Readonly` **create**: (`date?`: `NumStr` \| [`DateTime`](datetime.datetime.DateTime.md) \| `Date`) => [`DateTime`](datetime.datetime.DateTime.md)

#### Type declaration

▸ (`date?`): [`DateTime`](datetime.datetime.DateTime.md)

Creates DateTime instance.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `date?` | `NumStr` \| [`DateTime`](datetime.datetime.DateTime.md) \| `Date` | Date. |

##### Returns

[`DateTime`](datetime.datetime.DateTime.md)

DateTime instance.

___

### now

• `Readonly` **now**: () => `string`

#### Type declaration

▸ (): `string`

Returns current date as "yyyy-MM-dd HH:mm" / "yyyy-MM-dd HH:mm:ss" formatted string.

##### Returns

`string`

Formatted string.

___

### time

• `Readonly` **time**: () => `number`

#### Type declaration

▸ (): `number`

Returns current date as a number of milliseconds.

##### Returns

`number`

Number of milliseconds.

___

### timeSec

• `Readonly` **timeSec**: () => `number`

#### Type declaration

▸ (): `number`

Returns current date as a number of seconds.

##### Returns

`number`

Number of seconds.

___

### validate

• `Readonly` **validate**: (`date`: `string`) => `boolean`

#### Type declaration

▸ (`date`): `boolean`

Validates date string.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `date` | `string` | Date. |

##### Returns

`boolean`

_True_ if date is valid, _false_ otherwise.
