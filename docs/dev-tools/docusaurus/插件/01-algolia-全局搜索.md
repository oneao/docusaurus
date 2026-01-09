> 具体可参考：https://docusaurus.io/zh-CN/docs/search

Algolia 是一个强大的搜索引擎平台，专注于提供快速、可定制的搜索功能。它通常用于为网站、应用或文档提供实时搜索和自动完成功能。

## 1. 获取 appId 和 apiKey

1. 先到 [官网](https://dashboard.algolia.com) 注册，大概两天后会收到邮件通知注册成功，再接着往下操作
2. 登录
3. 创建一个新的 Application，选择左边的免费版本进行下一步
4. 定义 index_name，选择响应快的服务进行创建。到这一步就创建成功了
5. 打开 API keys，获取三个需要的字段 Application ID、Search-Only API key、Admin API key

## 2. 修改 docusaurus.config.js

```json
{
  "config": {
    "themeConfig": {
      "algolia": {
        "appId": "填写申请的appId",
        "apiKey": "填写申请的apiKey",
        "indexName": "填写申请的indexName"
      }
    }
  }
}
```

这样就会自动在 `navbar` 添加个搜索框

## 3. 新增 `docsearch.json` 配置文件
注意将信息换成自己的信息

```json
{
  // 需要替换
  "index_name": "xxx",
  // 需要替换。网站网址
  "start_urls": ["xxx"],
  // 需要替换。sitemap的网址，docusaurus 默认在根目录下生成 sitemap.xml
  "sitemap_urls": ["xxx"],
  "selectors": {
    "lvl0": {
      "selector": "(//ul[contains(@class,'menu__list')]//a[contains(@class, 'menu__link menu__link--sublist menu__link--active')]/text() | //nav[contains(@class, 'navbar')]//a[contains(@class, 'navbar__link--active')]/text())[last()]",
      "type": "xpath",
      "global": true,
      "default_value": "Documentation"
    },
    "lvl1": "header h1, article h1",
    "lvl2": "article h2",
    "lvl3": "article h3",
    "lvl4": "article h4",
    "lvl5": "article h5, article td:first-child",
    "lvl6": "article h6",
    "text": "article p, article li, article td:last-child"
  },
  "custom_settings": {
    "attributesForFaceting": [
      "type",
      "lang",
      "language",
      "version",
      "docusaurus_tag"
    ],
    "attributesToRetrieve": [
      "hierarchy",
      "content",
      "anchor",
      "url",
      "url_without_anchor",
      "type"
    ],
    "attributesToHighlight": ["hierarchy", "content"],
    "attributesToSnippet": ["content:10"],
    "camelCaseAttributes": ["hierarchy", "content"],
    "searchableAttributes": [
      "unordered(hierarchy.lvl0)",
      "unordered(hierarchy.lvl1)",
      "unordered(hierarchy.lvl2)",
      "unordered(hierarchy.lvl3)",
      "unordered(hierarchy.lvl4)",
      "unordered(hierarchy.lvl5)",
      "unordered(hierarchy.lvl6)",
      "content"
    ],
    "distinct": true,
    "attributeForDistinct": "url",
    "customRanking": [
      "desc(weight.pageRank)",
      "desc(weight.level)",
      "asc(weight.position)"
    ],
    "ranking": [
      "words",
      "filters",
      "typo",
      "attribute",
      "proximity",
      "exact",
      "custom"
    ],
    "highlightPreTag": "<span class='algolia-docsearch-suggestion--highlight'>",
    "highlightPostTag": "</span>",
    "minWordSizefor1Typo": 3,
    "minWordSizefor2Typos": 7,
    "allowTyposOnNumericTokens": false,
    "minProximity": 1,
    "ignorePlurals": true,
    "advancedSyntax": true,
    "attributeCriteriaComputedByMinProximity": true,
    "removeWordsIfNoResults": "allOptional",
    "separatorsToIndex": "_",
    "synonyms": [
      ["js", "javascript"],
      ["ts", "typescript"]
    ]
  }
}
```
