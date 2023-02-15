// https://github.com/sendgrid/sendgrid-nodejs/blob/main/docs/use-cases/single-email-single-recipient.md
// NOTE: This only works from the server so you need to deploy to test due to CORS
const mail = require('@sendgrid/mail')

mail.setApiKey(process.env.SENDGRID_API_KEY)

export default async function (req, res) {
  const body = JSON.parse(req.body);

  const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Message: ${body.message}
  `;

  const data = {
    to: 'brettkgamble@gmail.com',
    from: `brettkgamble@gmail.com`,
    subject: `New message from ${body.name}`,
    text: message,
    html: message.replace(/\r\n/g, '<br />'),
  };

  await mail.send(data)
      .then(() => {
        res.status(200).json({ status: 'OK' });
      })
      .catch(error => {
        console.error(error)
        if (error.response) {
          const {message, code, response} = error;
        }
      })


};

