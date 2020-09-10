const chalk = require('chalk');

setupFaunaDB(getFaunaSecret())
  .then(() => {
    console.log(chalk.green('Bootstrapping DB scheamas was successful!'));
  })
  .catch(err => {
    console.log(
      chalk.red.bold(
        `There was an issue bootstrapping the DB scheamas due to: ${err}`
      )
    );
    process.exit(1);
  });

function getFaunaSecret() {
  if (!process.env.FAUNADB_SERVER_SECRET) {
    console.log(
      chalk.bold.red(
        'Required \'FAUNADB_SERVER_SECRET\' environment variable not found.'
      )
    );
    console.log(
      chalk.yellow.bold(`
    ~~~~~~~~~~~~~~~~~~~~~~~~~
    You can create a your fauna db server secret by following this:
      - https://docs.fauna.com/fauna/current/tutorials/authentication/user.html#setup-server-key
    
    Then ensure you have added the server secret into your Netlify site as an environment variable 
    with the key 'FAUNADB_SERVER_SECRET'.
    ~~~~~~~~~~~~~~~~~~~~~~~~~~
      `)
    );
    process.exit(1);
  }

  console.log(
    chalk.green(
      'Found FAUNADB_SERVER_SECRET environment variable in Netlify site'
    )
  );
  return process.env.FAUNADB_SERVER_SECRET;
}