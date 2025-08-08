import getConnection from "../config/database";

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

const handleCreateUser = (
  fullName: string,
  email: string,
  password: string,
  address: string
) => {
  console.log("insert database");
};

export { getAllUser, handleCreateUser };
