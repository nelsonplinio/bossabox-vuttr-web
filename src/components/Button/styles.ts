import styled, { css } from 'styled-components';

interface ButtonProps {
  primaryNeutral?: boolean;
  secondaryNeutral?: boolean;
  terciaryNeutral?: boolean;
  quartiaryNeutral?: boolean;

  primarySuccess?: boolean;
  secondarySuccess?: boolean;
  terciarySuccess?: boolean;
  quartiarySuccess?: boolean;

  primaryDanger?: boolean;
  secondaryDanger?: boolean;
  terciaryDanger?: boolean;
  quartiaryDanger?: boolean;
}

export const Container = styled.button<ButtonProps>`
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

  ${({ primarySuccess }) =>
    primarySuccess &&
    css`
      background: #0dcb7d;
      &:hover {
        background: #10b26c;
      }

      &:active {
        background: #0e995d;
      }
    `}

  ${({ primaryDanger }) =>
    primaryDanger &&
    css`
      background: #f95e5a;
      &:hover {
        background: #cc4c4c;
      }

      &:active {
        background: #a53f3f;
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
