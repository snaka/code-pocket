## 使いかた

プロジェクトのディレクトリ作成

```
mkdir hoge
cd hoge
```

`rails5_docker_bootstrap` のファイルをコピー

```
cp ../rails5_docker_bootstrap/* .
```

Rails の雛形作成

```
docker-compose run web rails new . --force --no-deps --database=mysql
```

(Linuxの場合)ファイルのパーミッション設定

```
sudo chown -R $USER:$USER .
```

コンテナイメージビルド

```
docker-compose build
```

database.ymlをコピー

```
cp database.yml.sample config/database.yml
```

DBの作成

```
docker-compose run --rm web rails db:create
```

コンテナ起動

```
docker-compose up
```

http://localhost:3000 にアクセスしてみて Rails の画面が表示されたらOK
