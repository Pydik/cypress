const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,
  testFiles: '**/*.feature',
  defaultCommandTimeout: 30000,
  viewportWidth: 1920,
  viewportHeight: 1080,
  responseTimeout: 40000,
  env: {
    // superUser: 'mailtest727@gmail.com',
    // employeeUser: 'jp@mail.com',
    // secondSuperUser: 'mailtest591@gmail.com',
    // vendorUser: 'vendorautotest@gmail.com',
    // hmUser: 'hiringmanagerauto@gmail.com',
    // interviewUser: 'interviewerautotest@mailinator.com',
    // password: 'qwerty'
  },
  
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'https://telnyx.com',
  },
})