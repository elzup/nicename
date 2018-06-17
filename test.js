import m from './src'

function findById(res, id) {
  return res.find(jr => jr.info.id === id)
}

test('length_short', () => {
  const id = 'length_short'
  const s = findById(m('ssssss'), id)
  const a = findById(m('aaaa'), id)
  const c = findById(m('ccc'), id)
  expect([s, a, c]).toMatchSnapshot()
  expect([s, a, c].map(v => v.result.rank)).toEqual(['S', 'A', 'C'])
})

test('length_long', () => {
  const id = 'length_long'
  const s = findById(m('ssssss'), id)
  const a = findById(m('aaaaaaaaaa'), id)
  const b = findById(m('b'.repeat(20)), id)
  const c = findById(m('c'.repeat(21)), id)
  expect([s, a, b, c]).toMatchSnapshot()
  expect([s, a, b, c].map(v => v.result.rank)).toEqual(['S', 'A', 'B', 'C'])
})

test('string_order', () => {
  const id = 'string_order'
  const s = findById(m('_zzz'), id)
  const a = findById(m('elzup'), id)
  const b = findById(m('ooo'.repeat(20)), id)
  const c = findById(m('zombie'.repeat(21)), id)
  expect([s, a, b, c]).toMatchSnapshot()
  expect([s, a, b, c].map(v => v.result.rank)).toEqual(['S', 'A', 'B', 'C'])
})

test('argument error', () => {
  expect(() => m(0)).toThrowError(/string/)
  expect(() => m(null)).toThrowError(/string/)
  expect(() => m(false)).toThrowError(/string/)
  expect(() => m(undefined)).toThrowError(/string/)
  expect(() => m()).toThrowError(/string/)
})

test('no error', () => {
  expect(() => m('')).not.toThrowError()
})
