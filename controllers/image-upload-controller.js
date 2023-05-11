var path = require('path')

module.exports = (app) => {
    const findAllImages = (req, res) => {
        res.send({ "hello..": "resp image uploaded........." })
    }
    const uploadColorImage = (req, res) => {
        const { file } = req.files;
        console.log(file);
        if (!file) return res.sendStatus(400);
        if (file.mimetype != "image/jpeg" || file.size >= 100000) {
            res.sendStatus(400);
        }
        let filePath = path.join(__dirname, '../public/images/color/');
        file.mv(filePath + file.name);
        res.sendStatus(200);
    }

    const uploadMaterialImage = (req, res) => {
        const { file } = req.files;
        console.log(file);
        if (!file) return res.sendStatus(400);
        if (file.mimetype != "image/jpeg" || file.size >= 100000) {
            res.sendStatus(400);
        }
        let filePath = path.join(__dirname, '../public/images/material/');
        file.mv(filePath + file.name);
        res.sendStatus(200);
    }
    const uploadStyleImage = (req, res) => {
        const { file } = req.files;
        console.log(file);
        if (!file) return res.sendStatus(400);
        if (file.mimetype != "image/jpeg" || file.size >= 100000) {
            res.sendStatus(400);
        }
        let filePath = path.join(__dirname, '../public/images/style/');
        file.mv(filePath + file.name);
        res.sendStatus(200);
    }
    const uploadWidgetImage = (req, res) => {
        const { file } = req.files;
        console.log(file);
        if (!file) return res.sendStatus(400);
        if (file.mimetype != "image/jpeg" || file.size >= 100000) {
            res.sendStatus(400);
        }
        let filePath = path.join(__dirname, '../public/images/widget/');
        file.mv(filePath + file.name);
        res.sendStatus(200);
    }

    const uploadQuestionImage = (req, res) => {
        const { file } = req.files;
        console.log(" uploading image............................");
        // console.log(file);
        if (!file) return res.sendStatus(400);
        if (file.mimetype != "image/jpeg" || file.size >= 100000) {
            res.sendStatus(400);
        }
        let filePath = path.join(__dirname, '../public/images/question/');
        file.mv(filePath + file.name);
        res.sendStatus(200);
    }


    app.get("/color", findAllImages);
    app.post("/color", uploadColorImage);
    app.post("/material", uploadMaterialImage);
    app.post("/style", uploadStyleImage);
    app.post("/images/widget", uploadWidgetImage);
    app.post("/question", uploadQuestionImage);
}

