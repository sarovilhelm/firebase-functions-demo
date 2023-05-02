const functions = require("firebase-functions");

// The Firebase Admin SDK to access Firestore.
const admin = require("firebase-admin");
admin.initializeApp();
exports.addOnCreatedTimestamp = functions.firestore.document("/todos/{documentId}")
    .onCreate((snap, context) => {
        functions.logger.log('starting the [addOnCreatedTimestamp] function')
        const timestamp = Date.now();

        return snap.ref.set({created_on: timestamp, updated_on: timestamp}, {merge: true});
    });


exports.addOnUpdatedTimestamp = functions.firestore.document("/todos/{documentId}")
    .onWrite((change, context) => {
        functions.logger.log('starting the [addOnUpdatedTimestamp] function')
        const timestamp = Date.now();

        // document created the first time!
        if(!change.before.data() && change.after.data()) {
            return false
        }

        //if the updated_on is the same, it means we do need to update the updated_on,
            // given that we only update the updated_on by this trigger, the second time the value will be changed, so we do not need to update the doc again!
        if (change.before.data().updated_on === change.after.data().updated_on) {
            return change.after.ref.set({updated_on: timestamp}, {merge: true});
        }
        return false;
    });
