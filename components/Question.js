import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform, TouchableOpacity, TouchableHighlight,  Linking} from 'react-native'
import Quiz from "./Quiz";
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import {blue, green, white} from "../utils/colors";
import DeckView from "./DeckView";
import {StackNavigator} from "react-navigation";

export default class  extends Component{

    checkIfCorrect = (questionItem) => {
        if(questionItem.answer === 'Yes'){
            questionItem.correct = true;
        }
    }

    checkIfInCorrect = (questionItem) => {
        if(questionItem.answer === 'No'){
            questionItem.correct = true;
        }
    }

    goToNextScreen = (navigation, questionIndex, questions) => {
        let nextQuestionItem = questions[questionIndex + 1];
        navigation.push(
            'Question',
            {question: nextQuestionItem}
        );

    };

    render() {
        const {deck, question, navigation} = this.props;
        let questionItem = {};
        let questionIndex = 0;
        let questions = [];

        if (question) {
            questionItem = question.item;
            questionIndex = question.index;
        }
        else {
            questionItem = navigation.state.params.question;
            questionIndex = navigation.state.params.index;
        }

        deck ? questions = deck.questions : questions = navigation.state.params.questions;

        return (

            <View style={styles.questionView}>
                {!questionItem.correct ?
                    <View>
                        <Text>{questionItem.question}</Text>

                        <TouchableOpacity style={styles.btnViewAnswer} onPress={() => navigation.replace(
                            'Answer',
                            {title: 'Answer', question: questionItem, questionIndex: questionIndex, questions: questions}
                        )} underlayColor="#FFFFFF">
                            <Text>Answer</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.btnCorrect} onPress={() => this.checkIfCorrect(questionItem)}>
                            <Text>Correct</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.btnInCorrect} onPress={() => this.checkIfInCorrect(questionItem)}>
                            <Text>Incorrect</Text>
                        </TouchableOpacity>

                        {questions && (questionIndex < questions.length - 1) ?
                        <TouchableHighlight onPress={() => this.goToNextScreen(navigation, questionIndex, questions)}>
                            <Text >Next Question</Text>
                        </TouchableHighlight> : <Text/>}

                        {questions ?
                            <Text> Number of cards left in the quiz: {questions.length - questionIndex}</Text>:
                            <Text></Text>}
                    </View> :<View>
                        <Text>Quiz is done! 100% correct</Text>
                    </View>}

            </View>
        )
    }
};

const styles = StyleSheet.create({
    questionView: {
        display: 'flex',
        flex: 1,
        alignItems: 'center'
    },
    btnCorrect: {
        backgroundColor: '#008000',
        padding: 5,
        borderRadius: 3,
        height: 48,
        margin: 30,
        width: 100

    },
    btnInCorrect: {
        backgroundColor: '#ff0000',
        padding: 5,
        borderRadius: 3,
        height: 48,
        margin: 30,
        width: 100

    },
    btnViewAnswer:{
        backgroundColor: '#f5deb3',
        padding: 5,
        borderRadius: 3,
        height: 48,
        margin: 30,
        width: 100

    }
});