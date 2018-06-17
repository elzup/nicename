// @flow

export function countSignChar(str: string) {
  return str
    .toLowerCase()
    .split('')
    .filter(isSignChar).length
}
export function isSignChar(v: string): boolean {
  return '~'.indexOf(v) !== -1 || (v < 'a' && !isNumber(v))
}

export function isNumber(v: string): boolean {
  return '0' <= v && v <= '9'
}
