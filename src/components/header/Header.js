import React from 'react'
import  './header.css'
import {Link} from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
    return (
        <nav className="header">
            <Link to="/home">
                <img
                    className="header__logo"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhave6Yb0UBCTGpEFvXwxVOKy92LQVv3Q25w&usqp=CAU"
                    alt=""/>

            </Link>

            <div className="header__search">
                <input type="text" className="header__searchInput"/>
                <SearchIcon className="header__searchIcon"/>
            </div>

            <div className="header__nav">
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Hello jam</span>
                        <span className="header__optionLineTwo">Sign in</span>
                    </div>
                </Link>

                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>

                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__optionLineTwo header_basketCount">0</span>
                    </div>
                </Link>

            </div>

        </nav>
    )
}

export default Header
