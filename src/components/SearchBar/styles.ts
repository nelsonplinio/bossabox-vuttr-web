import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  margin-right: 8px;
  input {
    width: 100%;
    max-width: 360px;
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
  }
`;
