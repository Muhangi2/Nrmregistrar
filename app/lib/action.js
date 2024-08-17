"use server";
import { connectToDatabase } from "./util";
import { Voter } from "./models";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { signOut, signIn } from "../auth";
import * as XLSX from "xlsx";

const generateCustomId = async () => {
  const lastVoter = await Voter.findOne().sort("-customId");

  if (!lastVoter || !lastVoter.customId) {
    return "MAK001A";
  }

  const lastId = lastVoter.customId;
  const numPart = parseInt(lastId.slice(3, 6));
  const letterPart = lastId.slice(6);

  if (numPart === 999) {
    const nextLetter = String.fromCharCode(letterPart.charCodeAt(0) + 1);
    return `MAK001${nextLetter}`;
  } else {
    const nextNum = (numPart + 1).toString().padStart(3, "0");
    return `MAK${nextNum}${letterPart}`;
  }
};

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

    let customId;
    try {
      customId = await generateCustomId();
    } catch (error) {
      console.error("Error generating custom ID:", error);
      customId = "MAK001A"; // Fallback to initial ID if generation fails
    }

    const newVoter = new Voter({
      customId,
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

    const savedVoter = await newVoter.save();
    console.log(savedVoter, "Voter added successfully");
  } catch (error) {
    console.error("Error adding Voter:", error);
    // You might want to handle this error more gracefully,
    // perhaps by returning an error message to the client
  }

  revalidatePath("/dashboard/members");
  redirect("/dashboard/members");
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
    revalidatePath("/dashboard/members");
    redirect("/dashboard/members");
  } catch (error) {
    console.log(error, "Error deleting Voter");
  }
};
export const authenticate = async (prevState, formData) => {
  "use server";
  const { username, password } = Object.fromEntries(formData);
  
  try {
    const result = await signIn("credentials", {
      username,
      password,
      redirect: false,
    });

    if (result?.error) {
      return { error: "Wrong Credentials" };
    }

    // If we reach here, authentication was successful
    return { success: true };
  } catch (error) {
    console.error("Authentication error:", error);
    return { error: "An error occurred. Please try again." };
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

    // Create a new workbook and worksheet
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(data);

    // Add the worksheet to the workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, "Voters");

    // Generate buffer
    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "buffer",
    });

    // Convert buffer to base64
    const base64 = Buffer.from(excelBuffer).toString("base64");

    // Return the base64 string and filename
    return {
      base64: base64,
      filename: "voters_list.xlsx",
    };
  } catch (error) {
    console.error("Error exporting to Excel:", error);
    throw error;
  }
};
