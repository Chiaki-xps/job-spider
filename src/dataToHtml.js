// 爬虫数据生成html
import fs from 'fs';

export const dataToHtml = (data, path) => {
  let htmlData = '';

  data.forEach((item) => {
    htmlData =
      htmlData +
      `
        <div>
          <span><h2>${item.company.name}</h2>
          <span><h3><a href="${item.link}" target="_blank">${item.job.name}</a></h3></span>
          <h4>${item.job.salary}</h4>
          <p>${item.desc}</p>
        </div>
      `;
  });

  fs.writeFile(path, htmlData, (err) => {
    if (err) {
      console.error('写入文件时发生错误:', err);
    } else {
      console.log('成功写入html文件');
    }
  });
};
