const path = require('path')
const webpack = require('webpack')

const myUrl = 'http://localhost:3001/anecdotes'

const config = (env, argv) => {
    return {
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: 'main.js'
        },
        devtool: "source-map",
        module: {
            rules: [
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env']
                    }
                }
            ]
        },
        plugins: [
            new webpack.DefinePlugin({
                BACKEND_URL: JSON.stringify(myUrl)
            })
        ]
    }
}

module.exports = config