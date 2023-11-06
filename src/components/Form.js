import "./Form.css"
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import {  FaTelegram, FaWhatsapp } from "react-icons/fa"

const Form = () => {
 
  const form = useRef();
  function sendEmail(e) {

    e.preventDefault();
  
    emailjs.sendForm('service_2z2tpav', 'template_42wx2ml', form.current, '86ySk3DvQ69N9yIZ0')
      .then((result) => {
          console.log(result.text);
          alert("Сообщение отправлено!")
          
      }, (error) => {
          console.log(error.text);
      });
}




  return (
    <div className="form">
        <form ref={form} onSubmit={sendEmail}>
            <label>Ваш Имя</label>
            <input type="text" name="from_name"></input>
            <label>Email</label>
            <input type="email" name="email_id"></input>
            <label>Описание проекта</label>
            <input type="text" name="text"></input>
            <label>О чем проект</label>
            <textarea rows="6" name="message" placeholder="Вот здесь объясните"></textarea>
            <button className="btn">Отравить</button>
            <div className="social">
              <a href="https://t.me/daniyalyes" target="_blank"><FaTelegram size={50} style={{color: "#fff", marginRight: "1rem"}}/></a>
              <a href="https://api.whatsapp.com/send?phone=77073627717" target="_blank"><FaWhatsapp size={50} style={{color: "#fff", marginRight: "1rem"}}/></a>
                  
            </div>
        </form>

   
    </div>
  )
}

export default Form