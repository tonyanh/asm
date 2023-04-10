import { useEffect, useState } from 'react'
import { IProduct } from '../types/product'

interface IProps {
    products: IProduct[],
    onRemove: (id: number) => void
}
const ProductPage = (props: IProps) => {
    const [data,  setData] = useState<IProduct[]>([])
    useEffect(() => {
        setData(props.products)
    }, [props])
    const removeProduct = (id: number) => {
        const confirm = window.confirm("Ban co muon xoa khong?")
        if(confirm) {
            props.onRemove(id)
            alert('Xoa thanh cong')
        }
    }
    return (
        <div>
            {
                data.map((item) => {
                    return <div key={item._id}>
                        <h3>{item.name}</h3>
                        <button onClick={() => removeProduct(item.id)}>Remove</button>
                    </div>
                })
            }
        </div>
    )
}

export default ProductPage