# DreamHouse サンプルアプリケーション日本語版

オリジナルの英語版は以下にあります。
https://github.com/dreamhouseapp/dreamhouse-sfdx


Dreamhouseは不動産ビジネスをSalesforce Platformで構築したサンプルアプリケーションです。

## 目次

* [インストール手順](#インストール手順)
    * [Salesforce DX を使ってDreamhouseをインストールする](#salesforce-dx-を使ってdreamhouseをインストールする)
    * [ロック解除済みパッケージを使ってDreamhouseをインストールする](#ロック解除済みパッケージを使ってdreamhouseをインストールする)
<!-- * [コードハイライト](#コードハイライト)-->
* [追加リソース](#追加リソース)

## インストール手順

2種類の方法でDreamHouseをインストールできます:
- Salesforce DX を利用する
- ロック解除済みパッケージを利用する

### Salesforce DX を使ってDreamhouseをインストールする
こちらはアプリケーションとコーディングのエクスペリエンスを求める開発者にとって推奨されるインストール方法です

1. Salesforce DXをインストールします。Dev Hubを組織で有効化するか、Dev Hubトライアル組織にサインアップし、Salesforce DX CLIをインストールします。 [Salesforce DX 設定ガイド](https://developer.salesforce.com/docs/atlas.ja-jp.sfdx_setup.meta/sfdx_setup/sfdx_setup_enable_devhub.htm) か [Salesforce DX を使用したアプリケーション開発](https://trailhead.salesforce.com/ja/modules/sfdx_app_dev) Trailheadモジュールの手順に従います。

1. **dreamhousejp-sfdx** リポジトリをクローンします:
    ```
    git clone https://github.com/dreamhouseapp-jp/dreamhousejp-sfdx
    cd dreamhousejp-sfdx
    ```

1. スクラッチ組織を生成し、任意のエイリアスを定義します (**dh** を以下のコマンドでは定義):
    ```
    sfdx force:org:create -s -f config/project-scratch-def.json -a dh
    ```

1. アプリケーションをスクラッチ組織にプッシュします:
    ```
    sfdx force:source:push
    ```

1. **dreamhouse** 権限セットをデフォルトユーザにアサインします:
    ```
    sfdx force:user:permset:assign -n dreamhouse
    ```

1. スクラッチ組織を開きます:
    ```
    sfdx force:org:open
    ```

1. アプリケーションランチャーから **DreamHouse** を選択します

1. **データインポート** タブをクリックし、 **サンプルデータで初期化** をクリックします

### ロック解除済みパッケージを使ってDreamhouseをインストールする
こちらは非開発者に推奨のインストール方法です。コードを変更する予定がなく、サンプルアプリの体験のみが目的の場合はこちらを利用します。

1. Developer Editionに [サインアップ](https://developer.salesforce.com/signup) します。

1. 私のドメインを有効化します。 [こちら](https://trailhead.salesforce.com/ja/modules/identity_login/units/identity_login_my_domain) の手順に従って私のドメインを有効化してください。

1. [こちらのリンク](https://login.salesforce.com/packaging/installPackage.apexp?p0=04t0K000001A9PoQAK) をクリックし、DreamHouseのロック解除済みパッケージをあなたのDeveloper Edition組織にインストールします。

1. 画面が出たら **全てのユーザ にインストール** を選択し、外部サイトへのアクセス(api.lifx.com, dreamhousejp-push-server.herokuapp.com, and hooks.slack.com)を許可します。

1. **DreamHouse** をアプリケーションランチャーで選択します。

1. **データインポート** タブをクリックし、**サンプルデータで初期化** をクリックします。

<!--
## コードハイライト

### Lightning components
DreamHouse features a large number of Lightning Components to enhance the user experience. Lightning Components are used on the Property record page, on an app pages (**Property Finder** and **Property Explorer**), in the utility bar, and as quick actions.

Installing a Lightning component as a **quick action** can be a great alternative to adding the component directly to the page layout because the component instantiation is deferred until the action button is clicked (lazy instantiation). Installing less frequently used components as quick or global actions can contribute to a faster page loading time, and a streamlined user interface. In DreamHouse, the [SmartHome](force-app/main/default/aura/SmartHome) component is installed as a quick action on the Property record page.

The **utility bar** is a great place to host components you always want at your fingertips. [MortgageCalculator](force-app/main/default/aura/MortgageCalculator) is a great example.

### Base Lightning components
Base Lightning Components are a set of powerful UI components available in the Lightning Component Framework. The DreamHouse custom components use many Base Lightning Components as building blocks. For example, **lightning:card**, **lightning:button**, and **lightning:layout** are used throughout the application. [PropertyCarousel](force-app/main/default/aura/PropertyCarousel/PropertyCarousel.cmp), which allows you to navigate through the pictures of a property and upload new pictures, is built using **lightning:carousel** and **lightning:fileUpload**. [PropertySummary](force-app/main/default/aura/PropertySummary/PropertySummary.cmp) leverages **lightning:formattedAddress** and **lightning:formattedNumber**.

### Lightning Data Service
Lightning Data Service allows you to manipulate (retrieve, create, update, delete) Salesforce records without writing server-side code (Apex). In DreamHouse, all the Lightning components that work with a single Property record use Lightning Data Service. Check out [PropertySummary](force-app/main/default/aura/PropertySummary) for an example.

### Third-Party JavaScript libraries
You can use third-party JavaScript libraries in Lightning Components using **ltng:require**. For example:
- [Map](force-app/main/default/aura/Map) and [PropertyListMap](force-app/main/default/aura/PropertyListMap) use the [Leaflet](https://leafletjs.com/) library.
- [PriceRange](force-app/main/default/aura/PropertyListMap) uses the [nouislider](https://refreshless.com/nouislider/) library for its double slider.

### Standard application events
Standard application events are available by default in the framework and are used to trigger high level actions. For example, in [PropertySummary](force-app/main/default/aura/PropertySummary/PropertySummaryController.js), **force:navigateToSObject** is used to navigate to the broker record page, and **force:editRecord** is used to edit a record in place.

### Custom application events 
Custom application events are used for communication between components in App Builder. For example, the [PropertyFilterChange](force-app/main/default/aura/PropertyFilterChange) event is fired in the [PropertyFilter](force-app/main/default/aura/PropertyFilter) component to notify other components that new filtering criteria have been selected.

### Component events
Component events are used for finer-grained communication between components. For example, the [PropertyPaginator](force-app/main/default/aura/PropertyPaginator) component fires the **pageNext** and **pagePrevious** events to notify its parent ([PropetyTileList](force-app/main/default/aura/PropertyTileList)) that the user requested the next or previous page.

### Custom page templates
Custom page templates allow you to create ad hoc page layouts that admins can use in App Builder to create new pages. Custom page templates are implemented as Lightning Components. There are two custom page templates in Dreamhouse: [PageTemplate_2_6_4](force-app/main/default/aura/PageTemplate_2_6_4/PageTemplate_2_6_4.cmp) (used by the **Property Finder** page) and [PageTemplate_2_7_3](force-app/main/default/aura/PageTemplate_2_7_3/PageTemplate_2_7_3.cmp) (used by the **Property Explorer** page). They provide custom three column layouts using different relative widths for each column.

### Reports and dashboards
Reports and dashboards are easy to create and look great in Lightning. Just to get things started, the DreamHouse app includes a few reports in the **DreamHouse Reports** folder (**Days on Market**, **Properties by Broker**, and **Portfolio Health**), and a dashboard in the **DreamHouse Dashboard** folder (**My Dashboard**).

### Einstein Vision
The [VisualSearchBox](force-app/main/default/aura/VisualSearchBox) component leverages Einstein Vision to provide a visual search feature that allows you to find houses based on the picture of a house you like. Just select or drag a picture in the Visual search area of the property filters: Einstein Vision will recognize the type of house (colonial, victorian, or contemporary) and you will be presented with a list of houses matching that category. Follow the instructions below to enable visual search in the **Property Finder** and **Property Explorer** pages:

1. Get an **Einstein Platform Services** account. Follow the instructions [here](https://trailhead.salesforce.com/projects/predictive_vision_apex/steps/predictive_vision_apex_prep).

1. In Salesforce, click the **Files** tab and upload **einstein_platform.pem**.

1. In **Setup**, type **Custom** in the Quick Find box and click the **Custom Settings** link.

1. Click the first **New** Button (at the top of the screen).

1. For **Einstein Vision Email**, specify the email address you used when you created your Einstein Platform Services account (step 1), and click **Save**.

1. In the DreamHouse app, click the **Einstein Vision** tab.

1. Click the **Create Dataset** button.

1. In the **houses** tile, click the **Train** button, the click the **Models** tab.

1. Click the **Refresh Models** button until the Progress column indicates **100%**.

1. Copy the **Model Id** in your clipboard.

1. Click the **Property Finder** Tab, click the gear icon (upper right corner), and click **Edit Page**. Click the **Filters** component and paste the Model Id in the **Einstein Model Id** field in the right sidebar. Save the page.

1. Repeat the last step for the **Property Explorer** page.

You can now search houses by uploading (or dropping) a picture in the visual search box that is part of the Filters component on the **Property Finder** and **Property Explorer** pages. 
-->

## 追加リソース
DreamHouse はここで解説していない様々な機能を提供しています。例えばDreamHouseでは以下の実現方法をデモンストレーションしています:

- Salesforceモバイルアプリの利用
- Moible SDKを使った顧客エンゲージメントモバイルアプリの構築
- プロセスビルダーを使ったプロセスの自動化や、プッシュ通知を顧客エンゲージメントアプリへ送信する方法
- Alexa, Slack, Facebook MessengerおよびLineとのインテグレーション
- スマートライト, スマートサーモスタットおよびスマートロックといったIoTデバイスとのインテグレーション

より詳しくは [dreamhouseappjp.io](http://dreamhouseappjp.io) をご覧ください。