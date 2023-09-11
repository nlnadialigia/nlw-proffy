import React from 'react';

import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';
import Select from '../../components/Select';
import TeacherItem from '../../components/TeacherItem';
import './styles.css';

const TeacherList: React.FC = () => {
  return (
    <div id="page-teacher-list" className='container'>
      <PageHeader title={"Estes são os professores disponíveis."}>
        <form action="" id="search-teachers">
          <Select label="Matéria" options={[
            {value: "Artes", label: "Artes"},
            {value: "Biologia", label: "Biologia"},
            {value: "Educação Física", label: "Educação Física"},
            {value: "Química", label: "Química"},
            {value: "Matemática", label: "Matemática"},
            {value: "Português", label: "Português"},
            {value: "História", label: "História"},
          ]} name={""} />
          <Select label="week-day" options={[
            {value: "0", label: "Domingo"},
            {value: "1", label: "Segunda-feira"},
            {value: "2", label: "Terça-feira"},
            {value: "3", label: "Quarta-feira"},
            {value: "4", label: "Quinta-feira"},
            {value: "5", label: "Sexta-feira"},
            {value: "6", label: "Sábado"},
          ]} name={""} />
          <Input type="time" name="time" label="Horas" />
        </form>
      </PageHeader>
      <main>
        <TeacherItem />
      </main>
    </div>
  )
}

export default TeacherList;

