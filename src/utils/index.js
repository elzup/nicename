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

export function hasAmbigousHebon(
  str: string
): { result: boolean, patterns: string[] } {
  const libs = [['si', 'shi'], ['ti', 'chi'], ['tu', 'tsu'], ['fu', 'hu']]
  for (var i = 0; i < libs.length; i++) {
    const ps = libs[i]
    if (ps.some(p => str.indexOf(p) >= 0)) {
      return { result: true, patterns: ps }
    }
  }
  return { result: false, patterns: [] }
}
