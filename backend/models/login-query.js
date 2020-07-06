const pool = require("./db");
const bcrypt = require("bcrypt");

function doesUserExist(rows) {
    return new Promise((resolve, reject) => {
        if(rows.length > 0) {
            resolve("User exists");
        } else {
            reject("Username invalid");
        }
    })
}

async function loginQuery(user) {
    try {
        const { rows } = await pool.query("SELECT * FROM users WHERE username = $1", [user.username]);
        await doesUserExist(rows);
        const res = await bcrypt.compare(user.password, rows[0].password);
        if(res == false) {
            throw Error("Passwords don't match")
        }
    } catch(err) {
        return Promise.reject(err);
    }
}

module.exports = loginQuery;




