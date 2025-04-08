import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useSearchParams } from 'react-router-dom'
import {toast} from 'react-toastify'
import axios from 'axios'
const Verify = () => {

    const { navigate, token, setCartItems} = useContext(ShopContext)
    const [searchParams, setSearchParams] = useSearchParams()

   const success = searchParams.get('success')
   const orderId = searchParams.get('orderId')
   

    const VerifyPayment = async () => {
         try{
            if (!token) {
                return null
            }

         const response = await axios.post(backendUrl + '/api/order/VerifyStripe',{success,orderId},{header:{token}})
         
          if(response.data.success){
            setCartItems({})
            navigate('/orders')
          }else{
            navigate('/cart')
          }
       
         }catch(error) {
            console.log(error);
            toast.error(error.message)
            
         }
    }

    useEffect(()=>{
        VerifyPayment()
    },[token])
  return (
    <div>
        
    </div>
  )
}

export default Verify