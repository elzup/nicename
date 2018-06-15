// @flow

import * as judges from './judges'

const main = (name: string) => {
  const checks = [judges.lengthJudge]
  const results = checks.map(f => f(name))
  return results
}

export default main
