import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, Platform, TouchableOpacity, Linking} from 'react-native'
import { AsyncStorage } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import {blue, green, white} from "../utils/colors";
import DeckView from "./DeckView";
import {StackNavigator} from "react-navigation";
import * as actions from '../actions/index'


class NewDeck extends Component{

    state = {
        newDeck: {
            title: '',
            questions: []
        }
    };

    handleSubmit = (event, deck, navigation) => {
        this.setState({
            newDeck: {
                title: deck.title,
                questions: []
            }
        });

        this.props.addNewDeck(this.state.newDeck).then((data) => {
            navigation.replace(
                'DeckView',
                {deck: this.state.newDeck}
            )
        });

    };

    handleChange = (value, key) => {
        switch(key) {
            case 'title':
                this.setState({
                    newDeck: {
                        title: value,
                        questions: []
                    }
                });
                break;
        }
    };

    render() {
        const {navigation} = this.props;

        return (

            <View>
                <Text style={styles.inputField}>What is the title of the new deck?: </Text><TextInput placeholder='Title of new deck' value={this.state.newDeck.title} style={styles.inputField} name='question' onChange={(e) => this.handleChange(e.nativeEvent.text, 'title')}></TextInput>

                <TouchableOpacity style={styles.btnSubmit} onPress={(e) => this.handleSubmit(e, this.state.newDeck, navigation)}>
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
        addNewDeck: (data) => dispatch(actions.addNewDeck(data))

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewDeck)

NewDeck.propTypes = {
    //decks: PropTypes.object.isRequired,
}

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