const _ = require("lodash");

const generateStudentNoteCategoryQuery = (data) => {
  const { titles, startSerial, organizationId } = data;

  const colorCombinations = [
    '{ "color": "rgba(255, 180, 0, 1)", "backgroundColor": "rgba(255, 180, 0, 0.2)" }',
    '{ "color": "rgba(243, 132, 133)", "backgroundColor": "rgba(243, 132, 133, 0.2)" }',
    '{ "color": "rgba(100, 100, 220, 1)", "backgroundColor": "rgba(100, 100, 220, 0.2)" }',
  ];

  const values = _.trim(
    _.map(titles, (title, index) => {
      const serial = startSerial + index;
      const colorIndex = index % colorCombinations.length;
      const metaData = colorCombinations[colorIndex];

      return `       ('${title}', 'STUDENT_NOTE_CATEGORY', '${metaData}', ${serial}, '{${organizationId}}')${
        index === titles.length - 1 ? ";" : ","
      }`;
    }).join("\n")
  );

  const query = [
    `INSERT INTO public.app_constants (value, type, meta_data, serial, organization_ids)`,
    `VALUES ${values}`,
  ].join("\n");

  return query;
};

const query = generateStudentNoteCategoryQuery({
  titles: [
    "Initiation of an STLO (date, tier, focus)",
    "Collaborative Conversations",
    "CSI Meeting",
    "Faculty Meeting",
    "Growth Plan",
    "In-house testing",
    "Initiation of an STLO (date, tier, focus)",
    "Other",
    "Parent Email",
    "Parent Meeting",
    "Parent phone call",
    "Pick Up Permission",
    "PTC",
    "Referral for external services",
    "Review of STLO",
    "Student Meeting",
    "Student Profile Sheet",
    "Test",
  ],
  startSerial: 5,
  organizationId: 5894,
});

console.log(query);
