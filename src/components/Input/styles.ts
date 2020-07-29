import styled, { css } from 'styled-components';

interface ContainerProps {
  error: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  margin: 8px 0;

  span {
    margin-bottom: 6px;
    opacity: 0.9;
  }

  input,
  textarea {
    background: #f5f4f6;
    border: solid 1px #ebeaed;
    height: 50px;
    border-radius: 5px;
    padding: 22px 13px;
    transition: background 0.2s;

    &:focus {
      background: #ebeaed;
    }

    &::placeholder {
      color: #b1adb9;
    }

    ${({ error }) =>
      error &&
      css`
        color: #f95e5a;
        background: #feefee;
        border: solid 1px #f95e5a;

        &::placeholder {
          color: #f95e5a;
        }
      `}
  }
`;

export const Error = styled.span`
  color: #f95e5a;
  align-self: flex-end;
  font-size: 14px;
  margin-top: 5px;
`;
