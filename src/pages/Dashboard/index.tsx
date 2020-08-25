import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { Title, Form, Repositories } from './styles';

import logoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
  return (
    <> 
      <img src={logoImg} alt="Github Explorer"/>
      <Title>Explore repositorios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositorio" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="">
          <img src="https://avatars3.githubusercontent.com/u/17955358?s=460&u=ba042b3e183a3e36de57089bb11196ef3985de26&v=4" 
          alt="Jeffesson Gomes"/>
          <div>
            <strong>Jeffesson/Rep</strong>
            <p>Desc</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>

    </>
  );
}

export default Dashboard;
