import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform, TouchableOpacity, Linking} from 'react-native'
import Question from "./Question";
import Quiz from "./Quiz";
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import {blue, green, white} from "../utils/colors";
import DeckView from "./DeckView";
import {StackNavigator} from "react-navigation";

export default class Answer extends Component{


    render() {
        const {navigation} = this.props;

        return (

            <View style={styles.questionView}>
                <Text>Answer: {navigation.state.params.question.answer}</Text>

                <TouchableOpacity style={styles.btnViewAnswer} onPress={() => navigation.replace(
                    'Question',
                    {title: 'Question', question: navigation.state.params.question, index: navigation.state.params.questionIndex, questions: navigation.state.params.questions,
                        deck: navigation.state.params.deck}
                )} underlayColor="#FFFFFF">
                    <Text>Question</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnCorrect}>
                    <Text>Correct</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnInCorrect}>
                    <Text>Incorrect</Text>
                </TouchableOpacity>

            </View>
        )
    }
};

const styles = StyleSheet.create({
    questionView: {
        display: 'flex',
        flex: 1
    },
    btnCorrect: {
        backgroundColor: '#008000',
        padding: 5,
        borderRadius: 3,
        height: 48,
        margin: 48,
        width: 100
    },
    btnInCorrect: {
        backgroundColor: '#ff0000',
        padding: 5,
        borderRadius: 3,
        height: 48,
        margin: 48,
        width: 100
    },
    btnViewAnswer:{
        backgroundColor: '#f5deb3',
        padding: 5,
        borderRadius: 3,
        height: 48,
        margin: 48,
        width: 100
    }
});