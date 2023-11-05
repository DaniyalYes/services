import React from 'react'
import './HeroImg.css'
import IntroImg from "../assets/intro-bg.jpg"
import { Link } from 'react-router-dom'

const HeroImg = () => {
  return (
    <div className='hero'>
      <div className='mask'>
        <img className='intro-img' src={IntroImg} alt='IntroImg' />
      </div>
      <div className='content'>
        <h1>Воплощаю мечты создовая сайта</h1>
        <p>Открой для себя новые горизонты</p>
        {/* <div>
          <Link to="/project" className='btn'>Процесс работы</Link>
          <Link to="/contact" className='btn btn-light'>Контакты</Link>
        </div> */}
      </div>
    </div>
  )
}

export default HeroImg