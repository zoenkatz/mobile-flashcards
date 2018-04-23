import { AsyncStorage } from 'react-native'
import { STORAGE_KEY , getResults} from './flash_cards'

export function fetchResults () {
    return AsyncStorage.getItem(STORAGE_KEY)
        .then(getResults)
}

export function getDecks() {
    return AsyncStorage.getItem(STORAGE_KEY).then((res)=> {

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


export function saveDeckTitle(title) {
    return AsyncStorage.setItem(key)
        .then((results) => {
            const data = JSON.parse(results)
            data[key] = undefined
            delete data[key]
            AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data))
        })
}

export function addCardToDeck(title, card) {
    return AsyncStorage.setItem(key)
        .then((results) => {
            const data = JSON.parse(results)
            data[key] = undefined
            delete data[key]
            AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data))
        })
}