import * as Notifications from 'expo-notifications';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SCHEDULED_EVENTS_KEY = 'SCHEDULED_EVENTS';

export async function scheduleEventNotification(event) {
  try {
    const scheduled = JSON.parse(await AsyncStorage.getItem(SCHEDULED_EVENTS_KEY)) || [];
    if (scheduled.includes(event.id)) return;

    const eventDate = new Date(event.date);
    const notificationTime = new Date(eventDate.getTime() - 15 * 60 * 1000);

    if (notificationTime <= new Date()) return;

    console.log("Scheduling event at:", notificationTime.toISOString());

    await Notifications.scheduleNotificationAsync({
      content: {
        title: `Upcoming Event: ${event.title}`,
        body: event.description || 'You have an event scheduled soon!',
        data: { eventId: event.id },
      },
      trigger: notificationTime,
    });

    scheduled.push(event.id);
    await AsyncStorage.setItem(SCHEDULED_EVENTS_KEY, JSON.stringify(scheduled));
  } catch (error) {
    console.error('Failed to schedule notification:', error);
  }
}
