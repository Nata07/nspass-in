import Logo from "../assets/logo-icon.svg"
import { NavLink } from "./nav-link"

export function Header() {
  return (
    <header className="flex gap-5 items-center py-2">
      <img src={Logo} alt="Logo NSPass-IN" />
      <nav className="flex items-center gap-5">
        <NavLink href="/eventos">Eventos</NavLink>
        <NavLink href="/participantes">Participantes</NavLink>
      </nav>
    </header>
  )
}