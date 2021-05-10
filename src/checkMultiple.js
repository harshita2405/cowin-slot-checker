const constants = require("../utils/constants");
const Locations = require("../utils/locations");
const Keys = require("../utils/keys");
const index = require("./index");

const { AGE, NOW, DISTRICT, STATE } = Keys;
const { INTERVAL } = constants;

function main() {
  Locations.forEach(
    ({
      age = AGE,
      district_name = DISTRICT,
      pincode = 0,
      state = STATE,
      vaccine = "",
    }) => {
      index.checkAvailability({
        age,
        district_name,
        state,
        pincode,
        vaccine,
      });
    }
  );
}

if (NOW) {
  main();
} else {
  setInterval(function () {
    main();
  }, INTERVAL);
}
