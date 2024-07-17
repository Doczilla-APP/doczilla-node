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
