import React, { useState, useEffect, useCallback } from 'react';
import { BsPlus } from 'react-icons/bs';
import { confirmAlert } from 'react-confirm-alert';

import api from '../../services/api';
import { useAuth } from '../../hooks/auth';

import SearchBar from '../../components/SearchBar';
import Button from '../../components/Button';

import {
  Container,
  Toolbar,
  List,
  Header,
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

  const handleRemoveTool = useCallback((tool: Tool) => {
    confirmAlert({
      title: 'Remover ferramente',
      message: `Deseja remover a ferramenta "${tool.title}"?`,
      buttons: [
        {
          label: 'Cancelar',
          onClick: () => {
            // Cancelar
          },
        },
        {
          label: 'Remover',

          onClick: async () => {
            try {
              await api.delete(`/tools/${tool.id}`);

              setTools(currentValue =>
                currentValue.filter(({ id }) => id !== tool.id),
              );
            } catch {
              // TODO Fazer alguma coisa aqui para mostar
            }
          },
        },
      ],
    });
  }, []);

  return (
    <Container>
      <Header>
        <h1>VUTTR</h1>

        <h3>Very Useful Tools to Remember</h3>

        <Toolbar>
          <SearchBar
            value={searchText}
            placeholder="Buscar por tag (ex: #node)"
            onChange={e => setSearchText(e.target.value)}
          />

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

              <Button
                type="button"
                quartiaryDanger
                onClick={() => handleRemoveTool(tool)}
              >
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
