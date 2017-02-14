const axios = require('axios')
const model = {
  find: (param) => {
    return axios.get(url)
  },
  hasOne: (modelTo, param) => {
    // param: modelFrom
    database.child(modelA).once('value')
  }
}

module.exports = model
