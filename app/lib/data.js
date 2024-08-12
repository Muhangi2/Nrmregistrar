import { Voter } from "./models";
import { connectToDatabase } from "./util";

export const fetchUsers = async () => {
  try {
    connectToDatabase();
    const voters = await Voter.find();
    return voters;
  } catch (error) {
    console.log(error, "error");
    // throw new Error("Error fetching users");
  }
};
//dashboard data
export const fetchDashboardData = async () => {
  try {
    await connectToDatabase();
    const totalMembers = await Voter.countDocuments();

    const totalMales = await Voter.countDocuments({ gender: "Male" });

    const totalFemales = await Voter.countDocuments({ gender: "Female" });

    const totalColleges = await Voter.distinct("college").then(
      (colleges) => colleges.length
    );

    return {
      totalMembers,
      totalMales,
      totalFemales,
      totalColleges,
    };
  } catch (error) {
    console.log(error, "Error fetching dashboard data");
    throw new Error("Error fetching dashboard data");
  }
};
