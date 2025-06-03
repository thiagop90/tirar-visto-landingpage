export function Navigation() {
  const links = [
    { href: '#', label: 'Home' },
    { href: '#', label: 'Quem somos' },
    { href: '#', label: 'Serviços' },
    { href: '#', label: 'Contato' },
  ]

  return (
    <nav className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:gap-8">
      {links.map((link, index) => (
        <a key={index} href={link.href} className="first:font-bold">
          {link.label}
        </a>
      ))}
    </nav>
  )
}
