const argon2 = require('argon2-browser')

argon2.hash({
  pass: 'abcd',
  salt: 'jr84d12jdbcz',
  type: argon2.ArgonType.Argon2i,
  time: 3,
  mem: 4096,
  hashLen: 32,
  parallelism: 1,
}).then(result => {
  console.log(result.hash)
})
