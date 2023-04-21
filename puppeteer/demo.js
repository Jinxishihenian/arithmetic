const puppeteer = require('puppeteer');
const expect = require('@jest/expect');
// const { expect } = require('@jest/globals');
(async () => {
    /*
    //  生成页面的屏幕截图.
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.baidu.com');
    await page.screenshot({ path: 'example.png' });
    await browser.close();*/
    /*
    // 生成PDF
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.baidu.com');
    await page.pdf({ path: 'example.pdf' });
    await browser.close();*/

    /*
    // 抓取SPA单页面应用并生成预渲染内容
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://juejin.cn/post/7221470396460351546?utm_source=gold_browser_extension');
    await page.waitForSelector('#__nuxt');
    const html = await page.evaluate(() => {
        return document.documentElement.outerHTML;
    });
    console.log(html)
    await page.content();
    await browser.close();*/
    // 自动化表单提交.
    /*
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('https://www.baidu.com');
    await page.type('#username', 'wss');
    await page.type('#password', '123456');
    await page.click('#submit-button');
    await page.waitForNavigation();
    console.log('表单提交成功!');
    await browser.close();
    */
    // UI自动化测试.
    /*const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('https://www.baidu.com');
    // 检查页面标题是否正确.
    const title = await page.title();
    // expect(title).toBe('百度一下');
    await browser.close();*/
})()
