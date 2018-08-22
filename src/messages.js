let messages = {}
messages.CURRENT_TIME = time => {
  return `The current time is ${time}`
}
messages.HELLO_WORLD = 'Hello, world!'
messages.NO_METAMASK_MSG = 'MetaMask not detected'

module.exports = {
  messages
}
