module.exports = {
  async afterCreate(event) {
    try {
      const { result } = event;

      console.log('New notification created:', result);

      // Fetch all users from 'userdata' API
      const users = await strapi.service('api::user-data.user-data').find();

      console.log(users);

      // Loop through all users and send the email
      for (const user of users.results) {
        await strapi.plugins['email'].services['email'].send({
          to: user.email, // Assuming 'email' is a field in 'userdata'
          from: 'ar.hayat7@gmail.com',
          subject: 'Notification by FusionX',
          text: result.message,
          options: {
            connectionTimeout: 30000, // Increase timeout to 30 seconds
          },
        });

        console.log(`Email sent successfully to ${user.email}`);
      }
    } catch (error) {
      console.error('Failed to send emails:', error);
      throw error;
    }
  }
};
