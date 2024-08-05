import { connectToDatabase } from "./util";
import { User } from "./models";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";

export const addUsers = async (formData) => {
  "use server";
  const { name, email, password, isAdmin, img, isActive, phone, address } =
    Object.fromEntries(formData);
  try {
    await connectToDatabase();

    const hashedPassword = await bcrypt.hash(password, 10); // Hash the password

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      isAdmin,
      img,
      isActive,
      phone,
      address,
    });

    const user = await newUser.save();
    console.log(user, "User added successfully");
  } catch (error) {
    console.log(error, "Error adding user");
  }
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};
