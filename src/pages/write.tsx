import React, { useEffect, useState } from 'react';
import { useIdentityContext } from 'react-netlify-identity-widget';
import handle from 'await-error-handle';
import { styled } from '../theme/index';
import { upsertRecord, getRecords, Record as RecordType } from '../models/records';
import Layout from '../components/Layout';
import Container from '../components/Container';
import Banner from '../components/Banner';
import Record from '../components/Record';
import RecordForm from '../components/RecordForm';
import Timeline from '../components/Timeline';
import RecordsTimeline from '../components/RecordsTimeline';

const StyledP = styled.p`
  color: #555;
  font-family: ${props => props.theme.typography.fontFamily};
  line-height: 1.4;
  text-align: center;
`;

function getBlankDay(date: Date) {
  return {
    content: '',
    day: date.getDate(),
    month: date.getMonth(),
    year: date.getFullYear()
  }
}

function getCalendarDay(date: Date, records: RecordType[] | undefined) {
  if (!records || !records.length) return [getBlankDay(date)];

  const thisCalendarDay = records
    .filter(({ day, month }) => day === date.getDate() && month === date.getMonth())
    .sort((a, b) => b.year - a.year);

  const includesToday = thisCalendarDay.length && thisCalendarDay[0].year === new Date().getFullYear();

  if (includesToday) return thisCalendarDay;

  return [
    getBlankDay(date),
    ...thisCalendarDay
  ];
}

export default function Write() {
  const { user } = useIdentityContext();

  const [date, setDate] = useState(new Date());
  const [error, setError] = useState<string | null>(null);
  const [records, setRecords] = useState<RecordType[]>();
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    async function fetchRecords() {
      const [err, res] = await handle(getRecords(user?.app_metadata?.db_token));
      if (err) {
        setError('We had trouble fetching your notes. Please try again later.');
        return;
      }
      setRecords(res);
    }
    fetchRecords();
  }, []);

  async function onSave(newNote: string) {
    setSaving(true);
    const newRecord = {
      content: newNote,
      day: date.getDate(),
      month: date.getMonth(),
      year: date.getFullYear()
    };
    const [err] = await handle(upsertRecord({
      data: newRecord,
      secret: user?.app_metadata?.db_token
    }));

    if (err) {
      setError('We had trouble saving your note. Please try again later.');
    }

    const existingRecord = !err &&
      records?.find(({ day, month, year }) => (
        day === newRecord.day &&
        month === newRecord.month &&
        year === newRecord.year
      ));
    
    if (existingRecord) {
      existingRecord.content = newNote;
    } else {
      setRecords([...(records || []), newRecord]);
    }

    setSaving(false);
  }

  const [today, ...rest] = getCalendarDay(date, records);

  return (
    <Layout>
      <Timeline date={date} onChange={setDate} />
      <RecordsTimeline records={records} />
      <Container>
        {error ? <Banner>{ error }</Banner> : null}
        <RecordForm
          loading={!records}
          onSave={onSave}
          saving={saving}
          value={today.content}
        />
        {rest.length ? rest.map(Record) : (
          <StyledP>
            Wondering what you were doing this time last year?<br />
            Make a note above, and it will appear here next year.
          </StyledP>
        )}
      </Container>
    </Layout>
  );
}
