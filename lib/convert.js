const debug = require('debug')('tocsv:lib:convert')
const CsvStream = require('./CsvStream')

const convert = {
  toCsv: (data, filename) => {
    debug('toCsv parameter: filename %s', filename)
    const csvStream = new CsvStream(filename)
    return csvStream.writeAsync(data)
  }
}

module.exports = convert

// CSV.parse(obj)