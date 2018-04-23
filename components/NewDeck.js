import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

class NewDeck extends Component{
    state = {

    }

    render() {
        const {  } = this.props
        const {  } = this.state


        return (
            <View></View>
        )
    }
}

function mapStateToProps (entries) {
    return {
        entries
    }
}

export default connect(
    mapStateToProps,
)(NewDeck)