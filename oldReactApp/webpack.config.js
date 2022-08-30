const path = require('path')

const config = (env, argv) => {


    return {
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: 'main.js'
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    
                }
            ]
        }
    }
}

export default config