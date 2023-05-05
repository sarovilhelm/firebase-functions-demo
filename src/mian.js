require("module-alias/register");

const functions = require("firebase-functions");

// The Firebase Admin SDK to access Firestore.
exports.addOnCreatedTimestamp = functions.firestore
  .document("/todos/{documentId}")
  .onCreate(require("@/addOnCreateTimestamp"));


exports.addOnUpdatedTimestamp = functions.firestore
  .document("/todos/{documentId}")
  .onWrite(require("@/addOnUpdateTimestamp"));
