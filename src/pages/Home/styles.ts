import styled, { css } from 'styled-components';

interface ButtonProps {
  primaryNeutral?: boolean;
  quartiaryDanger?: boolean;
}

export const Container = styled.div`
  width: 100%;
  max-width: 982px;
  margin: 32px auto;
  height: 100vh;
  padding: 0 16px;
`;

export const Header = styled.header``;

export const Toolbar = styled.div`
  margin-top: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.button<ButtonProps>`
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  padding: 8px 16px;
  height: 50px;
  border-radius: 5px;
  transition: background 0.2s;

  svg,
  img {
    color: #ffffff;
    margin-right: 8px;
  }

  ${({ primaryNeutral }) =>
    primaryNeutral &&
    css`
      background: #365df0;
      &:hover {
        background: #2f55cc;
      }

      &:active {
        background: #244aa8;
      }
    `}

  ${({ quartiaryDanger }) =>
    quartiaryDanger &&
    css`
      transition: color 0.2s;
      color: #f95e5a;
      background: none;

      svg {
        color: #f95e5a;
      }

      &:hover {
        color: #cc4c4c;

        svg {
          color: #cc4c4c;
        }
      }

      &:active {
        color: #a53f3f;

        svg {
          color: #a53f3f;
        }
      }
    `}
`;

export const List = styled.ul`
  list-style: none;
  margin: 32px 0;
`;

export const ToolCard = styled.li`
  border-radius: 5px;
  background: #fff;
  border: solid 1px #ebeaed;
  box-shadow: 0px 5px 7px #0000000d;
  padding: 16px;
  overflow: hidden;

  & + li {
    margin-top: 16px;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  a {
    text-decoration: none;
    color: none;
  }

  > p {
    margin: 16px 0;
    /* font-size: 22px; */
    line-height: 24px;
  }
`;

export const TagsContainer = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  > li {
    position: relative;
    cursor: pointer;

    &:after {
      content: '';
      position: absolute;
      background: #170c3a;
      height: 2px;
      width: 100%;
      max-width: 0;
      bottom: -4px;
      left: calc(100% - 50%);
      opacity: 0;
      border-radius: 1px;
      transition: max-width 0.3s, opacity 0.5s, left 0.3s;
      margin: auto;
    }

    &:hover:after {
      max-width: 100%;
      opacity: 1;
      left: 0;
    }

    span {
      font-size: 16px;
      opacity: 0.7;
      margin-right: 2px;
    }

    button {
      background: none;
      border: none;
    }
  }

  > li + li {
    margin-left: 10px;
  }
`;
