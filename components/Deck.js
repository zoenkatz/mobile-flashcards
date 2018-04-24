import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform, TouchableOpacity, Linking} from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import {blue, green, white} from "../utils/colors";
import DeckView from "./DeckView";
import {StackNavigator} from "react-navigation";

export default class Deck extends Component{

    render() {
        const {deck, navigation} = this.props;

        return (

            <View style={styles.deckItem}>
                <TouchableOpacity onPress={() => navigation.push(
                    'DeckView',
                    {deck: deck}
                )} underlayColor="#FFFFFF">
                    <Text>{deck && deck.title}</Text>
                    <Text>Number of cards: {deck && deck.questions && deck.questions.length}</Text>
                </TouchableOpacity>

            </View>
        )
    }
};

const styles = StyleSheet.create({
    deckItem: {
        margin: 5,
        padding: 5
    }
});