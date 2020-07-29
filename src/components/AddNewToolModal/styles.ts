import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 22px;

  button {
    border: none;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      font-size: 28px;
      opacity: 0.5;
      transition: opacity 0.3s;
    }

    &:hover svg {
      opacity: 1;
    }
  }
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 16px;
  align-items: center;
  justify-content: flex-end;
`;
