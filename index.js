import puppeteer from 'puppeteer';
import { writeFile } from './src/writeFile.js';
import { handleData } from './src/handleData.js';
import { url } from './config.js';
import { changeLink } from './src/handleData.js';

const browser = await puppeteer.launch({
  headless: false,
  defaultViewport: {
    width: 0,
    height: 0,
  },
});

const page = await browser.newPage();

// 等待打开url
await page.goto(url);
// 等待页面加载
await page.waitForSelector('.job-list-box');

// 获取页码
const totalPage = await page.$eval(
  '.options-pages a:nth-last-child(2)',
  (e) => {
    return parseInt(e.textContent);
  }
);

const allJobs = [];
for (let i = 1; i <= totalPage; i++) {
  await page.goto(url + '&page=' + i);

  await page.waitForSelector('.job-list-box');

  const jobs = await page.$eval('.job-list-box', (el) => {
    return [...el.querySelectorAll('.job-card-wrapper')].map((item) => {
      return {
        job: {
          name: item.querySelector('.job-name').textContent,
          area: item.querySelector('.job-area').textContent,
          salary: item.querySelector('.salary').textContent,
        },
        link: item.querySelector('a').href,
        company: {
          name: item.querySelector('.company-name').textContent,
        },
      };
    });
  });
  allJobs.push(...jobs);
}

for (let i = 0; i < allJobs.length; i++) {
  await page.goto(changeLink(allJobs[i].link));

  try {
    await page.waitForSelector('.job-sec-text');

    const jd = await page.$eval('.job-sec-text', (el) => {
      return el.textContent;
    });
    allJobs[i].desc = jd;

    console.log(allJobs[i]);
  } catch (e) {
    console.log('🚀 ~ e:', e);
  }
}
const result = handleData(allJobs);

writeFile(result);
