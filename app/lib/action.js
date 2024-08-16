"use server";
import { connectToDatabase } from "./util";
import { Voter } from "./models"; // Ensure this import is correct and at the top
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import * as XLSX from "xlsx";
import { signIn, signOut } from "../auth";

//addingVoter
export const addVoters = async (formData) => {
  "use server";
  console.log("formdatatatatatatata", formData);
  const {
    firstname,
    secondname,
    gender,
    email,
    contact,
    district,
    hometown,
    studentNumber,
    registrationnumber,
    residencehall,
    college,
    school,
  } = Object.fromEntries(formData);

  try {
    await connectToDatabase();

    const newVoter = new Voter({
      firstname,
      secondname,
      gender,
      email,
      contact,
      district,
      hometown,
      studentNumber,
      registrationnumber,
      residencehall,
      college,
      school,
      isActive: true, // Setting a default value
    });
    console.log(newVoter, "saved in the databasess");

    const savedVoter = await newVoter.save(); // Changed from `Voter` to `savedVoter`
    console.log(savedVoter, "Voter added successfully");
  } catch (error) {
    console.log(error, "Error adding Voter");
  }
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const deleteVoter = async (formData) => {
  "use server";
  const { id } = Object.fromEntries(formData);
  try {
    await connectToDatabase();

    // Find the voter by ID and delete it
    const deletedVoter = await Voter.findByIdAndDelete(id);

    if (!deletedVoter) {
      console.log(`No voter found with ID: ${id}`);
      return;
    }

    console.log(`Voter with ID: ${id} deleted successfully`);

    // Revalidate the relevant path and redirect if needed
    revalidatePath("/dashboard/users");
    redirect("/dashboard/users");
  } catch (error) {
    console.log(error, "Error deleting Voter");
  }
};
export const authenticate = async (formData) => {
  "use server";
  const { username, password } = Object.fromEntries(formData);
  try {
    await signIn("credentials", { username, password });
  } catch (error) {
    console.log(error);
    throw error;
  }
};
export const logout = async (formData) => {
  "use server";
  try {
    await signOut();
  } catch (error) {
    console.log(error);
    throw error;
  }
};
export const exportToExcel = async () => {
  "use server";

  try {
    await connectToDatabase();

    // Fetch all voters from the database
    const voters = await Voter.find({});

    // Prepare the data for Excel
    const data = voters.map(voter => ({
      FirstName: voter.firstname,
      SecondName: voter.secondname,
      Gender: voter.gender,
      Email: voter.email,
      Contact: voter.contact,
      District: voter.district,
      Hometown: voter.hometown,
      StudentNumber: voter.studentNumber,
      RegistrationNumber: voter.registrationnumber,
      ResidenceHall: voter.residencehall,
      College: voter.college,
      School: voter.school,
      Status: voter.isActive ? 'Active' : 'Inactive'
    }));

    // Create a new workbook and worksheet
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(data);

    // Add the worksheet to the workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, "Voters");

    // Generate buffer
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });

    // Convert buffer to base64
    const base64 = Buffer.from(excelBuffer).toString('base64');

    // Return the base64 string and filename
    return {
      base64: base64,
      filename: 'voters_list.xlsx'
    };
  } catch (error) {
    console.error("Error exporting to Excel:", error);
    throw error;
  }
};
