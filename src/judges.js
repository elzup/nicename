// @flow

import type { Judge, JudgeResult, Rank } from './types'

export const lengthShortJudge: Judge = {
  info: {
    id: 'length_short',
    description: '短すぎない',
    notice: '5文字以下だと登録できないサイトがある',
  },
  judge: name => {
    if (name.length >= 6) {
      return { rank: 'S', help: '6文字以上である' }
    }
    if (name.length >= 4) {
      return { rank: 'A', help: '4文字以上である' }
    }
    return { rank: 'C', help: '3文字以下である' }
  },
}
