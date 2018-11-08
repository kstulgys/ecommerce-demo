const sgMail = require('@sendgrid/mail')
const { createShortLivedToken, createLongLivedToken } = require('../../utils')
const { PRISMA_ENDPOINT, APP_URL } = require('../../config')
// require('dotenv').config({ path: '.env' })

const auth = {
  async signup(parent, { shortLivedToken }, ctx, info) {
    const [user] = await ctx.db.query.users({
      where: {
        shortLivedToken,
      },
    })

    const longLivedToken = await createLongLivedToken(shortLivedToken)
    if (!user || !longLivedToken) {
      throw new Error(`Token is expired or invalid`)
    }

    const updatedUser = await ctx.db.mutation.updateUser({
      where: { email: user.email },
      data: { shortLivedToken: null },
    })

    return {
      token: longLivedToken,
      user,
    }
  },

  async sendShortLivedToken(parent, { email }, ctx, info) {
    let user
    const userExist = await ctx.db.query.user({ where: { email } })
    if (userExist) {
      user = userExist
    } else {
      user = await ctx.db.mutation.createUser({
        data: { email },
      })
    }
    // console.log('USSSSSSER', process.env.SENDGRID_API_KEY)
    const shortLivedToken = await createShortLivedToken(user)
    await ctx.db.mutation.updateUser({
      where: { email },
      data: { shortLivedToken },
    })
    // console.log(updatedUser);
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const msg = {
      to: user.email,
      from: 'ecomm-demo@example.com',
      subject: 'Your Sign in Token is here!',
      text: 'Your Sign in Token is here!',
      html: `Your Sign in Token is here!
      \n\n
      <a href="${process.env.APP_URL ||
        APP_URL}/token/${shortLivedToken}">Click Here to sign in</a>`,
    }
    sgMail.send(msg)

    return { message: 'Thanks!' }
  },
}

module.exports = { auth }

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
