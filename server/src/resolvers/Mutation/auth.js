const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { createShortLivedToken, createLongLivedToken } = require("../../utils");
const { transport, makeANiceEmail } = require("../../mail");

const auth = {
  async signup(parent, { shortLivedToken }, ctx, info) {
    // const password = await bcrypt.hash(args.password, 10);
    const [user] = await ctx.db.query.users({
      where: {
        shortLivedToken
      }
    });

    if (!user) {
      throw new Error(`This token is expired or invalid`);
    }

    const updatedUser = await ctx.db.mutation.updateUser({
      where: { email: user.email },
      data: { shortLivedToken: null }
    });

    const longLivedToken = createLongLivedToken(user);

    return {
      token: longLivedToken,
      user
    };
  },

  async createShortLivedToken(parent, { email, name }, ctx, info) {
    let user;
    const userExist = await ctx.db.query.user({ where: { email } });
    if (userExist) {
      user = userExist;
    } else {
      user = await ctx.db.mutation.createUser({
        data: { email, name }
      });
    }
    const shortLivedToken = await createShortLivedToken(user);
    const updatedUser = await ctx.db.mutation.updateUser({
      where: { email },
      data: { shortLivedToken }
    });
    // console.log(updatedUser);

    // const mailRes = await transport.sendMail({
    //   from: "karolis.stulgys@gmail.com",
    //   to: user.email,
    //   subject: "Authentication token",
    //   html: makeANiceEmail(`Your token is here! \n\n
    //   <a href="${
    //     process.env.APP_URL
    //   }/token=${shortLivedToken}">Click here to authenticate</a>`)
    // });

    return { message: "Thanks!" };
  }
  // throw new Error(`No such user for email ${args.email}`);
  // const user = await ctx.db.mutation.createUser({
  //   data: { ...args, password }
  // });
  // const theToken = (await promisify(randomBytes(20))).toString("hex");

  // const password = await bcrypt.hash(args.password, 10);
  // const user = await ctx.db.mutation.createUser({
  //   data: { ...args, password }
  // });

  // return {
  //   token: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
  //   user
  // };

  // async login(parent, { email, password }, ctx, info) {
  //   const user = await ctx.db.query.user({ where: { email } });
  //   if (!user) {
  //     throw new Error(`No such user found for email: ${email}`);
  //   }

  //   const valid = await bcrypt.compare(password, user.password);
  //   if (!valid) {
  //     throw new Error("Invalid password");
  //   }

  //   return {
  //     token: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
  //     user
  //   };
  // }
};

module.exports = { auth };
