'use client'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { motion } from 'framer-motion'
import LinksAnime from '@/components/LinksAnime';



const DetailsPage = ({ params }) => {

    const [namemedia, setnamemedia] = useState({})

    console.log(params.id)
    const router = useRouter()
    useEffect(() => {
        const info = async () => {
            const res = await axios.get(`/api/Details/${params.id}`)
            setnamemedia(res.data)
            console.log('birda', res)
        }
        info()
    }, [])

    return (
        <section className='bg-img-g'>
            {namemedia && (
                <div className=' pt-20 pb-80 flex'>
                    <div className='max-w-header flex   '>
                        <motion.div
                            className=' max-sm:flex-col-reverse flex gap-y-7 w-full  bg-white bg-opacity-50 p-8   '
                            initial={{ scale: 0.5 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 0.3 }}
                            viewport={{ once: true }}
                        >
                            <div className='p-4 w-full flex max-w-lg'>
                                <img className='object-contain flex w-full ' src={namemedia.imgUrl} alt="" />
                            </div>
                            <div className='flex flex-col text-center p-10 text-white'>
                                <h1 className='f text-heading2-bold '>{namemedia.title}</h1>
                                <div className='flex flex-col p-4'>
                                    {/* <LinksAnime animes={namemedia} /> */}
                                    <div className='p-2 flex gap-x-10'>
                                        <a href={namemedia.link} target='_blank' className='p-3 w-full rounded-full max-w-32 hover:bg-purple-200  bg-white ' >
                                            <p className='text-base1-semibold text-black'>server</p>
                                            <p className='text-tiny-medium text-neutral-600'>option 1</p>
                                        </a>
                                        <a href={namemedia.linkb} target='_blank' className='p-3 w-full rounded-full max-w-32 hover:bg-purple-200  bg-white text-small-' >
                                            <p className='text-base1-semibold text-black'>server</p>
                                            <p className='text-tiny-medium text-neutral-600'>option 2</p>
                                        </a>
                                    </div>
                                </div>

                                <p className='font-bold text-lg '>last watched: {namemedia.watched && namemedia.watched }</p>
                                <p className='font-bold text-lg '>{namemedia.desc}</p>

                            </div>

                            {/* <div className='absolute -bottom-1 -right-1 rounded-full bg-purple-600 p-2 text-white'>{namemedia.review}</div> */}
                        </motion.div>
                    </div>




                    {/* <button onClick={() => router.back()} className='fixed top-20 left-4  text-white'>
                        <IoArrowBack size={40} />
                    </button> */}


                </div>
            )}

        </section>

    )
}

export default DetailsPage