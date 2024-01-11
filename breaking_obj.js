const _ = require("lodash");

const data = [
  {
    "Student UID": "10008842",
    "First Name": "Test",
    "Last Name": "Name",
    "Language 1": "Language 1",
    "Language 2": "Hi",
    Religion: "HI",
    House: "Red",
    "Parent: Marital Status": "Married",
    "Previous schools": "",
    "National ID": "877223231",
    "Custody of Child": "",
    "Joining Date": "",
    "Family number": "",
    "Simultaneously Languages": "HI",
    "Language used w/mother": "EN",
    "Medical Status": "TEST MS1",
  },
  {
    "Student UID": "10006111",
    "First Name": "Test1",
    "Last Name": "Name2",
    "Language 1": "Language 12",
    "Language 2": "Hi",
    Religion: "HI",
    House: "Red",
    "Parent: Marital Status": "Married",
    "Previous schools": "",
    "National ID": "877223232",
    "Custody of Child": "",
    "Joining Date": "",
    "Family number": "",
    "Simultaneously Languages": "HI",
    "Language used w/mother": "EN",
    "Medical Status": "Test MS2",
  },
];

const transformedData = _.flatMap(data, (student) => {
  const studentUid = student["Student UID"];

  return _.map(student, (value, key) => ({
    student_uid: studentUid,
    question_title: key,
    response_title: value,
  }));
});

// Remove unnecessary entries (non-question entries)
const filteredData = _.filter(
  transformedData,
  (entry) => entry.question_title !== "Student UID"
);

console.log(filteredData);

// const formatted_data = [
//   {
//     student_uid: "10008842",
//     question_title: "Last Name",
//     response_title: "Name",
//   },
//   {
//     student_uid: "10008842",
//     question_title: "Language 1",
//     response_title: "Language 1",
//   },
//   {
//     student_uid: "10008842",
//     question_title: "Language 2",
//     response_title: "Hi",
//   },
//   {
//     student_uid: "10008842",
//     question_title: "Religion",
//     response_title: "HI",
//   },
//   {
//     student_uid: "10008842",
//     question_title: "House",
//     response_title: "Red",
//   },
//   {
//     student_uid: "10008842",
//     question_title: "Parent: Marital Status",
//     response_title: "Married",
//   },
//   {
//     student_uid: "10008842",
//     question_title: "Previous schools",
//     response_title: "",
//   },
//   {
//     student_uid: "10008842",
//     question_title: "National ID",
//     response_title: "877223231",
//   },
//   {
//     student_uid: "10008842",
//     question_title: "Custody of Child",
//     response_title: "",
//   },
//   {
//     student_uid: "10008842",
//     question_title: "Joining Date",
//     response_title: "",
//   },
//   {
//     student_uid: "10008842",
//     question_title: "Family number",
//     response_title: "",
//   },
//   {
//     student_uid: "10008842",
//     question_title: "Simultaneously Languages",
//     response_title: "HI",
//   },
//   {
//     student_uid: "10008842",
//     question_title: "Language used w/mother",
//     response_title: "EN",
//   },
//   {
//     student_uid: "10008842",
//     question_title: "Medical Status",
//     response_title: "TEST MS1",
//   },
//   {
//     student_uid: "10006111",
//     question_title: "First Name",
//     response_title: "Test1",
//   },
//   {
//     student_uid: "10006111",
//     question_title: "Last Name",
//     response_title: "Name2",
//   },
//   {
//     student_uid: "10006111",
//     question_title: "Language 1",
//     response_title: "Language 12",
//   },
//   {
//     student_uid: "10006111",
//     question_title: "Language 2",
//     response_title: "Hi",
//   },
//   {
//     student_uid: "10006111",
//     question_title: "Religion",
//     response_title: "HI",
//   },
//   {
//     student_uid: "10006111",
//     question_title: "House",
//     response_title: "Red",
//   },
//   {
//     student_uid: "10006111",
//     question_title: "Parent: Marital Status",
//     response_title: "Married",
//   },
//   {
//     student_uid: "10006111",
//     question_title: "Previous schools",
//     response_title: "",
//   },
//   {
//     student_uid: "10006111",
//     question_title: "National ID",
//     response_title: "877223232",
//   },
//   {
//     student_uid: "10006111",
//     question_title: "Custody of Child",
//     response_title: "",
//   },
//   {
//     student_uid: "10006111",
//     question_title: "Joining Date",
//     response_title: "",
//   },
//   {
//     student_uid: "10006111",
//     question_title: "Family number",
//     response_title: "",
//   },
//   {
//     student_uid: "10006111",
//     question_title: "Simultaneously Languages",
//     response_title: "HI",
//   },
//   {
//     student_uid: "10006111",
//     question_title: "Language used w/mother",
//     response_title: "EN",
//   },
//   {
//     student_uid: "10006111",
//     question_title: "Medical Status",
//     response_title: "Test MS2",
//   },
// ];
