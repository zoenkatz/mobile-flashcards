import { AsyncStorage } from 'react-native'
import {STORAGE_KEY, getResults} from './flash_cards'


export function fetchResults () {
    return AsyncStorage.getItem('Flashcards:decks')
        .then(getResults)
}

export function getDecks() {
    return AsyncStorage.getItem('Flashcards:decks').then((res)=> {

        const data = JSON.parse(res);
        console.log(data);
        return data;
    })
};

export function getDeck(key) {
    return AsyncStorage.getItem(key)
        .then((results) => {
            const data = JSON.parse(results)
            data[key] = undefined
            delete data[key]
            AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data))
        })
}


export function saveDeck(newDeck) {
    return AsyncStorage.getItem('Flashcards:decks').then((res)=> {

        const decks = JSON.parse(res);
        console.log(decks);

        const newDeckObj = {
            [newDeck.title]:{
                ...newDeck
            }
        };

        const newDecks = Object.assign(newDeckObj, decks);
        AsyncStorage.setItem('Flashcards:decks', JSON.stringify(newDecks));

        return newDecks;
    })
}

export function saveCard(deck, card) {
    return AsyncStorage.getItem('Flashcards:decks').then((res)=> {

        const decks = JSON.parse(res);
        console.log(decks);
        decks[deck.title].questions.push(card);
        AsyncStorage.setItem('Flashcards:decks', JSON.stringify(decks));

        return decks;
    });
}