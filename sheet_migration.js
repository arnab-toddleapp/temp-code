const ExcelJS = require("exceljs");
const _ = require("lodash");

const sheetMigration = async () => {
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile("BCI Logs.xlsx");
  console.log("✅ File read: BCI Logs.xlsx");

  const valuesSheet = workbook.getWorksheet("Values");
  const logSheet = workbook.getWorksheet("Log Example");

  // === Read Values Sheet ===
  const valuesData = valuesSheet.getSheetValues().slice(2);
  const valuesHeaders = valuesSheet.getRow(1).values.slice(1);

  const valuesJson = _.filter(
    _.map(valuesData, (row) => _.zipObject(valuesHeaders, _.drop(row))),
    (obj) => !_.isEmpty(_.omitBy(obj, _.isNil))
  );

  // === Read Log Example Sheet ===
  const logData = logSheet.getSheetValues().slice(2);
  const logHeaders = logSheet.getRow(1).values.slice(1);

  const logJson = _.map(logData, (row) => _.zipObject(logHeaders, _.drop(row)));
  const rootCategories = [];
  const subcategories = [];
  const actions = [];
  const severities = [];

  // === Transform Values → Behaviour Entities ===
  // const flatMappedEntities = [];
  _.forEach(valuesJson, (row) => {
    const category = row["Select the log type | เลือกประเภทของการบันทึก"];
    const action = row["Next steps | ขั้นตอนต่อไป"];
    const subcategoriesList = _.compact([
      row["Behaviour type | ประเภทของพฤติกรรม"],
      row["Academic concern | ข้อกังวลด้านวิชาการ"],
    ]);
    const severity = row["Severity | ความรุนแรง"];

    // Collect unique values
    if (category && !rootCategories.includes(category)) {
      rootCategories.push(category);
    }
    if (action && !actions.includes(action)) {
      actions.push(action);
    }
    if (severity && !severities.includes(severity)) {
      severities.push(severity);
    }
    _.forEach(subcategoriesList, (subcat) => {
      if (subcat && !subcategories.includes(subcat)) {
        subcategories.push(subcat);
      }
    });

    // _.forEach(subcategoriesList, (subcat) => {
    //   if (subcat && !subcategories.includes(subcat)) {
    //     subcategories.push(subcat);
    //   }

    //   flatMappedEntities.push({
    //     Category: category,
    //     "Sub-Category": subcat,
    //     Severity: severity,
    //     Actions: action,
    //   });
    // });
  });

  // const behaviourEntities = _.uniqBy(
  //   flatMappedEntities,
  //   (row) => `${row.Category}-${row["Sub-Category"]}`
  // );

  // === Transform Log Example → Behaviour Incidents ===
  const behaviourIncidents = _.map(logJson, (row) => {
    const tempIncidentId = row["Submission ID"];
    const title = row["Title | หัวข้อ"];
    const incidentCreator = row["Email | อีเมล์ของผู้ใส่ข้อมูล"];
    const involvedStudent = row["Involved student(s) | นักเรียนที่เกี่ยวข้อง"];
    const category = row["Select the log type | เลือกประเภทของการบันทึก"];
    const subCategory = _.find(
      [
        row["Behaviour type | ประเภทของพฤติกรรม"],
        row["Academic concern | ข้อกังวลด้านวิชาการ"],
      ],
      Boolean
    );
    const severity = row["Severity | ความรุนแรง"];
    const actions = row["Next steps | ขั้นตอนต่อไป"];
    const relatedIncidents = row["Original log code (for follow up log only)"];
    const incidentTime =
      row["Incident date and time | วันและเวลาที่เกิดเหตุการณ์"];
    console.log("\nincidentTime:: ", incidentTime);
    const description =
      row[
        "Description of the event or concern and action taken. | รายละเอียดของเหตุการณ์หรือข้อกังวลและแนวทางที่ได้ดำเนินการ"
      ];
    const confidentialNote =
      row[
        "Additional description of the next steps | รายละเอียดเพิ่มเติมเกี่ยวกับขั้นตอนต่อไป"
      ];
    const createdAt = row["Submission Date"];
    console.log("\ncreatedAt:: ", createdAt);

    return _.assign({
      "Temp Incident ID": tempIncidentId,
      "Incident Title": title,
      "Incident Creator": incidentCreator,
      "Involved Student": involvedStudent,
      "Root Category": category,
      "Sub-Category": subCategory,
      Severity: severity,
      Actions: actions,
      "Related Incidents": relatedIncidents,
      "Incident Time (AY range)": incidentTime,
      Description: description,
      "Confidential Note": confidentialNote,
      "Created At": createdAt,
    });
  });

  // === Create new workbook ===
  const newWorkbook = new ExcelJS.Workbook();

  // Sheet 1: Behaviour Entities (serves as validation data)
  const entitiesSheet = newWorkbook.addWorksheet("Behaviour Entities");

  // Create unique validation data from collected arrays
  const maxLength = _.max([
    _.size(rootCategories),
    _.size(subcategories),
    _.size(actions),
    _.size(severities),
  ]);

  entitiesSheet.columns = [
    { header: "Category", key: "category" },
    { header: "Sub-Category", key: "subcategory" },
    { header: "Severity", key: "severity" },
    { header: "Actions", key: "actions" },
  ];

  for (let i = 0; i < maxLength; i++) {
    entitiesSheet.addRow({
      category: _.get(rootCategories, i, ""),
      subcategory: _.get(subcategories, i, ""),
      severity: _.get(severities, i, ""),
      actions: _.get(actions, i, ""),
    });
  }

  // Sheet 2: Behaviour Incidents
  const incidentsSheet = newWorkbook.addWorksheet("Behaviour Incidents");
  incidentsSheet.columns = _.map(_.keys(behaviourIncidents[0]), (key) => ({
    header: key,
    key,
  }));
  _.forEach(behaviourIncidents, (row) => incidentsSheet.addRow(row));

  // Write file
  await newWorkbook.xlsx.writeFile("Behaviour Incident Bulk Output.xlsx");
  console.log("✅ File written: Behaviour Incident Bulk Output.xlsx");
};

sheetMigration().catch(console.error);
