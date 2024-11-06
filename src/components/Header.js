import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/header.css'; // External CSS file
import imageLogo from '../assets/img/logo.png';
import searchIcon from '../assets/img/icon/search.png';
import iconHeart from '../assets/img/icon/heart.png';
import iconCart from '../assets/img/icon/cart.png';

function Header() {
    return (
        // Header Section Begin
        <header className="header">
            <div className="header__top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-7">
                            <div className="header__top__left">
                                <p>Miễn phí vận chuyển, đảm bảo hoàn tiền hoặc trả hàng trong vòng 30 ngày.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-5">
                            <div className="header__top__right">
                                <div className="header__top__links">
                                    <a href="#">Sign in</a>
                                    <a href="#">FAQs</a>
                                </div>
                                <div className="header__top__hover">
                                    <span>Usd <i className="arrow_carrot-down"></i></span>
                                    <ul>
                                        <li>USD</li>
                                        <li>EUR</li>
                                        <li>VND</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-3">
                        <div className="header__logo">
                            <Link to="/index">
                                <img src={imageLogo} alt="iconLogo" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <nav className="header__menu mobile-menu">
                            <ul>
                                <li><Link to="/index">Index</Link></li>
                                <li><Link to="/shop">Shop</Link></li>
                                <li>
                                    <Link to="#">Pages</Link>
                                    <ul className="dropdown">
                                        <li><Link to="/about">About Us</Link></li>
                                        <li><Link to="/shop-details">Shop Details</Link></li>
                                        <li><Link to="/shopping-cart">Shopping Cart</Link></li>
                                        <li><Link to="/checkout">Check Out</Link></li>
                                        <li><Link to="/blog-details">Blog Details</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="/blog">Blog</Link></li>
                                <li><Link to="/contact">Contacts</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-lg-3 col-md-3">
                        <div className="header__nav__option">
                            <a href="#" className="search-switch"><img src={searchIcon} alt="Search" /></a>
                            <a href="#"><img src={iconHeart} alt="Favorites" /></a>
                            <a href="#"><img src={iconCart} alt="Cart" /> <span>0</span></a>
                            <div className="price">$0.00</div>
                        </div>
                    </div>
                </div>
                <div className="canvas__open"><i className="fa fa-bars"></i></div>
            </div>
        </header>
        // Header Section End
    );
}

export default Header;
