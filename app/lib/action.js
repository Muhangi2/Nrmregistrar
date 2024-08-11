import { connectToDatabase } from "./util";
import { User } from "./models";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
//addinguser
export const addUsers = async (formData) => {
  "use server";
  console.log(formData);
  const {
    firstname,
    secondname,
    email,
    contact,
    district,
    hometown,
    studentNumber,
    registrationnumber,
    residencehall,
    position,
    college,
    school
  } = Object.fromEntries(formData);

  try {
    await connectToDatabase();

    const newUser = new User({
      firstname,
      secondname,
      email,
      contact,
      district,
      hometown,
      studentNumber,
      registrationnumber,
      residencehall,
      position,
      college,
      school,
      isActive: true, // Setting a default value
    });
    console.log(newUser)

    const user = await newUser.save();
    console.log(user, "User added successfully");
  } catch (error) {
    console.log(error, "Error adding user");
  }
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};
//updatinguser
export const updateUser = async (formData) => {
  "use server";
  
  const {
    id, // Assuming you're passing the user's ID
    firstname,
    secondname,
    email,
    contact,
    district,
    hometown,
    studentNumber,
    registrationnumber,
    residencehall,
    position,
    college,
    school,
    isActive
  } = Object.fromEntries(formData);

  try {
    await connectToDatabase();

    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        firstname,
        secondname,
        email,
        contact,
        district,
        hometown,
        studentNumber,
        registrationnumber,
        residencehall,
        position,
        college,
        school,
        isActive: isActive === 'true'
      },
      { new: true } // This option returns the updated document
    );

    console.log(updatedUser, "User updated successfully");
  } catch (error) {
    console.log(error, "Error updating user");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};
//deleting user
export const deleteUser = async (formData) => {
  "use server";

  const { id } = Object.fromEntries(formData);

  try {
    await connectToDatabase();

    await User.findByIdAndDelete(id);

    console.log("User deleted successfully");
  } catch (error) {
    console.log(error, "Error deleting user");
  }

  revalidatePath("/dashboard/users");
};
//viewing single user
export const getSingleUser = async (id) => {
  try {
    await connectToDatabase();

    const user = await User.findById(id);

    if (!user) {
      throw new Error("User not found");
    }

    return user;
  } catch (error) {
    console.log(error, "Error fetching user");
    return null;
  }
};
