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

describe('GET /sharks/:id', () => {
  test(`renders each shark's page`, () => {
    const fakeData = {
      id: 8,
      name: 'Reggae Shark',
      habitat: 'Jamaica',
      behaviour: 'Mellow',
      appearance: 'Dreadlocks',
      imageRef:
        'https://ih1.redbubble.net/image.192134480.2932/flat,750x,075,f-pad,750x1000,f8f8f8.u7.jpg',
    }
    db.getSharkInfo.mockReturnValue(Promise.resolve(fakeData))
    expect.assertions(2)
    return request(server)
      .get('/sharks/8')
      .then((res) => {
        console.log()
        expect(res.text).toContain('Reggae')
        expect(db.getSharkInfo).toHaveBeenCalledWith('8')
      })
  })
  test('returns status 500 and error if db query query fails', () => {
    db.getSharkInfo.mockImplementation(() => {
      return Promise.reject(new Error('much sadness'))
    })
    expect.assertions(2)
    return request(server)
      .get('/sharks/8')
      .then((res) => {
        expect(res.status).toBe(500)
        expect(res.text).toContain('Server error')
      })
  })
})
