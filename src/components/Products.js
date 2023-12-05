import React, { useState, useEffect } from 'react';
import axios from 'axios';


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
            <div className="container row " style={{color:'white'}}>
                <h1>Products</h1>
                {
                    products.map(product => {
                        return <div className="col-sm-6 col-md-4 col-lg-3  ms-3 me-3 mt-3 align-items-center">
                            <img src={product.image} alt=""  />
                            <h5 className="text-center">{product.title}</h5>
                            <p className="text-center">{product.description}</p>
                            <h3 className="text-end">Rs. {product.price}</h3>
                        </div>

                    })
                }
            </div>
        </>


    );



}
