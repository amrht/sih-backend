module.exports = ({ env }) => ({
    // ...
    email: {
      config: {
        provider: 'nodemailer',
        providerOptions: {
          host: env('SMTP_HOST', 'smtp.elasticemail.com'),
          port: env('SMTP_PORT', 2525),
          auth: {
            user: env('SMTP_USERNAME'),
            pass: env('SMTP_PASSWORD'),
          },
          // ... any custom nodemailer options
        },
        settings: {
          defaultFrom: 'ar.hayat7@gmail.com',
          defaultReplyTo: 'noreply@assistiq.com',
        },
      },
    },
    // ...
  });