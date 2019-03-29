import { ACTIONS } from "./constants";
const request = require('superagent');


export const UPDATE_GROUP = (updatedGroup) => ({
  type : ACTIONS.UPDATE_GROUP,
  updatedGroup
})

export const GET_GROUP_BY_ID = (group) => ({
  type: ACTIONS.GET_GROUP_BY_ID,
  group
})





export const getGroupById = (groupId) => async (dispatch) => {
  //let groups = [];
  request
    .get('/api/groups/'+ groupId)
    .set('Accept', 'application/json')
    .then(res => {
      // Do something
     // groups.push(res.body)
      dispatch(GET_GROUP_BY_ID(res.body))
    }).catch(err => {
    console.log("error : ", err)
    // err.message, err.response
  });
}


export const updateGroup = () => async  (dispatch) => {

}


