// 写入方法
import fs from 'fs';
import path from 'path';
import { getCurrentTime } from './time.js';
import { queryFileName } from '../config.js';

export const writeFile = (data) => {
  // 将 JSON 对象转换为字符串
  const jsonString = JSON.stringify(data);
  // 文件名
  const fileName = queryFileName + '-' + getCurrentTime() + '.json';

  // 指定目标文件夹和文件名
  const dir = './output'; // 目标文件夹
  // 创建目标文件夹（如果不存在）
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  // 创建完整的文件路径
  const filePath = path.join(dir, fileName);

  // 写入文件
  fs.writeFile(filePath, jsonString, (err) => {
    if (err) {
      console.error('写入文件时发生错误:', err);
    } else {
      console.log('JSON 数据已成功写入 data.json 文件');
    }
  });
};
