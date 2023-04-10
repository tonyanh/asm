import React from 'react'
import { Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
const AddCate = (props) => {
  const navigate = useNavigate()
  const onFinish = (values: any) => {
      props.onAdd(values);
      alert('Them thanh cong')
      navigate('/admin/categories')
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
      label="CategoryId"
      name="categoryId"
      rules={[{ required: true, message: 'Please input your product categoryId!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Add New CategoryId
      </Button>
    </Form.Item>
  </Form>
        </div>
    )
}

export default AddCate