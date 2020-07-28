import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 950px;
  margin: 32px auto;
  height: 100vh;
`;

export const Header = styled.header``;

export const Toolbar = styled.div`
  margin-top: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SearchBar = styled.div`
  flex: 1;
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

export const AddNewToolButton = styled.button`
  background: #365df0;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  transition: background 0.2s;

  &:hover {
    background: #2f55cc;
  }

  &:active {
    background: #244aa8;
  }

  svg {
    margin-right: 8px;
  }
`;
