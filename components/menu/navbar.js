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
            <nav class="bg-white shadow-lg bg-yellow-dark">
                <div class="max-w-6xl mx-auto px-4">
                    <div class="flex justify-between">
                        <div class="flex space-x-7">
                            <div>
                                <a href="#" class="flex items-center py-4 px-2">
                                    <Image src={Logo} alt='Escudo Santamarina' width={42} height={42} />
                                    <span class="ml-2 font-semibold text-black text-lg">Club Santamarina</span>
                                </a>
                            </div>
                            <div class="hidden md:flex items-center space-x-1">
                                <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                                { 
                                    menu && menu.menuItemsCollection && menu.menuItemsCollection.items.map((submenu) => {
                                        return (
                                            <Submenu submenu={submenu} isMobile={showMenuMobile} />
                                        )
                                    })
                                }
                                </ul>
                            </div>
                        </div>
                        <div class="hidden md:flex items-center space-x-3 ">
                            {
                                menu && menu.buttonsCollection && menu.buttonsCollection.items.map((button) => {
                                    return (
                                        <Link href={button.link}>
                                            <a href="" class="py-2 px-2 font-medium text-white bg-black rounded hover:bg-grey transition duration-300">{button.text}</a>
                                        </Link>
                                    )
                                })
                            }
                        </div>
                        <div class="md:hidden flex items-center">
                            <button class="outline-none mobile-menu-button" onClick={handleMenuClick}>
                                <svg class=" w-6 h-6 text-black hover:text-gray-600"
                                    fill="none"
                                    stroke-width="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div class={`${ showMenuMobile ? 'block' : 'hidden' } absolute w-screen h-screen`}>
                    <ul class="bg-grey-light opacity-100 z-70">
                        {
                            menu && menu.menuItemsCollection && menu.menuItemsCollection.items.map((submenu) => {
                                return (
                                    <Submenu submenu={submenu} isMobile={showMenuMobile} />
                                )
                            })
                        }
                    </ul>
                    <div class="h-full bg-black bg-opacity-80" onClick={handleMenuClick}>        
                    </div>
                </div>
            </nav>
        </div>
    )
}