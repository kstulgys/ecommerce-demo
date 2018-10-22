const jwt = require("jsonwebtoken");
const uuid = require("uuid/v4");
// const jsonwebtoken = require("jsonwebtoken");
// const { sendMail } = require("../email");

function getUserId(ctx) {
  const Authorization = ctx.request.get("Authorization");
  if (Authorization) {
    const token = Authorization.replace("Bearer ", "");
    const { userId } = jwt.verify(token, process.env.APP_SECRET);
    return userId;
  }

  throw new AuthError();
}

class AuthError extends Error {
  constructor() {
    super("Not authorized");
  }
}

const createShortLivedToken = ({ email, id }) => {
  return jwt.sign({ id, email }, process.env.APP_SECRET, {
    expiresIn: "10m"
  });
};

const createLongLivedToken = ({ id }) => {
  try {
    // const { id, email } = jwt.verify(token, process.env.APP_SECRET);
    const longLivedToken = jwt.sign({ userId: id }, process.env.APP_SECRET, {
      expiresIn: "30 days"
    });
    return longLivedToken;
    // return Promise.resolve(longLivedToken);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// const sendShortLivedToken = (email, token) => {
//   return sendMail({
//     from: '"Julian" <julian@graphql.college>',
//     to: email,
//     text: `${process.env.APP_URL}/verify?token=${token}`,
//     html: `<a href="${
//       process.env.APP_URL
//     }/verify?token=${token}" target="_blank">Authenticate</a>`,
//     subject: "Auth token"
//   });
// };

// const verify = token => {
//   try {
//     return jwt.verify(token, process.env.APP_SECRET);
//   } catch (error) {
//     throw new Error("Unauthorized");
//   }
// };

// const authorize = async (database, token) => {
//   const { id } = verify(token);
//   const users = await database("users").select();
//   return database("users")
//     .select()
//     .where({ id });
// };

// const createUser = email => {
//   const id = uuid();
//   return { id, email };
// };

module.exports = {
  createShortLivedToken,
  createLongLivedToken,
  getUserId,
  AuthError
  // sendShortLivedToken,
  // verify,
  // authorize,
  // createUser,
};
