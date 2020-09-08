import faunadb from 'faunadb';

const q = faunadb.query;

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
  data: Record
}

interface RecordResponse {
  data: RecordData[]
}

export async function getRecords(secret: string) {
  const client = new faunadb.Client({ secret });

  const response = await client
    .query<RecordResponse>(
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
