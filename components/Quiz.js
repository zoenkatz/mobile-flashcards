import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform, TouchableOpacity, Linking, FlatList} from 'react-native'
import Question from "./NewCard/Question";
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import {blue, green, white} from "../utils/colors";
import DeckView from "./DeckView";
import {StackNavigator} from "react-navigation";

export default class Quiz extends Component{

    renderItem = (item, index) => {
        return (<Question navigation={this.props.navigation} deck={this.props.navigation.state.params.deck} indexItem={index} question={item}/>)
    };

    render() {
        const {navigation} = this.props;

        return (

            <View>
                <FlatList data={navigation.state.params.deck.questions} keyExtractor={(item, index) => index}
                          initialNumToRender={1} renderItem={this.renderItem} removeClippedSubviews={true}></FlatList>

            </View>
        )
    }
};

const styles = StyleSheet.create({


});