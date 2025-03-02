// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import 'cypress-mochawesome-reporter/register'
import './commands'

Cypress.on('uncaught:exception', (err, runnable) => {
  // 你可以根据错误信息来选择忽略某些错误
  if (err.message.includes('replaceChild')) {
    // 如果是某个特定的错误，返回 false，阻止测试失败
    return false;
  }

  // 对于其他错误，返回 true，继续执行默认的错误处理
  return true;
});

