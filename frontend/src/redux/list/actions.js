import {FETCH_LIST} from "./types";
import {POST_LIST} from "./types";





export const fetchLists = () => dispatch => {

    console.log("ca marche")
         dispatch({
             type: FETCH_LIST,
             text: ["liste1", "liste2"],
         })
}

export const postLists = () => dispatch => {
    console.log("ca marche")
    dispatch({
        type: POST_LIST,
        text: "coucou",
    })
}