const path = require( 'path' );
const Dotenv = require('dotenv-webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env) => {

    var envMode = 'development';
    var envConfigFile = 'tsconfig.dev.json'
    var configPath = 'src/configuration/config.env.local'

    return {
        // bundling mode
        mode: envMode,

        // entry files
        entry: './src/index.ts',

        // output bundles (location)
        output: {
            path: path.resolve( __dirname, 'dist' ),
            filename: 'main.js',
        },

        // file resolutions
        resolve: {
            extensions: [ '.ts', '.js' ],
        },

        // loaders
        module: {
            rules: [
                {
                    test: /\.tsx?/,
                    use: [
                        {
                            loader: 'ts-loader',
                            options: {
                                configFile: envConfigFile
                            }
                        }
                    ],
                    exclude: /node_modules/,
                }
            ]
        },
        // copy static files to dist folder via a copy plugin
        plugins: [
            new CopyWebpackPlugin({
                patterns: [
                    {
                        from: 'src/index.html'
                    },
                    {
                        from: 'src/styles.css'
                    }
                ]
            }),
            new Dotenv({
                path: configPath
            }),
        ],
        devServer: {
            static: {
            directory: path.join(__dirname, 'dist'),
            },
            compress: true,
            port: 9000,
        },
        devtool: 'source-map'
    }  
};