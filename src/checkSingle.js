const constants = require("../utils/constants");
const Keys = require("../utils/keys");
const index = require("./index.js");

const { AGE, NOW, DISTRICT, STATE, PINCODE, VACCINE } = Keys;

const { INTERVAL } = constants;

const missingEnvVariable = [];
if (!PINCODE) {
  if (!STATE) {
    missingEnvVariable.push("STATE");
  }
  if (!DISTRICT) {
    missingEnvVariable.push("DISTRICT");
  }
} else {
  if (STATE || DISTRICT) {
    console.log("\nNote : Please add either PINCODE OR STATE/DISTRICT.");
    console.log("Currently searching for pincode : ", PINCODE, " \n");
  }
}

if (missingEnvVariable.length) {
  const message = `Missing environment variable : ${missingEnvVariable.join(
    ", "
  )}`;
  console.log(message);
} else {
  function main() {
    index.checkAvailability({
      age: AGE,
      district_name: DISTRICT,
      state: STATE,
      vaccine: VACCINE,
      pincode: PINCODE,
    });
  }

  if (NOW) {
    main();
  } else {
    setInterval(function () {
      main();
    }, INTERVAL);
  }
}
