import * as api from '../utils/api'
import * as actionTypes from './actionTypes.js'

export function loadDecksSuccess(decks) {
    return {type: actionTypes.LOAD_DECKS_SUCCESS, decks};
}

export function loadDecks(){
    return function(dispatch) {
        return api.getDecks().then(decks => {
            dispatch(loadDecksSuccess(decks));
        }).catch(error => {
            throw(error);
        });
    };
};

export function addNewDeckSuccess(decks) {
    return {type: actionTypes.ADD_NEW_DECK_SUCCESS, decks};
}

export function addNewDeck(newDeck){
    return function(dispatch) {
        return api.saveDeck(newDeck).then(decks => {
            dispatch(addNewDeckSuccess(decks));
        }).catch(error => {
            throw(error);
        });
    };
};

export function addNewCardSuccess(deck, decks) {
    return {type: actionTypes.ADD_NEW_CARD_SUCCESS, title: deck.title, decks};
}

export function addNewCard(deck, newCard){
    return function(dispatch) {
        return api.saveCard(deck, newCard).then(decks => {
            dispatch(addNewCardSuccess(deck, decks));
        }).catch(error => {
            throw(error);
        });
    };
};