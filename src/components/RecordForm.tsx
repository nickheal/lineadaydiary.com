import React, { useEffect, useState } from 'react';
import { FiSave, FiThumbsUp } from 'react-icons/fi';
import { styled } from '../theme/index';
import Button from './Button';
import IconAndText from './IconAndText';

const StyledForm = styled.form`
  margin-bottom: 60px;
  text-align: center;
`;

const StyledLegend = styled.legend`
  font-family: ${props => props.theme.typography.fontFamily};
  margin-bottom: 16px;
`;

const StyledTextArea = styled.textarea`
  background: repeating-linear-gradient(
    transparent,
    transparent 31px,
    #f0f0f0 31px,
    #f0f0f0 32px,
    transparent 32px,
    transparent 34px
  );
  border: 0;
  color: ${props => props.theme.typography.scribe.color};
  display: block;
  font-family: ${props => props.theme.typography.scribe.fontFamily};
  font-weight: ${props => props.theme.typography.scribe.fontWeight};
  font-size: 24px;
  height: 168px;
  line-height: 34px;
  margin: 0 auto 16px;
  max-width: 640px;
  padding: 0 8px;
  resize: none;
  width: 100%;

  &:focus {
    outline: 0;
  }
`;

const StyledConfirmation = styled.div`
  display: inline-block;
  font-family: ${props => props.theme.typography.fontFamily};
  margin: 0;
  padding: 13px 24px;

  & > * {
    margin-right: 6px;
  }
`;

interface Props {
  loading: boolean;
  onSave: (newNote: string) => void;
  value: string;
}

export default function RecordForm({
  loading,
  onSave,
  value
}: Props) {
  const [note, setNote] = useState(value);

  useEffect(() => {
    setNote(value);
  }, [value]);

  function onSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    onSave(note);
  }

  const changedSinceLastSync = note !== value;

  return (
    <StyledForm onSubmit={onSubmit}>
      <StyledLegend>Write a note about today</StyledLegend>
      <StyledTextArea
        disabled={loading}
        maxLength={250}
        name="todaysNote"
        onChange={(e) => setNote(e.currentTarget.value)}
        value={note}
      />
      {changedSinceLastSync ? (
        <Button disabled={loading}>
          <IconAndText>
            <FiSave />
            <p>save changes</p>
          </IconAndText>
        </Button>
      ) : (
        <StyledConfirmation>
          <IconAndText>
            <FiThumbsUp />
            <p>up to date</p>
          </IconAndText>
        </StyledConfirmation>
      )}
    </StyledForm>
  )
}
