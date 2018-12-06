module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'ReactLocalCurrency',
      externals: {
        react: 'React'
      }
    }
  },
  karma: {
    browsers: ['ChromeHeadless']
  }
}
