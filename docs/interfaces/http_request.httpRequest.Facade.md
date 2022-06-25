[Typescript facades](../index.md) / [Exports](../modules.md) / [http-request](../modules/http_request.md) / [httpRequest](../modules/http_request.httpRequest.md) / Facade

# Interface: Facade

[http-request](../modules/http_request.md).[httpRequest](../modules/http_request.httpRequest.md).Facade

## Table of contents

### Methods

- [send](http_request.httpRequest.Facade.md#send)

## Methods

### send

▸ `Readonly` **send**(`url`, `method?`, `data?`, `headers?`): `Promise`<`unknown`\>

Sends HTTP request.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | URL. |
| `method?` | [`HttpRequestMethod`](../modules/http_request.httpRequest.md#httprequestmethod) | HTTP method. |
| `data?` | `IndexedRecord`<`unknown`\> | Data. |
| `headers?` | [`HttpHeaders`](../modules/http_request.httpRequest.md#httpheaders) | Headers. |

#### Returns

`Promise`<`unknown`\>

Server response.
