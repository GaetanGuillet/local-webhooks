const SmeeClient = require('smee-client')

const smee = new SmeeClient({
  source: 'https://smee.io/${SMEE_IO_SOURCE}',
  target: 'http://localhost:3000/events',
  logger: console
})

const events = smee.start()
