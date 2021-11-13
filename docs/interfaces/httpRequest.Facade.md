[Typerock facades](../index.md) / [Exports](../modules.md) / [httpRequest](../modules/httpRequest.md) / Facade

# Interface: Facade

[httpRequest](../modules/httpRequest.md).Facade

## Table of contents

### Methods

- [send](httpRequest.Facade.md#send)

## Methods

### send

▸ `Readonly` **send**(`url`, `method?`, `data?`, `headers?`): `Promise`<`unknown`\>

Sends HTTP request.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | URL. |
| `method?` | [`HttpRequestMethod`](../modules/httpRequest.md#httprequestmethod) | HTTP method. |
| `data?` | `Readonly`<`IndexedObject`<`unknown`\>\> | Data. |
| `headers?` | `Readonly`<`Partial`<`Record`<[`HttpHeader`](../modules/httpRequest.md#httpheader), `string`\>\>\> | Headers. |

#### Returns

`Promise`<`unknown`\>

Server response.
