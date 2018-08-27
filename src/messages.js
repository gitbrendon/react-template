let messages = {}
messages.CURRENT_TIME = time => {
  return `The current time is ${time}`
}
messages.HELLO_WORLD = 'Hello, world!'

module.exports = {
  messages
}
