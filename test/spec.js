const convert = require('../')

const filepath = 'test.csv'
const data = {'a': 1, 'b': 2}
convert.toCsv(data, filepath)
  // .then(() => {
  //   console.log('done')
  // })
  // .catch((err) => {
  //   console.log('err is ' + err)
  // })