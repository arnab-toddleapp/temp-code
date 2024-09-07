const _ = require("lodash");

const generateBehaviourIncidentSummaryTemplate = (incidents) => {
  const groupedIncidents = _.groupBy(incidents, "rootCategory");

  const templateString = _.map(groupedIncidents, (incidents, rootCategory) => {
    // Build text for incidents under each root category
    const incidentsText = _.map(incidents, (incident, index) => {
      const sequence = index + 1;
      const {
        incidentTime,
        incidentLocation,
        title,
        subCategory,
        description,
      } = incident;

      const details = [
        `  ${sequence}. ${incidentTime}, ${incidentLocation}`,
        `  Incident Title: ${title}`,
        `  Incident Category: ${subCategory}`,
        `  Incident description: ${description}`,
      ];

      return _.join(details, "\n");
    }).join("\n\n");

    // Combine category and its incidents
    return `${rootCategory}:\n${incidentsText}`;
  }).join("\n\n");

  return templateString;
};

// Example input
const incidents = [
  {
    rootCategory: "Offences",
    incidentTime: "Sept 3, 2034, 5:34 pm",
    incidentLocation: "Playground",
    title: "Bullying classmates",
    subCategory: "Physical abuse",
    description: "Aashna was bullying her classmates.",
  },
  {
    rootCategory: "Positive Behaviour",
    incidentTime: "Sept 23, 2034, 5:14 pm",
    incidentLocation: "Classroom",
    title: "Maintained discipline in class",
    subCategory:
      "Student demonstrates the ability to be self disciplined and responsible consistently",
    description:
      "In the teacher's absence, Aashna maintained discipline in the class.",
  },
  {
    rootCategory: "Neutral Behaviour",
    incidentTime: "Sept 23, 2034, 9:14 pm",
    incidentLocation: "Computer Lab",
    title: "High Fever",
    subCategory: "Did't have asdakjn",
    description: "asfasbflabfjasfjkas fkl aljhf ajhls dljha dljhsa",
  },
  {
    rootCategory: "Offences",
    incidentTime: "Sept 13, 2034, 1:14 pm",
    incidentLocation: "Class 101",
    title: "Smoking",
    subCategory: "Substance abuse",
    description: "Aashna was smoking.",
  },
];

const generateBehaviourIncidentSummaryTemplateV2 = (incidents) => {
  const groupedIncidents = _.groupBy(incidents, "rootCategory");

  const templateString = _.map(groupedIncidents, (incidents, rootCategory) => {
    // Build text for incidents under each root category
    const incidentsText = _.map(incidents, (incident, index) => {
      const sequence = index + 1;
      const {
        incidentTime,
        incidentLocation,
        title,
        subCategory,
        description,
      } = incident;

      const details = [
        `  ${sequence}. ${incidentTime}, ${incidentLocation}`,
        `  Incident Title: ${title}`,
        `  Incident Category: ${subCategory}`,
        `  Incident description: ${description}`,
      ];

      return _.join(details, "\n");
    });

    return `${rootCategory}:\n${_.join(incidentsText, "\n\n")}`;
  });

  return _.join(templateString, "\n\n");
};

// Generate and display the output template
console.log(generateBehaviourIncidentSummaryTemplate(incidents));

console.log("###########################################");

console.log(generateBehaviourIncidentSummaryTemplateV2(incidents));
