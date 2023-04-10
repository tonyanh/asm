import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getAllProduct } from '../../api/product'

function WebsiteLayout() {
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
                    </ul>
                </div>
                <div className="center">
                    <div className="bigTitle">TonyAnh</div>
                    <div className="banner">
                        <img src="https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-6/339278238_1295569134506284_8965899080970050255_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=tiY9y4w9hyEAX9RvmDr&_nc_ht=scontent.fhan14-3.fna&oh=00_AfCTlvALtdMry5QejxEMFcUmKdXg26QJA_jHQEXlh1SdbQ&oe=6431C7B9" alt="" />
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
                <img src="https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/328686251_3354060714849898_5002795599780927629_n.jpg?stp=cp6_dst-jpg_p843x403&_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=DLgGyhMgeYEAX8Na8iI&_nc_ht=scontent.fhan14-1.fna&oh=00_AfDB9pQJdbzgSLY2UVa1C3EZ8GAJh1cUE_Qy2UqjAtkLlg&oe=6433907F" alt=""/>
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
                        <img src="https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/339333868_940405787394514_2241238246424108513_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=GAmp6NbxfJoAX9gFcOP&_nc_ht=scontent.fhan14-2.fna&oh=00_AfBK4QjJ0pj-zbpct6O737rL1oLf0lKPw6qlTnt0aPZnfw&oe=6431737B"/>
                        <div className="content">
                            <div className="nameActor">Actor 1</div>
                            <div className="nameUser">User 1</div>
                        </div>
                    </li>

                    <li className="animationTop delay-21">
                        <img src="https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-6/339266289_892712115146981_4345120717834720998_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=DHSExDqPOiIAX9k0Yi0&_nc_ht=scontent.fhan14-3.fna&oh=00_AfCeukmcGWA9NVSdZ2CUEhgCOLMEO_2jZV-CnxAtyJhY6g&oe=6431A95B"/>
                        <div className="content">
                            <div className="nameActor">Actor 1</div>
                            <div className="nameUser">User 1</div>
                        </div>
                    </li>

                    <li className="animationTop delay-22">
                        <img src="https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/339289482_922148319232964_8270133276819170883_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=0zScRcUkMScAX_JM7Oo&_nc_ht=scontent.fhan14-2.fna&oh=00_AfAtJS0ruVLTaeB1FLCd5SC1R_hENJTxHNuf9xA7s3j4Qw&oe=643060D4"/>
                        <div className="content">
                            <div className="nameActor">Actor 1</div>
                            <div className="nameUser">User 1</div>
                        </div>
                    </li>

                    <li className="animationTop delay-23">
                        <img src="https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/339161485_5685591611568945_6625066664584600872_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=gubLPvDtLPsAX-U00--&_nc_ht=scontent.fhan14-1.fna&oh=00_AfDODrq9VZFZQX_pl27zPQtO8NMNxhsVS4yqrXBV4t4Y5g&oe=6430F42A"/>
                        <div className="content">
                            <div className="nameActor">Actor 1</div>
                            <div className="nameUser">User 1</div>
                        </div>
                    </li>

                    <li className="animationTop delay-24">
                        <img src="https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/339261663_953901862625474_3050187044929779135_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=3sQUL334ztwAX-Wl0sE&_nc_ht=scontent.fhan14-1.fna&oh=00_AfCpKA2NztZVgpd6yWsZzAIYbjBV2-yFbQQC2A_wgXfDew&oe=64308627"/>
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