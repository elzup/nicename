// @flow

import * as judges from './judges'
import type { JudgeWithResult } from './types'

function main(name: string): JudgeWithResult[] {
  if (typeof name !== 'string') {
    throw new TypeError(`Expected a string, got ${typeof name}`)
  }

  const results = judges.all.map(judge => ({
    info: judge.info,
    result: judge.judge(name),
  }))
  return results
}

export default main
