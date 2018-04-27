import React from 'react';
import { StyleSheet, Text, View , Platform, StatusBar} from 'react-native';
import { Provider } from 'react-redux'
import reducer from './reducers'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { FontAwesome, Ionicons , MaterialCommunityIcons, MaterialIcons, Entypo} from '@expo/vector-icons'
import { Constants } from 'expo'
import { blue, white } from './utils/colors'
import Decks from './components/Decks'
import Quiz from './components/Quiz'
import NewDeck from './components/NewDeck'
import DeckView from './components/DeckView'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NativeRouter, Route, Link } from 'react-router-native'
import thunk from 'redux-thunk';
import * as actions from './actions/index.js'
import { createStore, applyMiddleware, compose } from 'redux'
import NewQuestion from "./components/NewCard/NewQuestion";
import Answer from "./components/NewCard/Answer";
import Question from "./components/NewCard/Question";
import { setLocalNotification } from './utils/SetInitialData'
import * as api from './utils/api'


function StatusMainBar (bar, ...props){
    return (
        <View style={{backgroundColor: bar.backgroundColor, height: Constants.statusBarHeight }}>
            <StatusBar translucent backgroundColor={bar.backgroundColor} {...props} />
        </View>
    )
}

const DecksList = TabNavigator({
    React: {
        screen: DeckView,
    },
    JavaScript: {
        screen: DeckView
    }
})

const Tabs = TabNavigator({
    Decks: {
        screen: Decks,
        navigationOptions: {
            tabBarLabel: 'Decks',
            tabBarIcon: ({tintColor}) => <MaterialCommunityIcons name='cards-outline' size={35} color={tintColor}/>
        },
    },

    NewDeck:{
        screen: NewDeck,
        navigationOptions: {
            tabBarLabel: 'Add new deck',
            tabBarIcon: ({ tintColor }) => <Entypo name='new-message' size={35} color={tintColor} />
        },
    }
}, {
    navigationOptions: {
        header: null
    },
    tabBarOptions: {
        activeTintColor: Platform.OS === 'ios' ? blue : white,
        style: {
            height: 56,
            backgroundColor: Platform.OS === 'ios' ? white : blue,
            shadowColor: 'rgba(0, 0, 0, 0.24)',
            shadowOffset: {
                width: 0,
                height: 3
            },
            shadowRadius: 6,
            shadowOpacity: 1
        }
    }
})

const Navigator = StackNavigator({
    Home: {
        screen: Tabs,
    },
    DeckView: {
        screen: DeckView
    },
    Quiz: {
        screen: Quiz
    },
    NewQuestion: {
        screen: NewQuestion
    },
    NewDeck: {
        screen: NewDeck
    },
    Answer: {
        screen: Answer
    },
    Question: {
        screen: Question
    },
    Decks: {
        screen: Decks
    }
})

export default class App extends React.Component {

    componentDidMount() {
        api.fetchResults().then(() => {
            setLocalNotification()
        });
    }

    render() {
        return (
            <Provider store={store}>
                <View style={{flex: 1}}>
                    <StatusMainBar backgroundColor={blue} barStyle="light-content" />
                    <Navigator />
                </View>
            </Provider>
        )
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
    return createStore(
        reducer,
        composeEnhancers(
            applyMiddleware(thunk)
        )
    )
};

const store = configureStore();

store.dispatch(actions.loadDecks());

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});