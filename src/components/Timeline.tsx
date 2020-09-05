import React from 'react';
import { styled } from '../theme/index';

interface Props {
  date: Date,
  onChange: (newDate: Date) => void
}

const StyledContainer = styled.div`
  margin-bottom: 60px;
  padding: 0 16px;
  width: 100%;
`;

const StyledDateContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
`;

const StyledButton = styled.button`
  background-color: ${props => props.theme.palette.primary};
  border: 0;
  border-radius: 8px;
  cursor: pointer;
  display: block;
  height: 44px;
  position: relative;
  transition: background-color 100ms ease-in-out;
  width: 44px;

  &:hover, &:focus {
    background-color: ${props => props.theme.palette.primaryHover};
  }

  &:after {
    content: "";
    border-style: solid;
    height: 0;
    left: 50%;
    position: absolute;
    top: 50%;
    width: 0;
  }
`;

const StyledButtonLeft = styled(StyledButton)`
  &:after {
    border-color: transparent #333 transparent transparent;
    border-width: 8px 16px 8px 0;
    transform: translate(-60%, -50%);
  }
`;

const StyledButtonRight = styled(StyledButton)`
  &:after {
    border-color: transparent transparent transparent #333;
    border-width: 8px 0 8px 16px;
    transform: translate(-40%, -50%);
  }
`;

const StyledDate = styled.p`
  font-family: ${props => props.theme.typography.fontFamily};
  font-weight: 700;
  margin: 0;
  padding: 0 16px;
  text-align: center;
`;

const StyledTimeline = styled.div`
  display: block;
  height: 20px;
  position: relative;
  width: 100%;
`;

interface Week {
  left: number
}

const StyledWeek = styled.div<Week>`
  border-left: solid 1px #e0e0e0;
  bottom: 0;
  height: 75%;
  left: ${props => props.left * (100 / 52)}%;
  position: absolute;
`;

interface Day {
  left: number
}

const StyledDay = styled.div<Day>`
  border-left: solid 1px #e0e0e0;
  bottom: 0;
  height: 25%;
  left: ${props => props.left * (100 / 365)}%;
  position: absolute;
`;

interface Indicator {
  dayNumber: number
}

const StyledIndicator = styled.div<Indicator>`
  border-style: solid;
  border-width: 10px 10px 0 10px;
  border-color: ${props => props.theme.palette.primaryHover} transparent transparent transparent;
  bottom: 100%;
  height: 0;
  left: ${props => (props.dayNumber / 365) * 100}%;
  position: absolute;
  transform: translateX(-10px);
  width: 0;
`;

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function daysIntoYear(date: Date) {
  return (Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) - Date.UTC(date.getFullYear(), 0, 0)) / 24 / 60 / 60 / 1000;
}

function nth(d: number) {
  if (d > 3 && d < 21) return 'th';
  switch (d % 10) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default: return 'th';
  }
}

export default function Timeline({
  date,
  onChange
}: Props) {
  function changeDate(diff: number) {
    const newDate = new Date();
    newDate.setTime(date.getTime() + (diff * 24 * 60 * 60 * 1000));
    onChange(newDate);
  }

  return (
    <StyledContainer>
      <StyledDateContainer>
        <StyledButtonLeft onClick={() => changeDate(-1)} />
        <StyledDate>{`${date.getDate()}${nth(date.getDate())} ${months[date.getMonth()]}`}</StyledDate>
        <StyledButtonRight onClick={() => changeDate(1)} />
      </StyledDateContainer>
      <StyledTimeline>
        <StyledIndicator dayNumber={daysIntoYear(date)} />
        {new Array(52).fill(0).map((_, index) => <StyledWeek key={index} left={index} />)}
        {new Array(365).fill(0).map((_, index) => <StyledDay key={index} left={index} />)}
      </StyledTimeline>
    </StyledContainer>
  );
}
