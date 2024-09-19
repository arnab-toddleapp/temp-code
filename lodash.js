const _ = require("lodash");

console.log(_.isEmpty()); // true
console.log(_.isEmpty(null)); // true
console.log(_.isEmpty(undefined)); // true

// const incidentDetails = {
//   uid: "uid_value",
//   state: "state_value",
//   involved_student: {
//     id: "id_value",
//     name: "name_value",
//   },
//   created_by: "created_by_value",
//   updated_by: "updated_by_value",
// };

// const {
//   uid,
//   state,
//   involved_student = {},
//   actions = [],
//   created_by,
//   updated_by,
// } = incidentDetails || {};


// console.log(uid);
// console.log(state);
// console.log(involved_student);
// console.log(actions);
// console.log(created_by);
// console.log(updated_by);
