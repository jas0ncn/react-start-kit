require('shelljs/global')
env.NODE_ENV = 'production'

const path = require('path')
const ora = require('ora')
const webpack = require('webpack')
const webpackConfig = require('./webpack.prod.js')

console.log(
  '  Tip:\n' +
  '  Built files are meant to be served over an HTTP server.\n' +
  '  Opening index.html over file:// won\'t work.\n'
)

const spinner = ora('building for production...')
spinner.start()

const assetsPath = path.resolve(__dirname, '../dist')
rm('-rf', assetsPath)
mkdir('-p', assetsPath)
mkdir('-p', path.resolve(assetsPath, 'static'))
cp('-R', 'static/*', path.resolve(assetsPath, 'static'))

webpack(webpackConfig, function (err, stats) {
  spinner.stop()
  if (err) throw err
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n')
})
