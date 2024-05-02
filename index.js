const _ = require("lodash");

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// _.forEach(arr, (val) => console.log(val));

// function checkElements(arr1, arr2) {
//   const set1 = new Set(arr1);
//   const set2 = new Set(arr2);

//   const allInArr2 = _.every(arr1, (element) => set2.has(element));
//   const allInArr1 = _.every(arr2, (element) => set1.has(element));

//   return allInArr1 && allInArr2;
// }

// const arr1 = ["TEACHER", "STUDENT"];
// const arr2 = ["STUDENT", "TEACHER"];

// const result = checkElements(arr1, arr2);
// console.log(result);

// const childOrgs = [
//   {
//     fk_entity_id: "11013",
//     fk_tag_id: 23,
//   },
//   {
//     fk_entity_id: "12265",
//     fk_tag_id: 79,
//   },
//   {
//     fk_entity_id: "2374",
//     fk_tag_id: 3,
//   },
//   {
//     fk_entity_id: "2568",
//     fk_tag_id: 1,
//   },
//   {
//     fk_entity_id: "2616",
//     fk_tag_id: 23,
//   },
//   {
//     fk_entity_id: "4652",
//     fk_tag_id: 44,
//   },
//   {
//     fk_entity_id: "88570354422789353",
//     fk_tag_id: 23,
//   },
//   {
//     fk_entity_id: "9199",
//     fk_tag_id: 46,
//   },
// ];

// const regions = ["46", "23"];
// let childOrganizations = childOrgs;

// if (regions != null) {
//   childOrganizations = childOrganizations
//     .map((org) => {
//       if (_.find(regions, (reg) => reg == org.fk_tag_id)) {
//         return org;
//       }
//     })
//     .filter((org) => org != undefined);
// }
// console.log(childOrganizations);

// const co1 = _.filter(
//   _.map(childOrgs, (org) => {
//     if (_.find(regions, (reg) => reg == org.fk_tag_id)) {
//       return org;
//     }
//   }),
//   (org) => org != undefined
// );
// console.log(co1);

// const co2 = _.reduce(
//   childOrgs,
//   (result, org) => {
//     if (_.find(regions, (reg) => reg == org.fk_tag_id)) {
//       result.push(org);
//     }
//     return result;
//   },
//   []
// );
// console.log(co2);

// const cirl1 = _.map(childOrganizations, (org) => org.fk_entity_id);
// console.log(cirl1)

const defaultAMValues = {
  parent_type: "INCIDENT",
  fk_parent_id: "incidentId",
  d: null,
  organization_id: "orgId",
  created_by: "jwtUserId",
  created_at: "db.fn.now()",
  updated_by: "jwtUserId",
  updated_at: "db.fn.now()",
};

const insertData = [
  {
    ...defaultAMValues,
    group_type: "STAFF",
    fk_group_id: "1215",
    detail_type: "CONFIDENTIAL_DETAIL",
    value: "OWNER",
  },
  {
    ...defaultAMValues,
    group_type: "INVOLVED_STUDENT",
    detail_type: "INCIDENT_DETAIL",
    value: "NO_ACCESS",
  }
];

console.log(insertData);
