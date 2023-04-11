import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import logo from '@/public/assets/footerlogo.png'
import Link from 'next/link'

const Footer1 = ({ data }) => {

  return (
    <>

      <div className='container-fluid bg-footer  footer-1'>
        <div className="row">
          <div className="col-md-3 my-auto text-center text-md-start">
            <Link href="/"> <Image src={data?.url + "/" + data?.logo?.header || logo} fill={true} className="footer1-logo w-40 position-relative"></Image></Link>
          </div>
          <div className="col-md-3 text-white text-center my-auto">
            <p className='my-auto text-footer '> All Right Reserved</p>
          </div>
          <div className="col-md-6 footer-link text-center my-auto">

            {data?.pages?.map((item) => {
              return <Link href={`/pages/${item.slug}`}>{item.name}</Link>
            })}

            <Link href="/all-stores">stores</Link>
            <Link href="/contact">Contact Us</Link>
            <Link href="/category">Categories</Link>
            <Link href=""><i class="fab fa-twitter" aria-hidden="true"></i></Link>
            <Link href=""><i class="fab fa-pinterest" aria-hidden="true"></i></Link>
            <Link href=""><i class="fab fa-facebook" aria-hidden="true"></i></Link>
          </div>
        </div>
      </div>

    </>
  )
}

export default Footer1