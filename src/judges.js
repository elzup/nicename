// @flow

import type { Judge, JudgeResult, Rank } from './types'

export const lengthShortJudge: Judge = {
  info: {
    id: 'length_short',
    description: '短すぎない',
    notice: '5文字以下だと登録できないサイトがある。',
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

export const lengthLongJudge: Judge = {
  info: {
    id: 'length_long',
    description: '長すぎない',
    notice: '表示しやすい。覚えやすい。',
  },
  judge: name => {
    // TODO: テキトーなしきい値。基準がほしい
    if (name.length <= 6) {
      return { rank: 'S', help: '6文字以下である' }
    }
    if (name.length <= 10) {
      return { rank: 'A', help: '10文字以下である' }
    }
    if (name.length <= 20) {
      return { rank: 'B', help: '20文字以下である' }
    }
    return { rank: 'C', help: '21文字以上である' }
  },
}
