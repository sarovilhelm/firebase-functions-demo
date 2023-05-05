const { logger } = require("firebase-functions");

exports.logger = logger;
exports.ref = require("./bindings");
