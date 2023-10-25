module.exports = ({ env }) => ({
    // ...
    email: {
      config: {
        provider: 'nodemailer',
        providerOptions: {
          service: 'Gmail',
          auth: {
            user: 'legalinstitutesrilanka@gmail.com', // Your Gmail email address
            pass: 'rbrotlrpfsdizxwy', // Your Gmail App Password
          },
          // ... any custom nodemailer options
        },
        settings: {
          defaultFrom: 'legalinstitutesrilanka@gmail.com',
          defaultReplyTo: 'legalinstitutesrilanka@gmail.com',
        },
      },
    },
    // ...
  });
  