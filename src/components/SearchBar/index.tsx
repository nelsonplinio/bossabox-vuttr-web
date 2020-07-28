import React from 'react';
import { DebounceInput } from 'react-debounce-input';

import { Container } from './styles';

interface SearchBarProps {
  value: string;
  placeholder?: string;
  onChange: (value: any) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder,
  value,
  onChange,
}) => {
  return (
    <Container>
      <DebounceInput
        value={value}
        minLength={3}
        placeholder={placeholder}
        debounceTimeout={300}
        onChange={onChange}
      />
    </Container>
  );
};

export default SearchBar;
