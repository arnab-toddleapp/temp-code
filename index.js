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

// const fetchFinalAccess = (oldAccess, newAccess, hasReferredAccess = false) => {
//   const accessableSet = new Set(["CAN_VIEW", "CAN_EDIT"]);

//   if (oldAccess && _.isNil(newAccess)) {
//     return hasReferredAccess
//       ? accessableSet.has(oldAccess)
//       : !accessableSet.has(oldAccess);
//   } else if (_.isNil(oldAccess) && newAccess) {
//     return accessableSet.has(newAccess);
//   } else if (oldAccess && newAccess) {
//     if (oldAccess === "NO_ACCESS" && accessableSet.has(newAccess)) {
//       return true;
//     } else if (accessableSet.has(oldAccess) && accessableSet.has(newAccess)) {
//       return hasReferredAccess;
//     }
//   }

//   return false;
// };

// // Test cases
// console.log("old: CAN_VIEW, new: NO_ACCESS", fetchFinalAccess("CAN_VIEW", "NO_ACCESS")); // false
// console.log("old: CAN_VIEW, new: CAN_EDIT", fetchFinalAccess("CAN_VIEW", "CAN_EDIT")); // false
// console.log("old: CAN_VIEW, new: CAN_VIEW", fetchFinalAccess("CAN_VIEW", "CAN_VIEW")); // false

// console.log("old: CAN_EDIT, new: NO_ACCESS", fetchFinalAccess("CAN_EDIT", "NO_ACCESS")); // false
// console.log("old: CAN_EDIT, new: CAN_VIEW", fetchFinalAccess("CAN_EDIT", "CAN_VIEW")); // false
// console.log("old: CAN_EDIT, new: CAN_EDIT", fetchFinalAccess("CAN_EDIT", "CAN_EDIT")); // false

// console.log("old: NO_ACCESS, new: CAN_EDIT", fetchFinalAccess("NO_ACCESS", "CAN_EDIT")); // true
// console.log("old: NO_ACCESS, new: CAN_VIEW", fetchFinalAccess("NO_ACCESS", "CAN_VIEW")); // true
// console.log("old: NO_ACCESS, new: NO_ACCESS", fetchFinalAccess("NO_ACCESS", "NO_ACCESS")); // false

const generateBehaviourIncidentUid = (latestUid) => {
  if (latestUid) {
    //  The regex `/[-IC]+/` matches any combination of characters "IC", "-", or both. For example:
    // "IC-24-205" becomes ["", "24", "205"].
    // "IC178" becomes ["", "178"].
    const numericPart = Number(_.last(_.split(latestUid, /[-IC]+/))) + 1;
    return `IC${numericPart}`;
  }

  return `IC1`;
};

// Test cases
console.log(generateBehaviourIncidentUid("IC-24-205")); // IC206
console.log(generateBehaviourIncidentUid("IC178")); // IC179
console.log(generateBehaviourIncidentUid()); // IC1
