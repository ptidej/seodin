const webpack = require('webpack');
const path = require('path');
module.exports = {
    entry: {
        'vendor': [
            './src/main/webapp/app/vendor',
            '@angular/common',
            '@angular/compiler',
            '@angular/core',
            '@angular/forms',
            '@angular/http',
            '@angular/platform-browser',
            '@angular/platform-browser-dynamic',
            '@angular/router',
            '@ng-bootstrap/ng-bootstrap',
            'angular2-cookie',
            'ngx-infinite-scroll',
            'jquery',
            'ng-jhipster',
            'ng2-webstorage',
            'sockjs-client',
            'webstomp-client',
            'rxjs'
        ]
    },
    resolve: {
        extensions: ['.ts', '.js'],
        modules: ['node_modules']
    },
    module: {
        exprContextCritical: false,
        rules: [
            {
                test: /(vendor\.css|global\.css)/,
                loaders: ['style-loader', 'css-loader']
            },
            {
                test: /\.(jpe?g|png|gif|svg|woff2?|ttf|eot)$/i,
                loaders: ['file-loader?hash=sha512&digest=hex&name=[hash].[ext]']
            }
        ]
    },
    output: {
        filename: '[name].dll.js',
        path: path.resolve('./build/www'),
        library: '[name]'
    },
    plugins: [
        new webpack.DllPlugin({
            name: '[name]',
            path: path.resolve('./build/www/[name].json')
        })
    ]
};
