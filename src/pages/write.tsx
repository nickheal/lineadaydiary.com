import React, { useEffect, useState } from 'react';
import { useIdentityContext } from 'react-netlify-identity-widget';
import { createRecord, getRecords, Record as RecordType } from '../models/records';
import Layout from '../components/Layout';
import Container from '../components/Container';
import Record from '../components/Record';
import RecordForm from '../components/RecordForm';
import Timeline from '../components/Timeline';

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
    thisCalendarDay
  ];
}

export default function Write() {
  const { user } = useIdentityContext();

  const [date, setDate] = useState(new Date());
  const [records, setRecords] = useState<RecordType[]>();

  useEffect(() => {
    async function fetchRecords() {
      setRecords(await getRecords(user?.app_metadata?.db_token));
    }
    fetchRecords();
  }, []);

  function onSave(newNote: string) {
    const newRecord = {
      content: newNote,
      day: date.getDate(),
      month: date.getMonth(),
      year: date.getFullYear()
    };
    createRecord({
      data: newRecord,
      secret: user?.app_metadata?.db_token
    });
    setRecords([...records, newRecord]);
  }

  const [today, ...rest] = getCalendarDay(date, records);

  return (
    <Layout>
      <Timeline date={date} onChange={setDate} />
      <Container>
        <RecordForm
          loading={!records}
          onSave={onSave}
          value={today.content}
        />
        {rest.length ? rest.map(Record) : null}
      </Container>
    </Layout>
  );
}
