import { MenuMobile } from './menu-mobile'
import { Navigation } from './navigation'

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full max-w-[768px] border-b bg-white px-6 sm:px-10 md:px-14 xl:static xl:max-w-full xl:border-0 min-[90rem]:px-[3.75rem]">
      <div className="flex h-[100px] items-center justify-between">
        <a href="/">
          <img
            width="152px"
            height="42px"
            src="/home/tirar-visto-logo.png"
            alt="Logo Tirar Visto"
          />
        </a>

        <div className="sm:hidden">
          <MenuMobile />
        </div>
        <div className="hidden sm:block">
          <Navigation />
        </div>
      </div>
    </header>
  )
}
