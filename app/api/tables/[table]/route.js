import { connectToDatabase } from "@/app/lib/util";
import { Voter } from "@/app/lib/models";
import * as XLSX from "xlsx";

export async function GET(request, { params }) {
  // Check auth & permission here

  const searchParams = request.nextUrl.searchParams;
  const format = searchParams.get("format");

  try {
    const { table } = params;

    if (!table) throw new Error("Table name required");

    // Ensure the requested table matches "Voter"
    if (table.toLowerCase() !== "voter") {
      throw new Error("Table not found");
    }

    // Connect to the database
    await connectToDatabase();

    // Fetch all voter data from the Voter table
    const jsonTableData = await Voter.find().lean().exec();

    const worksheet = XLSX.utils.json_to_sheet(jsonTableData);

    if (format === "csv") {
      const csv = XLSX.utils.sheet_to_csv(worksheet, {
        forceQuotes: true,
      });

      return new Response(csv, {
        status: 200,
        headers: {
          "Content-Disposition": `attachment; filename="${table}.csv"`,
          "Content-Type": "text/csv",
        },
      });
    } else if (format === "txt") {
      // tab-separated values
      const txt = XLSX.utils.sheet_to_txt(worksheet, {
        forceQuotes: true,
      });

      return new Response(txt, {
        status: 200,
        headers: {
          "Content-Disposition": `attachment; filename="${table}.txt"`,
          "Content-Type": "text/csv",
        },
      });
    } else if (format === "xlsx") {
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Voters");

      const buf = XLSX.write(workbook, { type: "buffer", bookType: "xlsx" });

      return new Response(buf, {
        status: 200,
        headers: {
          "Content-Disposition": `attachment; filename="${table}.xlsx"`,
          "Content-Type": "application/vnd.ms-excel",
        },
      });
    } else if (format === "json") {
      return new Response(JSON.stringify(jsonTableData), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      });
    } else {
      const html = XLSX.utils.sheet_to_html(worksheet);

      return new Response(html, {
        status: 200,
        headers: {
          "Content-Type": "text/html",
        },
      });
    }
  } catch (e) {
    console.error(e);
    return new Response(e.message, {
      status: 400,
    });
  }
}
