const fs = require('fs')
const path = require('path')

const filesync = (action, file, val) => {
  if (action === 'read') {
    val
    return JSON.parse(fs.readFileSync(path.join(__dirname, './data') + file, 'utf8'))
  }
  if (action === 'write') {
    fs.writeFileSync(path.join(__dirname, './data') + file, JSON.stringify(val, null, 4))
  }
}

module.exports = {
  filesync
}
