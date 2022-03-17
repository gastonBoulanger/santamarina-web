import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState, useEffect } from 'react';
import { getMenuWeb } from '../../lib/api'
import { GetItemsMenu } from './buffetHelper';
import ItemOrder from './itemOrder';

export default function NewBuffet({menu}) {
    let menuOrder = menu;
    const [totalAmmount, setTotalAmmount] = useState(0);

    const calculateTotal = () =>{
        let total = 0;
        menuOrder && menuOrder.menuItemsCollection && menuOrder.menuItemsCollection.items.map((submenu) => {
            submenu && submenu.saleItemsCollection && submenu.saleItemsCollection.items.map((item) =>{
                if(item.price && item.count) {
                    const subtotal = item.price * item.count;
                    total = total + subtotal;
                }
            });
        });
        console.log('total', total)
        setTotalAmmount(total);
    }

    const setOrder = (action, item) => {
        if(action === 'add'){
            item.count = item.count ? item.count + 1 : 1;
        }
        else{
            item.count = item.count ? item.count - 1 : 0;
        }
        calculateTotal();
    }
    return (
        <div class="bg-gray-200">
            <div class="w-screen h-screen grid justify-items-center px-3">
                <h1 class='text-3xl font-bold text-gray-dark align-middle p-3'>
                    Orden
                </h1>
                <div className="grid grid-cols-1 justify-center">
                    { 
                        menuOrder && menuOrder.menuItemsCollection && menuOrder.menuItemsCollection.items.map((submenu) => {
                            return (
                                <div class="bg-white rounded-xl shadow-lg my-3 p-6">
                                    <strong>{submenu.title}</strong>
                                    {
                                        submenu && submenu.saleItemsCollection && submenu.saleItemsCollection.items.map((item) =>{
                                            return (
                                                <ItemOrder item={item} click={setOrder} />
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                    <div class="mx-3 my-4 flex justify-center">
                        <button class="py-3 px-6 border-2 border-black text-black rounded-full">
                            TOTAL: ${totalAmmount}
                        </button>
                    </div>
                    <div class="mx-3 my-4 flex justify-center">
                        <button class="py-3 px-6 bg-black text-white rounded-full">
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