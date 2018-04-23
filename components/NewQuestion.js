import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, Platform, TouchableOpacity, Linking} from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import {blue, green, white} from "../utils/colors";
import DeckView from "./DeckView";
import {StackNavigator} from "react-navigation";

export default class NewQuestion extends Component{

    state = {
        newCardForm: {

        }
    }
    render() {
        const {navigation} = this.props;

        return (

            <View>
                <Text style={styles.inputField}>Question: </Text><TextInput style={styles.inputField} name='question'></TextInput>
                <Text style={styles.inputField}>Answer: </Text><TextInput style={styles.inputField} name='Answer'></TextInput>

                    <TouchableOpacity style={styles.btnSubmit}>
                        <Text style={styles.inputField}>Submit</Text>
                    </TouchableOpacity>
            </View>
        )
    }
};

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
        height: 48
    }
});