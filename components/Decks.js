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
        decks: {}
    };

    renderItem = ({item}) => {
        return <Deck deck={item} decks={this.props.decks} navigation={this.props.navigation}></Deck>
    };

    render() {
        const {  } = this.state;
        const {navigation} = this.props;

        const decks = this.props.decks || (navigation && navigation.state && navigation.state.params && navigation.state.params.decks) || {};
        return (
            <View>
                <FlatList data={Object.values(decks)} renderItem={this.renderItem}>
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
    decks: PropTypes.object.isRequired,
}