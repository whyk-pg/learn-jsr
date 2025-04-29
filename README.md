# Learn JSR
<!-- ![Status: ToDo](https://flat.badgen.net/static/Status/ToDo/red) -->
![Status: In Progress](https://flat.badgen.net/static/Status/In%20Progress/yellow)
<!-- ![Status: Done](https://flat.badgen.net/static/Status/Done/green) -->

## 本リポジトリの目的
Deno社が始めた新しいレジストリ『[JSR](https://jsr.io)』にパッケージを公開してみる。  
自動でバージョニングはされないため、できるだけ自動で更新されるように工夫をする。

## 本リポジトリの達成目標
- [x] 初期プロジェクトを立ち上げてJSRに公開する
- [x] deno.jsonのバージョンを更新せずに関数を追加して公開されないことを確認する
- [x] deno.jsonのバージョンを更新して関数を追加して公開されることを確認する
- [x] パッケージのバージョンとGit Tagのバージョンを連動させる
- [x] GitHub Releaseを自動で追加する
- [x] JSRでサブパッケージが公開できるか試す
- [x] JSRのlintが効かない問題を解決する
- [x] importがエラーになる問題を解決する
- [x] Squash mergeと`npm:changesets/cli`を使って、PR単位で機能をまとめたリリースができるか試す
- [ ] リリーススクリプトを調整して、コマンドを叩いたらPRが作成されるように修正

### リリース手順
ここに自作リリーススクリプト(仮称:Kugiri)を使ったリリース手順を書く

#### セルフ更新
1. `deno task release`を叩く
2. 以前のタグ以降のすべてのGitログを浚って、プレフィックスを読み出し配列に押し込む
3. 読み出されたプレフィックスからメジャーやマイナーバージョンなど、どのバージョンを更新するかを決定する

#### changesets Actions互換
1. `deno task release --md`を叩く
2. releaseコマンドがどのバージョンに更新するかをMarkdownに書き込む
3. Gitタグを打ち込む
4. リモートブランチにあげる
5. mainブランチに取り込み、changesetsのActionsを叩く

### エラー解決
#### GitHub ActionsでGitHub Releasesが生成できない
`jobs.<job_name>.permissions.contents`が`write`になっていなかった

#### 素のDenoでchangesetsが使えない
`changesets init`は動作したが、`changesets version`が以下のエラーが出て動作しない

```sh
$ deno run npm:@changesets/cli@2.27.12 version
✅ Granted all env access.
✅ Granted all read access.
✅ Granted all sys access.
🦋  error Error: No package.json could be found upwards from the directory /home/windchime-yk/dev/playground/learn-jsr
🦋  error     at _callee4$ (file:///home/windchime-yk/.cache/deno/npm/registry.npmjs.org/@manypkg/find-root/1.1.0/dist/find-root.cjs.dev.js:217:19)
🦋  error     at tryCatch (file:///home/windchime-yk/.cache/deno/npm/registry.npmjs.org/@babel/runtime/7.26.7/helpers/regeneratorRuntime.js:45:16)
🦋  error     at Generator.<anonymous> (file:///home/windchime-yk/.cache/deno/npm/registry.npmjs.org/@babel/runtime/7.26.7/helpers/regeneratorRuntime.js:133:17)
🦋  error     at Generator.next (file:///home/windchime-yk/.cache/deno/npm/registry.npmjs.org/@babel/runtime/7.26.7/helpers/regeneratorRuntime.js:74:21)
🦋  error     at asyncGeneratorStep (file:///home/windchime-yk/.cache/deno/npm/registry.npmjs.org/@babel/runtime/7.26.7/helpers/asyncToGenerator.js:3:17)
🦋  error     at _next (file:///home/windchime-yk/.cache/deno/npm/registry.npmjs.org/@babel/runtime/7.26.7/helpers/asyncToGenerator.js:17:9)
🦋  error     at eventLoopTick (ext:core/01_core.js:177:7) {
🦋  error   directory: '/home/windchime-yk/dev/playground/learn-jsr'
🦋  error }
```
これは書いてあるとおり、今のプロジェクトに`package.json`が存在しないためエラーになっている  
実際のところ、Denoは`package.json`もカバーしているので利用可能かもしれないが、私個人が`deno.jsonc`でやっていきたいためchangesetsは使わない方針とする
changesetsのDeno対応は開発リソースの都合でメンテナは着手しづらい状況になっているようで、コミュニティ側が対応しない限りは難しいと考えられる
https://github.com/changesets/changesets/discussions/824

Deno公式は、標準ライブラリのリリースに自前のリリースライブラリである[`@deno/bump-workspaces`](https://jsr.io/@deno/bump-workspaces)を使っている  
Freshはリポジトリを見る限りでは手動な模様

## 公開先
- [@whyk/greeting](https://jsr.io/@whyk/greeting)

## 参考資料
- [@whyk/greetingの公開方法案内ページ](https://jsr.io/@whyk/greeting/publish)
- [GitHub Actionsでの公開方法案内](https://jsr.io/docs/publishing-packages#publishing-from-github-actions)
- [GitHub Actions: Deprecating save-state and set-output commands - The GitHub Blog](https://github.blog/changelog/2022-10-11-github-actions-deprecating-save-state-and-set-output-commands/)
- [エラー: 403 "統合によってリソースにアクセスできません" - GitHub Docs](https://docs.github.com/ja/code-security/code-scanning/troubleshooting-code-scanning/resource-not-accessible)
- [Github ActionsでResource not accessible by integrationが出た際の対処法](https://zenn.dev/tatsugon/articles/github-actions-permission-error)
- [GITHUB_TOKEN のアクセス許可の変更 - 自動トークン認証 - GitHub Docs](https://docs.github.com/ja/actions/security-guides/automatic-token-authentication#modifying-the-permissions-for-the-github_token)
- [permissions - GitHub Actionsのワークフロー構文 - GitHub Docs](https://docs.github.com/ja/actions/using-workflows/workflow-syntax-for-github-actions#permissions)
- [Github Actionsを使ってgit commitとgit pushを自動化しよう。 - ポンコツエンジニアのごじゃっぺ開発日記。](https://www.pnkts.net/2020/07/25/github_actions-git-commit-push)
- [Use target-version in a file, then create the tag of both · Issue #204 · mathieudutour/github-tag-action](https://github.com/mathieudutour/github-tag-action/issues/204)
- [Mark this repository as unmaintained · Issue #119 · actions/create-release](https://github.com/actions/create-release/issues/119)
- [Github Actions の workflow run について](https://zenn.dev/keitacoins/articles/2a715be45e874f)
- [ワークフローの再利用 - GitHub Docs](https://docs.github.com/ja/actions/using-workflows/reusing-workflows)
- [\[github actions\] Reusable workflowsが実装されたのでざっとまとめ](https://zenn.dev/jerome/articles/618af7cc934f2f)
- [changesetsを使ってWebサイトのバージョン管理を自動化する](https://zenn.dev/108yen/articles/358d9c7201b238)
- [セマンティック バージョニング 2.0.0 | Semantic Versioning](https://semver.org/lang/ja/)
