import { FaHome, FaInstagram, FaMailBulk, FaPhone, FaTelegram, FaWhatsapp } from "react-icons/fa"
import "./Footer.css"
import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                    <div>
                        <p>Там, где живет мечта.</p>
                        <p>Алматы, Казахстан</p>
                    </div>
                </div>
                <div className="phone">
                    <h4>
                        <FaPhone size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                        +7 707 362 77 17 
                    </h4>
                </div>
                <div className="email">
                    <h4>
                        <FaMailBulk size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                        yessimgaliyev.daniyal@gmail.com 
                    </h4>
                </div>
            </div>

            <div className="right">
                <h4>DaniyalYes</h4>
                <br></br>
                <p>Мы не продаем вам сайты, Мы делаем функциональный стиль для вашего бизнеса, Что выглядит не только красиво но и полезно.</p>
                <div className="social">
                
                <a href="https://t.me/daniyalyes" target="_blank"><FaTelegram size={20} style={{color: "#fff", marginRight: "1rem"}}/></a>
                <a href="https://api.whatsapp.com/send?phone=77073627717" target="_blank"><FaWhatsapp size={20} style={{color: "#fff", marginRight: "1rem"}}/></a>
                <a href="https://www.instagram.com/daniyalyes/" target="_blank"><FaInstagram size={20} style={{color: "#fff", marginRight: "1rem"}}/></a>
                        
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer