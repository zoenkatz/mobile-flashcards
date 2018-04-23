import * as api from '../utils/api'
import * as actionTypes from './actionTypes.js'

export function loadDecksSuccess(decks) {
    return {type: actionTypes.LOAD_DECKS_SUCCESS, decks};
}

export function loadDecks(){
    debugger;
    return function(dispatch) {
        return api.getDecks().then(decks => {
            dispatch(loadDecksSuccess(decks));
        }).catch(error => {
            throw(error);
        });
    };
};