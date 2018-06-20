import * as m from '.'

test('countSignChar', () => {
  expect(m.signCharPositions('abc.*-')).toEqual([3, 4, 5])
  expect(m.signCharPositions('Z-=___Z')).toEqual([1, 2, 3, 4, 5])
  expect(m.signCharPositions('`~!@#$%^&*()_+')).toEqual([...Array(14).keys()])
  expect(m.signCharPositions('12345')).toEqual([])
})
test('countSignChar', () => {
  expect(m.isSignChar('~')).toEqual(true)
  expect(m.isSignChar('-')).toEqual(true)
  expect(m.isSignChar('_')).toEqual(true)
  expect(m.isSignChar('0')).toEqual(false)
  expect(m.isSignChar('a')).toEqual(false)
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
  expect(m.hasAmbigousHebon('full')).toEqual({
    result: true,
    patterns: ['fu', 'hu'],
  })
})
