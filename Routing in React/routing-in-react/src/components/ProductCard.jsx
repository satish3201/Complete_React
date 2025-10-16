import React from 'react'

function ProductCard({title, price, description, category, rate, image}) {
  return (
    <div className='w-[300px] h-[300px] flex flex-col border-1 border-[#000000]'>
      <div className='w-[100px] h-[100px] flex-1'>
        <img src={image} alt="" className='w-full h-full object-cover' />
      </div>

      <div className='mt-[10px]'>
        <h3 className='p-[10px] text-[20px] font-bold'>{title}</h3>
        {/* <p>{description}</p> */}
        <p className='p-[10px] font-bold '>{category}</p>
        <p className='p-[10px]'>₹ {price}</p>
         <p>{rate}</p>
      </div>
    </div>
  )
}

export default ProductCard
