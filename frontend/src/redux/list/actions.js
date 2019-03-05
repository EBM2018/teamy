import { ACTIONS } from "./constants";
import {data_list} from "../../__mock-data__/data_list"

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

    const list = data_list.data
    console.log("liste", list)
    dispatch(SET_LISTS(list))
}
export const postList = (newList) => async (dispatch) => {

    //TODO : brancher la variable list à l'API

    dispatch(POST_LIST(newList))
}


