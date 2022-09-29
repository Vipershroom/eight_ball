import React from 'react'
import Image from '../images/eight_ball.png'
import './styles/header.scss'

const Header = () => {
  return (
    <div className='header'>
        <img src={Image} alt="eight ball" />
        <h2>8 Ball Generator</h2>
    </div>
  )
}

export default Header