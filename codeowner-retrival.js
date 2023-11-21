const fs = require("fs");
const xlsx = require("xlsx");

function extractCodeOwners(data) {
  const teamFilter = "@toddle-edu/backend-team-4";
  const lines = data.split("\n");

  const codeOwnersData = lines.reduce((acc, line) => {
    const trimmedLine = line.trim();

    // Skip comments and empty lines
    if (trimmedLine && !trimmedLine.startsWith("#")) {
      const parts = trimmedLine.split(" ");

      if (parts.some((str) => str.includes(teamFilter))) {
        const [filePath, ...codeOwnersArr] = parts;
        const codeOwners = codeOwnersArr.filter((co) => co.includes(teamFilter)).join(" , ");

        acc.push({ "File Name": filePath, "Code Owners": codeOwners });
      }
    }

    return acc;
  }, []);

  console.log(codeOwnersData);
  return codeOwnersData;
}

function writeToExcel(data) {
  const excelOutputPath = "./Team4_Code_Owners.xlsx";
  const workbook = xlsx.utils.book_new();
  const worksheet = xlsx.utils.json_to_sheet(data);

  xlsx.utils.book_append_sheet(workbook, worksheet, "Team4_CodeOwners");
  xlsx.writeFile(workbook, excelOutputPath);
}

const codeOwnerFilePath = "./CODEOWNERS";
const codeOwnerFileContent = fs.readFileSync(codeOwnerFilePath, "utf-8");
const codeOwnersData = extractCodeOwners(codeOwnerFileContent);

writeToExcel(codeOwnersData);
