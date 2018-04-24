import {getFlashcardsData} from './helpers'
import { AsyncStorage } from 'react-native'

export const STORAGE_KEY = 'Flashcards:decks';


function setData() {
    const { React, JavaScript } = getFlashcardsData();

    const data = {
        React: React,
        JavaScript: JavaScript
    }

    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data)).then((res) =>{
        console.log(res);
    })

    return data;
}


export function getResults () {
    return setData();
}