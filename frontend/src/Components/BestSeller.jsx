
import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {

    const {products} = useContext(ShopContext);
    const [bestSeller,setBestSeller] = useState([]);

     useEffect(()=>{
       setBestSeller(products.slice(0,5));
     },[products])
    

    return (
    <div className='my-10'>
   <div className='text-center py-8 text-3x1'>
    <Title text1={'BEST'} text2={'SELLER'}/>
   <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptatibus perspiciatis dicta, veniam sint atque obcaecati quasi nobis praesentium nulla exercitationem dolore dolorem architecto! Soluta esse porro fuga voluptate voluptatem!
   </p>
   </div>
   {/* Rendering Products*/}
   <div className='grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
    {
      bestSeller.map((item,index)=>(
    <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
       ))
    }
   </div>
    </div>
  )
}

export default BestSeller