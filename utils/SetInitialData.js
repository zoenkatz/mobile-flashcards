import React from 'react'
import { AsyncStorage } from 'react-native'
import { View, StyleSheet } from 'react-native'
import { Notifications, Permissions } from 'expo'


export function getFlashcardsData(box){

    const decks = {
        React: {
            title: 'React',
            questions: [
                {
                    question: 'Redux can be used in React?',
                    answer: 'Yes',
                    correct: false
                },
                {
                    question: 'Do you make Ajax requests in React\'s componentDidMount lifecycle event?',
                    answer: 'Yes',
                    correct: false
                }
            ]
        },
        JavaScript: {
            title: 'JavaScript',
            questions: [
                {
                    question: 'Is null an object?',
                    answer: 'Yes',
                    correct: false
                }
            ]
        }
    };

    return typeof box === 'undefined' ? decks : decks[box];
};

const NOTIFICATION_KEY = 'Flashcards:notifications'

export function getDailyReminderValue () {
    return {
        today: "👋 Don't forget to study for today!"
    }
}

const styles = StyleSheet.create({
    iconContainer: {
        padding: 5,
        borderRadius: 8,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20
    },
})


export function isBetween (num, x, y) {
    if (num >= x && num <= y) {
        return true
    }

    return false
}

export function calculateDirection (heading) {
    let direction = ''

    if (isBetween(heading, 0, 22.5)) {
        direction = 'North'
    } else if (isBetween(heading, 22.5, 67.5)) {
        direction = 'North East'
    } else if (isBetween(heading, 67.5, 112.5)) {
        direction = 'East'
    } else if (isBetween(heading, 112.5, 157.5)) {
        direction = 'South East'
    } else if (isBetween(heading, 157.5, 202.5)) {
        direction = 'South'
    } else if (isBetween(heading, 202.5, 247.5)) {
        direction = 'South West'
    } else if (isBetween(heading, 247.5, 292.5)) {
        direction = 'West'
    } else if (isBetween(heading, 292.5, 337.5)) {
        direction = 'North West'
    } else if (isBetween(heading, 337.5, 360)) {
        direction = 'North'
    } else {
        direction = 'Calculating'
    }

    return direction
}

export function timeToString (time = Date.now()) {
    const date = new Date(time)
    const todayUTC = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()))
    return todayUTC.toISOString().split('T')[0]
}

export function clearLocalNotification () {
    return AsyncStorage.removeItem(NOTIFICATION_KEY)
        .then(Notifications.cancelAllScheduledNotificationsAsync)
}

export function createNotification () {
    return {
        title: 'Reminder to study!',
        body: "👋 don't forget to study for today!",
        ios: {
            sound: true,
        },
        android: {
            sound: true,
            priority: 'high',
            sticky: false,
            vibrate: true,
        }
    }
}

export function setLocalNotification () {
    AsyncStorage.getItem(NOTIFICATION_KEY)
        .then(JSON.parse)
        .then((data) => {
            if (data === null) {
                Permissions.askAsync(Permissions.NOTIFICATIONS)
                    .then(({ status }) => {
                        if (status === 'granted') {
                            Notifications.cancelAllScheduledNotificationsAsync();

                            let tomorrow = new Date()
                            tomorrow.setDate(tomorrow.getDate() + 1);
                            tomorrow.setHours(13);
                            tomorrow.setMinutes(18);

                            Notifications.scheduleLocalNotificationAsync(
                                createNotification(),
                                {
                                    time: tomorrow,
                                    repeat: 'day',
                                }
                            )

                            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
                        }
                    })
            }
        })
}