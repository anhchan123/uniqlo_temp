import React from 'react';


import Header from './Header'; // Import Header component
import Footer from './Footer'; // Import Footer component

import heroImage1 from '../assets/img/hero/hero-1.jpg';
import heroImage2 from '../assets/img/hero/hero-2.jpg';

import banner1 from '../assets/img/banner/banner-1.jpg';
import banner2 from '../assets/img/banner/banner-2.jpg';
import banner3 from '../assets/img/banner/banner-3.jpg';

import product1 from '../assets/img/product/product-1.jpg';
import product2 from '../assets/img/product/product-2.jpg';
import product3 from '../assets/img/product/product-3.jpg';
import product4 from '../assets/img/product/product-4.jpg';
import product5 from '../assets/img/product/product-5.jpg';
import product6 from '../assets/img/product/product-6.jpg';
import product7 from '../assets/img/product/product-7.jpg';
import product8 from '../assets/img/product/product-8.jpg';

import calendarIcon from '../assets/img/icon/calendar.png';


import instagram1 from '../assets/img/instagram/instagram-1.jpg';
import instagram2 from '../assets/img/instagram/instagram-2.jpg';
import instagram3 from '../assets/img/instagram/instagram-3.jpg';
import instagram4 from '../assets/img/instagram/instagram-4.jpg';
import instagram5 from '../assets/img/instagram/instagram-5.jpg';
import instagram6 from '../assets/img/instagram/instagram-6.jpg';


import blog1 from '../assets/img/blog/blog-1.jpg';
import blog2 from '../assets/img/blog/blog-2.jpg';
import blog3 from '../assets/img/blog/blog-3.jpg';

const HomePage = () => {
    const instagramImages = [
        instagram1,
        instagram2,
        instagram3,
        instagram4,
        instagram5,
        instagram6
    ];
    const blogImages = [
        blog1,
        blog2,
        blog3
    ];
    const productSaleImage = [
        product1,
        product2,
        product3,
        product4,
        product5,
        product6,
        product7,
        product8,


    ];
    return (
        <div>
            <Header /> {/* Nhúng Header vào đây */}
            {/* Hero Section Begin */}
            <section className="hero">
                <div className="hero__slider owl-carousel">
                    <div className="hero__items" style={{ backgroundImage: `url(${heroImage1})` }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-5 col-lg-7 col-md-8">
                                    <div className="hero__text">
                                        <h6>Summer Collection</h6>
                                        <h2>Fall - Winter Collections 2030</h2>
                                        <p>A specialist label creating luxury essentials. Ethically crafted with an unwavering commitment to exceptional quality.</p>
                                        <a href="#" className="primary-btn">Shop now <span className="arrow_right"></span></a>
                                        <div className="hero__social">
                                            <a href="#"><i className="fa fa-facebook"></i></a>
                                            <a href="#"><i className="fa fa-twitter"></i></a>
                                            <a href="#"><i className="fa fa-pinterest"></i></a>
                                            <a href="#"><i className="fa fa-instagram"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hero__items" style={{ backgroundImage: `url(${heroImage2})` }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-5 col-lg-7 col-md-8">
                                    <div className="hero__text">
                                        <h6>Summer Collection</h6>
                                        <h2>Fall - Winter Collections 2030</h2>
                                        <p>A specialist label creating luxury essentials. Ethically crafted with an unwavering commitment to exceptional quality.</p>
                                        <a href="#" className="primary-btn">Shop now <span className="arrow_right"></span></a>
                                        <div className="hero__social">
                                            <a href="#"><i className="fa fa-facebook"></i></a>
                                            <a href="#"><i className="fa fa-twitter"></i></a>
                                            <a href="#"><i className="fa fa-pinterest"></i></a>
                                            <a href="#"><i className="fa fa-instagram"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Hero Section End */}

            {/* Banner Section Begin */}
            <section className="banner spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 offset-lg-4">
                            <div className="banner__item">
                                <div className="banner__item__pic">
                                    <img src={banner1} alt="Banner 1" />
                                </div>
                                <div className="banner__item__text">
                                    <h2>Clothing Collections 2030</h2>
                                    <a href="#">Shop now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="banner__item banner__item--middle">
                                <div className="banner__item__pic">
                                    <img src={banner2} alt="Banner 2" />
                                </div>
                                <div className="banner__item__text">
                                    <h2>Accessories</h2>
                                    <a href="#">Shop now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="banner__item banner__item--last">
                                <div className="banner__item__pic">
                                    <img src={banner3} alt="Banner 3" />
                                </div>
                                <div className="banner__item__text">
                                    <h2>Shoes Spring 2030</h2>
                                    <a href="#">Shop now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Banner Section End */}

            {/* Product Section Begin */}
            <section className="product spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <ul className="filter__controls">
                                <li className="active" data-filter="*">Best Sellers</li>
                                <li data-filter=".new-arrivals">New Arrivals</li>
                                <li data-filter=".hot-sales">Hot Sales</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row product__filter">
                        <div className="col-lg-3 col-md-6 col-sm-6 mix new-arrivals">
                            {/*product__item  */}
                            <div className="product-list">
                                {productSaleImage.map((product, index) => (
                                    <div key={index} className="product__item">
                                        <div className="product__item__pic">
                                            <img src={product} alt={`Product ${index + 1}`} />
                                            <span className="label">New</span>
                                            <ul className="product__hover">
                                                <li><a href="#"><img src="img/icon/heart.png" alt="Heart" /></a></li>
                                                <li><a href="#"><img src="img/icon/compare.png" alt="Compare" /> <span>Compare</span></a></li>
                                                <li><a href="#"><img src="img/icon/search.png" alt="Search" /></a></li>
                                            </ul>
                                        </div>
                                        <div className="product__item__text">
                                            <h6>Piqué Biker Jacket</h6>
                                            <a href="#" className="add-cart">+ Add To Cart</a>
                                            <div className="rating">
                                                <i className="fa fa-star-o"></i>
                                                <i className="fa fa-star-o"></i>
                                                <i className="fa fa-star-o"></i>
                                                <i className="fa fa-star-o"></i>
                                                <i className="fa fa-star-o"></i>
                                            </div>
                                            <h5>$67.24</h5>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {/*product__item  */}

                        </div>
                        {/* Tiếp tục thêm các sản phẩm khác */}
                    </div>
                </div>
            </section>
            {/* Product Section End */}

            {/* Categories Section Begin */}
            <section className="categories spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="categories__text">
                                <h2>Clothings Hot <br /> <span>Shoe Collection</span> <br /> Accessories</h2>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="categories__hot__deal">
                                <img src={productSaleImage} alt="Sale Product" />
                                <div className="hot__deal__sticker">
                                    <span>Sale Of</span>
                                    <h5>$29.99</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 offset-lg-1">
                            <div className="categories__deal__countdown">
                                <span>Deal Of The Week</span>
                                <h2>Multi-pocket Chest Bag Black</h2>
                                <div className="categories__deal__countdown__timer" id="countdown">
                                    <div className="cd-item">
                                        <span>3</span>
                                        <p>Days</p>
                                    </div>
                                    <div className="cd-item">
                                        <span>1</span>
                                        <p>Hours</p>
                                    </div>
                                    <div className="cd-item">
                                        <span>50</span>
                                        <p>Minutes</p>
                                    </div>
                                    <div className="cd-item">
                                        <span>18</span>
                                        <p>Seconds</p>
                                    </div>
                                </div>
                                <a href="#" className="primary-btn">Shop now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Categories Section End */}

            {/* Instagram Section Begin */}
            <section className="instagram spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="instagram__pic">
                                {instagramImages.map((image, index) => (
                                    <div key={index} className="instagram__pic__item">
                                        <img src={image} alt={`Instagram Pic ${index + 1}`} />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="instagram__text">
                                <h2>Instagram</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <h3>#Male_Fashion</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Instagram Section End */}

            {/* Latest Blog Section Begin */}
            <section className="latest spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <span>Latest News</span>
                                <h2>Fashion New Trends</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {blogImages.map((image, index) => (
                            <div key={index} className="col-lg-4 col-md-6 col-sm-6">
                                <div className="blog__item">
                                    <div className="blog__item__pic set-bg" style={{ backgroundImage: `url(${image})` }}></div>
                                    <div className="blog__item__text">
                                        <span><img src={calendarIcon} alt="Calendar Icon" /> 16 February 2020</span>
                                        <h5>What Curling Irons Are The Best Ones</h5>
                                        <a href="#">Read More</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Latest Blog Section End */}


            <Footer /> {/* Nhúng Footer vào đây */}

        </div>
    );
};

export default HomePage;
