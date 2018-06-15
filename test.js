import m from './src'

test('shorter than 6 value', () => {
  expect(m('elzup')).toMatchSnapshot()
})
