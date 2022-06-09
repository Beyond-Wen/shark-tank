const request = require('supertest')
const server = require('./server')
const db = require('./db')

jest.mock('./db')

beforeEach(() => {
  jest.resetAllMocks()
})

describe('GET /', () => {
  test('render the main page', () => {
    expect.assertions(1)
    const expected = 'Sharks'
    return request(server)
      .get('/')
      .then((res) => {
        expect(res.text).toContain(expected)
      })
  })
})
