import React, {SelectHTMLAttributes} from 'react';

import './styles.css';

interface Subject {
  value: string,
  label: string
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name:string,
  label: string,
  options: Array<Subject>

}

const Select: React.FC<SelectProps> = ({label, name, options, ...rest}) => {
  return (
    <div className="select-block">
      <label htmlFor={name}>{label}</label>
      <select id={name} {...rest}>
        <option value="" disabled selected hidden>Selecione uma opção</option>
        {options.map(opt => {
          return <option key={opt.value} value={opt.value}>{opt.label}</option>
        })}
      </select>
    </div>
  )
}

export default Select;

        //  <label htmlFor="week-day">Dia da Semana</label>
        //   <select name="week-day" id="week-day">
        //     <option value="0">Domingo</option>
        //     <option value="1">Segunda-feira</option>
        //     <option value="2">Terça-feira</option>
        //     <option value="3">Quarta-feira</option>
        //     <option value="4">Quinta-feira</option>
        //     <option value="5">Sexta-feira</option>
        //     <option value="6">Sábado</option>
        //   </select>