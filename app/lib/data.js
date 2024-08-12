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
//dashboard datayx
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

export const fetchCollegeData = async () => {
  try {
    await connectToDatabase();

    const collegeData = await Voter.aggregate([
      {
        $group: {
          _id: "$college",
          totalStudents: { $sum: 1 },
          males: {
            $sum: {
              $cond: [{ $eq: ["$gender", "Male"] }, 1, 0],
            },
          },
          females: {
            $sum: {
              $cond: [{ $eq: ["$gender", "Female"] }, 1, 0],
            },
          },
        },
      },
      {
        $project: {
          _id: 0,
          college: "$_id",
          totalStudents: 1,
          males: 1,
          females: 1,
        },
      },
    ]);

    return collegeData;
  } catch (error) {
    console.error("Error fetching college data:", error);
    throw new Error("Failed to fetch college data");
  }
};
