"use server";
import { connectToDatabase } from "./util";
import { Voter } from "./models"; // Ensure this import is correct and at the top
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import * as XLSX from "xlsx";
import { writeFile } from "fs/promises";
import { headers } from "next/headers";
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

export const exportToExcel = async () => {
  "use server";

  try {
    await connectToDatabase();

    // Fetch all voters from the database
    const voters = await Voter.find({});

    // Prepare data for Excel
    const data = voters.map((voter) => ({
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
      Status: voter.isActive ? "Active" : "Inactive",
    }));
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(data);

    // Add the worksheet to the workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, "Voters");

    // Generate buffer
    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "buffer",
    });

    // Generate a unique filename
    const fileName = `voters_${Date.now()}.xlsx`;

    // Create a Blob object for download
    const blob = new Blob([excelBuffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });

    // Trigger browser download
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    link.click();
  } catch (error) {
    console.error("Error exporting Excel:", error);
    throw new Error("Failed to export Excel file");
  }
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
