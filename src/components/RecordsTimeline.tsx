import React, { useEffect, useRef } from 'react';
import { useTheme } from 'emotion-theming';
import { styled } from '../theme/index';
import { Record } from '../models/records';

function getDayOutOf365(day, month, year) {
  var now = new Date(year, month, day);
  var start = new Date(now.getFullYear(), 0, 0);
  var diff = now - start;
  var oneDay = 1000 * 60 * 60 * 24;
  var day = Math.floor(diff / oneDay);
  return day;
}

const Container = styled.section`
  height: 32px;
  margin-bottom: 24px;
  padding: 0 16px;
  position: relative;
  width: 100%;
`;

const Canvas = styled.canvas`
  display: block;
  height: 100%;
  width: 100%;
`;

interface Props {
  records: Record[]
}

const RESOLUTION = 3830;

export default function RecordsTimeline({
  records = []
}: Props) {
  const theme = useTheme();
  const canvas = useRef();

  useEffect(() => {
    if (!canvas?.current?.getContext) {
      return;
    }
    const canvasEl = canvas.current;
    const ctx = canvasEl.getContext('2d');
    ctx.fillStyle = theme.palette.primaryHover;
    ctx.globalAlpha = 1;
    const currentYear = new Date().getFullYear();
    records.map(({ day, month, year }) => {
      ctx.globalAlpha = 1 - ((currentYear - year) / 10);
      ctx.fillRect((getDayOutOf365(day, month, year) / 365) * RESOLUTION, (currentYear - year) * 20, RESOLUTION / 500, 15);
    });
    return () => {
      ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
    }
  }, [records]);

  return (
    <Container>
      <Canvas width={`${RESOLUTION}px`} ref={canvas} />
    </Container>
  );
}
