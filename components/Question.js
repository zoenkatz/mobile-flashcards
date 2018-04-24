import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform, TouchableOpacity, TouchableHighlight,  Linking} from 'react-native'
import Quiz from "./Quiz";
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import {blue, green, white} from "../utils/colors";
import DeckView from "./DeckView";
import {StackNavigator} from "react-navigation";

export default class  extends Component{

    checkIfCorrect = (questionItem, navigation, questionIndex, questions, deck) => {
        if(questionItem && questionItem.answer === 'Yes'){
            questionItem.correct = true;
        }

        this.goToNextScreen(navigation, questionIndex, questions, deck);
    }

    checkIfInCorrect = (questionItem, navigation, questionIndex, questions, deck) => {
        if(questionItem && questionItem.answer === 'No'){
            questionItem.correct = true;
        }

        this.goToNextScreen(navigation, questionIndex, questions, deck);

    }

    goToNextScreen = (navigation, questionIndex, questions, deck) => {
        let nextQuestionItem = questions[questionIndex + 1];
        navigation.push(
            'Question',
            {index: questionIndex+1, deck: deck, question: nextQuestionItem}
        );

    };

    render() {
        let {deck, question, navigation} = this.props;
        let questionItem = {};
        let questionIndex = 0;
        let questions = [];
        deck = deck || navigation.state.params.deck;

        if (question) {
            questionItem = question.item;
            questionIndex = question.index;
        }
        else if(navigation.state.params){
            questionItem = navigation.state.params.question;
            questionIndex = navigation.state.params.index;
        }

        if(deck){
            questions = deck.questions
        }
        else if(navigation.state.params.deck){
            questions = navigation.state.params.deck.questions;
        }
        else{

        }

        return (

            <View style={styles.questionView}>
                {questionIndex < questions.length ?
                    <View>
                        <Text>{questionItem && questionItem.question}</Text>

                        <TouchableOpacity style={styles.btnViewAnswer} onPress={() => navigation.replace(
                            'Answer',
                            {title: 'Answer', question: questionItem, questionIndex: questionIndex, questions: questions, deck: deck}
                        )} underlayColor="#FFFFFF">
                            <Text>Answer</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.btnCorrect} onPress={() => this.checkIfCorrect(questionItem, navigation, questionIndex, questions, deck)}>
                            <Text>Correct</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.btnInCorrect} onPress={() => this.checkIfInCorrect(questionItem, navigation, questionIndex, questions, deck)}>
                            <Text>Incorrect</Text>
                        </TouchableOpacity>

                        {(questions && (questionIndex <= questions.length)) ?
                            <View>
                                <TouchableHighlight style={styles.btnNext} onPress={() => this.goToNextScreen(navigation, questionIndex, questions, deck)}>
                                    <Text >Next Question</Text>
                                </TouchableHighlight>
                                <Text> Number of cards left in the quiz: {questions.length - questionIndex}</Text>
                            </View> : <View></View>}

                    </View> :<View>
                        <Text>Quiz is done! {(questions.filter((question) => {
                            return question.correct
                        }).length)/questions.length * 100}% correct</Text>
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
        margin: 32,
        width: 100

    },
    btnInCorrect: {
        backgroundColor: '#ff0000',
        padding: 5,
        borderRadius: 3,
        height: 48,
        margin: 32,
        width: 100

    },
    btnViewAnswer:{
        backgroundColor: '#f5deb3',
        padding: 5,
        borderRadius: 3,
        height: 48,
        margin: 32,
        width: 100

    },
    btnNext:{
        backgroundColor: '#f67565',
        padding: 5,
        borderRadius: 3,
        height: 48,
        margin: 32,
        width: 100
    }
});