# nicename [![Build Status](https://travis-ci.org/elzup/nicename.svg?branch=master)](https://travis-ci.org/elzup/nicename)
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)

> is_good_name


## Install

```
$ npm install nicename
```


## Usage

```js
const nicename = require('nicename');

nicename('toshino');
//=> > res
[ { info:
     { id: 'length_short',
       description: '短すぎないと良い',
       notice: '5文字以下だと登録できないサイトがある。' },
    result: { rank: 'S', message: '6文字以上である', hints: [] } },
  { info:
     { id: 'length_long',
       description: '長すぎないと良い',
       notice: '表示しやすい。覚えやすい。' },
    result: { rank: 'A', message: '7文字以上10文字以下である', hints: [] } },
  { info:
     { id: 'string_order',
       description: '名前順が早いと良い',
       notice: 'リストアップで上に出やすい。' },
    result: { rank: 'C', message: 's以降である', hints: [] } },
  { info:
     { id: 'sign_count',
       description: '記号が少ないと良い',
       notice: '記号はユーザ名に使えない事が多い。ドメイン名やURLで使えないことが多い。' },
    result: { rank: 'S', message: '入っていない', hints: [] } },
  { info:
     { id: 'ambiguity',
       description: 'あいまいなパターンが無いと良い',
       notice: '「shi」や「si」は h を入れるかどうかを覚えにくい。' },
    result: { rank: 'A',
              message: '含まれている',
              hints: [ { start: 2, last: 4, message: 'si≒shi' } ] } } ]
```


## API

### nicename(name)

#### input

Type: `string`

チェックする文字列。

#### return

Type:

```
[ { info: チェックする内容
     { id: 識別子,
       description: 要約,
       notice: 必要性の解説など },
    result: 結果
      { rank: S A B C の順に良い,
        message: ランクの基準,
        hints: 該当箇所がある場合のリスト
          [ { start: 該当する最初の文字,
              last: 該当する最後の文字,
              message: 内容 } ] } } ]
```

## License

MIT © [elzup](https://elzup.com)

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars3.githubusercontent.com/u/2284908?v=4" width="100px;"/><br /><sub><b>elzup</b></sub>](https://elzup.com)<br />[💻](https://github.com/elzup/nicename/commits?author=elzup "Code") |
| :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!