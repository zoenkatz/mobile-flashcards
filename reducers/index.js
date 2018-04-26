import { combineReducers } from 'redux'
//import * as actionTypes from '../actions/actionTypes.js'
import { reducer as formReducer } from 'redux-form'
import _ from 'lodash'

function decks(state = {}, action) {
    switch (action.type) {
        case 'LOAD_DECKS_SUCCESS':
            return action.decks;
        case 'ADD_NEW_DECK_SUCCESS':
            return action.decks;
        case 'ADD_NEW_CARD_SUCCESS':
            return action.decks;

        default:
            return state
    }
}

export default combineReducers({
    decks
})