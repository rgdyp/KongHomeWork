const { defineConfig } = require('cypress');
const mochawesome = require('cypress-mochawesome-reporter/plugin'); 

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // 这里是设置 Node 事件监听器
      mochawesome(on);  // 启用 Mochawesome 插件
    },
    supportFile: "cypress/support/e2e.js",
  },
  defaultBrowser: 'chrome',
  defaultCommandTimeout: 30000, 
  pageLoadTimeout: 120000,       // 页面加载超时提升到 2 分钟
  "chromeWebSecurity": false,
  // "failOnStatusCode": false,
  reporter: 'cypress-mochawesome-reporter',  
  video: true,
  screenshotsFolder: 'cypress/reports/screenshots',
  videosFolder: 'cypress/reports/videos',
  viewportWidth: 1920,
  viewportHeight: 1080,
  reporterOptions: {
    reportDir: 'cypress/reports',   // 设置报告文件夹
    overwrite: false,                // 是否覆盖报告
    html: true,                    
    json: true,                      
    embeddedScreenshots: true,
  },

});