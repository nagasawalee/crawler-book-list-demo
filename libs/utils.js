const cp = require('child_process')
const { resolve } = require('path')

module.exports = {
  startProcess(option) {

    //start a child crawler process
    const script = resolve(__dirname, option.path)
    const child = cp.fork(script, [])

    //invoked flag
    let invoked = false

    //data
    child.on('message', (data) => {
      //console.log(data)
      option.message(data)

    })

    //exit
    child.on('exit', (code) => {
      //process invoked
      if (invoked) {
        return
      }
      //process not invoked
      invoked = true
      option.exit(code)
    })

    //error
    child.on('error', (err) => {

      if (invoked) {
        return
      }

      invoked = true
      option.error(err)
    })
  }
}