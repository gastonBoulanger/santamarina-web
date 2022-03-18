
import Link from "next/dist/client/link"
export default function ButtonLink ({ link, text }) {
    return (
        <Link href={link}>
            <a href="" className="py-2 px-2 font-medium text-white bg-black rounded hover:bg-grey transition duration-300">{text}</a>
        </Link>
    )
}