import Link from 'next/link'
import React from 'react'

const ProductCards = () => {
  return (
    
        <Link 
        href="/product/1"
        className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
        >
            <img src='/product-1.webp' className='w-full' alt='product img '/>
            <div className='p-4 text-black/[0.9]'>
                <h2 className='text-lg font-medium'>Pro Name</h2>
                <div className='flex items-center text-black/[0.9]'>
                <p className='mr-p text-lg font-semi-bold'>$20.00</p>
                <p className='text-base font-medium line-through'>$25.00</p>
                <p className='ml-auto text-base font-medium text-green-500'>20% off</p>
            </div>
            </div>
            
        </Link>
    
  )
}

export default ProductCards