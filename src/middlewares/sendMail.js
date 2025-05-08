const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
  // host: "smtp.gmail.com",
  // port: 465,
  // secure: true,
  service: "gmail",
  auth: {
    user: "awlad@softic.ai",
    pass: "dqawqczaabhdzapp",
  },
});

const sendMail = async (to, subject, html) => {
  try {
    const res = await transport.sendMail({
      from: `"Contact Form" <awlad@softic.ai>`,
      to,
      subject,
      html,
    });

    console.log("Message sent: %s", res);
    return res;
  } catch (error) {
    console.error("Error sending email:", error.message);
  }
};

module.exports = sendMail;
