const { logger, ref } = require("@middleware");

module.exports = (change, context) =>
  new Promise(async (resolve, reject) => {
    try {
      logger.log("starting the [addOnUpdatedTimestamp] function");
      if (!change.after.exists) {
        logger.log("The document is deleted!");
        return resolve();
      }
      // document created the first time!
      if (!change.before.data() && change.after.data()) {
        logger.log("The document created the first time!");
        return resolve();
      }

      // if the updated_on is the same, it means we do need to update the updated_on,
      // given that we only update the updated_on by this trigger,
      // the second time the value will be changed, so we do not need to update the doc again!
      if (change.after.data().updated_on.isEqual(change.before.data().updated_on)) {
        logger.log("The document is updated!");
        await change.after.ref.set({ updated_on: ref.FieldValue.serverTimestamp() }, { merge: true });
        return resolve();
      }
      logger.log("didn't enter any if");
      return resolve();
    } catch (e) {
      logger.error("[ addOnCreateTimestamp ]:", e);
      return reject();
    }
  });
