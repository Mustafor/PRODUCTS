import { Button, Input, Modal } from 'antd'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductsCard from '../components/ProductsCard'
import {deleteLikeProducts} from '../store/likedSlice'

function Navbar({products, setProducts, refresh, setRefresh}) {
    const dispatch = useDispatch()
    const [closeModal, setCloseModal] = useState(false)
    const likedProducts = useSelector(state => state.likedList)

    function handleDeleteProduct(item){
        const data = {...item, isLiked:!item.isLiked}
        const updateList = products.map(value => {
            return value.id == item.id ? data : value
        })
        setProducts(updateList)
        dispatch(deleteLikeProducts(item))
    }

    function handleSearchInput(evt) {
        const filteredData = products.filter(item => item.title.toLowerCase().includes(evt.target.value.toLowerCase()))
        setProducts(filteredData)
        if(!evt.target.value){
            setRefresh(!refresh)
        }
    }

  return (
    <nav className='p-5 bg-blue-400 flex items-center justify-between'>
        <h1 className='font-bold text-[30px] text-white'>Products</h1>
        <div className='flex items-center space-x-5'>
            <Input onChange={handleSearchInput} className='w-[300px]' placeholder='Searching...' allowClear size='large'/>
            <Button onClick={() => setCloseModal(true)} className='bg-transparent hover:!bg-transparent text-white hover:!border-white hover:!text-white' size='large'>
                Like ({likedProducts.length})
            </Button>
        </div>
        <Modal onOk={() => setCloseModal(false)} className='!w-full !p-10 h-[100%] !inset-0 !m-auto' open={closeModal} onCancel={() => setCloseModal(false)}>
            <div className='flex w-full overflow-x-auto gap-5'>
                {likedProducts.map(item => <ProductsCard key={item.id} handleDeleteProduct={handleDeleteProduct} isDelete={true} classExtra={`min-w-[300px]`} width={200} item={item}/>)}
            </div>
        </Modal>
    </nav>
  )
}

export default Navbar