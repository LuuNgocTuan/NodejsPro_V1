import getConnection from "config/database";
import { RowDataPacket } from "mysql2";

const getAllUser = async () => {
  const connection = await getConnection();
  try {
    const [results, fields] = await connection.query("SELECT * FROM `users`");
    // console.log(results);
    return results; // Lấy tất cả người dùng từ cơ sở dữ liệu
  } catch (err) {
    console.log(err);
    return [];
  }
};

const handleCreateUser = async (
  fullName: string,
  email: string,
  password: string,
  address: string
) => {
  const connection = await getConnection();
  try {
    const sql =
      "INSERT INTO `users`(`fullName`, `email`,`password`,`address`) VALUES (?, ?,?,?)";
    const values = [fullName, email, password, address];

    const [result, fields] = await connection.execute(sql, values);

    console.log(result);
    console.log(fields);
  } catch (err) {
    console.log(err);
  }
};

const handleDeleteUser = async (id: string) => {
  const connection = await getConnection();
  try {
    const sql = "DELETE FROM `users` WHERE `id` = ? LIMIT 1";

    const values = [id];

    const [result, fields] = await connection.execute(sql, values);

    console.log(result);
    console.log(fields);
  } catch (err) {
    console.log(err);
  }
};

const getUserById = async (id: string) => {
  const connection = await getConnection();
  try {
    const sql = "SELECT * FROM `users` WHERE `id` = ?";

    const values = [id];

    const [result, fields] = await connection.execute<RowDataPacket[]>(
      sql,
      values
    );
    return result[0];
  } catch (err) {
    console.log(err);
  }
};

const updateUserById = async (
  id: string,
  fullName: string,
  email: string,
  password: string,
  address: string
) => {
  const connection = await getConnection();
  try {
    const sql =
      "UPDATE `users` SET `fullName` = ?, `email` = ?, `password`=?, `address` = ? WHERE `id` = ?";

    const values = [fullName, email, password, address, id];

    const [result, fields] = await connection.execute(sql, values);
    return result;
  } catch (err) {
    console.log(err);
  }
};

export {
  getAllUser,
  handleCreateUser,
  handleDeleteUser,
  getUserById,
  updateUserById,
};
