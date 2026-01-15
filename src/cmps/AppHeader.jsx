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
        <a href="#contactMe">Contact Me</a>
      </nav>
    </header>
  )
}
