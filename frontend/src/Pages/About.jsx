import React from 'react'
import Title from '../Components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../Components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
      <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt=""/>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-ray-600'>
          <p> Forever Living Products is a multi-billion dollar company that manufactures and sells hundreds of wellness and beauty products all around the world. Still privately owned, it’s more than a business – It’s a family.Forever Living opportunity can give you the time to build your own life around your dreams. From extra income to unlimited earning potential, opportunity abounds. Are you ready to seize it?</p>
        <p> We create our high-quality, 
          IASC certified aloe products using inner leaf aloe vera gel that's hand filleted and processed within hours of harvesting, so you get aloe as nature intended.</p>
        </div>
      </div>
      <div className='text-xl py-4'>
       <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div> 
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
      <b>Quality Assurance:</b>
      <p className='text-gray-600'>We meticulously select and vet each product to ensure it meets our stringnentAll products are made at a cost.</p>
        </div>
        
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
      <b>Convenience:</b>
      <p className='text-gray-600'>A product must provide value to customers and users must get quality service from the product.</p>
        </div>
        
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
      <b>Exceptional Customer Service:</b>
      <p className='text-gray-600'>Product management guides every step of a product’s lifecycle by focusing on the product and its customers first and foremost.</p>
        </div>
        </div>

        <NewsletterBox/>
      </div>
    
  )
}

export default About