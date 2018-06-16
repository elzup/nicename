import m from './src'

test('shorter than 6 value', () => {
  expect(m('ccc')).toMatchSnapshot()
  expect(m('aaaa')).toMatchSnapshot()
  expect(m('ssssss')).toMatchSnapshot()
})
