const _ = require("lodash");

// const dataset = [
//   {
//     uid: "11b24b2f7ecbec18715dd9171b5e3e58",
//     contexts: [
//       {
//         entityId: "1874",
//         entityType: "CURRICULUM_PROGRAM",
//       },
//       {
//         entityId: "100843",
//         entityType: "IDENTITY",
//       },
//       {
//         entityId: "1947",
//         entityType: "ORGANIZATION",
//       },
//       {
//         entityId: "193475978960306421",
//         entityType: "ORGANIZATION_ROLE",
//       },
//       {
//         entityId: "114969623958388811",
//         entityType: "USER",
//       },
//       {
//         entityId: "staff",
//         entityType: "USER_ROLE",
//       },
//     ],
//     controlParameters: [
//       {
//         id: "193128467867369878",
//         name: "BehaviourDashboard:CanViewAllIncidentsAndConfidentialityNotes",
//         label_i18n_key:
//           "behaviour_dashboard_can_view_all_incidents_and_confidentiality_notes",
//         description_i18n_key:
//           "behaviour_dashboard_can_view_all_incidents_and_confidentiality_notes_description",
//         type: "PERMISSION",
//         default_value: false,
//         is_deleted: false,
//         owner_team: null,
//         created_at: "2024-12-10T00:03:08.268Z",
//         created_by_identity: "0",
//         updated_at: null,
//         updated_by_identity: null,
//         display_sequence: 7,
//         uid: "11b24b2f7ecbec18715dd9171b5e3e58::BehaviourDashboard:CanViewAllIncidentsAndConfidentialityNotes",
//         value: false,
//       },
//       {
//         id: "193128678496928151",
//         name: "BehaviourDashboard:CanEditAllIncidentsAndViewConfidentialityNotes",
//         label_i18n_key:
//           "behaviour_dashboard_can_edit_all_incidents_and_view_confidentiality_notes",
//         description_i18n_key:
//           "behaviour_dashboard_can_edit_all_incidents_and_view_confidentiality_notes_description",
//         type: "PERMISSION",
//         default_value: false,
//         is_deleted: false,
//         owner_team: null,
//         created_at: "2024-12-10T00:03:58.486Z",
//         created_by_identity: "0",
//         updated_at: null,
//         updated_by_identity: null,
//         display_sequence: 9,
//         uid: "11b24b2f7ecbec18715dd9171b5e3e58::BehaviourDashboard:CanEditAllIncidentsAndViewConfidentialityNotes",
//         value: false,
//       },
//       {
//         id: "193128791499866520",
//         name: "BehaviourDashboard:CanEditAllIncidentsAndConfidentialityNotes",
//         label_i18n_key:
//           "behaviour_dashboard_can_edit_all_incidents_and_view_confidentiality_notes",
//         description_i18n_key:
//           "behaviour_dashboard_can_edit_all_incidents_and_view_confidentiality_notes_description",
//         type: "PERMISSION",
//         default_value: false,
//         is_deleted: false,
//         owner_team: null,
//         created_at: "2024-12-10T00:04:25.428Z",
//         created_by_identity: "0",
//         updated_at: null,
//         updated_by_identity: null,
//         display_sequence: 10,
//         uid: "11b24b2f7ecbec18715dd9171b5e3e58::BehaviourDashboard:CanEditAllIncidentsAndConfidentialityNotes",
//         value: false,
//       },
//       {
//         id: "170721782670557421",
//         name: "BehaviourDashboard:CanEditIncidents",
//         label_i18n_key: "permission_behaviour_dashboard_edit_incidents",
//         description_i18n_key:
//           "permission_behaviour_dashboard_edit_incidents_description",
//         type: "PERMISSION",
//         default_value: false,
//         is_deleted: false,
//         owner_team: null,
//         created_at: "2024-10-09T04:06:39.909Z",
//         created_by_identity: null,
//         updated_at: null,
//         updated_by_identity: null,
//         display_sequence: 8,
//         uid: "11b24b2f7ecbec18715dd9171b5e3e58::BehaviourDashboard:CanEditIncidents",
//         value: false,
//       },
//       {
//         id: "170721786525122799",
//         name: "BehaviourDashboard:CanViewAllIncidents",
//         label_i18n_key: "permission_behaviour_dashboard_view_all_incidents",
//         description_i18n_key:
//           "permission_behaviour_dashboard_view_all_incidents_description",
//         type: "PERMISSION",
//         default_value: false,
//         is_deleted: false,
//         owner_team: null,
//         created_at: "2024-10-09T04:06:39.909Z",
//         created_by_identity: null,
//         updated_at: null,
//         updated_by_identity: null,
//         display_sequence: 6,
//         uid: "11b24b2f7ecbec18715dd9171b5e3e58::BehaviourDashboard:CanViewAllIncidents",
//         value: false,
//       },
//     ],
//   },
//   {
//     uid: "ffaabc26cf934961386704d34bdefe36",
//     contexts: [
//       {
//         entityId: "1875",
//         entityType: "CURRICULUM_PROGRAM",
//       },
//       {
//         entityId: "100843",
//         entityType: "IDENTITY",
//       },
//       {
//         entityId: "1947",
//         entityType: "ORGANIZATION",
//       },
//       {
//         entityId: "193475978960306421",
//         entityType: "ORGANIZATION_ROLE",
//       },
//       {
//         entityId: "114969623958388811",
//         entityType: "USER",
//       },
//       {
//         entityId: "staff",
//         entityType: "USER_ROLE",
//       },
//     ],
//     // true
//     controlParameters: [
//       {
//         id: "193128467867369878",
//         name: "BehaviourDashboard:CanViewAllIncidentsAndConfidentialityNotes",
//         label_i18n_key:
//           "behaviour_dashboard_can_view_all_incidents_and_confidentiality_notes",
//         description_i18n_key:
//           "behaviour_dashboard_can_view_all_incidents_and_confidentiality_notes_description",
//         type: "PERMISSION",
//         default_value: false,
//         is_deleted: false,
//         owner_team: null,
//         created_at: "2024-12-10T00:03:08.268Z",
//         created_by_identity: "0",
//         updated_at: null,
//         updated_by_identity: null,
//         display_sequence: 7,
//         uid: "ffaabc26cf934961386704d34bdefe36::BehaviourDashboard:CanViewAllIncidentsAndConfidentialityNotes",
//         value: false,
//       },
//       {
//         id: "193128678496928151",
//         name: "BehaviourDashboard:CanEditAllIncidentsAndViewConfidentialityNotes",
//         label_i18n_key:
//           "behaviour_dashboard_can_edit_all_incidents_and_view_confidentiality_notes",
//         description_i18n_key:
//           "behaviour_dashboard_can_edit_all_incidents_and_view_confidentiality_notes_description",
//         type: "PERMISSION",
//         default_value: false,
//         is_deleted: false,
//         owner_team: null,
//         created_at: "2024-12-10T00:03:58.486Z",
//         created_by_identity: "0",
//         updated_at: null,
//         updated_by_identity: null,
//         display_sequence: 9,
//         uid: "ffaabc26cf934961386704d34bdefe36::BehaviourDashboard:CanEditAllIncidentsAndViewConfidentialityNotes",
//         value: false,
//       },
//       {
//         id: "193128791499866520",
//         name: "BehaviourDashboard:CanEditAllIncidentsAndConfidentialityNotes",
//         label_i18n_key:
//           "behaviour_dashboard_can_edit_all_incidents_and_view_confidentiality_notes",
//         description_i18n_key:
//           "behaviour_dashboard_can_edit_all_incidents_and_view_confidentiality_notes_description",
//         type: "PERMISSION",
//         default_value: false,
//         is_deleted: false,
//         owner_team: null,
//         created_at: "2024-12-10T00:04:25.428Z",
//         created_by_identity: "0",
//         updated_at: null,
//         updated_by_identity: null,
//         display_sequence: 10,
//         uid: "ffaabc26cf934961386704d34bdefe36::BehaviourDashboard:CanEditAllIncidentsAndConfidentialityNotes",
//         value: true,
//       },
//       {
//         id: "170721782670557421",
//         name: "BehaviourDashboard:CanEditIncidents",
//         label_i18n_key: "permission_behaviour_dashboard_edit_incidents",
//         description_i18n_key:
//           "permission_behaviour_dashboard_edit_incidents_description",
//         type: "PERMISSION",
//         default_value: false,
//         is_deleted: false,
//         owner_team: null,
//         created_at: "2024-10-09T04:06:39.909Z",
//         created_by_identity: null,
//         updated_at: null,
//         updated_by_identity: null,
//         display_sequence: 8,
//         uid: "ffaabc26cf934961386704d34bdefe36::BehaviourDashboard:CanEditIncidents",
//         value: false,
//       },
//       {
//         id: "170721786525122799",
//         name: "BehaviourDashboard:CanViewAllIncidents",
//         label_i18n_key: "permission_behaviour_dashboard_view_all_incidents",
//         description_i18n_key:
//           "permission_behaviour_dashboard_view_all_incidents_description",
//         type: "PERMISSION",
//         default_value: false,
//         is_deleted: false,
//         owner_team: null,
//         created_at: "2024-10-09T04:06:39.909Z",
//         created_by_identity: null,
//         updated_at: null,
//         updated_by_identity: null,
//         display_sequence: 6,
//         uid: "ffaabc26cf934961386704d34bdefe36::BehaviourDashboard:CanViewAllIncidents",
//         value: false,
//       },
//     ],
//   },
//   {
//     uid: "50235cb048d12d3571ae4dcdf4d48d19",
//     contexts: [
//       {
//         entityId: "1876",
//         entityType: "CURRICULUM_PROGRAM",
//       },
//       {
//         entityId: "100843",
//         entityType: "IDENTITY",
//       },
//       {
//         entityId: "1947",
//         entityType: "ORGANIZATION",
//       },
//       {
//         entityId: "193475978960306421",
//         entityType: "ORGANIZATION_ROLE",
//       },
//       {
//         entityId: "114969623958388811",
//         entityType: "USER",
//       },
//       {
//         entityId: "staff",
//         entityType: "USER_ROLE",
//       },
//     ],
//     controlParameters: [
//       {
//         id: "193128467867369878",
//         name: "BehaviourDashboard:CanViewAllIncidentsAndConfidentialityNotes",
//         label_i18n_key:
//           "behaviour_dashboard_can_view_all_incidents_and_confidentiality_notes",
//         description_i18n_key:
//           "behaviour_dashboard_can_view_all_incidents_and_confidentiality_notes_description",
//         type: "PERMISSION",
//         default_value: false,
//         is_deleted: false,
//         owner_team: null,
//         created_at: "2024-12-10T00:03:08.268Z",
//         created_by_identity: "0",
//         updated_at: null,
//         updated_by_identity: null,
//         display_sequence: 7,
//         uid: "50235cb048d12d3571ae4dcdf4d48d19::BehaviourDashboard:CanViewAllIncidentsAndConfidentialityNotes",
//         value: false,
//       },
//       {
//         id: "193128678496928151",
//         name: "BehaviourDashboard:CanEditAllIncidentsAndViewConfidentialityNotes",
//         label_i18n_key:
//           "behaviour_dashboard_can_edit_all_incidents_and_view_confidentiality_notes",
//         description_i18n_key:
//           "behaviour_dashboard_can_edit_all_incidents_and_view_confidentiality_notes_description",
//         type: "PERMISSION",
//         default_value: false,
//         is_deleted: false,
//         owner_team: null,
//         created_at: "2024-12-10T00:03:58.486Z",
//         created_by_identity: "0",
//         updated_at: null,
//         updated_by_identity: null,
//         display_sequence: 9,
//         uid: "50235cb048d12d3571ae4dcdf4d48d19::BehaviourDashboard:CanEditAllIncidentsAndViewConfidentialityNotes",
//         value: false,
//       },
//       {
//         id: "193128791499866520",
//         name: "BehaviourDashboard:CanEditAllIncidentsAndConfidentialityNotes",
//         label_i18n_key:
//           "behaviour_dashboard_can_edit_all_incidents_and_view_confidentiality_notes",
//         description_i18n_key:
//           "behaviour_dashboard_can_edit_all_incidents_and_view_confidentiality_notes_description",
//         type: "PERMISSION",
//         default_value: false,
//         is_deleted: false,
//         owner_team: null,
//         created_at: "2024-12-10T00:04:25.428Z",
//         created_by_identity: "0",
//         updated_at: null,
//         updated_by_identity: null,
//         display_sequence: 10,
//         uid: "50235cb048d12d3571ae4dcdf4d48d19::BehaviourDashboard:CanEditAllIncidentsAndConfidentialityNotes",
//         value: false,
//       },
//       {
//         id: "170721782670557421",
//         name: "BehaviourDashboard:CanEditIncidents",
//         label_i18n_key: "permission_behaviour_dashboard_edit_incidents",
//         description_i18n_key:
//           "permission_behaviour_dashboard_edit_incidents_description",
//         type: "PERMISSION",
//         default_value: false,
//         is_deleted: false,
//         owner_team: null,
//         created_at: "2024-10-09T04:06:39.909Z",
//         created_by_identity: null,
//         updated_at: null,
//         updated_by_identity: null,
//         display_sequence: 8,
//         uid: "50235cb048d12d3571ae4dcdf4d48d19::BehaviourDashboard:CanEditIncidents",
//         value: false,
//       },
//       {
//         id: "170721786525122799",
//         name: "BehaviourDashboard:CanViewAllIncidents",
//         label_i18n_key: "permission_behaviour_dashboard_view_all_incidents",
//         description_i18n_key:
//           "permission_behaviour_dashboard_view_all_incidents_description",
//         type: "PERMISSION",
//         default_value: false,
//         is_deleted: false,
//         owner_team: null,
//         created_at: "2024-10-09T04:06:39.909Z",
//         created_by_identity: null,
//         updated_at: null,
//         updated_by_identity: null,
//         display_sequence: 6,
//         uid: "50235cb048d12d3571ae4dcdf4d48d19::BehaviourDashboard:CanViewAllIncidents",
//         value: false,
//       },
//     ],
//   },
//   {
//     uid: "4babd0f38fa2e05e2b748d25de76ead5",
//     contexts: [
//       {
//         entityId: "6085",
//         entityType: "CURRICULUM_PROGRAM",
//       },
//       {
//         entityId: "100843",
//         entityType: "IDENTITY",
//       },
//       {
//         entityId: "1947",
//         entityType: "ORGANIZATION",
//       },
//       {
//         entityId: "193475978960306421",
//         entityType: "ORGANIZATION_ROLE",
//       },
//       {
//         entityId: "114969623958388811",
//         entityType: "USER",
//       },
//       {
//         entityId: "staff",
//         entityType: "USER_ROLE",
//       },
//     ],
//     // true
//     controlParameters: [
//       {
//         id: "193128467867369878",
//         name: "BehaviourDashboard:CanViewAllIncidentsAndConfidentialityNotes",
//         label_i18n_key:
//           "behaviour_dashboard_can_view_all_incidents_and_confidentiality_notes",
//         description_i18n_key:
//           "behaviour_dashboard_can_view_all_incidents_and_confidentiality_notes_description",
//         type: "PERMISSION",
//         default_value: false,
//         is_deleted: false,
//         owner_team: null,
//         created_at: "2024-12-10T00:03:08.268Z",
//         created_by_identity: "0",
//         updated_at: null,
//         updated_by_identity: null,
//         display_sequence: 7,
//         uid: "4babd0f38fa2e05e2b748d25de76ead5::BehaviourDashboard:CanViewAllIncidentsAndConfidentialityNotes",
//         value: true,
//       },
//       {
//         id: "193128678496928151",
//         name: "BehaviourDashboard:CanEditAllIncidentsAndViewConfidentialityNotes",
//         label_i18n_key:
//           "behaviour_dashboard_can_edit_all_incidents_and_view_confidentiality_notes",
//         description_i18n_key:
//           "behaviour_dashboard_can_edit_all_incidents_and_view_confidentiality_notes_description",
//         type: "PERMISSION",
//         default_value: false,
//         is_deleted: false,
//         owner_team: null,
//         created_at: "2024-12-10T00:03:58.486Z",
//         created_by_identity: "0",
//         updated_at: null,
//         updated_by_identity: null,
//         display_sequence: 9,
//         uid: "4babd0f38fa2e05e2b748d25de76ead5::BehaviourDashboard:CanEditAllIncidentsAndViewConfidentialityNotes",
//         value: false,
//       },
//       {
//         id: "193128791499866520",
//         name: "BehaviourDashboard:CanEditAllIncidentsAndConfidentialityNotes",
//         label_i18n_key:
//           "behaviour_dashboard_can_edit_all_incidents_and_view_confidentiality_notes",
//         description_i18n_key:
//           "behaviour_dashboard_can_edit_all_incidents_and_view_confidentiality_notes_description",
//         type: "PERMISSION",
//         default_value: false,
//         is_deleted: false,
//         owner_team: null,
//         created_at: "2024-12-10T00:04:25.428Z",
//         created_by_identity: "0",
//         updated_at: null,
//         updated_by_identity: null,
//         display_sequence: 10,
//         uid: "4babd0f38fa2e05e2b748d25de76ead5::BehaviourDashboard:CanEditAllIncidentsAndConfidentialityNotes",
//         value: false,
//       },
//       {
//         id: "170721782670557421",
//         name: "BehaviourDashboard:CanEditIncidents",
//         label_i18n_key: "permission_behaviour_dashboard_edit_incidents",
//         description_i18n_key:
//           "permission_behaviour_dashboard_edit_incidents_description",
//         type: "PERMISSION",
//         default_value: false,
//         is_deleted: false,
//         owner_team: null,
//         created_at: "2024-10-09T04:06:39.909Z",
//         created_by_identity: null,
//         updated_at: null,
//         updated_by_identity: null,
//         display_sequence: 8,
//         uid: "4babd0f38fa2e05e2b748d25de76ead5::BehaviourDashboard:CanEditIncidents",
//         value: true,
//       },
//       {
//         id: "170721786525122799",
//         name: "BehaviourDashboard:CanViewAllIncidents",
//         label_i18n_key: "permission_behaviour_dashboard_view_all_incidents",
//         description_i18n_key:
//           "permission_behaviour_dashboard_view_all_incidents_description",
//         type: "PERMISSION",
//         default_value: false,
//         is_deleted: false,
//         owner_team: null,
//         created_at: "2024-10-09T04:06:39.909Z",
//         created_by_identity: null,
//         updated_at: null,
//         updated_by_identity: null,
//         display_sequence: 6,
//         uid: "4babd0f38fa2e05e2b748d25de76ead5::BehaviourDashboard:CanViewAllIncidents",
//         value: false,
//       },
//     ],
//   },
//   {
//     uid: "bc223dfee673baa21b9d9094fcdf604c",
//     contexts: [
//       {
//         entityId: "153713767987808422",
//         entityType: "CURRICULUM_PROGRAM",
//       },
//       {
//         entityId: "100843",
//         entityType: "IDENTITY",
//       },
//       {
//         entityId: "1947",
//         entityType: "ORGANIZATION",
//       },
//       {
//         entityId: "193475978960306421",
//         entityType: "ORGANIZATION_ROLE",
//       },
//       {
//         entityId: "114969623958388811",
//         entityType: "USER",
//       },
//       {
//         entityId: "staff",
//         entityType: "USER_ROLE",
//       },
//     ],
//     controlParameters: [
//       {
//         id: "193128467867369878",
//         name: "BehaviourDashboard:CanViewAllIncidentsAndConfidentialityNotes",
//         label_i18n_key:
//           "behaviour_dashboard_can_view_all_incidents_and_confidentiality_notes",
//         description_i18n_key:
//           "behaviour_dashboard_can_view_all_incidents_and_confidentiality_notes_description",
//         type: "PERMISSION",
//         default_value: false,
//         is_deleted: false,
//         owner_team: null,
//         created_at: "2024-12-10T00:03:08.268Z",
//         created_by_identity: "0",
//         updated_at: null,
//         updated_by_identity: null,
//         display_sequence: 7,
//         uid: "bc223dfee673baa21b9d9094fcdf604c::BehaviourDashboard:CanViewAllIncidentsAndConfidentialityNotes",
//         value: false,
//       },
//       {
//         id: "193128678496928151",
//         name: "BehaviourDashboard:CanEditAllIncidentsAndViewConfidentialityNotes",
//         label_i18n_key:
//           "behaviour_dashboard_can_edit_all_incidents_and_view_confidentiality_notes",
//         description_i18n_key:
//           "behaviour_dashboard_can_edit_all_incidents_and_view_confidentiality_notes_description",
//         type: "PERMISSION",
//         default_value: false,
//         is_deleted: false,
//         owner_team: null,
//         created_at: "2024-12-10T00:03:58.486Z",
//         created_by_identity: "0",
//         updated_at: null,
//         updated_by_identity: null,
//         display_sequence: 9,
//         uid: "bc223dfee673baa21b9d9094fcdf604c::BehaviourDashboard:CanEditAllIncidentsAndViewConfidentialityNotes",
//         value: false,
//       },
//       {
//         id: "193128791499866520",
//         name: "BehaviourDashboard:CanEditAllIncidentsAndConfidentialityNotes",
//         label_i18n_key:
//           "behaviour_dashboard_can_edit_all_incidents_and_view_confidentiality_notes",
//         description_i18n_key:
//           "behaviour_dashboard_can_edit_all_incidents_and_view_confidentiality_notes_description",
//         type: "PERMISSION",
//         default_value: false,
//         is_deleted: false,
//         owner_team: null,
//         created_at: "2024-12-10T00:04:25.428Z",
//         created_by_identity: "0",
//         updated_at: null,
//         updated_by_identity: null,
//         display_sequence: 10,
//         uid: "bc223dfee673baa21b9d9094fcdf604c::BehaviourDashboard:CanEditAllIncidentsAndConfidentialityNotes",
//         value: false,
//       },
//       {
//         id: "170721782670557421",
//         name: "BehaviourDashboard:CanEditIncidents",
//         label_i18n_key: "permission_behaviour_dashboard_edit_incidents",
//         description_i18n_key:
//           "permission_behaviour_dashboard_edit_incidents_description",
//         type: "PERMISSION",
//         default_value: false,
//         is_deleted: false,
//         owner_team: null,
//         created_at: "2024-10-09T04:06:39.909Z",
//         created_by_identity: null,
//         updated_at: null,
//         updated_by_identity: null,
//         display_sequence: 8,
//         uid: "bc223dfee673baa21b9d9094fcdf604c::BehaviourDashboard:CanEditIncidents",
//         value: false,
//       },
//       {
//         id: "170721786525122799",
//         name: "BehaviourDashboard:CanViewAllIncidents",
//         label_i18n_key: "permission_behaviour_dashboard_view_all_incidents",
//         description_i18n_key:
//           "permission_behaviour_dashboard_view_all_incidents_description",
//         type: "PERMISSION",
//         default_value: false,
//         is_deleted: false,
//         owner_team: null,
//         created_at: "2024-10-09T04:06:39.909Z",
//         created_by_identity: null,
//         updated_at: null,
//         updated_by_identity: null,
//         display_sequence: 6,
//         uid: "bc223dfee673baa21b9d9094fcdf604c::BehaviourDashboard:CanViewAllIncidents",
//         value: false,
//       },
//     ],
//   },
// ];

// return curriculum that user has access to
// const returnData = _.reduce(
//   dataset,
//   (result, data) => {
//     const { contexts, controlParameters } = data;

//     const doesUserHasAccess = _.some(controlParameters, "value");

//     if (doesUserHasAccess) {
//       const curriculumProgramId = _.get(
//         _.find(contexts, { entityType: "CURRICULUM_PROGRAM" }),
//         "entityId",
//         null
//       );

//       if (!_.isNil(curriculumProgramId)) {
//         result.push(curriculumProgramId);
//       }
//     }

//     return result;
//   },
//   []
// );

// console.log("returnData:: ", returnData);

// can user make changes if any of the access is true

const dataSet2 = [
  {
    uid: "ffaabc26cf934961386704d34bdefe36",
    contexts: [
      {
        entityId: "1875",
        entityType: "CURRICULUM_PROGRAM",
      },
      {
        entityId: "100843",
        entityType: "IDENTITY",
      },
      {
        entityId: "1947",
        entityType: "ORGANIZATION",
      },
      {
        entityId: "193475978960306421",
        entityType: "ORGANIZATION_ROLE",
      },
      {
        entityId: "114969623958388811",
        entityType: "USER",
      },
      {
        entityId: "staff",
        entityType: "USER_ROLE",
      },
    ],
    controlParameters: [
      {
        id: "170721778786631915",
        name: "BehaviourDashboard:CanCreateIncident",
        label_i18n_key: "permission_behaviour_dashboard_create_incident",
        description_i18n_key:
          "permission_behaviour_dashboard_create_incident_description",
        type: "PERMISSION",
        default_value: true,
        is_deleted: false,
        owner_team: null,
        created_at: "2024-10-09T04:06:39.909Z",
        created_by_identity: null,
        updated_at: null,
        updated_by_identity: null,
        display_sequence: 47,
        uid: "ffaabc26cf934961386704d34bdefe36::BehaviourDashboard:CanCreateIncident",
        value: true,
      },
    ],
  },
  {
    uid: "4babd0f38fa2e05e2b748d25de76ead5",
    contexts: [
      {
        entityId: "6085",
        entityType: "CURRICULUM_PROGRAM",
      },
      {
        entityId: "100843",
        entityType: "IDENTITY",
      },
      {
        entityId: "1947",
        entityType: "ORGANIZATION",
      },
      {
        entityId: "193475978960306421",
        entityType: "ORGANIZATION_ROLE",
      },
      {
        entityId: "114969623958388811",
        entityType: "USER",
      },
      {
        entityId: "staff",
        entityType: "USER_ROLE",
      },
    ],
    controlParameters: [
      {
        id: "170721778786631915",
        name: "BehaviourDashboard:CanCreateIncident",
        label_i18n_key: "permission_behaviour_dashboard_create_incident",
        description_i18n_key:
          "permission_behaviour_dashboard_create_incident_description",
        type: "PERMISSION",
        default_value: true,
        is_deleted: false,
        owner_team: null,
        created_at: "2024-10-09T04:06:39.909Z",
        created_by_identity: null,
        updated_at: null,
        updated_by_identity: null,
        display_sequence: 47,
        uid: "4babd0f38fa2e05e2b748d25de76ead5::BehaviourDashboard:CanCreateIncident",
        value: true,
      },
    ],
  },
  {
    uid: "bc223dfee673baa21b9d9094fcdf604c",
    contexts: [
      {
        entityId: "153713767987808422",
        entityType: "CURRICULUM_PROGRAM",
      },
      {
        entityId: "100843",
        entityType: "IDENTITY",
      },
      {
        entityId: "1947",
        entityType: "ORGANIZATION",
      },
      {
        entityId: "193475978960306421",
        entityType: "ORGANIZATION_ROLE",
      },
      {
        entityId: "114969623958388811",
        entityType: "USER",
      },
      {
        entityId: "staff",
        entityType: "USER_ROLE",
      },
    ],
    controlParameters: [
      {
        id: "170721778786631915",
        name: "BehaviourDashboard:CanCreateIncident",
        label_i18n_key: "permission_behaviour_dashboard_create_incident",
        description_i18n_key:
          "permission_behaviour_dashboard_create_incident_description",
        type: "PERMISSION",
        default_value: true,
        is_deleted: false,
        owner_team: null,
        created_at: "2024-10-09T04:06:39.909Z",
        created_by_identity: null,
        updated_at: null,
        updated_by_identity: null,
        display_sequence: 47,
        uid: "bc223dfee673baa21b9d9094fcdf604c::BehaviourDashboard:CanCreateIncident",
        value: true,
      },
    ],
  },
];

const hasAccess = _.some(dataSet2, (item) =>
  _.some(item.controlParameters, { value: true })
);

console.log("hasAccess:: ", hasAccess);
