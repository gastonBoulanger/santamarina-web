import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

export default function ItemOrder ({item, click}) {
    return (
        <div className="grid grid-cols-5 py-2">
            <div className="col-span-2">
                <p>{item?.title}</p>
            </div>
            <div className="flex items-center justify-center">
                <button onClick={() => click('remove', item)} className="h-8 w-8 py-2 bg-black text-white rounded-full flex items-center justify-center">
                    <FontAwesomeIcon icon={faMinus} />
                </button>
            </div>
            <div className="flex items-center justify-center">
                <p>{item?.count ? item.count : 0}</p>
            </div>
            <div className="flex items-center justify-center">
                <button onClick={() => click('add', item)} className="h-8 w-8 py-2 bg-black text-white rounded-full flex items-center justify-center">
                    <FontAwesomeIcon icon={faPlus} />
                </button>
            </div>
        </div>
    )
}