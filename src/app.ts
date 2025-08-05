import express from "express";
import "dotenv/config";
import webRouters from "./routers/web";

const app = express();
const port = process.env.PORT || 8079;

//config view engine
app.set("view engine", "ejs"); // Set the view engine to EJS, khai báo thư viện ejs

//app.set("views", "./src/views"); // Set the directory for views, chỉ thư mục chứa file ejs
app.set("views", __dirname + "/views"); // Set the directory for views, chỉ thư mục chứa file ejs

webRouters(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log("env port: ", process.env.PORT);

  // Nếu sử dụng __dirname thì sẽ lấy được đường dẫn tuyệt đối đến thư mục hiện tại của file đang chạy
  console.log("check path: ", __dirname + "/views");
});
