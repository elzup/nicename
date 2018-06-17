import m from './src'

function findById(res, id) {
  return res.find(jr => jr.info.id === id)
}

test('length_short', () => {
  const id = 'length_short'
  expect(findById(m('ccc'), id)).toMatchSnapshot()
  expect(findById(m('aaaa'), id)).toMatchSnapshot()
  expect(findById(m('ssssss'), id)).toMatchSnapshot()
})

test('length_long', () => {
  const id = 'length_long'
  expect(findById(m('c'.repeat(21)), id)).toMatchSnapshot()
  expect(findById(m('b'.repeat(20)), id)).toMatchSnapshot()
  expect(findById(m('aaaaaaaaaa'), id)).toMatchSnapshot()
  expect(findById(m('ssssss'), id)).toMatchSnapshot()
})
