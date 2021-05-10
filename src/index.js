const request = require("request");
const utils = require("../utils/");

const {
  getAgeString,
  getCentreNames,
  getDate,
  getDistrictId,
  getLocation,
  getUrl,
  notify,
} = utils;

function checkAvailability({
  district_name,
  age = 18,
  pincode = 0,
  state,
  vaccine = "",
}) {
  const district_id = !pincode && getDistrictId({ state, district_name });
  const date = getDate();
  const url = getUrl({ district_id, pincode, date });
  const location = getLocation({ pincode, state, district_name });
  const ageString = getAgeString({ age, vaccine });
  if (url) {
    request(url, { json: true }, (err, res, body) => {
      if (err) {
        return console.log(err);
      }
      try {
        const centers = body.centers;
        const availableCenters = centers.filter((center) => {
          const sessions = center.sessions;
          const availableSessions = sessions.filter(
            ({
              available_capacity,
              min_age_limit: currentAge,
              vaccine: current_vaccine,
            }) => {
              const isVaccineMatched = vaccine
                ? current_vaccine.toLowerCase() === vaccine.toLowerCase()
                : true;

              const isAgeMatched = Number(currentAge) === age;

              return isVaccineMatched && isAgeMatched && available_capacity > 0;
            }
          );
          return availableSessions && availableSessions.length > 0;
        });

        if (availableCenters && availableCenters.length) {
          console.log("\n--------------------------");
          console.log(
            `${district_name} ${
              vaccine ? `(${vaccine})` : ""
            } : ${new Date().toLocaleTimeString()}`
          );
          const names = availableCenters.map((centers) => {
            console.log(centers.name);

            centers.sessions.map(({ date, available_capacity }) => {
              if (available_capacity > 0) {
                console.log(date, available_capacity);
              }
            });

            return centers.name;
          });
          const namesString = getCentreNames(names);
          const centresCount = availableCenters.length;
          const message = `${centresCount} session${
            centresCount > 1 ? "s" : ""
          } available for ${ageString} in ${location}: ${namesString}`;
          notify(message);
        }
      } catch (err) {
        if (err && err.message) {
          console.log("Something went wrong ! ", err.message);
        }
      }
    });
  }
}

module.exports = Object.freeze({
  checkAvailability,
});
