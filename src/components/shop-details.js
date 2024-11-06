import React from 'react';
import '../assets/css/bootstrap.min.css';
import '../assets/css/style.css';
import Header from './Header'; // Import Header component
import Footer from './Footer'; // Import Footer component

import productBig2 from '../assets/img/shop-details/product-big-2.png';
import productBig3 from '../assets/img/shop-details/product-big-3.png';
import productBig from '../assets/img/shop-details/product-big.png';
import productBig4 from '../assets/img/shop-details/product-big-4.png';
import thumb1 from '../assets/img/shop-details/thumb-1.png';
import thumb2 from '../assets/img/shop-details/thumb-2.png';
import thumb3 from '../assets/img/shop-details/thumb-3.png';
import thumb4 from '../assets/img/shop-details/thumb-4.png';
import detailsPayment from '../assets/img/shop-details/details-payment.png';
import product1 from '../assets/img/product/product-1.jpg';
import product2 from '../assets/img/product/product-2.jpg';
import product3 from '../assets/img/product/product-3.jpg';
import product4 from '../assets/img/product/product-4.jpg';
import iconHeart from '../assets/img/icon/heart.png';
import iconCompare from '../assets/img/icon/compare.png';
import iconSearch from '../assets/img/icon/search.png';

const ShopDetails = () => {
    return (
        <div>
            <Header /> {/* Nhúng Header vào đây */}

            {/* Shop Details Section Begin */}
            <section className="shop-details">
                <div className="product__details__pic">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="product__details__breadcrumb">
                                    <a href="/">Home</a>
                                    <a href="/shop">Shop</a>
                                    <span>Product Details</span>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-3">
                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" data-toggle="tab" href="#tabs-1" role="tab">
                                            <div className="product__thumb__pic">
                                                <img src={thumb1} alt="Thumbnail 1" />
                                            </div>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#tabs-2" role="tab">
                                            <div className="product__thumb__pic">
                                                <img src={thumb2} alt="Thumbnail 2" />
                                            </div>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#tabs-3" role="tab">
                                            <div className="product__thumb__pic">
                                                <img src={thumb3} alt="Thumbnail 3" />
                                            </div>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#tabs-4" role="tab">
                                            <div className="product__thumb__pic">
                                                <img src={thumb4} alt="Thumbnail 4" />
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-6 col-md-9">
                                <div className="tab-content">
                                    <div className="tab-pane active" id="tabs-1" role="tabpanel">
                                        <div className="product__details__pic__item">
                                            <img src={productBig2} alt="Product Big 2" />
                                        </div>
                                    </div>
                                    <div className="tab-pane" id="tabs-2" role="tabpanel">
                                        <div className="product__details__pic__item">
                                            <img src={productBig3} alt="Product Big 3" />
                                        </div>
                                    </div>
                                    <div className="tab-pane" id="tabs-3" role="tabpanel">
                                        <div className="product__details__pic__item">
                                            <img src={productBig} alt="Product Big" />
                                        </div>
                                    </div>
                                    <div className="tab-pane" id="tabs-4" role="tabpanel">
                                        <div className="product__details__pic__item">
                                            <img src={productBig4} alt="Product Big 4" />
                                            <a href="https://www.youtube.com/watch?v=8PJ3_p7VqHw&list=RD8PJ3_p7VqHw&start_radio=1"
                                                className="video-popup"><i className="fa fa-play"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product__details__content">
                    <div className="container">
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-8">
                                <div className="product__details__text">
                                    <h4>Hooded thermal anorak</h4>
                                    <div className="rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star-o"></i>
                                        <span> - 5 Reviews</span>
                                    </div>
                                    <h3>$270.00 <span>$70.00</span></h3>
                                    <p>Coat with quilted lining and an adjustable hood. Featuring long sleeves with adjustable
                                        cuff tabs, adjustable asymmetric hem with elastic side tabs and a front zip fastening
                                        with placket.</p>
                                    <div className="product__details__option">
                                        <div className="product__details__option__size">
                                            <span>Size:</span>
                                            <label htmlFor="xxl">xxl
                                                <input type="radio" id="xxl" />
                                            </label>
                                            <label className="active" htmlFor="xl">xl
                                                <input type="radio" id="xl" />
                                            </label>
                                            <label htmlFor="l">l
                                                <input type="radio" id="l" />
                                            </label>
                                            <label htmlFor="sm">s
                                                <input type="radio" id="sm" />
                                            </label>
                                        </div>
                                        <div className="product__details__option__color">
                                            <span>Color:</span>
                                            <label className="c-1" htmlFor="sp-1">
                                                <input type="radio" id="sp-1" />
                                            </label>
                                            <label className="c-2" htmlFor="sp-2">
                                                <input type="radio" id="sp-2" />
                                            </label>
                                            <label className="c-3" htmlFor="sp-3">
                                                <input type="radio" id="sp-3" />
                                            </label>
                                            <label className="c-4" htmlFor="sp-4">
                                                <input type="radio" id="sp-4" />
                                            </label>
                                            <label className="c-9" htmlFor="sp-9">
                                                <input type="radio" id="sp-9" />
                                            </label>
                                        </div>
                                    </div>
                                    <div className="product__details__cart__option">
                                        <div className="quantity">
                                            <div className="pro-qty">
                                                <input type="text" value="1" />
                                            </div>
                                        </div>
                                        <a href="#" className="primary-btn">add to cart</a>
                                    </div>
                                    <div className="product__details__btns__option">
                                        <a href="#"><i className="fa fa-heart"></i> add to wishlist</a>
                                        <a href="#"><i className="fa fa-exchange"></i> Add To Compare</a>
                                    </div>
                                    <div className="product__details__last__option">
                                        <h5><span>Guaranteed Safe Checkout</span></h5>
                                        <img src={detailsPayment} alt="Details Payment" />
                                        <ul>
                                            <li><span>SKU:</span> 3812912</li>
                                            <li><span>Categories:</span> Clothes</li>
                                            <li><span>Tag:</span> Clothes, Skin, Body</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Shop Details Section End */}

            {/* Related Section Begin */}
            <section className="related spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h3 className="related-title">Related Product</h3>
                        </div>
                    </div>
                    <div className="row">
                        {[product1, product2, product3, product4].map((product, index) => (
                            <div key={index} className="col-lg-3 col-md-6 col-sm-6">
                                <div className="product__item">
                                    <div className="product__item__pic">
                                        <img src={product} alt={`Product ${index + 1}`} />
                                        <span className="label">New</span>
                                        <ul className="product__hover">
                                            <li><a href="#"><img src={iconHeart} alt="Heart Icon" /></a></li>
                                            <li><a href="#"><img src={iconCompare} alt="Compare Icon" /> <span>Compare</span></a></li>
                                            <li><a href="#"><img src={iconSearch} alt="Search Icon" /></a></li>
                                        </ul>
                                    </div>
                                    <div className="product__item__text">
                                        <h6>Product Name</h6>
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
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Related Section End */}
            <Footer /> {/* Nhúng Header vào đây */}

        </div>
    );
};

export default ShopDetails;
