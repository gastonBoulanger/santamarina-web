import Logo from '../../public/santamarina.png'
import Image from 'next/image'
import Link from 'next/link'
import Submenu from './submenu'
import { useState } from 'react'

export default function Navbar ({ menu }) {
    const [showMenuMobile, setShowMenuMobile] = useState(false);

    const handleMenuClick = () => {
        setShowMenuMobile(!showMenuMobile);
    }

    return (
        <div className="sticky top-0 z-50">
            <nav className="bg-white shadow-lg bg-yellow-dark">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex justify-between">
                        <div className="flex space-x-7">
                            <div>
                                <a href="#" className="flex items-center py-4 px-2">
                                    <Image src={Logo} alt='Escudo Santamarina' width={42} height={42} />
                                    <span className="ml-2 font-semibold text-black text-lg">Club Santamarina</span>
                                </a>
                            </div>
                            <div className="hidden md:flex items-center space-x-1">
                                <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                                { 
                                    menu && menu.menuItemsCollection && menu.menuItemsCollection.items.map((submenu) => {
                                        return (
                                            <Submenu key={`submenu-${submenu.id}`} submenu={submenu} isMobile={showMenuMobile} />
                                        )
                                    })
                                }
                                </ul>
                            </div>
                        </div>
                        <div className="hidden md:flex items-center space-x-3 ">
                            {
                                menu && menu.buttonsCollection && menu.buttonsCollection.items.map((button) => {
                                    return (
                                        <Link key={`button-${button.id}`} href={button.link}>
                                            <a href="" className="py-2 px-2 font-medium text-white bg-black rounded hover:bg-grey transition duration-300">{button.text}</a>
                                        </Link>
                                    )
                                })
                            }
                        </div>
                        <div className="md:hidden flex items-center">
                            <button className="outline-none mobile-menu-button" onClick={handleMenuClick}>
                                <svg className=" w-6 h-6 text-black hover:text-gray-600"
                                    fill="none"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className={`${ showMenuMobile ? 'block' : 'hidden' } absolute w-screen h-screen`}>
                    <ul className="bg-grey-light opacity-100 z-70">
                        {
                            menu && menu.menuItemsCollection && menu.menuItemsCollection.items.map((submenu) => {
                                return (
                                    <Submenu key={`submenu-${submenu.id}`} submenu={submenu} isMobile={showMenuMobile} />
                                )
                            })
                        }
                    </ul>
                    <div className="h-full bg-black bg-opacity-80" onClick={handleMenuClick}>        
                    </div>
                </div>
            </nav>
        </div>
    )
}