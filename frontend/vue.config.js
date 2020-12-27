module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/' : undefined,
  configureWebpack: {
    output: { filename: '[name].[hash:8].js' },
    devtool: 'eval-source-map',
  },
}
