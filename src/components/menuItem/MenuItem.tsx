import Link from "next/link"
import { FormEvent } from "react"

interface MenuItemProps {
  url?: string
  onClick?: (event: FormEvent) => void
  texto: string
  icone: any
  className?: string
}

export function MenuItem({ icone, texto, url , onClick, className }: MenuItemProps) {

  function renderirazLink() {
    return (
      <a className={`  text-black flex flex-col  justify-center items-center w-20 h-20 dark:text-zinc-200 ${className}`}>
        {icone}
        <span className="text-xs font-light">{texto}</span>
      </a>
    )
  }

  return (
    <li onClick={onClick} className="hover:bg-gray-600 transition-all dark:hover:bg-gray-800 cursor-pointer ">
      {url ? (
        <Link href={url} legacyBehavior>
          {renderirazLink()}
        </Link>

      )  : renderirazLink()}


    </li>
  )
}