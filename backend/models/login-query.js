const pool = require("./db");

function doesUserExist(rows) {
    return new Promise((resolve, reject) => {
        if(rows.length > 0) {
            resolve("User exists");
        } else {
            reject("Username invalid");
        }
    })
}

function doesPasswordMatch(userPword, dbPword) {
    return new Promise((resolve, reject) => {
        if(userPword == dbPword) {
            resolve("Passwords match")
        } else {
            reject("Incorrect password")
        }
    })
}

async function loginQuery(user) {
    try {
        const { rows } = await pool.query("SELECT * FROM users WHERE username = $1", [user.username]);
        await doesUserExist(rows);
        await doesPasswordMatch(user.password, rows[0].password);
    } catch(err) {
        return Promise.reject(err);
    }
}

module.exports = loginQuery;




