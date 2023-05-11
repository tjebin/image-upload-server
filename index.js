
const express = require('express');
const fileUpload = require('express-fileupload');

const app = express();

// Use the express-fileupload middleware
app.use(fileUpload());

app.use(express.static('public'));

// configure CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
// app.use(
//     fileUpload({
//         limits: {
//             fileSize: 10000000, // Around 10MB
//         },
//         abortOnLimit: true,
//     })
// );

require("./controllers/image-upload-controller")(app);

app.listen(process.env.PORT || 3004);

app.get('/', function routeHandler(req, res) {
    res.send(' This is an image upload server .....');
});

