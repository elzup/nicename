// @flow

import type { Judge, JudgeResult, Rank } from './types'

export const lengthShortJudge: Judge = name => {
  function rank(name): Rank {
    if (name.length >= 6) {
      return { value: 'S', help: '6文字以上である' }
    }
    if (name.length >= 4) {
      return { value: 'A', help: '4文字以上である' }
    }
    return { value: 'C', help: '3文字以下である' }
  }
  return {
    name: 'length_short',
    description: '短すぎない',
    rank: rank(name),
    help: '5文字以下だと登録できないサイトがある',
  }
}
