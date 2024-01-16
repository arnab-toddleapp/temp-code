const { Console } = require("console");
const fs = require("fs");

const finalData = {
  parentId: "18558845500527853",
  parentType: "STUDENT",
  parentResourceId: null,
  visibleTo: ["TEACHER", "STUDENT"],
  type: "STUDENT_FILES",
  organizationResources: [
    {
      label: "TestFolderUpload 1",
      resourceMapId: 1,
      parentResourceMapId: null,
      resourceType: "FOLDER",
    },
  ],
};

for (let i = 1; i <= 5000; i++) {
  const organizationResourcesData = {
    label: `TestFile ${i} `,
    resourceMapId: i + 1,
    parentResourceMapId: 1,
    resourceType: "FILE",
    attachment: {
      url: "https://cloud.toddleapp.com/eu-west-1/s/w5XBQN/content/dIkl6Qe0s/64ngqc.png",
      name: "Cat Image 1",
      mimeType: "image/jpeg",
      type: "IMAGE",
      metadata: {
        size: 486809,
        fileExtension: "jpg",
        height: 1067,
        width: 1600,
        uploadTime: 3645,
      },
    },
  };

  finalData.organizationResources.push(organizationResourcesData);
}

const myLogger = new Console({
  stdout: fs.createWriteStream("5k_files_new.json"),
});

myLogger.log(JSON.stringify(finalData));
