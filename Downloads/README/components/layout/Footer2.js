import { APP_KEY, APP_URL, FOOTER_ABOUT } from '@/config'
import Image from 'next/image'
import Link from 'next/link' 
import logo from '../../public/assets/logo-white.png' 

const Footer2 = ({ season, country, data }) => {


    return (
        <>
            <div className="container py-4 bg-secondary">
                <div className="row">
                    <div className="col-md-4">
                        <Link href={'/'} className="footer-2-logo">
                            <Image src={data?.url + "/" + data?.logo?.header || logo} alt="" className={'position-relative my-1 header-logo w-100'} style={{ objectFit: 'contain' }} fill={true}></Image>
                        </Link>
                        <p className='text-white'>{FOOTER_ABOUT}</p>

                        <ul className='footer-link footer2-icon  p-0 text-white pt-1 d-flex'>
                            <li><Link href=""> <i className='fab fa-facebook-f'></i></Link></li>
                            <li><Link href=""> <i className='fab fa-pinterest-p'></i></Link></li>
                            <li><Link href=""> <i className='fab fa-twitter '></i></Link></li>
                        </ul>
                    </div>
                    <div className="col-md-8 row ">
                        <div className="col-md-4 ">
                            <h2 className='my-auto text-white fw-bolder'>About US</h2>
                            <ul className='footer-link p-0 text-white pt-3'>
                                {data?.pages?.map((item) => {
                                    return <li className='mb-1'>
                                        <Link className='ms-0' href={`/pages/${item.slug}`}>{item.name}</Link>
                                    </li>
                                })}
                                <li className='mb-1'>
                                    <Link className='ms-0' href="/contact">Contact Us</Link>
                                </li>

                            </ul>
                        </div>
                        <div className="col-md-4 ">
                            <h2 className='my-auto text-white fw-bolder'>Shop By Country</h2>
                            <ul className='footer-link p-0 text-white pt-3'>
                                {country?.slice(0, 6).map((countrydd) => {
                                    return <li className='mb-1'>
                                        <Link className='ms-0' href={`/country/${countrydd.slug}`}>{countrydd.name}</Link>
                                    </li>

                                })}

                            </ul>
                        </div>
                        <div className="col-md-4 ">
                            <h2 className='my-auto text-white fw-bolder'>What's Trending</h2>
                            <ul className='footer-link p-0 text-white pt-3'>
                                {season?.data?.slice(0, 6).map((seasondd) => {
                                    return <li className='mb-1'>
                                        <Link className='ms-0' href={`/season/${seasondd.slug}`}>{seasondd.name}</Link>
                                    </li>
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer2