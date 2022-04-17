[Typescript facades](../index.md) / [Exports](../modules.md) / [faker](../modules/faker.md) / [faker](../modules/faker.faker-1.md) / Facade

# Interface: Facade

[faker](../modules/faker.md).[faker](../modules/faker.faker-1.md).Facade

## Table of contents

### Methods

- [boolean](faker.faker-1.Facade.md#boolean)
- [date](faker.faker-1.Facade.md#date)
- [number](faker.faker-1.Facade.md#number)
- [oneOf](faker.faker-1.Facade.md#oneof)
- [paragraph](faker.faker-1.Facade.md#paragraph)
- [phrase](faker.faker-1.Facade.md#phrase)
- [sentence](faker.faker-1.Facade.md#sentence)
- [word](faker.faker-1.Facade.md#word)

## Methods

### boolean

▸ `Readonly` **boolean**(`trueWeight?`, `falseWeight?`): `boolean`

Generates random boolean.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `trueWeight?` | `number` | Weight of the _true_ value. |
| `falseWeight?` | `number` | Weight of the _false_ value. |

#### Returns

`boolean`

Random boolean.

___

### date

▸ `Readonly` **date**(`from`, `to`, `step?`, `unit?`): `string`

Generates random date.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `from` | `string` \| readonly [`number`, [`Unit`](../modules/faker.faker-1.md#unit)] | Min date. |
| `to` | `string` \| readonly [`number`, [`Unit`](../modules/faker.faker-1.md#unit)] | Max date. |
| `step?` | `number` | Step. |
| `unit?` | [`Unit`](../modules/faker.faker-1.md#unit) | Step unit. |

#### Returns

`string`

Random date.

___

### number

▸ `Readonly` **number**(`from`, `to`, `step?`): `number`

Generates random number.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `from` | `number` | Min value. |
| `to` | `number` | Max value. |
| `step?` | `number` | Step. |

#### Returns

`number`

Random number.

___

### oneOf

▸ `Readonly` **oneOf**<`T`\>(`values`): `T`

Returns random element from an array.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `values` | readonly `T`[] | Values. |

#### Returns

`T`

Random element.

___

### paragraph

▸ `Readonly` **paragraph**(`minSentences?`, `maxSentences?`, `minWords?`, `maxWords?`): `string`

Generates random paragraph.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `minSentences?` | `number` | Min sentences. |
| `maxSentences?` | `number` | Max sentences. |
| `minWords?` | `number` | Min words. |
| `maxWords?` | `number` | Max words. |

#### Returns

`string`

Random paragraph.

___

### phrase

▸ `Readonly` **phrase**(`minWords?`, `maxWords?`): `string`

Generates random phrase.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `minWords?` | `number` | Min words. |
| `maxWords?` | `number` | Max words. |

#### Returns

`string`

Random phrase.

___

### sentence

▸ `Readonly` **sentence**(`minWords?`, `maxWords?`): `string`

Generates random sentence.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `minWords?` | `number` | Min words. |
| `maxWords?` | `number` | Max words. |

#### Returns

`string`

Random sentence.

___

### word

▸ `Readonly` **word**(): `string`

Generates random word.

#### Returns

`string`

Random word.
