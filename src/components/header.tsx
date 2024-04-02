import Logo from "../assets/logo-icon.svg"

export function Header() {
  return (
    <header className="flex gap-5 items-center py-2">
      <img src={Logo} alt="Logo NSPass-IN" />
      <nav className="flex items-center gap-5">
        <a href="" className="font-medium text-sm text-zinc-400">Eventos</a>
        <a href="" className="font-medium text-sm">Participantes</a>
      </nav>
    </header>
  )
}