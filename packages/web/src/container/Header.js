import React from 'react'
import { Link } from 'react-router-dom'
import UseWishList from '../hook/UseWishList';
import {FaHeart} from "react-icons/fa"

const Header = () => {
    const {handleState,state} = UseWishList();
    return (
        <div className="ui fixed menu">

            <div className="ui container center">
                <Link to="/">
                    <h4>Home</h4>
                </Link>
            </div>

            <div className="ui container center">
                <Link to="/liked">
                    <button><FaHeart/></button>
                </Link>
            </div>

        </div>
    )
}

export default Header
