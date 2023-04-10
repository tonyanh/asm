import React, { useState, useEffect } from 'react'
import { IProduct } from '../../../types/product';
import { Space, Table, Button, Image,Input  } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Link } from 'react-router-dom';
interface DataType {
    products: IProduct,
    onRemove: (id: string) => void,
    key: string;
    name: string;
    age: number;
    address: string;
    tags: string[];
}
// interface IProps {
//     products: IProduct[],
//     onRemove: (id: number) => void
// }
const CateManagement = (props: DataType) => {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const removeProduct = (id: string) => {
        const confirm = window.confirm("Ban co muon xoa khong?")
        if(confirm) {
            props.onRemove(id)
            alert('Xoa thanh cong')
        }
    } 
    const data = props.products.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase())).map(item => {
        return {
            key: item._id,
            categoryId: item.categoryId
            // name: item.name,
            // price: item.price,
            // image: item.image,
            // description: item.description,
        }
    })
    const columns: ColumnsType<DataType> = [
    
        {
            title: 'CategoryId',
            dataIndex: 'categoryId',
            key: 'categoryId',
        },
        {
            title: <Link to="add-cate">Add categoryId</Link>,
            key: 'action',
            render: (record) => (
                // console.log(record.key)
                <Space size="middle">
                    <Button type="primary" style={{ backgroundColor: '#ff6652' }} onClick={() => removeProduct(record.key)}>Remove</Button>
                    
                    <Button type="primary" style={{ backgroundColor: '#ff90ae' }}><Link to={`update-cate/` + record.key} >Update</Link></Button>
                </Space>
            ),
        },
    ];
    return (

        <>
        <Space style={{ marginBottom: 16 }}>
                    <Input.Search placeholder="Search product" onChange={(event) => setSearchTerm(event.target.value)} />
                    <Link to="/admin/products/add">
                        <Button type="primary">Add Product</Button>
                    </Link>
                </Space>
                <Table columns={columns} dataSource={data} pagination={{ pageSize: 4, showQuickJumper: true }} />
        </>
    ) 
}

export default CateManagement    

// import React, { useState, useEffect } from 'react'
// import { IProduct } from '../../types/product';
// import { Space, Table, Button, Image, Avatar, Input, Modal  } from 'antd';
// import type { ColumnsType } from 'antd/es/table';
// import { Link } from 'react-router-dom';
// interface DataType {
//     products: IProduct,
//     onRemove: (id: number) => void,
//     key: string;
//     name: string;
//     age: number;
//     address: string;
//     tags: string[];
// }
// interface IProps {
//     products: IProduct[],
//     onRemove: (id: number) => void
// }
// const CateManagement = (props: DataType) => {
//     const [searchTerm, setSearchTerm] = useState<string>("");
//     const removeProduct = (id: number) => {
//         const confirm = window.confirm("Ban co muon xoa khong?")
//         if(confirm) {
//             props.onRemove(id)
//             alert('Xoa thanh cong')
//         }
//     } 
//     const data = props.products.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase())).map(item => {
//         return {
//             key: item.id,
//             name: item.name,
//             price: item.price,
//             image: item.image,
//             description: item.description,
//             categoryId: item.categoryId
//         }
//     })
//     const columns: ColumnsType<DataType> = [
//         {
//             title: 'CategoryId',
//             dataIndex: 'categoryId',
//             key: 'categoryId',
//         },
//         {
//             title: <Link to="add">Add Products</Link>,
//             key: 'action',
//             render: (record) => (
//                 // console.log(record.key)
//                 <Space size="middle">
//                     <Button type="primary" style={{ backgroundColor: '#ff6652' }} onClick={() => removeProduct(record.key)}>Remove</Button>
                    
//                     <Button type="primary" style={{ backgroundColor: '#ff90ae' }}><Link to={`update/` + record.key} >Update</Link></Button>
//                 </Space>
//             ),
//         },
//     ];
    
//     return (
//         <>
//         <Space style={{ marginBottom: 16 }}>
//                     <Input.Search placeholder="Search product" onChange={(event) => setSearchTerm(event.target.value)} />
//                     <Link to="/admin/products/add">
//                         <Button type="primary">Add Product</Button>
//                     </Link>
//                 </Space>
//          <Table columns={columns} dataSource={data} pagination={{ pageSize: 4, showQuickJumper: true }} />
//          </>
//     )
// }

// export default CateManagement    
