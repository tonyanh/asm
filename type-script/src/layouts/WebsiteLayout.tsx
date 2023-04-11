import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getAllProduct } from '../api/product'
import '../index.css'

const WebsiteLayout = () => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        getAllProduct().then(({ data }) => setProduct(data))
    },[])
    const totalProducts = product.length
    return (
        <div className="container">
        <div className="left">
            <ul>
                <Link to={'/'}>
                    <li>
                        <i><img width={20} src="https://cdn-icons-png.flaticon.com/512/25/25694.png" alt="" /></i>
                        Home
                    </li>
                </Link>
                <li>
                    <i><img width={20} src="https://cdn-icons-png.flaticon.com/512/2550/2550288.png" alt="" /></i>
                    Favorite
                </li>
                <li>
                    <i><img width={20} src="https://cdn-icons-png.flaticon.com/512/566/566718.png" alt="" /></i>
                    Chat
                </li>
                <Link to={'/admin/products'}>
                    <li>
                        <i><img width={20} src="	https://cdn-icons-png.flaticon.com/512/1/1176.png" alt="" /></i>
                        Admin
                    </li>
                </Link>
                <li>
                    <a href="signup">Dang ki</a>
                </li>
                <li><a href="signin">Dang nhap</a></li>
                {/* <li><a href="signup">Dang ki</a></li>
                <li><a href="signin">Dang nhap</a></li> */}
            </ul>
            
        </div>
        <div className="center">
            <div className="bigTitle">TonyAnh</div>
            <div className="banner">
                <img src="https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-6/339278238_1295569134506284_8965899080970050255_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=clEpKtb7_5sAX8DS9Rd&_nc_ht=scontent.fhan14-3.fna&oh=00_AfB0hwpBgpQMCK0dvwcBlCM694l4sdgkCI5WkIKdE2Qjag&oe=6439B0B9" alt="" />
            <div className="content">
                <div className="title">
                    Film Avatar
                </div>
                <div className="des">
                    18:30 10/11/2022
                </div>
                <button className="add">Book</button>
            </div>
            </div>
            <div className="bigTitle">
                <ul className="category">
                    <li>
                        <i><img width={20} src="https://cdn-icons-png.flaticon.com/512/456/456212.png" alt="" /></i>
                        User
                    </li>
                    
                    <li>
                        <i><img width={20} src="https://cdn-icons-png.flaticon.com/512/1384/1384005.png" alt="" /></i>
                        Facebook
                    </li>
                    <li>
                        <i><img width={20} src="https://cdn-icons-png.flaticon.com/512/455/455705.png" alt="" /></i>
                        Phone
                    </li>
                    <li>
                        <i><img width={20} src="https://cdn-icons-png.flaticon.com/512/3116/3116491.png" alt="" /></i>
                        TikTok
                    </li>
                    <li>
                        <i><img width={20} src="https://cdn-icons-png.flaticon.com/512/1384/1384012.png" alt="" /></i>
                        Youtube
                    </li>
                </ul>
                <div className="bigTitle">All Film</div>
                    <Outlet />
            </div>
        </div>
        <div className="right">
        <div className="director animationTop delay-18">
        <img src="https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/328686251_3354060714849898_5002795599780927629_n.jpg?stp=cp6_dst-jpg_p843x403&_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=2PPlH6sA-7MAX9dLem7&_nc_ht=scontent.fhan14-1.fna&oh=00_AfDFVqx0TCytRsl7gsOnihGwZI3quZjK7WZBA0xcXwB1GA&oe=64397F3F" alt=""/>
        <div className="title">Quach Trung Anh</div>
        <ul>
            <li>
                <div className="count">{totalProducts}</div>
                film
            </li>
            <li>
                <div className="count">10</div>
                Oscar
            </li>
        </ul>
    </div>
    <div className="actor">
    <div className="bigTitle animationTop delay-19">Actor</div>
        <ul>
            <li className="animationTop delay-2">
                <img src="https://scontent.fhan14-4.fna.fbcdn.net/v/t39.30808-6/339302210_6354160711302078_3831115496465170561_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=-a0_VXYi9B4AX_epecN&_nc_ht=scontent.fhan14-4.fna&oh=00_AfBLjT5cjvY5sJVrWdwoS-XR0jOl5_RbZkRUMeaumXfeig&oe=6438AAE3"/>
                <div className="content">
                    <div className="nameActor">Actor 1</div>
                    <div className="nameUser">User 1</div>
                </div>
            </li>

            <li className="animationTop delay-21">
                <img src="https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-6/339266289_892712115146981_4345120717834720998_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=aLUm_WFWywwAX_B1X0w&_nc_ht=scontent.fhan14-3.fna&oh=00_AfD-pSzjxjX7iuyXEK4fYw6BJrzz-4ddvxWRa3wF4yvjgw&oe=6439925B"/>
                <div className="content">
                    <div className="nameActor">Actor 1</div>
                    <div className="nameUser">User 1</div>
                </div>
            </li>

            <li className="animationTop delay-22">
                <img src="https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/339289482_922148319232964_8270133276819170883_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=krf4ZnGniVcAX-TbOdJ&_nc_ht=scontent.fhan14-2.fna&oh=00_AfDJKL5HiDBZ_bujZ5jHSrllGLZjFZVrvM_UWLCt86QPcA&oe=643849D4"/>
                <div className="content">
                    <div className="nameActor">Actor 1</div>
                    <div className="nameUser">User 1</div>
                </div>
            </li>

            <li className="animationTop delay-23">
                <img src="https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/339161485_5685591611568945_6625066664584600872_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=3NoWZScz1F0AX_2nH99&_nc_ht=scontent.fhan14-1.fna&oh=00_AfAtSy0TvjhmKohAFL3aS3IzChIcG3zjsnk9qbTESnF1Zg&oe=6438DD2A"/>
                <div className="content">
                    <div className="nameActor">Actor 1</div>
                    <div className="nameUser">User 1</div>
                </div>
            </li>

            <li className="animationTop delay-24">
                <img src="https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/339261663_953901862625474_3050187044929779135_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=27-Wirko7vgAX-iJmbZ&_nc_ht=scontent.fhan14-1.fna&oh=00_AfCFrQFHeEuaWr9hKkaZ1YdNcXyfvsNxi99nMz2rxRAsvQ&oe=64386F27"/>
                <div className="content">
                    <div className="nameActor">Actor 1</div>
                    <div className="nameUser">User 1</div>
                </div>
            </li>


        </ul>
    </div>
        </div>
    </div>
    )
}

export default WebsiteLayout