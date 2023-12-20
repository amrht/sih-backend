module.exports = {
    async afterCreate(event) {
      try {
        const { result } = event;
        
        console.log('New notification created:', result);
  
        await strapi.plugins['email'].services.email.send({
          to: result.email,
          from: 'ar.hayat7@gmail.com',
          subject: 'Notification by AssistIq',
          text: result.message,
        });
  
        console.log('Email sent successfully');
      } catch (error) {
        console.error('Failed to send email:', error);
        throw error;
      }
    }
  };