import React, { useEffect } from 'react';
import { FiXCircle } from 'react-icons/fi';
import { useTheme } from 'emotion-theming';
import { styled } from '../theme/index';

const StyledContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 1;
`;

const StyledWrapper = styled.div`
  background-color: #fff;
  border-radius: 8px;
  left: 50%;
  max-height: 90vh;
  overflow-y: scroll;
  padding: 48px 48px 24px 48px;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const StyledClose = styled.button`
  background: 0;
  border: 0;
  cursor: pointer;
  padding: 0;
  position: absolute;
  right: 16px;
  top: 16px;
`;

const ESCAPE_KEY = 27;

interface Props {
  children: React.ReactNode;
  onClose: () => void;
}

export default function Modal({
  children,
  onClose
}: Props) {
  const {
    palette: {
      primaryHover
    }
  } = useTheme();

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.keyCode === ESCAPE_KEY) {
        onClose();
      }
    }

    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
    }
  }, []);

  return (
    <StyledContainer>
      <StyledWrapper>
        <StyledClose onClick={onClose}>
          <FiXCircle color={primaryHover} size={24} />
        </StyledClose>
        { children }
      </StyledWrapper>
    </StyledContainer>
  );
}
