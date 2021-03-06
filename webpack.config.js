var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var autoprefixer = require('autoprefixer')

const PUBLICPATH = '/' //'/practices/'

module.exports = 
{
    entry: "./app/index.js",
    output: {
        path: './dist',
        publicPath: PUBLICPATH,
        filename: 'bundles.js',
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        },{
            test: /\.css$/,
            exclude: /node_modules|app\/assets/,
            //loader: 'style!css'
            loaders: [
                'style-loader',
                'css-loader?module&sourceMap&importLoader=1&name=[name].[hash]',
                'postcss'
            ]
        },{
            test: /\.css$/,
            include: /app\/assets/,
            loaders: [
                'style-loader',
                'css?sourceMap=true'
            ]
        },{
            test: /\.css/,
            //include: /node_modules/,  // node_modules 目录文件太多 开发时会引起mac os 内核线程把CPU跑満
            include: /node_modules\/(react-datetime|react-resizable|react-grid-layout|react-virtualized|weui|react-weui|react-responsive-carousel)/,
            loaders: [
                'style-loader',
                'css?sourceMap=true',
            ]
        }, 
        {
            test: /\.less$/,
            loader: 'style!css!postcss!less'
        },
        {
            test: /\.(jpg|jpeg|png|svg)/,
            exclude: /node_modules/,
            loaders : [
                // 'file?name=/assets/[name].[ext]',
                'url?limit=25000'
            ]
        // },{
        //     test: /\.scss$/,
        //     exclude: /node_modules/,
        //     loaders: [
        //         'style-loader',
        //         'css-loader?module&sourceMap&importLoader=1',
        //         'sass-loader?sourceMap'
        //     ]
        }],
    },
    postcss: function() {
        return [ autoprefixer ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "app/index.tpl"
        }),
        
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     }
        // }),
    
        //new webpack.optimize.DedupePlugin(),
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
            PUBLICPATH: JSON.stringify(PUBLICPATH)
        }),
        new webpack.ProvidePlugin({
             //$: 'jquery'
        })
    ],
    resolve: {
        modulesDirectories: ['app', 'node_modules'],
    /* Todo:
        extensions: [
            '',
            '.js',
        ],
        packageMains: [
            //'jsnext:main',
            'main',
        ],
    */
    },
    devServer: {
        proxy: {
            "/api": {
                target: 'http://www.vvsai.com',
                rewrite: function (req) {
                    req.url = "/api/sport/getoneMatchSettingSports?matchRule=8"
                }
            }
        }
    }
}