import {FETCH_LIST} from "../actions/types";

const initialState = {
    listItem : [],
    item : {}
}

export default function (state= initialState, action){
    switch (action.type) {
        case FETCH_LIST :
            console.log("coucou")
            return {...state,
                listItem: action.text}
        case 'POST_LIST':
            return {...state,
                listItem: action.text}
        default:
            return state
    }
}


