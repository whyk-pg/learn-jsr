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
- [ ] Squash mergeと`npm:changesets/cli`を使って、PR単位で機能をまとめたリリースができるか試す

### エラー解決
#### GitHub ActionsでGitHub Releasesが生成できない
`jobs.<job_name>.permissions.contents`が`write`になっていなかった

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
