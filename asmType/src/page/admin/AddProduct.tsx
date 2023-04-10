import React from 'react'
import { Button, Form, Input, Alert, Space } from 'antd';
import { useNavigate } from 'react-router-dom';
const AddProduct = (props) => {

  const navigate = useNavigate()
  const onFinish = (values: any) => {
      props.onAdd(values);
      navigate('/admin/products')
    };
    
    const onFinishFailed = (errorInfo: any) => {
      console.log('Failed:', errorInfo);
    };
    return (
        <div>
            <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Product Name"
      name="name"
      rules={[{ required: true, message: 'Please input your product name!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Price Product"
      name="price"
      rules={[{ required: true, message: 'Please input your price!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Image"
      name="image"
      rules={[{ required: true, message: 'Please input your image!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Description"
      name="description"
      rules={[{ required: true, message: 'Please input your description!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Add New Product
      </Button>
    </Form.Item>
  </Form>
        </div>
    )
}

export default AddProduct