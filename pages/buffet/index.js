import ButtonLink from '../../components/buttons/buttonLink'

export default function Cantina() {

  return (
    <div className="bg-gray-200">
        <div class="w-screen h-screen grid justify-items-center">
            <h1 class='text-3xl font-bold text-gray-dark align-middle p-3'>
                Cantina
            </h1>
            <div class="h-48 grid grid-cols-1 justify-items-center">
                <div class="p-3">
                    <ButtonLink text='ABRIR' link='/buffet/new'/>
                </div>
                <div class="p-3">
                    <ButtonLink text='ORDEN' link='/buffet/order'/>
                </div>
            </div>
        </div>
    </div>
  )
}