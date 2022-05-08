import argon2 from '@node-rs/argon2'

const result = await argon2.hash('abcd', {
  // NOTE: cannot designate salt
  memoryCost: 4096,
  timeCost: 3,
  outputLen: 32,
  parallelism: 1,
  algorithm: argon2.Algorithm.Argon2i,
})

console.log(result)
