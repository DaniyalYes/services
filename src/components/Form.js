import "./Form.css"
import React from 'react'

const Form = () => {
  return (
    <div className="form">
        <form>
            <label>Ваш Имя</label>
            <input type="text"></input>
            <label>Email</label>
            <input type="email"></input>
            <label>Описание проекта</label>
            <input type="text"></input>
            <label>О чем проект</label>
            <textarea rows="6" placeholder="Вот здесь объясните"></textarea>
            <button className="btn">Отравить</button>
        </form>
    </div>
  )
}

export default Form