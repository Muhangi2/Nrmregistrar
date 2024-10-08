import { Voter } from "./models";
import { connectToDatabase } from "./util";

export const fetchUsers = async (q, page) => {
  const regex = new RegExp(q, "i");
  const ITEMS_PER_PAGE = 7;

  try {
    await connectToDatabase();
    const count = await Voter.find({
      $or: [
        { firstname: { $regex: regex } },
        { secondname: { $regex: regex } },
      ],
    }).count();
    const voters = await Voter.find({
      $or: [
        { firstname: { $regex: regex } },
        { secondname: { $regex: regex } },
      ],
    })
      .limit(ITEMS_PER_PAGE)
      .skip(ITEMS_PER_PAGE * (page - 1));

    return { voters, count };
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
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
  }
};

export const fetchCollegeData = async () => {
  try {
    await connectToDatabase();
    const voters = await Voter.find({});
    const collegeData = {};

    voters.forEach((voter) => {
      const college = voter.college;
      if (!collegeData[college]) {
        collegeData[college] = {
          totalStudents: 0,
          males: 0,
          females: 0,
        };
      }
      collegeData[college].totalStudents += 1;

      if (voter.gender === "Male") {
        collegeData[college].males += 1;
      } else if (voter.gender === "Female") {
        collegeData[college].females += 1;
      }
    });

    return Object.keys(collegeData).map((college) => ({
      college,
      ...collegeData[college],
    }));
  } catch (error) {
    console.error("Error fetching college data:", error);
  }
};
