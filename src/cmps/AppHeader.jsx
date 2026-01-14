import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/imgs/logo.png'

export function AppHeader() {
  return (
    <header className="app-header">
      <div className="logo">
        <img src={logo} />
      </div>
      <nav className="navigation">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <NavLink to="">Contact Me</NavLink>
      </nav>
    </header>
  )
}
