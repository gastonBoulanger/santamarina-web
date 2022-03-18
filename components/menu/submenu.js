import DropdownMenu from './dropdownMenu'
import ItemMenuMobile from './itemMenuMobile'

const createSubmenu = (submenu) => {
    if ( submenu && submenu.linksCollection && submenu.linksCollection.items.length > 1) {
        return <DropdownMenu title={submenu.title} items={submenu.linksCollection.items} />
    }
    else {
        return <a href="" className="py-4 px-2 text-lg text-black font-semibold">{submenu.title}</a>
    }
}

const createItemMobile = (submenu) => {
    if ( submenu && submenu.linksCollection && submenu.linksCollection.items.length > 1) {
        return <ItemMenuMobile title={submenu.title} items={submenu.linksCollection.items} />
    }
    else {
        return <a href="" className="py-4 px-2 text-lg text-black font-semibold">{submenu.title}</a>
    }
}

export default function Submenu ({submenu, isMobile = false}) {
    return (
        <>
        {
            isMobile ? createItemMobile(submenu) : createSubmenu(submenu)
        }
        </>
    )
}