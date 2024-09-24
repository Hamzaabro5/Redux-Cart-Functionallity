import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCartItems } from './config/redux/reducers/cartSlice'

function App() {

  const [products , setProducts] = useState(null)
  const dispatch = useDispatch()
  const selector = useSelector(state => state.cart.cartItems);
  console.log(selector);

  useEffect(() => {
  
    axios('https://dummyjson.com/products')
    .then((res)=>{
      // console.log(res.data.products);
      setProducts(res.data.products)
      
    })
    .catch((error)=>{
      console.log(error);
      
    })

  }, [])
    
    const addToCart = (item) => {
      dispatch(addCartItems({
        item
      }))
    }

  return (
    <>
    <h1 className='text-center text-5xl font-bold my-10'>Redux Ecommerce Practice</h1>
    <div className='flex justify-center my-10'>
    <button className="btn btn-primary text-2xl font-bold">Cart<div className="badge badge-accent px-2 py-3 mb-3" >{selector.length}</div></button>
    </div>
      <div className='flex justify-center flex-wrap gap-20'>
        {products ? products.map((item) => {
          return <div className='border-gray-950 p-8 border-[3px] rounded-3xl gap-10' key={item.id}>
            <img width="200" src={item.thumbnail} alt="productImg" />
            <h2 className='mt-2 text-xl'><span className='font-bold'>Brand: </span>{item.title.slice(0, 10) + "..."}</h2>
            <h1 className='my-3 text-xl'><span className='font-bold'>Price: </span>${item.price}</h1>
            <button className='btn btn-outline btn-error btn-sm' onClick={() => addToCart(item)}>Add To cart</button>
          </div>
        }) : <h1 className='text-2xl font-bold'>Item not found!</h1>}
      </div>
    </>
  )
}

export default App