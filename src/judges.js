// @flow

import type { Judge, JudgeResult, Rank } from './types'
import * as utils from './utils'

export const lengthShortJudge: Judge = {
  info: {
    id: 'length_short',
    description: '短すぎない',
    notice: '5文字以下だと登録できないサイトがある。',
  },
  judge: name => {
    if (name.length >= 6) {
      return { rank: 'S', help: '6文字以上である' }
    } else if (name.length >= 4) {
      return { rank: 'A', help: '4文字以上である' }
    } else {
      return { rank: 'C', help: '3文字以下である' }
    }
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
    } else if (name.length <= 10) {
      return { rank: 'A', help: '10文字以下である' }
    } else if (name.length <= 20) {
      return { rank: 'B', help: '20文字以下である' }
    } else {
      return { rank: 'C', help: '21文字以上である' }
    }
  },
}

export const stringOrderJudge: Judge = {
  info: {
    id: 'string_order',
    description: '名前順が早い',
    notice: 'リストアップで上に出やすい。',
  },
  judge: name => {
    const first = name[0].toLowerCase()
    if (first < 'e') {
      return { rank: 'S', help: 'eより早い' }
    } else if (first < 'l') {
      return { rank: 'A', help: 'lより早い' }
    } else if (first < 's') {
      return { rank: 'B', help: 'sより早い' }
    } else {
      return { rank: 'C', help: 'rより遅い' }
    }
  },
}

export const signCountJudge: Judge = {
  info: {
    id: 'sign_count',
    description: '記号が少ない',
    notice: '記号はユーザ名に使えない事が多い。',
  },
  judge: name => {
    const c = utils.countSignChar(name)
    if (c === 0) {
      return { rank: 'S', help: '入っていない' }
    } else if (c === 1) {
      return { rank: 'A', help: '1個ある' }
    } else if (c === 2) {
      return { rank: 'B', help: '2個ある' }
    } else {
      return { rank: 'C', help: '3個以上ある' }
    }
  },
}

export const all = [
  lengthShortJudge,
  lengthLongJudge,
  stringOrderJudge,
  signCountJudge,
]
