// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const puppeteer = require('puppeteer');
const $ = require('cheerio');
const url = 'https://juejin.im/books';

// 云函数入口函数
exports.main = async (event, context) => {
  const browser = await puppeteer
    .launch();
  const page = await browser.newPage();
  await page.goto(url,
    {
      waitUntil: 'networkidle2'
    }
  );
  const html = await page.content();
  // $('.text', '')
  const books = $('.info', html);
  let res = [];
  books.each(function () {
    const price = $('.price-text', this)
      .text();
    console.log(price);
    res.push(price);
  })
  return res;
}
