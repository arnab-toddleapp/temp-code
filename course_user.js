const XLSX = require("xlsx");
const _ = require("lodash");

const data = [
  {
    course_id: "",
    course_title: "",
    student_name: "",
    parent_name: "",
    parent_email: "",
    parent_status: "",
    parent_invite_code: "",
  },
];

const workbook = XLSX.utils.book_new();
const uniqueCourseIds = [...new Set(data.map((item) => item.course_id))];
console.log("unique sheets: ", uniqueCourseIds.length);

uniqueCourseIds.forEach((courseId) => {
  const sheetData = data.filter((item) => item.course_id === courseId);
  const title = sheetData[0].course_title;

  const filteredData = sheetData.map((item) => ({
    "Student name": item.student_name,
    "Family name": item.parent_name,
    "Family email": item.parent_email,
    Status: item.parent_status,
    "Parent invite code": item.parent_invite_code,
  }));

  if (title.length > 31) {
    console.log(title);
  }

  const worksheet = XLSX.utils.json_to_sheet(filteredData);

  XLSX.utils.book_append_sheet(workbook, worksheet, title);
});

XLSX.writeFile(
  workbook,
  "output.xlsx",
  { bookType: "xlsx", bookSST: false, type: "file" },
  (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Excel file created successfully!");
    }
  }
);
