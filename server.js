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
            path: '^\/(home|peoples|user)/',
            target: 'http://localhost:3001'
        }
    ]
});

const app = express();

app.get('/peoples/', function (req, res) {
    const peoples = {
        "peoples": [{
            nickname: "Dimorinny",
            age: 12,
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
                name: "lukaville"
            }, {
                code: "vk",
                name: "lukaville"
            }]
        }, {
            nickname: "Dimorinny",
            age: 115,
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
            nickname: "Dimorinny",
            age: -1,
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
            nickname: "Dimorinny",
            age: 0,
            gender: {
                code: "",
                name: ""
            },
            level: {
                code: "native",
                name: "Native"
            },
            country: {
                code: "",
                name: "",
            },
            topics: [],
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
                {name: 'Cou132ntry', code: 'c1ountry'},
                {name: 'Cou123ntry', code: 'co3untry'},
                {name: '4Country', code: 'cou2ntry'},
                {name: 'Cou43ntry', code: 'cou12ntry'},
                {name: 'Coun234try', code: 'co5untry'},
                {name: 'Cou34ntry', code: 'cou4ntry'},
                {name: 'Coun23try', code: 'cou123123ntry'},
                {name: 'Coun12try', code: 'cou112ntry'},
            ],
            contacts: [
                {name: "Skype", code: "skype"},
                {name: "Vkontakte", code: "vk"}
            ]
        },
        user: {
            nickname: "Dimorinny",
            age: 10,
            gender: {
                code: "",
                name: ""
            },
            level: {
                code: "beginner",
                name: "Beginner"
            },
            country: {
                code: "",
                name: "",
            },
            topics: [],
            contacts: []
        }
    };

    setTimeout(function () {
        res.json({home: home});
    }, 50);
});

app.post('/user/', function (req, res) {
    console.log(req);
    const user = {
        user: {
            nickname: "Dimorinny1",
            age: 15,
            gender: {
                code: "male",
                name: "Male"
            },
            level: {
                code: "upper_intermediate",
                name: "Upper-Intermidiate"
            },
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
        res.json(user);
    }, 50);
});

server.listen(3000, 'localhost', function (err, result) {
    if (err) {
        return console.log(err);
    }
    console.log('Listening at http://localhost:3000/');
});

app.listen(3001);
