const pkg = require('./package.json')

module.exports = {
  publicPath: './',
  outputDir: 'dist',
  pluginOptions: {
    electronBuilder: {
      preload: 'electron/ipcRender.js'
    }
  },
  devServer: {
    host: pkg.env.HOST,
    port: pkg.env.PORT,
    open: true,
    https: false,
    proxy: {
      '/api': {
        target: 'http://localhost',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  }
}
