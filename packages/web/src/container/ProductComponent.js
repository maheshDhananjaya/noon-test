import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import UseWishList from '../hook/UseWishList';
import { FaHeart } from "react-icons/fa"
import { selectedProduct, setProducts } from '../redux/actions/ProductAction';

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);
    const dispatch = useDispatch();

    const FetchData = async () => {
        const response = await axios.get('http://localhost:5000/products')
            .catch((err) => {
                console.log("err", err);
            });
        dispatch(setProducts(response.data))
    }

    useEffect(() => {
        FetchData();
    }, [])

    const { handleState, state } = UseWishList();
    const getSingleProd = async (id) => {
        const update = {
            like: true
        }
        const response = await axios.patch(`http://localhost:5000/products/${id}`, update)
            .catch(err => {
                console.log("err ", err);
            });
        dispatch(selectedProduct(response.data))
    }
    const renderList = products.map((product) => {
        const { id, title, price, category, image, _id } = product
        return (
            <div className="four wide column" key={id}>
                <div className="ui link cards">
                    <div className="card">
                        <div className="image">
                            <img src={image} alt={title} />
                        </div>
                        <div className="content">
                            <button onClick={() => {
                                handleState()
                                getSingleProd(_id)
                            }}><FaHeart /></button>
                            <div className="header">{title}</div>
                            <div className="meta price">${price}</div>
                            <div className="meta">{category}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <div>{renderList}</div>
    )
}

export default ProductComponent
