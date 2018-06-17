import * as m from '.'

test('works', () => {
  expect(m.countSignChar('abc.*-')).toEqual(3)
  expect(m.countSignChar('Z-=___Z')).toEqual(5)
  expect(m.countSignChar('`~!@#$%^&*()_+')).toEqual(14)
  expect(m.countSignChar('12345')).toEqual(0)
})
