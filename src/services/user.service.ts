import getConnection from "config/database";

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

export { getAllUser, handleCreateUser };
