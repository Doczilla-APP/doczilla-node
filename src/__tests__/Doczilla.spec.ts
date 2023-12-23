import { describe, expect, test } from '@jest/globals'

import Doczilla from '../Doczilla'

describe('Doczilla', () => {

  test('it should throw an error if no api key is provided', () => {
    let error: Error
    try {
      // @ts-expect-error
      new Doczilla()
    } catch (err) {
      error = err
    }

    expect(error.message).toEqual('No token provided!')
  })

})