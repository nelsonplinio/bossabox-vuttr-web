import React, { useState, useEffect, useCallback } from 'react';
import { BsPlus } from 'react-icons/bs';

import api from '../../services/api';

import iconClose from '../../assets/icons/Icon-Close-2px.svg';

import {
  Container,
  Header,
  Toolbar,
  SearchBar,
  Button,
  List,
  ToolCard,
  TagsContainer,
} from './styles';

interface Tool {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
}

const Home: React.FC = () => {
  const [tools, setTools] = useState<Tool[]>([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const loadTools = async () => {
      let tag: string | undefined;

      if (searchText.includes('#')) {
        const [, tagFound] = searchText.split('#');
        tag = tagFound;
      }

      const response = await api.get('/tools', {
        params: { tag },
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1OTU5MDYxODgsImV4cCI6MTU5NTk5MjU4OCwic3ViIjoiNWYxYjQ1NmVlZTJhODcwYzdjOTdkYjk3In0.wwKXSwK1ZvnOhkNOzb0E3ijStCdw8O6Kwtkb6CVSf6g',
        },
      });

      setTools(response.data);
    };

    loadTools();
  }, [searchText]);

  const handleSelectTag = useCallback(
    (tag: string) => {
      setSearchText(tag);
    },
    [setSearchText],
  );

  return (
    <Container>
      <Header>
        <h1>VUTTR</h1>

        <h3>Very Useful Tools to Remember</h3>

        <Toolbar>
          <SearchBar>
            <input
              type="text"
              placeholder="Buscar por tag (ex: #node)"
              value={searchText}
            />
          </SearchBar>

          <Button type="button" primaryNeutral>
            <BsPlus />
            Adicionar
          </Button>
        </Toolbar>
      </Header>

      <List>
        {tools.map(tool => (
          <ToolCard key={tool.id}>
            <div>
              <h4>
                <a href={tool.link} target="__blank">
                  {tool.title}
                </a>
              </h4>

              <Button type="button" quartiaryDanger>
                Remover
              </Button>
            </div>

            <p>{tool.description}</p>

            <TagsContainer>
              {tool.tags.map(tag => (
                <li key={tag}>
                  <button
                    type="button"
                    onClick={() => handleSelectTag(`#${tag}`)}
                  >
                    <strong>
                      <span>#</span>
                      {tag}
                    </strong>
                  </button>
                </li>
              ))}
            </TagsContainer>
          </ToolCard>
        ))}
      </List>
    </Container>
  );
};

export default Home;
