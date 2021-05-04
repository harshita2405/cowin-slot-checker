const constants = require("./constants");
const notifier = require("node-notifier");
const open = require("open");

const { URL } = constants;

function getCentreNames(names = []) {
  return names.length > 4
    ? `${names.slice(0, 4).join(", ")} and ${names.length - 4} others`
    : `${names.join(", ")}`;
}

function getLocation({ pincode = 0, state = "", district_name = "" }) {
  return pincode ? `pincode: ${pincode}` : `${state}, ${district_name}`;
}

function getAgeString({ age, vaccine }) {
  return `${age}+ ${vaccine ? `(${vaccine})` : ""}`;
}

function getDate() {
  const date = new Date();
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
}

function getDistrictId({ state, district_name }) {
  const currentState = constants[state.toUpperCase()];
  const districts = currentState.districts;
  const district = districts.find((district) =>
    district.district_name.toLowerCase().includes(district_name.toLowerCase())
  );
  if (district) {
    return district.district_id;
  } else {
    console.log(`Incorrect disctrict name : ${district_name}`);
    const names = districts
      .map((district) => district.district_name)
      .join(", ");
    console.log(`Pick from : ${names}`);
    notifier.notify(`Incorrect disctrict name : ${district_name}`);
  }
}

function getUrl({ district_id, date, pincode }) {
  if (district_id) {
    return `${URL}/calendarByDistrict?district_id=${district_id}&date=${date}`;
  } else if (pincode) {
    return `${URL}/calendarByPin?pincode=${pincode}&date=${date}`;
  }
  return "";
}

function notify(message) {
  notifier.notify(
    {
      title: "Cowin",
      message,
      sound: true,
      wait: true,
      timeout: 10,
    },
    function (err, response) {
      if (response === "activate") {
        open("https://www.cowin.gov.in/home");
      }
    }
  );
}

module.exports = {
  getAgeString,
  getCentreNames,
  getDate,
  getDistrictId,
  getUrl,
  notify,
  getLocation,
};
