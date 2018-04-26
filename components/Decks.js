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

    componentDidMount () {
        // const { dispatch } = this.props;
        // debugger;
        // fetchResults()
        //     .then((decks) => dispatch(actions.loadDecks(decks)))
        //     .then(({ decks }) => {
        //         debugger;
        //         console.log(decks);
        //         this.setState(() => ({ decks }))
        //     })
        //     .then(() => this.setState(() => ({ready: true})))
    }

    render() {
        const {  } = this.state;
        const {navigation} = this.props;

        const decks = this.props.decks || navigation.state.params.decks || {};
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
        // // actions: bindActionCreators(actions, dispatch),
        addNewDeck: (data) => dispatch(actions.addNewDeck(data)),
        // editPost: (data) => dispatch(actions.editPost(data)),
        // deletePost: (data) => dispatch(actions.deletePost(data)),
        // addCommentToPost: (data) => dispatch(actions.addCommentToPost(data)),
        // editComment: (data) => dispatch(actions.editComment(data)),
        // voteComment: (data) => dispatch(actions.voteComment(data)),
        // votePost: (data) => dispatch(actions.votePost(data)),
        // deleteComment: (data) => dispatch(actions.deleteComment(data)),
        // //selectCategory: (data) => dispatch(actions.selectCategory(data)),
        // loadPostsForCategory: (data) => dispatch(actions.loadPostsForCategory(data)),
        // loadSinglePost: (data) => dispatch(actions.loadSinglePost(data)),
        // loadingCommentsToPost: (data) => dispatch(actions.loadingCommentsToPost(data))


    }
}

export default connect(
    mapStateToProps,
)(Decks)

Decks.propTypes = {
    decks: PropTypes.object.isRequired,
}