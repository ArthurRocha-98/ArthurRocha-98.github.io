import { useState } from 'react'
import { Menu, X, ShieldCheck } from 'lucide-react'

const links = [
  ['Sobre', '#sobre'],
  ['Habilidades', '#habilidades'],
  ['Projetos', '#projetos'],
  ['Contato', '#contato'],
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="Ir para o início">
        <span className="brand-mark"><ShieldCheck size={19} /></span>
        <span>qa<span className="brand-dot">.</span>portfolio</span>
      </a>
      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Abrir menu">
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>
      <nav className={open ? 'nav nav-open' : 'nav'}>
        {links.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
        ))}
        <a className="nav-cta" href="#contato" onClick={() => setOpen(false)}>Vamos conversar <span>↗</span></a>
      </nav>
    </header>
  )
}