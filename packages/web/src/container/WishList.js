import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import axios from 'axios';
import UseWishList from '../hook/UseWishList';
import { selectedProduct,setProducts } from '../redux/actions/ProductAction';
import {FaHeart} from "react-icons/fa"

const WishList = () => {
    const dispatch = useDispatch()
    const {handleState,state} = UseWishList();

    const getSingleProd = async (id) => {
        const update = {
            like:state
        }
        const response = await axios.patch(`http://localhost:5000/products/${id}`,update)
            .catch(err => {
                console.log("err ", err);
            });
        console.log(response);
        dispatch(selectedProduct(response.data))
    }
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
    const products = useSelector((state) => state.allProducts.products);
    const renderList = products.map((product) => {
      
        const { id, title, price, category, image, like,_id } = product
        if(like){
        return (
            <div className="four wide column" key={id}>
                <div className="ui link cards">
                    <div className="card">
                        <div className="image">
                            <img src={image} alt={title} />
                        </div>
                        <div className="content">
                            <button onClick={()=>{
                                handleState()
                                getSingleProd(_id)
                                FetchData()
                            }}><FaHeart/></button>
                            <div className="header">{title}</div>
                            <div className="meta price">${price}</div>
                            <div className="meta">{category}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
        }
    })
    return (
        <div>{renderList}</div>
    )
}

export default WishList
