const _ = require("lodash");

const successfulLoginMethodTracking = (data) => {
  const { method, userType, email, password, phoneNumber, otp, OTP } = data;
  const resOtp = otp || OTP;

  let localLoginMethod = "";

  if (email && password) {
    localLoginMethod = "EMAIL_PASSWORD";
  } else if (email && resOtp) {
    localLoginMethod = "EMAIL_OTP";
  } else if (userType == "parent" && phoneNumber) {
    localLoginMethod = "PHONE_OTP";
  }

  const METHOD = _.toUpper(method);
  const USERTYPE = _.toUpper(userType);
  const baseString = `!!SUCCESSFUL_LOGIN!!__!!METHOD!!__!!${METHOD}!!__!!USERTYPE!!__!!${USERTYPE}!!`;

  const finalString =
    method === "local"
      ? `${baseString}__!!TYPE!!__!!${localLoginMethod}!!`
      : baseString;

  console.log(finalString);
};

const data1 = {
  method: "local",
  userType: "student",
  email: "test@gma.com",
  password: "adasfafasd",
};

const data2 = {
  method: "local",
  userType: "staff",
  email: "test@gma.com",
  otp: "12524",
};

const data3 = {
  method: "local",
  userType: "parent",
  phoneNumber: "1241224125125",
  otp: "1224124",
};

const data4 = {
  method: "googleV2",
  userType: "parent",
};

successfulLoginMethodTracking(data1);
successfulLoginMethodTracking(data2);
successfulLoginMethodTracking(data3);
successfulLoginMethodTracking(data4);
