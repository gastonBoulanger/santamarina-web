import Link from "next/link";
import { useState } from "react"

export default function DropdownMenu ({title, items}) {

    const [isOpen, setIsOpen] = useState(false);

    const handleMouseOver = e => {
      setIsOpen(!isOpen)
    }

    return (
      <li className="relative" onMouseOver={handleMouseOver} onMouseOut={handleMouseOver} >
        <button id={`dropdownNavbarLink-${title}`} className="flex justify-between items-center py-2 px-3 w-full text-lg text-black hover:bg-gray">
          {title}
          <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
        <div id={`dropdownNavbar-${title}`} className={`absolute ${isOpen ? 'block' : 'hidden'} z-99 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow hover:block`}>
          <ul className="py-1">
            {
              items?.map((item) => {
                return (
                  <li>
                    <Link href={item.link}>
                      <a className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">{item.text}</a>
                    </Link>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </li>
    )
}