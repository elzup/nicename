// @flow

import type { Judge, JudgeResult, Rank } from './types'
import * as utils from './utils'

export const lengthShortJudge: Judge = {
  info: {
    id: 'length_short',
    description: '短すぎないと良い',
    notice: '5文字以下だと登録できないサイトがある。',
  },
  judge: name => {
    if (name.length >= 6) {
      return { rank: 'S', help: '6文字以上である' }
    } else if (name.length >= 4) {
      return { rank: 'A', help: '4,5文字である' }
    } else {
      return { rank: 'C', help: '3文字以下である' }
    }
  },
}

export const lengthLongJudge: Judge = {
  info: {
    id: 'length_long',
    description: '長すぎないと良い',
    notice: '表示しやすい。覚えやすい。',
  },
  judge: name => {
    // TODO: テキトーなしきい値。基準がほしい
    if (name.length <= 6) {
      return { rank: 'S', help: '6文字以下である' }
    } else if (name.length <= 10) {
      return { rank: 'A', help: '7文字以上10文字以下である' }
    } else if (name.length <= 20) {
      return { rank: 'B', help: '10文字以上20文字以下である' }
    } else {
      return { rank: 'C', help: '21文字以上である' }
    }
  },
}

export const stringOrderJudge: Judge = {
  info: {
    id: 'string_order',
    description: '名前順が早いと良い',
    notice: 'リストアップで上に出やすい。',
  },
  judge: name => {
    const first = name[0].toLowerCase()
    if (first < 'e') {
      return { rank: 'S', help: 'eより前である' }
    } else if (first < 'l') {
      return { rank: 'A', help: 'e以降かつlより前である' }
    } else if (first < 's') {
      return { rank: 'B', help: 'l以降かつsより前である' }
    } else {
      return { rank: 'C', help: 's以降である' }
    }
  },
}

export const signCountJudge: Judge = {
  info: {
    id: 'sign_count',
    description: '記号が少ないと良い',
    notice:
      '記号はユーザ名に使えない事が多い。ドメイン名やURLで使えないことが多い。',
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

export const AmbiguityJudge: Judge = {
  info: {
    id: 'ambiguity',
    description: 'あいまいなパターンが無いと良い',
    notice: '「shi」や「si」は h を入れるかどうかを覚えにくい。',
  },
  judge: name => {
    const res = utils.hasAmbigousHebon(name)
    if (!res.result) {
      return { rank: 'S', help: '入っていない' }
    }
    return {
      rank: 'A',
      help: `${res.patterns.map(v => `「${v}」`).join('と')}は間違えやすい`,
    }
  },
}

export const all = [
  lengthShortJudge,
  lengthLongJudge,
  stringOrderJudge,
  signCountJudge,
  AmbiguityJudge,
]
