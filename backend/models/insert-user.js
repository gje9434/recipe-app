const pool = require("./db");

async function addNewUser(data) {
    const text = "INSERT INTO users(username, password, email) VALUES($1, $2, $3)";
    const values = [
        data.username,
        data.password,
        data.email
    ];
    try {
        await(pool.query(text, values));
    } catch(err) {
        console.log(err);
        return Promise.reject(err);
    }
}

module.exports = addNewUser;