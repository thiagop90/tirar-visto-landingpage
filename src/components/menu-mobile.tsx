import { useState } from 'react'
import { Icons } from './icons'
import { Navigation } from './navigation'

export function MenuMobile() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex size-10 cursor-pointer items-center justify-center rounded-lg border transition-colors hover:bg-gray-50"
        aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
      >
        {!isOpen ? <Icons.menuIcon /> : <Icons.xIcon />}
      </button>

      {isOpen && (
        <>
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="fixed inset-0 top-[100px] z-40 bg-black/60"
          />

          <div className="fixed inset-x-0 top-[100px] z-50 bg-white">
            <div className="px-6 py-4">
              <Navigation />
            </div>
          </div>
        </>
      )}
    </>
  )
}
