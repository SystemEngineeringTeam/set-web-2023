# シス研 webサイト

リンク: https://www.sysken.net/

## 環境構築

1. リポジトリをクローン
2. `yarn` でパッケージをインストール
3. `yarn dev` で開発サーバーを起動

## 開発の流れ

1. issueを立てる
2. "Development" から作業ブランチを紐付ける
   - issue の右側にある "Development" をクリック
   - 作業ブランチ名は `<issue番号>-<簡単な内容>` とする (ex: `1-add-top-page`)
3. 作業ブランチを実際に作成する
4. コミットする
   - コミット前に `yarn lint` `yarn fix` でコードを整形する
5. 作業ブランチからmainブランチにPRを送る
   - フォーマットされていない場合は、GitHub Action がフォーマットしてくれる
   - ESLint がエラーを検出した場合は、PRをマージできないため修正を行う
6. mainにマージする
7. mainをreleaseにマージする
   - releaseにマージすると自動でデプロイされる
   - (esaのmdは直接releaseにプッシュされる)

# LICENSE

None
