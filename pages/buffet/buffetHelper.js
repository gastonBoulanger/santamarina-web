export default function GetItemsMenu(menu) {
    let buffet = { name: ''};
    if(menu && menu.menuItemsCollection){
        menu.menuItemsCollection.items.map(submenu =>{
            if(submenu && submenu.saleItemsCollection){
                submenu.saleItemsCollection.items.map((item) =>{
                    buffet[item.title] = 0;
                })
            }
        })
    }
    return buffet;
}