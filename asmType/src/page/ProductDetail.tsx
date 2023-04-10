import React from 'react'
import { useParams } from 'react-router-dom'
import { IProduct } from '../types/product'
const ProductDetail = (props) => {
    const { id } = useParams()
    // const currentProduct = props.products.find((item) => item.id == id)
    const currentProduct = props.products.find((item) => item._id == id)
    return (
        <div className='banner'>
            <h1>{currentProduct?.name}</h1>
            <img width={"50px"} src={currentProduct.image} alt=""/>
            <p>{currentProduct?.description}</p>
        </div>
    )
}

export default ProductDetail