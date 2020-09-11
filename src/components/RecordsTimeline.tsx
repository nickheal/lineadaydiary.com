import React, { useEffect, useRef } from 'react';
import { useTheme } from 'emotion-theming';
import { styled } from '../theme/index';
import { Record } from '../models/records';

const ONE_DAY = 1000 * 60 * 60 * 24;

function getDayOutOf366(day: number, month: number, year: number) {
  const now = new Date(year, month, day);
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now.getTime() - start.getTime();
  return Math.floor(diff / ONE_DAY) - 1;
}

const Container = styled.section`
  height: 56px;
  margin-bottom: 32px;
  padding: 0 4px;
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

function drawMarkers(ctx: CanvasRenderingContext2D) {
  ctx.strokeStyle = '#aaa';
  ctx.globalAlpha = 1;
  ctx.lineWidth = 3;
  const spacing = RESOLUTION / 366;
  const leapYearTime = new Date(2020, 0, 1).getTime();
  for (let i = 0; i < 366; i++) {
    const dayOfMonth = new Date(leapYearTime + (i * ONE_DAY)).getDate();
    ctx.beginPath();
    const x = i * spacing;
    const yStart = dayOfMonth === 1 ? 0 : 40;
    ctx.moveTo(x, yStart);
    ctx.lineTo(x, 60);
    ctx.stroke(); 
  }
}

function drawRecords(ctx: CanvasRenderingContext2D, records: Record[], color: string) {
  ctx.fillStyle = color;
  ctx.globalAlpha = 1;
  const currentYear = new Date().getFullYear();
  records.map(({ day, month, year }) => {
    ctx.globalAlpha = 1 - ((currentYear - year) / 6);
    ctx.fillRect((getDayOutOf366(day, month, year) / 366) * RESOLUTION, ((currentYear - year) * 20) + 80, RESOLUTION / 500, 15);
  });
}

export default function RecordsTimeline({
  records = []
}: Props) {
  const theme = useTheme();
  const canvas = useRef<HTMLCanvasElement>();

  useEffect(() => {
    if (!canvas?.current?.getContext) {
      return;
    }
    const canvasEl = canvas.current;
    const ctx = canvasEl.getContext('2d');
    drawMarkers(ctx);
    drawRecords(ctx, records, theme.palette.primaryHover);
    return () => {
      ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
    }
  }, [records]);

  return (
    <Container>
      <Canvas height="224px" width={`${RESOLUTION}px`} ref={canvas} />
    </Container>
  );
}
