[Typescript facades](../index.md) / [Exports](../modules.md) / [httpRequest](../modules/httpRequest.md) / [httpRequest](../modules/httpRequest.httpRequest-1.md) / Facade

# Interface: Facade

[httpRequest](../modules/httpRequest.md).[httpRequest](../modules/httpRequest.httpRequest-1.md).Facade

## Table of contents

### Methods

- [send](httpRequest.httpRequest-1.Facade.md#send)

## Methods

### send

▸ `Readonly` **send**(`url`, `method?`, `data?`, `headers?`): `Promise`<`unknown`\>

Sends HTTP request.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | URL. |
| `method?` | [`HttpRequestMethod`](../modules/httpRequest.httpRequest-1.md#httprequestmethod) | HTTP method. |
| `data?` | `IndexedObject`<`unknown`\> | Data. |
| `headers?` | [`HttpHeaders`](../modules/httpRequest.httpRequest-1.md#httpheaders) | Headers. |

#### Returns

`Promise`<`unknown`\>

Server response.
