[Typescript facades](../index.md) / [Exports](../modules.md) / httpRequest

# Module: httpRequest

## Table of contents

### Interfaces

- [Facade](../interfaces/httpRequest.Facade.md)

### Type aliases

- [HttpHeader](httpRequest.md#httpheader)
- [HttpHeaders](httpRequest.md#httpheaders)
- [HttpRequestMethod](httpRequest.md#httprequestmethod)

### Variables

- [HttpHeaderVO](httpRequest.md#httpheadervo)
- [HttpRequestMethodVO](httpRequest.md#httprequestmethodvo)
- [httpRequest](httpRequest.md#httprequest)

## Type aliases

### HttpHeader

Ƭ **HttpHeader**: ``"Accept"`` \| ``"Accept-Language"`` \| ``"Authorization"`` \| ``"Content-Type"``

___

### HttpHeaders

Ƭ **HttpHeaders**: `ReadonlyPartialRecord`<[`HttpHeader`](httpRequest.md#httpheader), `string`\>

___

### HttpRequestMethod

Ƭ **HttpRequestMethod**: ``"delete"`` \| ``"get"`` \| ``"post"``

## Variables

### HttpHeaderVO

• **HttpHeaderVO**: `ValidationObject`<[`HttpHeader`](httpRequest.md#httpheader)\>

___

### HttpRequestMethodVO

• **HttpRequestMethodVO**: `ValidationObject`<[`HttpRequestMethod`](httpRequest.md#httprequestmethod)\>

___

### httpRequest

• **httpRequest**: `Facade`<[`Facade`](../interfaces/httpRequest.Facade.md), `unknown`\>
