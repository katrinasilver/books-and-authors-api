const fs = require('fs')
const path = require('path')

const filesync = (action, file) => {
  if (action === 'read') {
    return JSON.parse(fs.readFileSync(path.join(__dirname, './data') + file, 'utf8'))
  }
  if (action === 'write') {
    fs.writeFileSync(`./data/${value}`, JSON.stringify(value))
  }
}

module.exports = {
  filesync
}
