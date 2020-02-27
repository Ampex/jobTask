import React from 'react'
import logo from '../media/logo.svg'

const menu = ['Home', 'Produkty', 'Trendy i Looki', 'O nas', 'E-sklep'].map(
  (item, index) => (
    <li>
      <a key={index} href='#'>
        {item}
      </a>
    </li>
  )
)

const Header = () => {
  return (
    <div className='header'>
      <img src={logo} alt='logo' />
      <ol>{menu}</ol>
    </div>
  )
}

export default Header
