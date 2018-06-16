import m from './src'

function findById(res, id) {
  return res.find(jr => jr.info.id === id)
}

test('shorter than 6 value', () => {
  const id = 'length_short'
  expect(findById(m('ccc'), id)).toMatchSnapshot()
  expect(findById(m('aaaa'), id)).toMatchSnapshot()
  expect(findById(m('ssssss'), id)).toMatchSnapshot()
})
