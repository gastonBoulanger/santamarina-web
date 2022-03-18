import { Formik, Form, Field, ErrorMessage } from 'formik';
import { getMenuWeb } from '../../lib/api'
import { GetItemsMenu } from './buffetHelper';

export default function NewBuffet({menu}) {
    const buffet = GetItemsMenu(menu);
    return (
        <div className="bg-gray-200">
            <div className="w-screen h-screen grid justify-items-center px-3">
                <h1 className='text-3xl font-bold text-gray-dark align-middle p-3'>
                    Cantina
                </h1>
                <Formik
                    initialValues={buffet}
                    onSubmit={(values, { setSubmitting }) => {
                        console.log('submit')
                        setTimeout(() => {
                            console.log('values', values)
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                        }, 400);
                    }}
                    >
                    {({ isSubmitting }) => (
                        <Form className="grid grid-cols-1 justify-center">
                            <Field className="w-full h-12 border-black border-1 rounded-xl shadow-lg px-4" as="select" name="cantina" placeholder="Cant.">
                                <option value="mestelan">Mestelan</option>
                                <option value="techada">Techada</option>
                            </Field>
                            <ErrorMessage name="cantina" component="div" />
                            { 
                                menu && menu.menuItemsCollection && menu.menuItemsCollection.items.map((submenu) => {
                                    return (
                                        <div key={`category-${submenu.id}`} className="bg-white rounded-xl shadow-lg my-3 p-6">
                                            <strong>{submenu.title}</strong>
                                            {
                                                submenu && submenu.saleItemsCollection && submenu.saleItemsCollection.items.map((item) =>{
                                                    return (
                                                        <div key={`item-${submenu.id}`} className="grid grid-cols-2 align-items-center py-2">
                                                            <p>{item.title}</p>
                                                            <Field className="h-8 p-2 border-black border-2 rounded-md" type="number" name={item.title} placeholder="Cant." />
                                                            <ErrorMessage name={item.title} component="div" />
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    )
                                })
                            }
                            <div className="mx-3 my-4 flex justify-center">
                                <button type="submit" className="py-3 px-6 bg-black text-white rounded-full" disabled={isSubmitting}>
                                    ABRIR CANTINA
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
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