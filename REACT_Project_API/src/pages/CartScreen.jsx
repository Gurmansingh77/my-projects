import React, { useContext } from 'react'
import CartProductCard from '../components/CartProductCard'
import { MyStore } from '../Context/MyContext'

const CartScreen = () => {

    let { cartItems } = useContext(MyStore)
  return (
    <div className='h-screen flex flex-col gap-5 p-4'>
      {
        cartItems.map((elem) => {
            return <CartProductCard key={elem.id} product={elem} />
        })
      }
    </div>
  )
}

export default CartScreen
