
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


      // ...
  "image-optimizer": {
    enabled: true,
    config: {
      include: ["jpeg", "jpg", "png"],
      exclude: ["gif"],
      formats: [ "webp"],
      sizes: [
        {
          name: "xs",
          width: 300,
        },
        {
          name: "sm",
          width: 768,
        },
        {
          name: "md",
          width: 1280,
        },
        {
          name: "lg",
          width: 1920,
        },
        {
          name: "xl",
          width: 2840,
          withoutEnlargement: true, // Won't create an image larger than the original size
        },
        {
          name: "original", // Uses the original size but still transforms for formats
        },
      ],
      additionalResolutions: [1.5, 3],
      quality: 70,
    },
  } 
  // ...


  });
  