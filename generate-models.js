const OpenAPI = require('openapi-typescript-codegen')

async function generate() {
  await OpenAPI.generate({
    input: 'openapi.json',
    output: './src/generated',
    useOptions: false,
    exportCore: false,
    exportServices: false
  })
}

generate()