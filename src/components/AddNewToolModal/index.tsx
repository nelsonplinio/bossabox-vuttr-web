import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { BsX } from 'react-icons/bs';
import * as Yup from 'yup';

import api from '../../services/api';
import getValidationErrors from '../../utils/getValidationErrors';

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
  const formRef = useRef<FormHandles>(null);

  const handleCreateNewTool = useCallback(
    async (formData: InputData) => {
      formRef.current?.setErrors({});
      try {
        const schemaValidation = Yup.object().shape({
          title: Yup.string().required('Nome é necessario.'),
          description: Yup.string().required('Descrição é necessario.'),
          link: Yup.string().required('Link é necessario.'),
          tags: Yup.string().required('Tags é necessario.'),
        });

        const {
          title,
          description,
          link,
          tags,
        } = await schemaValidation.validate(formData, {
          abortEarly: false,
        });

        await api.post('/tools', {
          title,
          description,
          link,
          tags: tags.split(','),
        });

        setIsOpen();

        onCompleted();
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const validationErrors = getValidationErrors(error);
          formRef.current?.setErrors(validationErrors);
        }

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

      <Form ref={formRef} onSubmit={handleCreateNewTool}>
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
