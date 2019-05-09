const weatherRouter = require("../Routes/Weather");

module.exports = (app) => {
    app.use("/", weatherRouter);
}
