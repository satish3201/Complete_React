import React from 'react'
import products from '../data/data'
import ProductCard from '../components/ProductCard'

export default function Home() {
  return (
    <div>
      <div className='w-[100%] h-[700px]'>
        <img src="https://wallpapercave.com/wp/wp2568544.jpg" alt="" className='w-full h-full' />
      </div>


      <div className='mt-[20px] mb-[20px]'>
        <h1 className='text-[40px] font-bold text-center'>Categories</h1>
      </div>
      <div className='grid grid-cols-3 gap-10'>
        {
          products.map((product, index) => {
            return (
              <div>
                <ProductCard title={product.title} image={product.image} price={product.price} description={product.description} category={product.category} rate={product.rating.rate} />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
