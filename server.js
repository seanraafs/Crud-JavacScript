const port = 3000;
const express = require("express");
const server = express();

server.use("/", (req, res) => {
    res.send("Server berjalan!");
});

server.listen(port, () => {
    console.log(`Listening on port ${port}`);
})