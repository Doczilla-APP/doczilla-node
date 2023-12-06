# Doczilla Node.js Library

## Installation

Install the package with:

```sh
npm install doczilla
# or
yarn add doczilla
```

## Usage

The package needs to be configured with your account's API key, which is
available your [Doczilla's organisation settings page](https://www.doczilla.app/login).

```ts
import Doczilla from 'doczilla';

const doczilla = new Doczilla('doczilla-...')

const pdfBuffer = await doczilla.pdf.direct({
  url: 'https://www.doczilla.app'
})
```

### Webhook signing

Doczilla can optionally sign the webhook events it sends to your endpoint, allowing you to validate that they were not
sent by a third-party. You can read more about it [here](https://docs.doczilla.app/webhooks).

Please note that you must pass the _raw_ request body, exactly as received from Doczilla, to the `verifyPayload()`
function; this will not work with a parsed (i.e., JSON) request body.

```js
const event = doczilla.webhooks.verifyPayload(
  webhookRawBody,
  webhookDoczillaSignatureHeader,
  webhookSecret
);
```
