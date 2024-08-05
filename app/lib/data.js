import { User } from "./models";
import { connectToDatabase } from "./util";

export const fetchUsers = async () => {
  try {
    connectToDatabase();
    const users = await User.find();
    return users;
  } catch (error) {
    console.log(error, "error");
    throw new Error("Error fetching users");
  }
};
