const express = require("express");
const loginQuery = require("../models/login-query");
const router = express.Router();

router.use(express.json());

async function processLogin(req, res, credentials) {
    try {
        await loginQuery(credentials);
    } catch(err) {
        return Promise.reject(err);
    }
}

router.post("/", async (req, res, next) => {
    try {
        const success = await processLogin(req, res, req.body);
        res.status(200).json({ msg: "success" });
    } catch(err) {
        return res.status(404).json({ error: err });
    } finally {
        next()
    }
    
})

module.exports = router;
