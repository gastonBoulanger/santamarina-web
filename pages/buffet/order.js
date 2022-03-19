import { useState } from 'react';
import { getMenuWeb } from '../../lib/api'
import ItemOrder from './itemOrder';

export default function NewOrder({menu}) {
    const originMenu = JSON.parse(JSON.stringify(menu));
    const [menuOrder, setMenuOrder] = useState(originMenu);
    const [order, setOrder] = useState([]);
    const [totalAmmount, setTotalAmmount] = useState(0);

    const calculateTotal = () =>{
        let total = 0;
        let newOrder = [];
        setOrder(newOrder); 
        menuOrder && menuOrder.menuItemsCollection && menuOrder.menuItemsCollection.items.map((submenu) => {
            submenu && submenu.saleItemsCollection && submenu.saleItemsCollection.items.map((item) =>{
                if(item.price && item.count) {
                    const subtotal = item.price * item.count;
                    total = total + subtotal;
                    newOrder.push(item);
                }
            });
        });
        setOrder(newOrder);
        setTotalAmmount(total);
    }

    const setItemOrder = (action, item) => {
        if(action === 'add'){
            item.count = item.count ? item.count + 1 : 1;
        }
        else{
            item.count = item.count ? item.count - 1 : 0;
        }
        calculateTotal();
    }

    const saveOrder = () => {
        const buffet = JSON.parse(localStorage.getItem('buffet'));
        buffet.orders.push(order);
        localStorage.setItem('buffet', JSON.stringify(buffet));
        restartOrder();
    }

    const restartOrder = () => {
        setMenuOrder({...menu});
        setTotalAmmount(0);
        scrollToTop();
    }

    
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };

    return (
        <div className="bg-gray-200">
            <div className="w-screen h-screen grid justify-items-center px-3">
                <h1 className='text-3xl font-bold text-gray-dark align-middle p-3'>
                    Orden
                </h1>
                <div className="grid grid-cols-1 justify-center">
                    { 
                        menuOrder && menuOrder.menuItemsCollection && menuOrder.menuItemsCollection.items.map((submenu) => {
                            return (
                                <div key={`category-${submenu.name}`} className="bg-white rounded-xl shadow-lg my-3 p-6">
                                    <strong>{submenu.title}</strong>
                                    {
                                        submenu && submenu.saleItemsCollection && submenu.saleItemsCollection.items.map((item) =>{
                                            return (
                                                <ItemOrder key={`itemOrder-${item.name}`} item={item} click={setItemOrder} />
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                    <div className="mx-3 my-4 flex justify-center">
                        <button className="py-3 px-6 border-2 border-black text-black rounded-full">
                            TOTAL: ${totalAmmount}
                        </button>
                    </div>
                    <div className="mx-3 my-4 flex justify-center">
                        <button onClick={saveOrder} className="py-3 px-6 bg-black text-white rounded-full">
                            TOMAR ORDEN
                        </button>
                    </div>
                </div>
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