import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/imgs/logo.png'

export function AppHeader() {
  return (
    <header className="app-header">
      <NavLink to="/" className="logo">
        <img src={logo} />
      </NavLink>
      <nav className="navigation">
        <NavLink to="about">About</NavLink>
        <NavLink to="about">Skills</NavLink>
        <NavLink to="about">Projects</NavLink>
        <NavLink to="about">Contact Me</NavLink>
      </nav>
    </header>
  )
}
