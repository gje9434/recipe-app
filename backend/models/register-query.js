const pool = require("./db");

function doesUsernameExist(data) {
    return new Promise((resolve, reject) => {
        if(data.length == 0) {
            resolve("Username not taken")
        } else {
            reject("Username already exists")
        }
    })
}

function isEmailAlreadyUsed(data) {
    return new Promise((resolve, reject) => {
        if(data.length == 0) {
            resolve("Email not already used")
        } else {
            reject("Email already taken by another user")
        }
    })
}

async function registerQuery(newUser) {
    try {
        const users = await(pool.query("SELECT * FROM users WHERE username = $1", [newUser.username]))
        await doesUsernameExist(users.rows);

        const emails = await(pool.query("SELECT * FROM users WHERE email = $1", [newUser.email]))
        await isEmailAlreadyUsed(emails.rows);
    } catch(err) {
        return Promise.reject(err);
    }
}

module.exports = registerQuery;