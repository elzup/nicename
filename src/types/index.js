// @flow

export type Rank = 'C' | 'B' | 'A' | 'S'

export type JudgeResult = {
  description: string,
  rank: Rank,
  help: string,
}

export type Judge = (name: string) => JudgeResult
