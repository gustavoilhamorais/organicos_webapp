const express = require("express");
const router = express.Router();
const tokenObserver = require("../helpers/verifyJWT");
const rp = require('request-promise');
const cheerio = require('cheerio');

router.get("/", tokenObserver, async (request, response) => {
    try {
        const url = 'https://www.ccee.org.br/preco/preco.do';
        const html = await rp(url, {jar: true});
        const $ = cheerio.load(html);
        const data = String($('table'));
        response.status(200).json({data});
    } catch (error) {
        console.error(error);
    }
});

module.exports = router;
