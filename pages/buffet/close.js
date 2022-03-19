import { useState, useEffect } from 'react';
import { getMenuWeb } from '../../lib/api';

export default function CloseBuffet({menu}) {
    const [buffet, setBuffet] = useState();
    const [totalAmmount, setTotalAmmount] = useState(0);

    useEffect(() =>{
        let newBuffet = JSON.parse(localStorage.getItem('buffet'));
        newBuffet.close = [];
        menu && menu.menuItemsCollection && menu.menuItemsCollection.items.map((submenu) => {
            submenu && submenu.saleItemsCollection && submenu.saleItemsCollection.items.map((item) =>{
                let totalItem = 0;
                newBuffet.orders.map(order =>{
                    const filtered = order.filter(itemOrder => item.name === itemOrder.name);
                    if(filtered && filtered.length > 0){
                        filtered.map(itemFiltered => totalItem += itemFiltered.count);
                    }
                });
                newBuffet.close.push({name: item.name, total: totalItem, totalAmmount: (totalItem * item.price)});
            });
        });
        let closeTotal = 0;
        newBuffet.close.map(item => closeTotal += item.totalAmmount);
        newBuffet.totalClose = closeTotal;
        setTotalAmmount(closeTotal);
        setBuffet(newBuffet);
    },[]);

    return (
        <div className="bg-gray-200">
            <div className="w-screen h-screen px-3">
                <h1 className='text-3xl font-bold flex justify-center text-gray-dark p-3'>
                    CIERRE CAJA
                </h1>
                <table className="table-auto bg-white border rounded-xl">
                    <thead className="bg-yellow rounded-xl">
                        <th className="px-2">ITEM</th>
                        <th className="px-2">CANT.</th>
                        <th className="px-2">SUBTOTAL</th>
                    </thead>
                    {
                        buffet && buffet.close?.length > 0 && buffet.close.map(item =>{
                            return (
                                <tr key={`itemTable-${item.name}`} className="border border-gray">
                                    <td className="px-2">{item?.name}</td>
                                    <td className="px-2">{item?.total}</td>
                                    <td className="px-2">${item?.totalAmmount}</td>
                                </tr>
                            )
                        })
                    }
                    <tr className="bg-black">
                        <td className="text-white px-2">TOTAL:</td>
                        <td></td>
                        <td className="text-white px-2">${totalAmmount}</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export async function getStaticProps({ preview = false }) {
    const menu = (await getMenuWeb(process.env.CF_MENU_BUFFET_ID)) ?? {};
    return {
      props: { menu },
    }
}