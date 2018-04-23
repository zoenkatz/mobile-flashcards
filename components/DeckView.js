import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform, TouchableOpacity, Linking } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import {green, white} from "../utils/colors";
import NewQuestion from "./NewQuestion";
import Quiz from "./Quiz";

export default class DeckView extends Component{

    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{navigation.state.params.deck.title}</Text>
                <Text style={styles.title}>Number of cards: {navigation.state.params.deck.questions.length}</Text>

                <TouchableOpacity style={styles.btn} onPress={() => navigation.push(
                    'NewQuestion',
                    {title: ''}
                )} underlayColor="#FFFFFF">
                    <Text style={styles.btnText}>Add Card</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.push(
                    'Quiz',
                    {deck: navigation.state.params.deck}
                )} underlayColor="#FFFFFF">
                    <Text style={styles.btnText}>Start Quiz</Text>
                </TouchableOpacity>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',

    },
    title: {
        padding: 5,
        fontSize: 24,
    },
    btn: {
        backgroundColor: green,
        padding: 5,
        borderRadius: 3,
        height: 48,
        margin: 30
    },
    btnText: {
        fontSize: 18,
        color: white,
    },
});