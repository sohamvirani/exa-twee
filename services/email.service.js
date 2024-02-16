const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "sohamvirani4865@gmail.com",
    pass: "qhfflpmgbwujuqyw",
  },
});

// sendmail
const send_Mail = async (to, data, subject) => {
  try {
    return transporter.sendMail({
      from: "<sohamvirani4865@gmail.com>",
      to,
      subject:`success verification`,
      text:`t seems like you're looking for assistance with an email related to successful verification. If you need help drafting such an email or have specific questions about it, please provide more details or context, and I'll be happy to assist you!`,
    });
  } catch (error) {
    return false;
  }
};

module.exports = {
    send_Mail
}
