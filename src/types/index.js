// @flow

export type Rank = 'C' | 'B' | 'A' | 'S'
export type JudgeResult = {
  rank: Rank,
  help: string,
}

export type JudgeInfo = {
  id: string,
  description: string,
  notice: string,
}
export type JudgeFunc = (name: string) => JudgeResult

export type Judge = {
  info: JudgeInfo,
  judge: JudgeFunc,
}

export type JudgeWithResult = {
  info: JudgeInfo,
  result: JudgeResult,
}
