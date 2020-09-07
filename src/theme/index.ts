import { default as rawStyled, CreateStyled } from '@emotion/styled';
import mq from './mq';
import palette from './palette';
import typography from './typography';

const theme = {
  mq,
  palette,
  typography
}

const styled = rawStyled as CreateStyled<typeof theme>;

export {
  styled
};

export default theme;
