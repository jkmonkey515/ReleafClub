var router = require('express').Router();
const path = require('path');

router.get('', async (req, res) => {
    res.sendFile(path.join(__dirname, '../views/home/home.html'));
})

router.get('/1', async (req, res) => {
    res.sendFile(path.join(__dirname, '../views/page1/page1.html'));
})

router.get('/2', async (req, res) => {
    res.sendFile(path.join(__dirname, '../views/page2/page2.html'));
})

router.get('/3', async (req, res) => {
    res.sendFile(path.join(__dirname, '../views/page3/page3.html'));
})

router.get('/preroll', async (req, res) => {
    res.sendFile(path.join(__dirname, '../views/preroll/preroll.html'));
})

module.exports = router;