import argon2 from "argon2-browser";


async function main() {
  const hashRes = await argon2.hash({
    'pass': 'abcd',
    'salt': 'jr84d12jdbcz',
    'type': argon2.ArgonType.Argon2i,
    'time': 3,
    'mem': 4096,
    'hashLen': 32,
    'parallelism': 1,
  });

  const sessionKey = hashRes.hash;
}

main();
