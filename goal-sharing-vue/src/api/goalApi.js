import axios from 'axios'
import app from '../assets/js/app.js'

export default {
  getGoalList,
  saveGoal
}

function getGoalList (prms) {
  return axios.get(app.origins + '/goal', { params: prms })
}

function saveGoal (prms) {
  return axios.post(app.origins + '/goal', prms)
}
