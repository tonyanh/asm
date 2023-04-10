import { useState, useEffect } from 'react'
import "../App.css";
import { getAllProduct } from '../api/product';
import { Link } from 'react-router-dom';
// import "bootstrap/dist/css/bootstrap.min.css";

const HomePage = () => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        getAllProduct().then(({ data }) => setProduct(data))
    },[])
    return (
        <div>
                <div className="listFigure">
                                {
                                    product.map((item) => {
                                        return <div className="item">
                                            <div className="img">
                                                <Link to={'products/' + item._id}><img  width={250} src={item.image} alt=""/></Link>
                                                
                                            </div>
                                            <div className="content">
                                                <h3>{item.name}</h3>
                                                <p>{item.title}</p>
                                            </div>
                                        </div>
                                    })
                                }
                </div>
        </div>
    );
};

export default HomePage;
