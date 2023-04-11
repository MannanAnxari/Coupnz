import Spinner from '@/components/Spinner';
import { APP_KEY, APP_URL, DEFAULT_DESC, DEFAULT_TITLE } from '@/config';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import Layout from '../Layout';




export async function getStaticProps() {

    const response = await fetch(`${APP_URL}api/category?key=${APP_KEY}`)
    const data = await response.json();

    return {
        props: { categ: data },
    };
}




const categories = ({ categ, data, metas, setMetas }) => {

    const [favcat, setfavcat] = useState({})
    const [err, setError] = useState(false);
    const [loading, setloading] = useState(true)


    useEffect(() => {

        setMetas({ ...metas, title: `Category ${data?.siteTitle ? '- ' + data?.siteTitle : ''}` })

        setloading(false);
        if (categ) {
            setfavcat(categ)
        } else {
            setfavcat({})
            setError(true)
        }
    }, [])

    if (loading) return <div className='bg-white vh-100 vw-100 d-flex justify-content-center overflow-hidden align-items-center position-fixed top-0 start-0 z-1'><Spinner /></div>

    return (


        <div className='container my-5'>
            <h3>CODES FOR YOUR FAVOURITE CATEGORIES</h3>
            <div className="row bg-white py-3 px-2">

                {favcat?.map((item) => {
                    return <div className="col-md-4 col-6  favcat"><Link href={`/category/${item.slug}`}>{item.name}</Link></div>
                })}

            </div>
        </div>
    )
}

export default categories