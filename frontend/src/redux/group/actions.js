import { ACTIONS } from "./constants";
import {data_group} from "../../__mock-data__/data_group"

export const SET_GROUPS = (group) => ({
    type: ACTIONS.SET_GROUPS,
    group
})

export const POST_GROUP = (newGroup) => ({
    type : ACTIONS.POST_GROUP,
    newGroup
})




export const getGroups = () => async (dispatch) => {

    //TODO : brancher la variable list à l'API

    const group = data_group.data
    console.log("groupe", group)
    dispatch(SET_GROUPS(group))
}
export const postGroup = (newGroup) => async (dispatch) => {

    //TODO : brancher la variable list à l'API

    dispatch(POST_GROUP(newGroup))
}


