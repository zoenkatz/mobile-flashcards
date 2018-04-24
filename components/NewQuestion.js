import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, Platform, TouchableOpacity, Linking} from 'react-native'
import { AsyncStorage } from 'react-native'
import { connect } from 'react-redux'
import * as actions from '../actions/index'
import PropTypes from 'prop-types';
import {blue, green, white} from "../utils/colors";
import DeckView from "./DeckView";
import {StackNavigator} from "react-navigation";

class NewQuestion extends Component{

    state = {
        newCard: {
            question: '',
            answer: '',
            correct: false
        }
    };

    handleSubmit = (event, form, deck, navigation) => {
        this.setState({
            newCard: {
                question: form.question,
                answer: form.answer,
                correct: false
            }
        });

        this.props.addNewCard(deck, this.state.newCard).then((data) => {
            navigation.replace(
                'Decks'
            )
        });

    };

    handleChange = (value, key) => {
        switch(key) {
            case 'question':
                this.setState({
                    newCard: {
                        question: value,
                        answer: this.state.newCard.answer,
                        correct: false
                    }
                });
                break;
            case 'answer':
                this.setState({
                    newCard: {
                        question: this.state.newCard.question,
                        answer: value,
                        correct: false
                    }
                });
                break;
        }
    };

    render() {
        const {navigation} = this.props;

        return (

            <View>
                <Text style={styles.inputField}>Question: </Text><TextInput placeholder='Insert Question' value={this.state.newCard.question} style={styles.inputField} name='question' onChange={(e) => this.handleChange(e.nativeEvent.text, 'question')}></TextInput>
                <Text style={styles.inputField}>Answer: </Text><TextInput placeholder='Insert Answer' value={this.state.newCard.answer} style={styles.inputField} name='answer' onChange={(e) => this.handleChange(e.nativeEvent.text, 'answer')}></TextInput>

                <TouchableOpacity style={styles.btnSubmit} onPress={(e) => this.handleSubmit(e, this.state.newCard, navigation.state.params.deck, navigation)}>
                    <Text style={styles.inputField}>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
};

function mapStateToProps (state, { navigation }) {
    return {
        decks: state.decks,
    }
}

function mapDispatchToProps (dispatch, { navigation }) {
    return {
        addNewCard: (deck, newCard) => dispatch(actions.addNewCard(deck, newCard))

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewQuestion)


const styles = StyleSheet.create({
    btnSubmit: {
        backgroundColor: '#008340',
        padding: 5,
        borderRadius: 3,
        height: 48,
        margin: 30,
        width: 100
    },
    inputField: {
        width: 100,
        height: 20
    }
});