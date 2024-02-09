'use client'
import Image from "next/image"
import Link from "next/link"
import GoogleAuth from "../auth/GoogleAuth"
import { FaCloudUploadAlt } from "react-icons/fa";


const Navbar = () => {
    return (
        <nav className="flex w-full z-20 fixed top-22 p-2 justify-between text-white ">
            <Link
                href='/'
                className='flex items-center ml-8'>
                <Image src='/assets/logo.svg' alt='logo' width={48} height={48} />
                <p className=' text-heading3-bold font-bold text-xl  max-xs:hidden p-2'> PIXEL </p>
            </Link>

            <section className="flex justify-between mr-4">
                <Link href='/Upload' className='pr-4 py-2 rounded-2xl flex justify-center items-center '> <FaCloudUploadAlt size={30} />  </Link>
            </section>

        </nav>
    )
}

export default Navbar