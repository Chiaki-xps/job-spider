export const getCurrentTime = () => {
  // 创建一个新的 Date 对象
  const now = new Date();

  // 获取当前年份
  const year = now.getFullYear();

  // 获取当前月份（注意：月份是从 0 开始的，0 表示 1 月，11 表示 12 月）
  const month = now.getMonth() + 1; // +1 使其从 1 开始计数

  // 获取当前日期
  const day = now.getDate();

  // 获取当前小时
  const hours = now.getHours();

  // 获取当前分钟
  const minutes = now.getMinutes();

  // 获取当前秒钟
  const seconds = now.getSeconds();

  return `${year}-${month}-${day}-${hours}-${minutes}-${seconds}`;
};
