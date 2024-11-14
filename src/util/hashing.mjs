import * as bcrypt from 'bcrypt';

async function hashCredentials(username, password) {
  const saltRounds = 10;

  const hashedUsername = await bcrypt.hash(username, saltRounds);
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  console.log('Hashed Username:', hashedUsername);
  console.log('Hashed Password:', hashedPassword);
}

// Get the username and password from command-line arguments
const [username, password] = process.argv.slice(2);

if (!username || !password) {
  console.error('Please provide both a username and password as arguments.');
  process.exit(1);
}

hashCredentials(username, password);
