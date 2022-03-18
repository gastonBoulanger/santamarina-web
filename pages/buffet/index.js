import ButtonLink from '../../components/buttons/buttonLink'

export default function Cantina() {

  return (
    <div className="bg-gray-200">
        <div className="w-screen h-screen grid justify-items-center">
            <h1 className='text-3xl font-bold text-gray-dark align-middle p-3'>
                Cantina
            </h1>
            <div className="h-48 grid grid-cols-1 justify-items-center">
                <div className="p-3">
                    <ButtonLink text='ABRIR' link='/buffet/new'/>
                </div>
                <div className="p-3">
                    <ButtonLink text='ORDEN' link='/buffet/order'/>
                </div>
            </div>
        </div>
    </div>
  )
}