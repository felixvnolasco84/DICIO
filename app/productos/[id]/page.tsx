
"use client"

import React from 'react'
import { products } from '../page';
import Image from 'next/image';

export default  function page({ params }: any) {

    const { id } = params;
    const product: any = products.find((product: any) => product.title === id);


    const {title, description, disclaimer, qrImage, qrText} = product;

    console.log(product);

  return (
    <>
    <h2>{title}</h2>
    <p>{description}</p>
    <span className='text-xs'>{disclaimer}</span>
    <Image src={""} width={0} alt=''/>
    <span className='text-xs'>{qrText}</span>
    </>
  )
}
