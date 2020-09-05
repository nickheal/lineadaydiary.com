import React from 'react';
// import { styled } from '../theme/index';
import Layout from '../components/Layout';
import Container from '../components/Container';
import Record, { Props as RecordProps } from '../components/Record';
import RecordForm from '../components/RecordForm';
import Timeline from '../components/Timeline';

export default function Write() {
  const activeDate = new Date();

  const years: RecordProps[] = [{
    content: 'Went for a walk. Met up with the family. Had noodles for dinner.',
    year: 2019
  }, {
    content: 'Went for a walk. Met up with the family. Had noodles for dinner.',
    year: 2018
  }, {
    content: 'Went for a walk. Met up with the family. Had noodles for dinner.',
    year: 2017
  }];

  console.log(activeDate.getFullYear(), years);

  return (
    <Layout>
      <Container>
        <Timeline />
        <RecordForm />
        {years.map(Record)}
      </Container>
    </Layout>
  );
}
