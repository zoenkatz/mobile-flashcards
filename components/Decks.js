import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform, TouchableOpacity, ScrollView, FlatList, Navigator} from 'react-native'
import { connect } from 'react-redux'
import {green, white} from '../utils/colors'
import {fetchResults} from '../utils/api'
import * as actions from '../actions/index'
import PropTypes from 'prop-types';
import Deck from './Deck'

class Decks extends Component{
    state = {
        ready: false,
        decks: {
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
        }
    };

    renderItem = ({item}) => {
        return <Deck deck={item} decks={this.props.decks} navigation={this.props.navigation}></Deck>
    };

    render() {
        const {navigation} = this.props;

        const decks =  this.props.decks || this.state.decks || (navigation && navigation.state && navigation.state.params && navigation.state.params.decks);
        return (
            <View>
                <FlatList data={Object.values(decks)} renderItem={this.renderItem} keyExtractor={(item, index) => index}>
                </FlatList>
            </View>
        )
    }
}

function mapStateToProps (state, { navigation }) {
    return {
        decks: state.decks,
    }
}

function mapDispatchToProps (dispatch, { navigation }) {
    return {
        addNewDeck: (data) => dispatch(actions.addNewDeck(data))

    }
}

export default connect(
    mapStateToProps,
)(Decks)

Decks.propTypes = {
    //decks: PropTypes.object.isRequired,
}