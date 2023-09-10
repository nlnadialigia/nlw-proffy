import React from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import './styles.css';

const TeacherList: React.FC = () => {
  return (
    <div id="page-teacher-list" className='container'>
      <PageHeader title={"Estes são os professores disponíveis."}>
        <form action="" id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" name="subject" id="subject" />
          </div>
          <div className="input-block">
            <label htmlFor="week-day">Dia da semana</label>
            <input type="text" name="week-day" id="week-day" />
          </div>
          <div className="input-block">
            <label htmlFor="time">Horas</label>
            <input type="text" name="time" id="time" />
          </div>
        </form>
      </PageHeader>
      <main>
        <TeacherItem />
      </main>
    </div>
  )
}

export default TeacherList;

