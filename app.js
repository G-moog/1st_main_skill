const express = require("express");
const connect = require("./schemas/index");
connect();
const app = express();
const port = 3000;

const mainRouter = require("./routes/main");
const cartsRouter = require("./routes/main");

const requestMiddleware = (req, res, next) => {
    console.log("Request URL : ", req.originalUrl, " - ", new Date());
    next();
};

app.use(express.static("static"));
app.use(express.json());
app.use(requestMiddleware);

app.use("/api", [mainRouter], [detailRouter]);  

app.get('/', (req, res) =>{
    res.send("Hello World")
});


app.listen(port, () => {
    console.log(port, "포트로 서버가 켜졌어요!")
});
