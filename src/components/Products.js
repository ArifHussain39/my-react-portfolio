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
                    products.map(product => {
                        return <div className="col-sm-12 col-md-4 col-lg-3  ms-2 me-2 mt-2 align-items-center">
                            <img src={product.image} alt=""  />
                            <h3 className="text-center">{product.title}</h3>
                            <p className="text-center">{product.description}</p>
                            <span className="text-end">Rs. {product.price}</span>
                        </div>

                    })
                }
            </div>
        </>


    );



}
