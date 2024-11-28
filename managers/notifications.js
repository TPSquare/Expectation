import {
  sendPushNotification,
  getExpoPushToken,
} from '../controllers/notifications.js';

(async () => {
  try {
    const expoPushToken = await getExpoPushToken();
    if (expoPushToken) {
      console.log(expoPushToken);
      await sendPushNotification(expoPushToken, 'Test', 'Cái này để test');
    }
  } catch (error) {
    console.error('Error:', error);
  }
})();
