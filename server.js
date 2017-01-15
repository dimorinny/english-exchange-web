const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');
const express = require('express');

const server = new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    proxy: [
        {
            path: '^\/(posts|peoples)/',
            target: 'http://localhost:3001'
        }
    ]
});

const app = express();

app.get('/peoples/', function (req, res) {
    const peoples = {
        "peoples": [{
            nickname: "Dimorinny",
            gender: "male",
            level: "Beginner",
            country: {
                code: "fr",
                name: "France",
            },
            topics: [{
                id: "12xcsdf",
                name: "School"
            }, {
                id: "12xcsd4",
                name: "Country"
            }],
            contacts: [{
                type: "skype",
                value: "dimorinny"
            }, {
                type: "vk",
                value: "dimorinny"
            }]
        }, {
            nickname: "Dimorinny",
            gender: "female",
            level: "Beginner",
            country: {
                code: "us",
                name: "USA",
            },
            topics: [{
                id: "12xcsdf",
                name: "School"
            }, {
                id: "12xcsd4",
                name: "Country"
            }],
            contacts: [{
                type: "skype",
                value: "dimorinny"
            }, {
                type: "vk",
                value: "dimorinny"
            }]
        }, {
            nickname: "Dimorinny",
            gender: "male",
            level: "Beginner",
            country: {
                code: "fr",
                name: "France",
            },
            topics: [{
                id: "12xcsdf",
                name: "School"
            }, {
                id: "12xcsd4",
                name: "Country"
            }],
            contacts: [{
                type: "skype",
                value: "dimorinny"
            }, {
                type: "vk",
                value: "dimorinny"
            }]
        }]
    };

    setTimeout(function() {
        res.json(peoples);
    }, 1500);
});

server.listen(3000, 'localhost', function (err, result) {
    if (err) {
        return console.log(err);
    }
    console.log('Listening at http://localhost:3000/');
});

app.listen(3001);
