import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  loadingText?: string;

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

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <Container type="button" {...rest}>
      {children}
    </Container>
  );
};

export default Button;
