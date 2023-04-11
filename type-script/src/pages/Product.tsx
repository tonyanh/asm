import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom';
interface IProduct {
  _id:number|string,
  name:string,
  price:number,
  images:string
}
interface IProps {
  products: IProduct[],
}
const Product = (props:IProps) => {
    const [data, setData]= useState<IProduct[]>([]);
    useEffect(()=>{
      setData(props.products)
    },[props])
    console.log(props)
    
  return (
    <div className="listFigure">
                                {
                                    data.map((item) => {
                                        return <div className="item">
                                            <div className="img">
                                                <Link to={'products/' + item._id}><img  width={250} src={item?.image} alt=""/></Link>
                                                
                                            </div>
                                            <div className="content">
                                                <h3>{item.name}</h3>
                                                <p>{item.title}</p>
                                            </div>
                                        </div>
                                    })
                                }
                </div>
  )
}

export default Product