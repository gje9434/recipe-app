const express = require("express");
const cors = require("cors");

const app = express().use('*', cors());

var port = process.env.PORT || 5000;

app.use(require("./routes"));

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

