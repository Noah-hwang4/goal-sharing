import axios from 'axios'
import app from '../assets/js/app.js'

export default {
  getGoalList,
  saveGoal,
  saveAttainment
}

function getGoalList (prms) {
  return axios.get(app.origins + '/goal', { params: prms })
}

function saveGoal (prms) {
  return axios.post(app.origins + '/goal', prms)
}

function saveAttainment (prms) {
  return axios.put(app.origins + '/goal' + '/' + prms.id, prms)
}
