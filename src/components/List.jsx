import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {saveLikedProducts}  from '../store/likedSlice'
import ProductsCard from './ProductsCard'

function List({products, setProducts, refresh}) {
  const dispatch = useDispatch()

  useEffect(() => {
    axios("https://dummyjson.com/products").then(res => {
      setProducts(res.data.products.map(item => {
        item.isLiked = false
        return item
      }))
    })
  }, [refresh])

  function handleLikeBtnClick(item) {
    const data = {...item, isLiked: !item.isLiked}
    const updateList = products.map(value => {
      return value.id == item.id ? data : value
    })
    setProducts(updateList)
    dispatch(saveLikedProducts(data))
  }

  return (
    <div className='p-5 flex justify-between flex-wrap gap-5'>
      {products.map(item => <ProductsCard width={300} key={item.id} handleLikeBtnClick={handleLikeBtnClick} item={item}/>)}
    </div>
  )
}

export default List