// @flow

import * as judges from './judges'
import type { JudgeWithResult } from './types'

function main(name: string): JudgeWithResult[] {
  const checks = [judges.lengthShortJudge, judges.lengthLongJudge]
  const results = checks.map(judge => ({
    info: judge.info,
    result: judge.judge(name),
  }))
  return results
}

export default main
