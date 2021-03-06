import { useState } from "react"

export default function ItemMenuMobile ({title, items}) {

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = e => {
      setIsOpen(!isOpen)
    }

    return (
      <li>
        <button id={`dropdownNavbarLink-${title}`}  onClick={handleClick} className="flex justify-between items-center py-2 px-3 w-full text-md font-medium hover:bg-gray">
          {title}
          <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </button>
        <div id={`dropdownNavbar-${title}`} className={`${isOpen ? 'block' : 'hidden'} text-base list-none`}>
          <ul className="py-1">
            {
              items?.map((item) => {
                return (
                  <li key={`itemMenu-${item.id}`} className="block py-2 px-4">
                    <a href={item.link} className="ml-3 text-md text-black">{item.text}</a>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </li>
    )
}