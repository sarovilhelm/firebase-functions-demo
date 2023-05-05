const { logger, ref } = require("@middleware");

module.exports = (snap, context) =>
  new Promise(async (resolve, reject) => {
    try {
      logger.log("starting the [addOnCreatedTimestamp] function");
      await snap.ref.set(
        {
          created_on: ref.FieldValue.serverTimestamp(),
          updated_on: ref.FieldValue.serverTimestamp(),
        },
        { merge: true },
      );
      return resolve();
    } catch (e) {
      logger.error("[ addOnCreateTimestamp ]:", e);
      return reject();
    }
  });
