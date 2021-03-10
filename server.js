const express = require('express');
const morgan = require('morgan');
const path = require("path")
const PORT = process.env.PORT || 3000;
const app = express()
if (!process.env.PORT) app.use(morgan("dev"))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"))
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
});
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
