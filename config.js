// 配置文件

const salary = {
  405: '10~20K',
  406: '20~50K',
};

const city = {
  101280100: '广州',
  101280600: '深圳',
};

const scale = {
  303: '100~499人',
  304: '500~999人',
  305: '1000~9999人',
  306: '10000人以上',
};

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

export const baseQuery = new URLSearchParams(baseConfig).toString();

export const baseURL = 'https://www.zhipin.com/web/geek/job';

export const url = `${baseURL}?${baseQuery}`;

export const queryFileName =
  baseConfig.query +
  '-' +
  city[baseConfig.city] +
  '-' +
  salary[baseConfig.salary] +
  '-' +
  scale[baseConfig.scale];
