import React from 'react';
import { FiArrowLeft, FiArrowRight, FiChevronDown } from 'react-icons/fi';
import { useTheme } from 'emotion-theming';
import { styled } from '../theme/index';
import VisuallyHidden from './VisuallyHidden';

interface Props {
  date: Date,
  onChange: (newDate: Date) => void
}

const StyledContainer = styled.section`
  margin-bottom: 4px;
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
  background-color: white;
  border: 0;
  border-radius: 8px;
  cursor: pointer;
  display: block;
  height: 44px;
  position: relative;
  transition: background-color 100ms ease-in-out, transform 100ms ease-in-out;
  width: 44px;

  &:hover, &:focus {
    background-color: ${props => props.theme.palette.primary};
  }
`;

const StyledButtonLeft = styled(StyledButton)`
  &:hover, &:focus {
    & svg {
      transform: translateX(-2px);
    }
  }
`;

const StyledButtonRight = styled(StyledButton)`
  &:hover, &:focus {
    & svg {
      transform: translateX(2px);
    }
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

const StyledIndicator = styled(FiChevronDown)<Indicator>`
  bottom: 100%;
  left: ${props => (props.dayNumber / 365) * 100}%;
  position: absolute;
  transform: translateX(-10px);
  transition: left 100ms ease-in-out;
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
  const {
    palette: {
      primaryHover
    }
  } = useTheme();

  function changeDate(diff: number) {
    const newDate = new Date();
    newDate.setTime(date.getTime() + (diff * 24 * 60 * 60 * 1000));
    onChange(newDate);
  }

  return (
    <StyledContainer>
      <StyledDateContainer>
        <StyledButtonLeft onClick={() => changeDate(-1)}>
          <FiArrowLeft color={primaryHover} size={24} />
          <VisuallyHidden>Previous day</VisuallyHidden>
        </StyledButtonLeft>
        <StyledDate>{`${date.getDate()}${nth(date.getDate())} ${months[date.getMonth()]}`}</StyledDate>
        <StyledButtonRight onClick={() => changeDate(1)}>
          <FiArrowRight color={primaryHover} size={24} />
          <VisuallyHidden>Next day</VisuallyHidden>
        </StyledButtonRight>
      </StyledDateContainer>
      <StyledTimeline>
        <StyledIndicator color={primaryHover} dayNumber={daysIntoYear(date)} size={24} />
        {new Array(52).fill(0).map((_, index) => <StyledWeek key={index} left={index} />)}
        {new Array(365).fill(0).map((_, index) => <StyledDay key={index} left={index} />)}
      </StyledTimeline>
    </StyledContainer>
  );
}
