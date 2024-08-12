import { connectToDatabase } from "./util";
import { Voter } from "./models"; // Ensure this import is correct and at the top
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import * as XLSX from "xlsx";
import { writeFile } from "fs/promises";
import { headers } from "next/headers";

//addingVoter
export const addVoters = async (formData) => {
  "use server";
  console.log(formData);
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
    console.log(data, "tapped on me ");
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

    // Generate a unique filename
    const fileName = `voters_${Date.now()}.xlsx`;

    // Write the file to the server's file system
    await writeFile(`./public/${fileName}`, excelBuffer);

    // Get the base URL
    const headersList = headers();
    const host = headersList.get("host");
    const protocol = process.env.NODE_ENV === "development" ? "http" : "https";

    // Return the URL of the generated file
    return `${protocol}://${host}/${fileName}`;
  } catch (error) {
    console.error("Error exporting Excel:", error);
    throw new Error("Failed to export Excel file");
  }
};
