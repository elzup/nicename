// @flow

import type { Judge, JudgeResult, Rank } from './types'

export const lengthJudge: Judge = name => {
  function rank(name): Rank {
    if (name.length >= 6) {
      return 'S'
    }
    if (name.length >= 4) {
      return 'A'
    }
    if (name.length == 2) {
      return 'B'
    }
    return 'C'
  }
  return {
    name: 'length',
    description: '6文字以上である',
    rank: rank(name),
    help: '5文字以下だと登録できないサイトがある',
  }
}
