// import './App.css'
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import HomePage from './page/HomePage'
import ProductPage from './page/ProductPage'
import ProductDetail from './page/ProductDetail'
import AddProduct from './page/admin/AddProduct'
import { addProduct, deleteProduct, editProduct, getAllProduct } from './api/product'
import { IProduct } from './types/product'
import ProductManagement from './page/admin/ProductManagement'
import AdminLayOut from './page/Layouts/AdminLayOut'
import UpdateProduct from './page/admin/UpdateProduct'
import WebsiteLayout from './page/Layouts/WebsiteLayout'
import AddCate from './page/admin/cate/AddCate'
import CateManagement from './page/admin/cate/CateManagement'
import UpdateCate from './page/admin/cate/UpdateCate'
import Login from './page/auth/Login'
import Register from './page/auth/Register'
import ProtectedRoute from './page/Layouts/ProtectedRoute'
import { message } from 'antd'
import Logout from './page/auth/Logout'
function App() {
    const [products, setProduct] = useState<IProduct[]>([]);
    const navigate = useNavigate()
    useEffect(() => {
        getAllProduct().then(({ data }) => setProduct(data));
        // if (localStorage.getItem('accessToken')) {
        // }
    },[])
    const onHandleRemove = (id: string) => {
        // deleteProduct(id).then(() => setProduct(products.filter((item: IProduct) => item.id !== id ))) 
        deleteProduct(id)
        // .then(() => setProduct(products.filter((item: IProduct) => item._id !== id)))
        deleteProduct(id) 
        .then(() => {
            message.success(`Xoa sản phẩm thành công.`);
            setProduct(products.filter((item: IProduct) => item._id !== id))
        })
        .catch(({ response }) => {
            if(response.data.name == 'JsonWebTokenError' || response.data.name == 'TokenExpiredError') {
                localStorage.removeItem('accessToken');
                navigate('./page/auth/Login.tsx')
            }
        })
    }
    const onHandleAdd = (product: IProduct) => {
        // addProduct(product).then(() => getAllProduct().then(({data}) => setProduct(data)))
        addProduct(product)
            .then(() => {
                message.success(`Thêm sản phẩm thành công.`);
                getAllProduct().then(({ data }) => setProduct(data));
            })
            .then(() => navigate('/admin/products'))
            .catch(({ response }) => {
                console.log(response);
                message.error(response.data.message);
                if (response.data.name == 'JsonWebTokenError' || response.data.name == 'TokenExpiredError') {
                    localStorage.removeItem('accessToken');
                    navigate('./page/auth/Login.tsx');
                }
            });
    }
    const onHandleUpdate = (product: IProduct) => {
        // editProduct(product).then(() => getAllProduct().then(({ data }) => editProduct(data)))
        editProduct(product).then(() => getAllProduct().then(({ data }) => setProduct(data)))
        .then(() => {
            message.success(`Sửa sản phẩm thành công.`);
            getAllProduct().then(({ data }) => setProduct(data));
        })
        .then(() => navigate('/admin/products'))
        .catch(({ response }) => {
            message.error(response.data.message);
            if (response.data.name == 'JsonWebTokenError' || response.data.name == 'TokenExpiredError') {
                localStorage.removeItem('accessToken');
                navigate('./page/auth/Login.tsx');
            }
        });
    }
  return (
    <div className="App">
        <Routes>
            <Route path="/auth">
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
            </Route>
            <Route path='/' element={<WebsiteLayout />}>
                <Route index element={< HomePage />}/>
                <Route path='products'>
                    <Route index element={<ProductPage products={products} onRemove={onHandleRemove} />}/>
                    <Route path=':id' element={<ProductDetail products={products}/>}/>
                </Route>
            </Route>
            <Route path='/admin/products' element={<AdminLayOut/>}>
                    <Route index element={<ProductManagement products={products} onRemove={onHandleRemove} />}/>
                    <Route path='add' element={<AddProduct onAdd={onHandleAdd}/>}/>
                    <Route path='update/:id' element={<UpdateProduct onUpdate={onHandleUpdate} products={products} />}/>
            </Route>
            <Route path='/admin/categories' element={<AdminLayOut/>}>
                    <Route index element={<CateManagement products={products} onRemove={onHandleRemove} />}/>
                    <Route path='add-cate' element={<AddCate onAdd={onHandleAdd}/>}/>
                    <Route path='update-cate/:id' element={<UpdateCate onUpdate={onHandleUpdate} products={products} />}/>
            </Route>
        </Routes>
    </div>
  )
}

export default App
