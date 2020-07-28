import React from 'react';
import { BsPlus } from 'react-icons/bs';

import {
  Container,
  Header,
  Toolbar,
  SearchBar,
  AddNewToolButton,
} from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Header>
        <h1>VUTTR</h1>
        <h3>Very Useful Tools to Remember</h3>
        <Toolbar>
          <SearchBar>
            <input type="text" placeholder="Buscar por tag" />
          </SearchBar>

          <AddNewToolButton>
            <BsPlus />
            Adicionar
          </AddNewToolButton>
        </Toolbar>
      </Header>
    </Container>
  );
};

export default Home;
