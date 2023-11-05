import { Link } from "react-router-dom"
import "./PricingCard.css"
import React from 'react'

const PricingCard = () => {
  return (
    <div className="pricing">
        <div className="card-container">
            <div className="card">
                <h3>- Лендинг -</h3>
                <span className="bar"></span>
                <p>- Одно-страничный сайт -</p>
                <p>- Уникальный дизайн -</p>
                <p>- Публикация в интернет -</p>
                <p>- Покупка домена</p>
                <p>- Поддержка сайта</p>
                <p>- </p>
                <p>- </p>
                <p className="btc">80.000tng</p>
                <Link to="/contact" className="btn">
                    Заказать лендинг
                </Link>
            </div>
            
            <div className="card">
                <h3>- Классический -</h3>
                <span className="bar"></span>
                <p>- от 4-х до 6-х страниц -</p>
                <p>- Уникальный дизайн -</p>
                <p>- Публикация в интернет -</p>
                <p>- Покупка домена</p>
                <p>- Поддержка сайта</p>
                <p>- Онлайн-оплата</p>
                <p>- </p>
                <p className="btc">160.000tng</p>
                <Link to="/contact" className="btn">
                    Заказать классический
                </Link>
            </div>

            <div className="card">
                <h3>- Сайт-про -</h3>
                <span className="bar"></span>
                <p>- от 8 до 14 страниц -</p>
                <p>- Уникальный дизайн -</p>
                <p>- Публикация в интернет -</p>
                <p>- Покупка домена</p>
                <p>- Поддержка сайта</p>
                <p>- Онлайн-оплата</p>
                <p>- Интернет-магазин</p>
                <p className="btc">240.000tng</p>
                <Link to="/contact" className="btn">
                    Заказать сайт-pro
                </Link>
            </div>

        </div>
    </div>
  )
}

export default PricingCard