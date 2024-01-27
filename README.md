# Puppeteer Crawler

## Introduction
This is a webpage crawler based on koa2 and puppeteer
Use child process to crawl the different modules of one webpage at the same time
You can customize the setting according to the webpage

这是一个基于koa2和puppeteer的网页爬虫程序
启动子进程运行爬虫 同时爬取网页不同模块的内容

### Book List Crawler Demo

This demo gets a book list as an example by crawling [Books to Scrape](https://books.toscrape.com/).

Result:
![](https://github.com/nagasawalee/crawler-book-list-demo/blob/main/crawler%20result.png)

## Getting Started

1. Download the code, enter the project directory in terminal

2. Download dependencies
   ```shell
   npm install
   ```
3. Connect to database
   ```shell
   node db/sync.js
   ```
4. Run project
   ```shell
   npm run dev
   ```
5. Run crawler

   ```shell
   http://localhost:<PORT>/crawler/<CHILD ROUTER> 
   ```
   *Change &lt;PORT&gt; and &lt;CHILD ROUTER&gt; according to your setting*

   Example:
   ```shell
   http://localhost:3000/crawler/crawl_booklist_data
   ```
 
   
