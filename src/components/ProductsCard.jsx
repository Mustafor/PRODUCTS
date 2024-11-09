import { DeleteOutlined, LikeOutlined } from '@ant-design/icons'
import { Button, Card } from 'antd'
import Meta from 'antd/es/card/Meta'
import React from 'react'

function ProductsCard({ handleLikeBtnClick, handleDeleteProduct, item, width, classExtra, isDelete }) {
  return (
    <Card 
    className={`border-blue-400 ${classExtra} hover:!border-blue-400 hover:!shadow-lg hover:!shadow-blue-400`}
    hoverable
    style={{ width: width }}
    cover={<img className='h-[300px] object-contain' alt='example' src={item.images[0]}/>}>
      <Meta title={item.title} description={<p className='line-clamp-3'>{item.description}</p>}/>
      <Meta description={isDelete
        ? <Button onClick={() => handleDeleteProduct(item)} className={`w-full mt-5 bg-red-500 text-white border-red-500 hover:!bg-red-500 hover:!text-white hover:!border-red-500`} size='small'><DeleteOutlined className='sclae-[1.2]'/></Button>
        : <Button onClick={() => handleLikeBtnClick(item)} className={`w-full mt-5 ${item.isLiked ? "bg-red-500 text-white border-red-500 hover:!bg-red-500 hover:!text-white hover:!border-red-500" : ""} `} size='small'><LikeOutlined className='sclae-[1.2]'/></Button>
      }/>
    </Card>
  )
}

export default ProductsCard