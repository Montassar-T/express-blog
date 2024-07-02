const allowedCors = require("./allowedCors");

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedCors.indexOf(origin) != -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Denied by Cors"));
    }
  },
  Credential:true,
};

module.exports = corsOptions;
