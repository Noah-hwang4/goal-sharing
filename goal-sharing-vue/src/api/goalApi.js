import axios from 'axios'

export default {
  getGoalList
}

function getGoalList (prms) {
  axios.get('/goal', { params: prms })
    .then(response => {
      return response.data
    })
}

function saveGoal (prms) {
  return axios.post('/goal', { params: prms })
}
