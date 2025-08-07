//import mysql from "mysql2/promise"; // Import mysql2 promise for async/await support
import mysql from "mysql2/promise";

const getConnection = async () => {
  //Tạo một kết nối đến cơ sở dữ liệu
  const connection = await mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "minhhuong@1109",
    database: "nodejspro_prac_v1",
  });
  return connection;
};

export default getConnection;
