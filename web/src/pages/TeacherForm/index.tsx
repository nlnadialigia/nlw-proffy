import React, {FormEvent, useState} from "react";
import warningIcon from "../../assets/images/icons/warning.svg";
import Input from "../../components/Input";
import PageHeader from "../../components/PageHeader";
import Select from "../../components/Select";
import Textarea from "../../components/Textarea";
import {api} from "../../services/api";
import "./styles.css";

const TeacherForm: React.FC = () => {
  const startSchedule =  {week_day: "", from: "", to: ""}
  const [name, setName] = useState("")
  const [avatar, setAvatar] = useState("")
  const [whatsapp, setWhatsapp] = useState("")
  const [bio, setBio] = useState("")
  const [subject, setSubject] = useState("")
  const [cost, setCost] = useState("")
  const [scheduleItems, setScheduleItems] = useState([startSchedule])

  function addNewScheduleItem() {
    setScheduleItems([
      ...scheduleItems,
      startSchedule
    ])
  }

  function setScheduleItemValue(index: number, field: string, value: string) {
    const updateScheduleItems = scheduleItems.map((item, i) => {
      if (index === i) {
        return {...item, [field]: value}
      }
      return item;
    })
    setScheduleItems(updateScheduleItems)
  }

  function handleCreateClass(event: FormEvent) {
    event.preventDefault()

    api.post("classes", {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost: Number(cost),
      schedule: scheduleItems
    })
      .then(() => {alert("Cadastro realizado com sucesso")})
      .catch(() => alert("DEU RUIM!"))
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader 
        title={"Que incrível que você quer dar aulas!"}
        description={"O primeiro passo, é preencher esse formulário de inscrição."}
      />

      <main>
        <form onSubmit={handleCreateClass} >
          <fieldset>
            <legend>Seus dados</legend>
            <Input 
              name="name" 
              label="Nome completo" 
              value={name} 
              onChange={(e) => {setName(e.target.value)}}
            />
            <Input 
              name="avatar" 
              label="Avatar" 
              value={avatar} 
              onChange={(e) => {setAvatar(e.target.value)}}
            />
            <Input 
              name="whatsapp" 
              label="Whatsapp" 
              value={whatsapp} 
              onChange={(e) => {setWhatsapp(e.target.value)}}
            />
            <Textarea name="bio" 
              label="Biografia" 
              value={bio} 
              onChange={(e) => {setBio(e.target.value)}}
            />
          </fieldset>

          <fieldset>
            <legend>Sobre a aula</legend>
            <Select 
              name={""} 
              label="Matéria" 
              options={[
                {value: "Artes", label: "Artes"},
                {value: "Biologia", label: "Biologia"},
                {value: "Educação Física", label: "Educação Física"},
                {value: "Química", label: "Química"},
                {value: "Matemática", label: "Matemática"},
                {value: "Português", label: "Português"},
                {value: "História", label: "História"},
              ]} 
              value={subject}
              onChange={(e) => {setSubject(e.target.value)}}
            />
            <Input 
              name="cost" 
              label="Custo da sua aula por hora (R$)"
              value={cost} 
              onChange={(e) => {setCost(e.target.value)}}            
            />
          </fieldset>

          <fieldset>
            <legend>
              Horários disponíveis
              <button type="button" onClick={addNewScheduleItem}>+ Novo horário</button>
            </legend>

            {scheduleItems.map((item, index) => {
              return (
                <div className="schedule-item" key={`${item.week_day}_${index}`}>
                  <Select
                    name=""
                    label="Dia da semana"
                    value={item.week_day}
                    onChange={e => {setScheduleItemValue(index, "week_day", e.target.value)}}
                    options={[
                      {value: "0", label: "Domingo"},
                      {value: "1", label: "Segunda-feira"},
                      {value: "2", label: "Terça-feira"},
                      {value: "3", label: "Quarta-feira"},
                      {value: "4", label: "Quinta-feira"},
                      {value: "5", label: "Sexta-feira"},
                      {value: "6", label: "Sábado"},
                    ]} 
                  />
                  <Input
                    name="from" 
                    label="Das" 
                    type="time"
                    onChange={e => {setScheduleItemValue(index, "from", e.target.value)}}
                  />
                  <Input
                    name="to" 
                    label="até" 
                    type="time" 
                    onChange={e => {setScheduleItemValue(index, "to", e.target.value)}}
                  />
                </div>
              )
            })}
          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Aviso importante" />
              Importante! <br/>
              Preencha todos os dados
            </p>
            <button type="submit">Salvar cadastro</button>
          </footer>
        </form>
      </main>
    </div>
  )
}

export default TeacherForm;