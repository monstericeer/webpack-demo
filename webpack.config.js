const path = require('path')
const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const Timestamp = new Date().getTime()

const isDev = process.env.NODE_ENV === 'development' 

const config = {
  target: "web",
  entry: path.join(__dirname, 'src/main.js'),  // 入口
  output: {  // 出口
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(svg|gif|jpg|jpeg|png)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024,  // 文件小于1024，会转成base64代码,
              name: '[name]'+ Timestamp +'.[ext]'  // 自身名称 + 扩展名（可自定义）
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: isDev ? '"development"' : '"production"'
      }
    }),
    // 热加载
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
}

if(isDev){
  config.devtool = '#cheap-module-eval-source-map' // 编译配置
  config.devServer = {
    port: 8989,       // 服务端口
    host: '0.0.0.0',  // 可通过ip访问
    overlay: {        // 出错会显示到网页
      errors: true
    },
    hot: true,        //热加载
    open: false       // 自动打开浏览器
  }
}

module.exports = config