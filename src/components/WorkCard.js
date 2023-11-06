import "./WorkCard.css"
import React from 'react'
import pro1 from "../assets/proj1.jpg"
import pro2 from "../assets/proj2.jpg"
import pro3 from "../assets/proj3.jpg"


const WorkCard = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Услуги</h1>
        <div className="project-container">
            <div className="project-card">
                <img src={pro1} alt="image"/>
                <h2 className="project-title">1. Создание дизайна</h2>
                <div className="pro-details">
                    <p>Начнем работу с прототипа до готового дизайна на все устройства от мобильных телефонов до компьютеров</p>
                </div>
            </div>
            <div className="project-card">
                <img src={pro2} alt="image"/>
                <h2 className="project-title">2. Программирование</h2>
                <div className="pro-details">
                    <p>Дальше мы превращаем готовый дизайн в код. Благодаря этой части работы мы сможем пощупать результат нашей работы в живую</p>
                </div>
            </div>
            <div className="project-card">
                <img src={pro3} alt="image"/>
                <h2 className="project-title">3. Публикация</h2>
                <div className="pro-details">
                    <p>Здесь мы налаживаем воронку для клиентов, регистрируем домен. Публикуем сайт в интернет и в поисковые сети.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WorkCard