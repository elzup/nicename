import * as m from '.'

test('countSignChar', () => {
  expect(m.countSignChar('abc.*-')).toEqual(3)
  expect(m.countSignChar('Z-=___Z')).toEqual(5)
  expect(m.countSignChar('`~!@#$%^&*()_+')).toEqual(14)
  expect(m.countSignChar('12345')).toEqual(0)
})

test('hasAmbigousHebon', () => {
  expect(m.hasAmbigousHebon('elzup')).toEqual({ result: false, patterns: [] })
  expect(m.hasAmbigousHebon('toshino')).toEqual({
    result: true,
    patterns: ['si', 'shi'],
  })
  expect(m.hasAmbigousHebon('tosino')).toEqual({
    result: true,
    patterns: ['si', 'shi'],
  })
  expect(m.hasAmbigousHebon('tucchi')).toEqual({
    result: true,
    patterns: ['ti', 'chi'],
  })
})
