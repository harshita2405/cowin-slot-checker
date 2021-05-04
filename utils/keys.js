module.exports = {
  AGE: Number(process.env.AGE) || 18,
  NOW: process.env.NOW === "true" || false,
  DISTRICT: process.env.DISTRICT || "",
  PINCODE: Number(process.env.PINCODE) || 0,
  STATE: process.env.STATE || "",
  VACCINE: process.env.VACCINE || "",
};
