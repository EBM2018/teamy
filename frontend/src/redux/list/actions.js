import { ACTIONS } from "./constants";


export const SET_LISTS = (list) => ({
    type: ACTIONS.SET_LISTS,
    list
})

export const POST_LIST = (newList) => ({
    type : ACTIONS.POST_LIST,
    newList
})

export const getLists = () => async (dispatch) => {

    //TODO : brancher la variable list à l'API

    const list = ["liste1", "liste2"]
    dispatch(SET_LISTS(list))
}
export const postList = (newList) => async (dispatch) => {

    //TODO : brancher la variable list à l'API

    dispatch(POST_LIST(newList))
}