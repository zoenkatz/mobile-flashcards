import React from 'react'
import { AsyncStorage } from 'react-native'
import { View, StyleSheet } from 'react-native'


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