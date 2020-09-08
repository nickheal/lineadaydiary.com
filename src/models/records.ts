import faunadb from 'faunadb';

/* configure faunaDB Client with our secret */
const q = faunadb.query;
// const client = new faunadb.Client({ secret: 'fnED1EGvuEACEwPUFGFVsAYGxy20p9TXyUt3F4ujmbn' });

export interface Record {
  content: string;
  day: number;
  month: number;
  year: number;
}

interface UpsertRecord {
  data: Record;
  secret: string;
}

export async function upsertRecord({
  data,
  secret
}: UpsertRecord) {
  const client = new faunadb.Client({ secret });
  
  const me = q.Identity();

  const response = await client
    .query(
      q.If(
        q.Exists(q.Match(q.Index('records_by_date'), [data.day, data.month, data.year, me])),
        q.Update(q.Select(['ref'], q.Get(q.Match(q.Index('records_by_date'), [data.day, data.month, data.year, me]))), { data }),
        q.Create(q.Collection('records'), {
          data: {
            ...data,
            owner: me
          },
          permissions: {
            read: me,
            write: me
          }
        })
      )
    );

  return response;
}

interface RecordData {
  data: Record[]
}

interface RecordResponse {
  data: RecordData[]
}

export async function getRecords(secret: string) {
  const client = new faunadb.Client({ secret });

  const response = await client
    .query(
      q.Map(q.Paginate(q.Match(q.Ref('indexes/all_records'))), ref =>
        q.Get(ref)
      )
    );

  return response.data.map(({ data }) => ({
    content: data.content,
    day: data.day,
    month: data.month,
    year: data.year
  }));
}

// /**
//  *
//  * @param {object} journal - Fauna journal object
//  */
// export function deleteJournal(journal) {
//   return client
//     .query(
//       q.Map(
//         q.Paginate(
//           q.Match(
//             // get all the posts within a given journal ref
//             q.Index('posts_by_journal'),
//             q.Ref(q.Collection('journals'), journal.ref.value.id)
//           )
//         ),
//         // then delete all of the posts within that given journal ref,
//         // I used a FQL Lambda here because i couldn't get an inline arrow function to work
//         q.Lambda('X', q.Delete(q.Select('ref', q.Get(q.Var('X')))))
//       )
//     )
//     .then(() => {
//       // Once all of the posts in that given journals have been removed we delete the journal itself
//       return client.query(q.Delete(journal.ref));
//     })
//     .catch(err => err);
// }

// /**
//  *
//  * @param {object} journalRefID - faunaDb journal collection reference ID
//  * @param {string} newTitle - new title for journal
//  */
// export function updateJournalTitle(journalRefID, newTitle) {
//   return client
//     .query(
//       q.Update(q.Ref(q.Collection('journals'), journalRefID), {
//         //TODO - should think about spreading a journal object into here. See createJournal method.
//         data: { title: newTitle }
//       })
//     )
//     .then(resp => resp)
//     .catch(err => err);
// }
