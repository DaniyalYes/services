import { Link } from "react-router-dom"
import "./AboutContent.css"
import React from 'react'
import Me from ".././assets/me1.jpg"
// import React2 from ".././assets/react2.webp"

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Кто я?</h1>
            <p>Я веб-разработчик. Создаю адаптивные безопасные веб-сайты для своих клиентов.</p>
            <p>Меньше слов - Больше действий.</p>
            <p>Если вы владелец малого или среднего бизнеса <br/>
                Самое время оформить вашу любовь к своему бизнесу<br/>
                в стильный сайт, который кратно повысит имидж вашей компании и продажи. <br/>
                Я вам в этом лично помогу.  <br/>
                <br/>
                Daniyal Yessimgaliyev - Creator of “DY.Studio”</p>
            <Link to="/contact">
                <button className="btn">Хочешь поболтаем?</button>
            </Link>
        </div> 

        <div className="right">
            <div className="img-container">
                <div className="img-stack">
                    <img src={Me} className="img"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent