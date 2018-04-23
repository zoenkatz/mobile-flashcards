import { combineReducers } from 'redux'
//import * as actionTypes from '../actions/actionTypes.js'
import { reducer as formReducer } from 'redux-form'
import _ from 'lodash'


// const initialCommentState = {
//     id: null,
//     parentId: null,
//     timestamp: null,
//     body: null,
//     author: null,
//     voteScore: null,
//     deleted: null,
//     parentDeleted: null
// };
//
// function comments(state = [], action){
//     switch (action.type) {
//         case actionTypes.LOAD_COMMENTS_SUCCESS:
//             return action.data;
//         case actionTypes.ADD_COMMENT_TO_POST_SUCCESS:
//             return state.concat(action.data);
//         case actionTypes.DELETE_COMMENT_SUCCESS:
//             return _.reject(state, {'id': action.data.id});
//         case actionTypes.VOTE_COMMENT_SUCCESS:
//             return _.reject(state, {'id': action.data.id}).concat(action.data);
//         case actionTypes.EDIT_COMMENT_SUCCESS:
//             return _.reject(state, {'id': action.data.id}).concat(action.data);
//         case actionTypes.LOAD_SINGLE_POST_SUCCESS:
//             return state;
//         default :
//             return state
//     }
// }
//
// function categories(state = [], action) {
//     switch (action.type) {
//         case actionTypes.LOAD_CATEGORIES_SUCCESS:
//             return action.categories.categories;
//
//         default :
//             return state
//     }
// }
//

let initialDecksState = {
    javascript:{

    },
    react: {}
};

function decks(state = initialDecksState, action) {
    debugger;
    switch (action.type) {
        case 'LOAD_DECKS_SUCCESS':
            return action.decks;

        default :
            return state
    }
}


export default combineReducers({
    decks
})