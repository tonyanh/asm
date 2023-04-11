import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getOneProduct } from '../api/product';

interface IProduct {
  id: string | number;
  name: string;
  price: number;
  images: string;
  description: string;
  categoryId:number |string
}

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<IProduct>({
    id: '',
    name: '',
    price: 0,
    images: '',
    description: '',
    categoryId:''
  });

  // useEffect(() => {
  //   getOneProduct(id).then(({ data }) => setProduct(data));
  // }, [id]);
  useEffect(() => {
    getOneProduct(id).then(({ data }) => {
      if (data) {
        setProduct(data.data);
      }
    });
  }, [id]);
  return (
    <div className='banner'>
    <h1>{product.name}</h1>
    <img width={"50px"} src={product.image} alt=""/>
    <p>{product.description}</p>
</div>
  );
};

export default ProductDetail;
