const { Router } = require('express')
const router = Router();

router.get("/", (req, res) => {
    res.send("<h1>HELLO WORLD</h1>");
});

router.get("/test", (req, res) => {
    res.json({
        "Name": "Armando"
    });
});

module.exports = router;