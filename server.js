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
            path: '^\/(home|peoples)/',
            target: 'http://localhost:3001'
        }
    ]
});

const app = express();

app.get('/peoples/', function (req, res) {
    const peoples = {
        "peoples": [{
            nickname: "Dimorinny",
            gender: {
                code: "male",
                name: "Male"
            },
            level: {
                code: "beginner",
                name: "Beginner"
            },
            country: {
                code: "fr",
                name: "France",
            },
            topics: [{
                code: "12xcsdf",
                name: "School"
            }, {
                code: "12xcsd4",
                name: "Country"
            }],
            contacts: [{
                code: "skype",
                name: "dimorinny"
            }, {
                code: "vk",
                name: "dimorinny"
            }]
        }, {
            nickname: "DimorinnyLol",
            gender: {
                code: "female",
                name: "Female"
            },
            level: {
                code: "beginner",
                name: "Beginner"
            },
            country: {
                code: "it",
                name: "Italy",
            },
            topics: [{
                code: "12xcsdf",
                name: "School"
            }, {
                code: "12xcsd4",
                name: "Country"
            }],
            contacts: [{
                code: "skype",
                name: "dimorinny"
            }, {
                code: "vk",
                name: "dimorinny"
            }]
        }, {
            nickname: "Dimorinny",
            gender: {
                code: "male",
                name: "Male"
            },
            level: {
                code: "beginner",
                name: "Beginner"
            },
            country: {
                code: "fr",
                name: "France",
            },
            topics: [{
                code: "12xcsdf",
                name: "School"
            }, {
                code: "12xcsd4",
                name: "Country"
            }],
            contacts: [{
                code: "skype",
                name: "dimorinny"
            }, {
                code: "vk",
                name: "dimorinny"
            }]
        }]
    };

    setTimeout(function () {
        res.json(peoples);
    }, 1500);
});

app.get('/home/', function (req, res) {
    const home = {
        form: {
            gender: [
                {name: 'Male', code: 'male'},
                {name: 'Female', code: 'female'},
            ],
            level: [
                {name: 'Beginner', code: 'beginner'},
                {name: 'Pre-Intermediate', code: 'pre_intermediate'},
                {name: 'Intermediate', code: 'intermediate'},
                {name: 'Upper-Intermediate', code: 'upper_intermediate'},
                {name: 'Advanced', code: 'advanced'},
                {name: 'Native', code: 'native'}
            ],
            country: [
                {name: 'France', code: 'fr'},
                {name: 'Italy', code: 'it'},
            ],
            topics: [
                {name: 'School', code: 'school'},
                {name: 'Home', code: 'home'},
                {name: 'Country', code: 'country'},
            ],
            contacts: [
                {code: "skype", name: "dimorinny"},
                {code: "vk", name: "dimorinny"}
            ]
        },
        user: {
            nickname: "Dimorinny",
            gender: "male",
            level: "beginner",
            country: {
                code: "fr",
                name: "France",
            },
            topics: [{
                code: "school",
                name: "School"
            }, {
                code: "country",
                name: "Country"
            }],
            contacts: [{
                code: "skype",
                name: "dimorinny"
            }, {
                code: "vk",
                name: "dimorinny"
            }]
        }
    };

    setTimeout(function () {
        res.json({home: home});
    }, 1500);
});

server.listen(3000, 'localhost', function (err, result) {
    if (err) {
        return console.log(err);
    }
    console.log('Listening at http://localhost:3000/');
});

app.listen(3001);
