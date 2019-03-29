import { ACTIONS } from "./constants";
const request = require('superagent');


export const SET_GROUPS = (group) => ({
    type: ACTIONS.SET_GROUPS,
    group
})

export const POST_GROUP = (newGroup) => ({
    type : ACTIONS.POST_GROUP,
    newGroup
})




export const getGroups = () => async (dispatch) => {

  request
    .get('/api/groups/')
    .set('Accept', 'application/json')
    .then(res => {
      // Do something
      dispatch(SET_GROUPS(res.body))
    }).catch(err => {
    console.log("error : ", err)
    // err.message, err.response
  });
}


export const postGroup = (newGroup) => async (dispatch) => {

  request
    .post('/api/groups/new')
    .send({
        "groupName": newGroup,
        "seances": [],
    })
    .set('Accept', 'application/json')
    .then(res => {
      dispatch(POST_GROUP(res.body))
    });


}



