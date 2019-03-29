import { ACTIONS } from "./constants";
const request = require('superagent');


export const GET_SEANCE_FROM_GROUP = (updatedGroup) => ({
  type : ACTIONS.GET_SEANCE_FROM_GROUP,
  seance
})







export const getSeanceFromGroup = (groupId) => async (dispatch) => {
  //let groups = [];
  request
    .get('/api/groups/'+ groupId +'/seances/')
    .set('Accept', 'application/json')
    .then(res => {
      // Do something
     // groups.push(res.body)
      dispatch(GET_SEANCE_FROM_GROUP(res.body))
    }).catch(err => {
    console.log("error : ", err)
    // err.message, err.response
  });
}



