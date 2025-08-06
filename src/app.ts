import express from "express";
import "dotenv/config";
import webRoutes from "./routes/web";

const app = express();
const port = process.env.PORT || 8079;

//config view engine
app.set("view engine", "ejs"); // khai báo thư viện ejs
app.set("views", __dirname + "/views"); // khai báo thư mục views nằm ở đâu

//config request.body express để submit dữ liệu từ form về server
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

//config static file
app.use(express.static("public"));

webRoutes(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
    console.log("env port: ", process.env.PORT);
});
