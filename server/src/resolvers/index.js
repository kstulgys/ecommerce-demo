const { Query } = require("./Query");
const { Subscription } = require("./Subscription");
const { auth } = require("./Mutation/auth");
const { item } = require("./Mutation/item");
const { AuthPayload } = require("./AuthPayload");

module.exports = {
  Query,
  Mutation: {
    ...auth,
    ...item
  },
  Subscription,
  AuthPayload
};
