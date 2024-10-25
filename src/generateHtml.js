// 根据已有json数据生成html
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// 1. import.meta.url 提供了一种方便的方式来获取当前模块的 URL。模块的绝对 URL，通常是以 file:// 开头（在本地文件系统中）或以 http(s):// 开头（在服务器上）。
// console.log('🚀 ~ import.meta.url:', import.meta.url);

// 2. fileURLToPath将 file协议 转成 文件路径
const currentFilePath = fileURLToPath(import.meta.url);
console.log('🚀 ~ currentFilePath:', currentFilePath);

// 3. 拿到模块路径
const jsonFilePath = path.resolve(
  currentFilePath,
  '../../output/内容运营-广州-20~50K-500~999人-2024-10-23-15-44-20.json'
);
// 创建完整的文件路径
const outputFilePath = path.join('./output', 'index.html');

// 4. 读文件
const fileData = await fs.promises.readFile(jsonFilePath, 'utf8');
const jsonData = JSON.parse(fileData);

let htmlData = '';
jsonData.forEach((item) => {
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

fs.writeFile(outputFilePath, htmlData, (err) => {
  if (err) {
    console.error('写入文件时发生错误:', err);
  } else {
    console.log('成功写入');
  }
});
