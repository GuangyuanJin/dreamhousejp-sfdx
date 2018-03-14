# DreamHouse サンプルアプリケーション

[![Deploy](https://deploy-to-sfdx.com/dist/assets/images/DeployToSFDX.svg)](https://deploy-to-sfdx.com)

DreamHouseはサンプルアプリケーションはユニークな価値を持つSalesforce Platformを使って、従業員向けの生産性向上及び顧客とのエンゲージメントアプリケーションを提供します。

より詳しくは [DreamHouse マイクロサイト](http://www.dreamhouseappjp.io/) を御覧ください。

## インストール手順

1. Salesforce DXの準備 : Dev Hubを組織で有効化するか、Dev Hubトライアルにサインアップし、Salesforce DX CLIをインストールします。 [Salesforce DX Setup Guide](https://developer.salesforce.com/docs/atlas.ja-jp.212.0.sfdx_setup.meta/sfdx_setup/sfdx_setup_intro.htm) の手順に従うか [Salesforce DX を使用したアプリケーション開発](https://trailhead.salesforce.com/modules/sfdx_app_dev) Trailheadモジュールを参考にして下さい。.

1. **dreamhousejp-sfdx** リポジトリをクローンします:
    ```
    git clone https://github.com/dreamhouseapp-jp/dreamhousejp-sfdx
    cd dreamhousejp-sfdx
    ```

1. スクラッチ組織を作成し、エイリアス(dh)を定義します:
    ```
    sfdx force:org:create -s -f config/project-scratch-def.json -a dh
    ```

1. アプリケーションをスクラッチ組織にプッシュします:
    ```
    sfdx force:source:push
    ```

1. **dreamhouse** 権限セットをデフォルトユーザに割り当てます:
    ```
    sfdx force:user:permset:assign -n dreamhouse
    ```

1. スクラッチ組織をオープンします:
    ```
    sfdx force:org:open
    ```

1. **設定** より **テーマ** とクイック検索ボックスに入力します。 **テーマおよびブランド設定** を開き、and flip the toggle to hide background images in Lightning Experience.

1. **DreamHouse** をアプリケーションランチャーから選択します

1. **データインポート** タブをクリックし、 **サンプルデータを初期化** をクリックします

## 画像検索の有効化

オプションとして、**物件ファインダー** と **物件エクスプローラー** ページで画像検索を有効にすることができます:

1. **Einstein Platform Services** アカウントを取得します。くわしくは [こちらの(英語)](https://api.einstein.ai/signup) のインストラクションを御覧ください。

1. Salesforce上で **ファイル** タブをクリックし、 **einstein_platform.pem** ファイルをアップロードします。

1. **設定** より、クイック検索ボックスに **カスタム** と入力し、 **カスタム設定** のリンクをクリックします。

1. 最初の **新規** ボタンをクリックします (画面の上の方).

1. **Einstein Vision Email** に Einstein Platform Servicesで利用したEメールアドレスを定義し(ステップ 1) 、 **保存** をクリックします。

1. DreamHouse アプリで **Einstein Vision** タブをクリックします。

1. **データセットの作成** ボタンをクリックします。

1. **houses** タイル内の **Train** ボタンをクリックし、 **Models** タブをクリックします。

1. **Modelの再読込** ボタンをクリックし、進捗カラムが **100%** になるまで確認します。

1. **Model Id** をクリップボードにコピーします。

1. **物件ファインダー** タブをクリックし、歯車のアイコンをクリックし (右上端)、 **ページの編集** をクリックします。 **フィルター** コンポーネントをクリックし、サイドバーの **Einstein Model Id** フィールドにModel Idをペーストし、ページを保存します。

1. **物件エクスプローラー** ページを開き、前のステップと同様に設定します。

これで**物件ファインダー** 及び **物件エクスプローラー**ページに、アップロード(もしくはドラッグ&ドロップ) 画像を使ってフィルターを行う、画像検索ボックスとして利用できるようになりました。