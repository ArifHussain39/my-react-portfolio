import React, { useState, useEffect } from 'react';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Products() {

    const [products, setProducts] = useState([]);


    const getProducts = async () => {
        const response = await axios.get("https://fakestoreapi.com/products")
        if (response.status === 200) {
            setProducts(response.data);
        }
    }

    useEffect(() => {
        getProducts();
    }, []);


    return (

        <>
            <div className="row container" style={{ color: 'white' }}>
                <h1>Products</h1>
                {
                    products.map((product, index) => (
                        <div key={index} className="col-sm-12 col-md-6 col-lg-3 ms-2 me-2 mt-2">
                            <div className="card">
                                <img src={product.image} className="card-img-top" alt="" />
                                <div className="card-body">
                                    <h3 className="card-title text-center">{product.title}</h3>
                                    <p className="card-text text-center">{product.description}</p>
                                    <p className="card-text text-end">Rs. {product.price}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>


    );



}
