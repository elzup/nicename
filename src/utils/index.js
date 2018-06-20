// @flow

export function signCharPositions(str: string): number[] {
  return str
    .toLowerCase()
    .split('')
    .map((v, k) => (isSignChar(v) ? k : -1))
    .filter(v => v !== -1)
}

export function isSignChar(v: string): boolean {
  return '~'.indexOf(v) !== -1 || (v < 'a' && !isNumber(v))
}

export function isNumber(v: string): boolean {
  return '0' <= v && v <= '9'
}

export function hasAmbigousHebon(
  str: string
): {
  result: boolean,
  hits: { start: number, last: number, patterns: string[] }[],
} {
  const libs = [['si', 'shi'], ['ti', 'chi'], ['tu', 'tsu'], ['fu', 'hu']]
  const hits = []
  for (var i = 0; i < libs.length; i++) {
    const patterns = libs[i]
    patterns.forEach(p => {
      const pos = str.indexOf(p)
      if (pos === -1) {
        return
      }
      hits.push({ start: pos, last: pos + p.length - 1, patterns })
    })
  }
  return { result: hits.length > 0, hits }
}
