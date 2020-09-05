import { default as rawStyled, CreateStyled } from '@emotion/styled';
import palette from './palette';
import typography from './typography';

const theme = {
  palette,
  typography
}

const styled = rawStyled as CreateStyled<typeof theme>;

export {
  styled
};

export default theme;

