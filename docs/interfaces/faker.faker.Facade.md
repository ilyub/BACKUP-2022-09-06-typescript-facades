[Typescript facades](../index.md) / [Exports](../modules.md) / [faker](../modules/faker.md) / [faker](../modules/faker.faker.md) / Facade

# Interface: Facade

[faker](../modules/faker.md).[faker](../modules/faker.faker.md).Facade

## Table of contents

### Properties

- [boolean](faker.faker.Facade.md#boolean)
- [date](faker.faker.Facade.md#date)
- [number](faker.faker.Facade.md#number)
- [oneOf](faker.faker.Facade.md#oneof)
- [paragraph](faker.faker.Facade.md#paragraph)
- [phrase](faker.faker.Facade.md#phrase)
- [sentence](faker.faker.Facade.md#sentence)
- [word](faker.faker.Facade.md#word)

## Properties

### boolean

• `Readonly` **boolean**: (`trueWeight?`: `number`, `falseWeight?`: `number`) => `boolean`

#### Type declaration

▸ (`trueWeight?`, `falseWeight?`): `boolean`

Generates random boolean.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `trueWeight?` | `number` | Weight of the _true_ value. |
| `falseWeight?` | `number` | Weight of the _false_ value. |

##### Returns

`boolean`

Random boolean.

___

### date

• `Readonly` **date**: (`from`: `string` \| [`TimeInterval`](../modules/faker.faker.md#timeinterval), `to`: `string` \| [`TimeInterval`](../modules/faker.faker.md#timeinterval), `step?`: `number`, `unit?`: [`TimeUnit`](../modules/faker.faker.md#timeunit)) => `string`

#### Type declaration

▸ (`from`, `to`, `step?`, `unit?`): `string`

Generates random date.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `from` | `string` \| [`TimeInterval`](../modules/faker.faker.md#timeinterval) | Min date. |
| `to` | `string` \| [`TimeInterval`](../modules/faker.faker.md#timeinterval) | Max date. |
| `step?` | `number` | Step. |
| `unit?` | [`TimeUnit`](../modules/faker.faker.md#timeunit) | Step unit. |

##### Returns

`string`

Random date.

___

### number

• `Readonly` **number**: (`from`: `number`, `to`: `number`, `step?`: `number`) => `number`

#### Type declaration

▸ (`from`, `to`, `step?`): `number`

Generates random number.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `from` | `number` | Min value. |
| `to` | `number` | Max value. |
| `step?` | `number` | Step. |

##### Returns

`number`

Random number.

___

### oneOf

• `Readonly` **oneOf**: <T\>(`values`: readonly `T`[]) => `T`

#### Type declaration

▸ <`T`\>(`values`): `T`

Returns random element from an array.

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `values` | readonly `T`[] | Values. |

##### Returns

`T`

Random element.

___

### paragraph

• `Readonly` **paragraph**: (`minSentences?`: `number`, `maxSentences?`: `number`, `minWords?`: `number`, `maxWords?`: `number`) => `string`

#### Type declaration

▸ (`minSentences?`, `maxSentences?`, `minWords?`, `maxWords?`): `string`

Generates random paragraph.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `minSentences?` | `number` | Min sentences. |
| `maxSentences?` | `number` | Max sentences. |
| `minWords?` | `number` | Min words. |
| `maxWords?` | `number` | Max words. |

##### Returns

`string`

Random paragraph.

___

### phrase

• `Readonly` **phrase**: (`minWords?`: `number`, `maxWords?`: `number`) => `string`

#### Type declaration

▸ (`minWords?`, `maxWords?`): `string`

Generates random phrase.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `minWords?` | `number` | Min words. |
| `maxWords?` | `number` | Max words. |

##### Returns

`string`

Random phrase.

___

### sentence

• `Readonly` **sentence**: (`minWords?`: `number`, `maxWords?`: `number`) => `string`

#### Type declaration

▸ (`minWords?`, `maxWords?`): `string`

Generates random sentence.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `minWords?` | `number` | Min words. |
| `maxWords?` | `number` | Max words. |

##### Returns

`string`

Random sentence.

___

### word

• `Readonly` **word**: () => `string`

#### Type declaration

▸ (): `string`

Generates random word.

##### Returns

`string`

Random word.
