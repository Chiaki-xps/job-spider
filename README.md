# 招聘网站爬虫

## 配置

- config.js 是 boss 直聘爬虫配置

```js
export const baseConfig = {
  // 岗位
  query: '内容运营',

  // 薪资范围：405（10-20K）406（20-50K）
  salary: 406,

  // 地区 广州101280100  深圳101280600
  city: 101280100,

  // 职位id
  // position:

  // 公司规模 303（100-499） 304 （500-999）305（1000-9999）306（10000以上）
  scale: 304,
};
```

## 启动项目

```shell
npm install

node ./index.js
```

## 爬虫结果

- output 文件下，回根据配置和当前日期生成对应的 json 文件。
