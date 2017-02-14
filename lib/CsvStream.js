const fs = require('fs')
const csv = require('fast-csv')
const Promise = require('bluebird')

class CsvStream {

  constructor (filename) {
    this.csvWriteStream = csv.createWriteStream({headers: false})
    this.writableStream = fs.createWriteStream(filename)
  }

  writeAsync (data) {
    this.writableStream.on('finish', () => {
      console.log('done')
    })

    this.csvWriteStream.pipe(this.writableStream)
    // return Promise.promisify(this.csvWriteStream.write)(data)
    // const temp = Promise.promisify(this.csvWriteStream.write)
    Promise.promisify(this.csvWriteStream.write)(data)
    this.csvWriteStream.end()
  }
}

module.exports = CsvStream
