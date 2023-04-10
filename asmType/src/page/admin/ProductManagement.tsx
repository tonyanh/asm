import React, { useState, useEffect } from 'react'
import { IProduct } from '../../types/product';
import { Space, Table, Button, Image, Avatar, Input, Modal  } from 'antd';
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
interface IProps {
    products: IProduct[],
    onRemove: (id: string) => void
}
const ProductManagement = (props: DataType) => {
    const [searchTerm, setSearchTerm] = useState<string>("");
    // const removeProduct = (id: number) => {
    //     const confirm = window.confirm("Ban co muon xoa khong?")
    //     if(confirm) {
    //         props.onRemove(id)
    //         alert('Xoa thanh cong')
    //     }
    // } 
    const removeProduct = (id:string) => {
        Modal.confirm({
            title: 'Confirm',
            content: 'Are you sure you want to delete this product?',
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk: () => {
                props.onRemove(id)
            },
            onCancel: () => {
                console.log('Cancel');
            },
        });
        
    }
    const data = props.products.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase())).map(item => {
        return {
            key: item._id,
            name: item.name,
            price: item.price,
            image: item.image,
            description: item.description,
            categoryId: item.categoryId
        }
    })
    const columns: ColumnsType<DataType> = [
        {
            title: 'Product Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>
        },
        {
            title: 'Product Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Image',
            dataIndex: 'image',
            key: 'image',
            render:(image) => <img style={{width: "100px"}} src={image} alt="" />
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: <Link to="add">Add Products</Link>,
            key: 'action',
            render: (record) => (
                <Space size="middle">
                    <Button type="primary" style={{ backgroundColor: '#ff6652' }} onClick={() => removeProduct(record.key)}>Remove</Button>
                    
                    <Button type="primary" style={{ backgroundColor: '#ff90ae' }}><Link to={`update/` + record.key} >Update</Link></Button>
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

export default ProductManagement    
