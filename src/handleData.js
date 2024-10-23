// 每个职位的id
const getKey = (url) => {
  // 使用正则表达式提取
  return url.match(/job_detail\/([^\.]+)/)[1];
};

// 去掉链接上多余的参数
export const changeLink = (link) => {
  // 使用正则表达式提取
  return link.match(/https?:\/\/[^?]+/)[0];
};

// 批量处理数据
export const handleData = (data) => {
  console.log('执行到这里');
  return data.map((item) => ({
    ...item,
    key: getKey(item.link),
    link: changeLink(item.link),
  }));
};
