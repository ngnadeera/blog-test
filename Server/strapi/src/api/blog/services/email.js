const nodemailer = require('nodemailer');
const Mailgen = require('mailgen');

const sendEmailToSubscribers = async () => {
 
const subscriberEmails = await strapi.db.query('api::subscriber.subscriber').findMany({
  select: ['email'],
});

  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: 'legalinstitutesrilanka@gmail.com',
        pass: 'rbrotlrpfsdizxwy',
      },
    });

    const MailGenerator = new Mailgen({
      theme: 'default',
      product: {
        name: 'Paraqum Blog',
        link: 'https://mailgen.js/',
      },
    });
    if (subscriberEmails.length > 0){

      for (const item of subscriberEmails) {
        const response = {
          body: {
              name: 'John Appleseed',
              intro: "We are pleased to announce the latest addition to the Paraqum Blog, a comprehensive article on the critical subject of 'Network Congestion.' We invite you to visit our blog and delve into this insightful piece to gain a deeper understanding of network congestion and its implications. Your quest for knowledge awaits, and we are here to provide you with valuable insights. Visit Paraqum Blog today to read the full article." ,

              action: {
                instructions: 'To start reading, please click here:',
                button: {
                    color: '#22BC66', // Optional action button color
                    text: 'Browse blog page',
                    link: 'https://paraqum.com/'
                }
            },

              outro: "looking forward!"
  
          },
        };
  
        const mail = MailGenerator.generate(response);
  
        const message = {
          from: 'legalinstitutesrilanka@gmail.com',
          to: item.email,
          subject: 'New Blog Post Notification',
          html: mail,
        };
  
        await transporter.sendMail(message);
        console.log(`mail send to --- ${item.email} --- successfully` )
      }
 
    } else {
      console.error('empty email list.Please update the email list to send mails')
    }

    
    
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

module.exports = { sendEmailToSubscribers };