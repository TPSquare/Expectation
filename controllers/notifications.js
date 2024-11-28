import * as Notifications from 'expo-notifications';

export const getExpoPushToken = async () => {
  try {
    const { status } = await Notifications.requestPermissionsAsync();
    if (status !== 'granted') {
      throw new Error('Permission to receive notifications was denied');
    }
    const token = await Notifications.getExpoPushTokenAsync();
    return token.data;
  } catch (error) {
    console.error('Error getting Expo Push Token:', error);
    return null;
  }
};

export const sendPushNotification = async (expoPushToken, title, body) => {
  try {
    const message = {
      to: expoPushToken,
      sound: 'default',
      title: title,
      body: body,
      data: { extraData: 'Some additional data' },
    };

    await Notifications.scheduleNotificationAsync({
      content: message,
      trigger: { seconds: 2 },
    });
  } catch (error) {
    console.error('Error sending notification:', error);
  }
};
