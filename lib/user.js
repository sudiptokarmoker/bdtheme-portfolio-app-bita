import crypto from 'crypto'
import { v4 as uuidv4 } from 'uuid'

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

/**
 * User methods. The example doesn't contain a DB, but for real applications you must use a
 * db here, such as MongoDB, Fauna, SQL, etc.
 */

const users = []

export async function createUser({ username, password }) {
  // Here you should create the user and save the salt and hashed password (some dbs may have
  // authentication methods that will do it for you so you don't have to worry about it):
  const salt = crypto.randomBytes(16).toString('hex')
  const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
  /**
   * here inserting data by prisma
   */
  const savedUser = await prisma.user.create({
    data: {
      name: username,
      password: hash,
      email: "test@test.com",
      salt
    }
  })

  // const user = {
  //   id: uuidv4(),
  //   createdAt: Date.now(),
  //   username,
  //   hash,
  //   salt,
  // }

  // This is an in memory store for users, there is no data persistence without a proper DB
  //users.push(user)

  return { username, createdAt: Date.now() }
}

// Here you should lookup for the user in your DB
export async function findUser({ username }) {
  // This is an in memory store for users, there is no data persistence without a proper DB
  //return users.find((user) => user.username === username)
  //console.log(`username is : ${username}`);
  //return true;
  console.log('find user called');
  /*
  const user = await prisma.user.findFirst({
     where: { name: 'test2' },
  });
*/
  console.log(username);
  const user = await prisma.user.findFirst({
    where: {
      name: username,
    },
  })
  
  //console.log(user);
  if(user){
    return {
      id: user.id,
      hash: user.password,
      name: user.name,
      email: user.email,
      salt: user.salt
    };
  }
}

// Compare the password of an already fetched user (using `findUser`) and compare the
// password for a potential match
export function validatePassword(user, inputPassword) {
  //user.hash = crypto.pbkdf2Sync(inputPassword, user.salt, 1000, 64, 'sha512').toString('hex');
  //user.salt = crypto.randomBytes(16).toString('hex');

  console.log("from validated password");
  console.log(user);
  console.log(inputPassword);

  const inputHash = crypto
    .pbkdf2Sync(inputPassword, user.salt, 1000, 64, 'sha512')
    .toString('hex')
  const passwordsMatch = user.hash === inputHash
  
  console.log("password match");
  console.log(passwordsMatch);

  return passwordsMatch
}
