const express = require("express");
const app = express();
const port = process.env.POST || 8000;
const cors = require("cors");




app.use(cors());

// Route 
require("../Routes/RouterManager")(app);

app.listen(port, () => {
    console.log("Server is listening at " + port);
});

module.exports = app;