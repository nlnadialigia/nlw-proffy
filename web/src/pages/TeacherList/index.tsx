import React from 'react';

import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import './styles.css';

const TeacherList: React.FC = () => {
  return (
    <div id="page-teacher-list" className='container'>
      <PageHeader title={"Estes são os professores disponíveis."}>
        <form action="" id="search-teachers">
          <Input name={'subject'} label={'Matéria'} />
          <Input name={'week_day'} label={'Dia da semana'} />
          <Input name={'time'} label={'Horas'} />
        </form>
      </PageHeader>
      <main>
        <TeacherItem />
      </main>
    </div>
  )
}

export default TeacherList;

