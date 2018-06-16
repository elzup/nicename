// @flow

export type RankValue = 'C' | 'B' | 'A' | 'S'
export type Rank = {
  value: RankValue,
  help: string,
}

export type JudgeResult = {
  description: string,
  rank: Rank,
  help: string,
}

export type Judge = (name: string) => JudgeResult
