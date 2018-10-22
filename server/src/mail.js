const nodemailer = require("nodemailer");

var transport = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  }
});

const makeANiceEmail = text => `
  <div className="email" style="
    border: 1px solid black;
    padding: 20px;
    font-family: sans-serif;
    line-height: 2;
    font-size: 20px;
  ">
    <h2>Hello There!</h2>
    <p>${text}</p>
    <p>😘, from the ecommerce-demo app!</p>
  </div>
`;

exports.transport = transport;
exports.makeANiceEmail = makeANiceEmail;

// const transporter = nodemailer.createTransport({
//   host: 'smtp.ethereal.email',
//   port: 587,
//   auth: {
//     user: process.env.MAIL_USER,
//     pass: process.env.MAIL_PASSWORD
//   }
// });

// function sendMail({ from, to, subject, text, html }) {
//   const mailOptions = {
//     from,
//     to,
//     subject,
//     text,
//     html
//   };
//   return new Promise((resolve, reject) => {
//     transporter.sendMail(mailOptions, (error, info) => {
//       if (error) {
//         return reject(error);
//       }
//       resolve(info);
//     });
//   });
// }
