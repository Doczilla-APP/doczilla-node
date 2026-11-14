# Doczilla Node.js Library

## Installation

Install the package with:

```sh
npm install @doczilla/node
# or
yarn add @doczilla/node
```

## Usage

The package needs to be configured with your account's API key, which is
available on your [Doczilla's organisation settings page](https://doczilla.app/login).

```ts
import Doczilla from '@doczilla/node'

const doczilla = new Doczilla('doczilla-...')

const pdfBuffer = await doczilla.pdf.direct({
  page: {
    html: '<div>Your first Doczilla PDF</div>'
  }
})
```

### Request configuration

All PDF, screenshot, and template methods accept an optional Axios request config as the final argument, including `signal`, `timeout`, and `headers`. Direct methods always use `arraybuffer` responses to return a `Buffer`.

```ts
const controller = new AbortController()
const request = doczilla.pdf.direct({ page: { url: 'https://example.com' } }, {
  signal: controller.signal,
  timeout: 30_000
})

controller.abort()
await request // Rejects with an Axios cancellation error.
```

For template listing, pass `doczilla.template.list({}, { signal: controller.signal })`.

### Webhook signing

Doczilla can optionally sign the webhook events it sends to your endpoint, allowing you to validate that they were not
sent by a third party. You can read more about it [here](https://docs.doczilla.app/examples/securing-webhooks).

Please note that you must pass the _raw_ request body, exactly as received from Doczilla, to the `verifyPayload()`
function; this will not work with a parsed (i.e., JSON) request body.

```js
const event = doczilla.webhooks.verifyPayload(
  webhookRawBody,
  webhookDoczillaSignatureHeader,
  webhookSecret
);
```
