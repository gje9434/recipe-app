const express = require("express");
const registerQuery = require("../models/register-query");
const addNewUser = require("../models/insert-user");
const bcrypt = require("bcrypt");
const router = express.Router();

router.use(express.json());

router.post("/", async (req, res, next) => {
    try {
        req.body.password = await(bcrypt.hash(req.body.password, 10));
        const request = await(registerQuery(req.body));
        const add = await(addNewUser(req.body));
        res.status(200).json({ msg: "success" });        
    } catch(err) {
        console.log(err);
        return res.status(404).json({ error: err });
    } finally {
        next();
    }
})

module.exports = router;

