const _ = require("lodash");

const parseLabel = (resourceName) => {
  const result = /.* (\([0-9]+\))$/g.exec(resourceName);
  if (!result) return { originalLabel: resourceName, suffix: 1 };

  const unrefinedSuffix = result[1];
  const suffix = parseInt(unrefinedSuffix.replace("(", "").replace(")", ""));
  const originalLabel = resourceName.split(` ${unrefinedSuffix}`)[0];

  return { originalLabel, suffixCount: suffix };
};


console.log(parseLabel("Test"));
console.log(parseLabel("Test (4)"));
console.log(parseLabel("Test (5) (8)"));
console.log(parseLabel("Test (2)(1)"));
console.log(parseLabel("Test (2003) value"));
