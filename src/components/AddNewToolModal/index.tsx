import React, { useCallback } from 'react';
import { Form } from '@unform/web';
import { BsX } from 'react-icons/bs';
import * as Yup from 'yup';

import api from '../../services/api';

import Input from '../Input';
import Modal from '../Modal';
import Button from '../Button';
import { Header, Footer } from './styles';

interface InputData {
  title: string;
  description: string;
  link: string;
  tags: string;
}

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  onCompleted: () => void;
}

const AddNewToolModal: React.FC<IModalProps> = ({
  isOpen,
  setIsOpen,
  onCompleted,
}) => {
  const handleCreateNewTool = useCallback(
    async ({ title, description, link, tags }: InputData) => {
      try {
        await api.post('/tools', {
          title,
          description,
          link,
          tags: tags.split(','),
        });

        setIsOpen();
        onCompleted();
      } catch {
        // TODO Fazer alguma coisa
      }
    },
    [setIsOpen, onCompleted],
  );

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Header>
        <h3>Adicionar nova ferramenta</h3>

        <button type="button" onClick={() => setIsOpen()}>
          <BsX />
        </button>
      </Header>

      <Form onSubmit={handleCreateNewTool}>
        <Input
          name="title"
          label="Nome"
          placeholder="Digite o nome da ferramenta (ex: Github)"
        />

        <Input
          name="link"
          label="Link"
          placeholder="Digite o link da ferramenta (ex: https://github.com)"
        />

        <Input
          name="description"
          label="Descrição"
          placeholder="Digite descrição da ferramenta"
        />

        <Input
          name="tags"
          label="Tags"
          placeholder="Digite algumas tags separado por ',' (ex: version control, código)"
        />

        <Footer>
          <Button
            primaryNeutral
            type="submit"
            style={{ alignSelf: 'flex-end' }}
          >
            SALVAR FERRAMENTA
          </Button>
        </Footer>
      </Form>
    </Modal>
  );
};

export default AddNewToolModal;
