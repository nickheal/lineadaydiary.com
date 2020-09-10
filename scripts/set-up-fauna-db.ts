/* idempotent operation to bootstrap database */
const faunadb = require('faunadb');
const chalk = require('chalk');

const q = faunadb.query;

/*  */
export default function setupFaunaDB(secret: string) {
  console.log(chalk.yellow('Attempting to create the DB schemas...'));

  const client = new faunadb.Client({ secret });

  /* Based on your requirements, change the schema here */
  return client
    .query(
      q.CreateCollection({
        name: 'users'
      })
    )
    .then(() =>
      client.query(
        q.Do(
          q.CreateCollection({
            name: 'records',
            permissions: {
              create: q.Collection('users')
            }
          })
        )
      )
    )
    .then(() =>
      client.query(
        q.Do(
          q.CreateIndex({
            name: 'users_by_id',
            source: q.Collection('users'),
            terms: [
              {
                field: ['data', 'id']
              }
            ],
            unique: true
          }),
          q.CreateIndex({
            // this index is optional but useful in development for browsing users
            name: `all_users`,
            source: q.Collection('users')
          }),
          q.CreateIndex({
            name: 'all_records',
            source: q.Collection('records'),
            permissions: {
              read: q.Collection('users')
            }
          }),
          q.CreateIndex({
            name: 'records_by_date',
            source: q.Collection('records'),
            permissions: {
              read: q.Collection('users')
            },
            terms: [
              {
                field: ['data', 'day']
              },
              {
                field: ['data', 'month']
              },
              {
                field: ['data', 'year']
              },
              {
                field: ['data', 'owner']
              }
            ],
            unique: true
          })
        )
      )
    )
    .catch(e => {
      if (e.message === 'instance already exists') {
        console.log('Schemas are already created... skipping');
        process.exit(0);
      } else {
        console.error('There was a problem bootstrapping the db', e);
        throw e;
      }
    });
}


