// @flow

import type { Judge, JudgeResult, Rank, Hint } from './types'
import * as utils from './utils'

export const lengthShortJudge: Judge = {
  info: {
    id: 'length_short',
    description: '短すぎないと良い',
    notice: '5文字以下だと登録できないサイトがある。',
  },
  judge: name => {
    if (name.length >= 6) {
      return { rank: 'S', message: '6文字以上である', hints: [] }
    } else if (name.length >= 4) {
      return { rank: 'A', message: '4,5文字である', hints: [] }
    } else {
      return { rank: 'C', message: '3文字以下である', hints: [] }
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
      return { rank: 'S', message: '6文字以下である', hints: [] }
    } else if (name.length <= 10) {
      return { rank: 'A', message: '7文字以上10文字以下である', hints: [] }
    } else if (name.length <= 20) {
      return { rank: 'B', message: '10文字以上20文字以下である', hints: [] }
    } else {
      return { rank: 'C', message: '21文字以上である', hints: [] }
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
      return { rank: 'S', message: 'eより前である', hints: [] }
    } else if (first < 'l') {
      return { rank: 'A', message: 'e以降かつlより前である', hints: [] }
    } else if (first < 's') {
      return { rank: 'B', message: 'l以降かつsより前である', hints: [] }
    } else {
      return { rank: 'C', message: 's以降である', hints: [] }
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
    const ps = utils.signCharPositions(name)
    const c = ps.length
    const hints: Hint[] = ps.map(n => ({ start: n, last: n, message: '記号' }))
    if (c === 0) {
      return { rank: 'S', message: '入っていない', hints }
    } else if (c === 1) {
      return { rank: 'A', message: '1個ある', hints }
    } else if (c === 2) {
      return { rank: 'B', message: '2個ある', hints }
    } else {
      return { rank: 'C', message: '3個以上ある', hints }
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
      return { rank: 'S', message: '含まれていない', hints: [] }
    }
    const hints = res.hits.map(hit => ({
      start: hit.start,
      last: hit.last,
      message: hit.patterns.join('≒'),
    }))
    return {
      rank: 'A',
      message: '含まれている',
      hints,
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
