import { FOOTER_DESC, FOOTER_ABOUT } from '@/public/settings/there_is_nothing_holding_me_back/config'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../public/assets/logo-white.png'

const Footer2 = ({ season, country, data }) => {
    console.log(FOOTER_ABOUT);
    return (
        <>
            <div className="bg-secondary">
                <div className="container py-4 ">
                    <div className="row">
                        <div className="col-md-4">
                            <Link href={'/'} className="footer-2-logo">
                                <Image src={data?.url + "/" + data?.logo?.header || logo} alt="" className={'position-relative my-1 header-logo w-100'} style={{ objectFit: 'contain' }} fill={true}></Image>
                            </Link>
                            <p className='text-white footer-desc'>{FOOTER_ABOUT}</p>
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
                        <div class="col-md-12">
                            <div class="copright_text">
                                <hr className='text-white opacity-1' />
                                <p className='text-white'>{FOOTER_DESC}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer2