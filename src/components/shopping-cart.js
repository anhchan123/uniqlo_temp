import React from 'react';
import '../assets/css/bootstrap.min.css';
import '../assets/css/style.css';
import Header from './Header'; // Import Header component
import Footer from './Footer'; // Import Footer component

import cart1 from '../assets/img/shopping-cart/cart-1.jpg';
import cart2 from '../assets/img/shopping-cart/cart-2.jpg';
import cart3 from '../assets/img/shopping-cart/cart-3.jpg';
import cart4 from '../assets/img/shopping-cart/cart-4.jpg';

const ShoppingCart = () => {
    return (
        <div>
            <Header /> {/* Nhúng Header vào đây */}

            {/* Breadcrumb Section Begin */}
            <section className="breadcrumb-option">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb__text">
                                <h4>Shopping Cart</h4>
                                <div className="breadcrumb__links">
                                    <a href="/">Home</a>
                                    <a href="/shop">Shop</a>
                                    <span>Shopping Cart</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Breadcrumb Section End */}

            {/* Shopping Cart Section Begin */}
            <section className="shopping-cart spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="shopping__cart__table">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Product</th>
                                            <th>Quantity</th>
                                            <th>Total</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[{
                                            img: cart1,
                                            name: 'T-shirt Contrast Pocket',
                                            price: '$98.49',
                                            total: '$30.00'
                                        }, {
                                            img: cart2,
                                            name: 'Diagonal Textured Cap',
                                            price: '$98.49',
                                            total: '$32.50'
                                        }, {
                                            img: cart3,
                                            name: 'Basic Flowing Scarf',
                                            price: '$98.49',
                                            total: '$47.00'
                                        }, {
                                            img: cart4,
                                            name: 'Basic Flowing Scarf',
                                            price: '$98.49',
                                            total: '$30.00'
                                        }].map((item, index) => (
                                            <tr key={index}>
                                                <td className="product__cart__item">
                                                    <div className="product__cart__item__pic">
                                                        <img src={item.img} alt="Product" />
                                                    </div>
                                                    <div className="product__cart__item__text">
                                                        <h6>{item.name}</h6>
                                                        <h5>{item.price}</h5>
                                                    </div>
                                                </td>
                                                <td className="quantity__item">
                                                    <div className="quantity">
                                                        <div className="pro-qty-2">
                                                            <input type="text" value="1" />
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="cart__price">{item.total}</td>
                                                <td className="cart__close"><i className="fa fa-close"></i></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="continue__btn">
                                        <a href="#">Continue Shopping</a>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="continue__btn update__btn">
                                        <a href="#"><i className="fa fa-spinner"></i> Update cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="cart__discount">
                                <h6>Discount codes</h6>
                                <form action="#">
                                    <input type="text" placeholder="Coupon code" />
                                    <button type="submit">Apply</button>
                                </form>
                            </div>
                            <div className="cart__total">
                                <h6>Cart total</h6>
                                <ul>
                                    <li>Subtotal <span>$ 169.50</span></li>
                                    <li>Total <span>$ 169.50</span></li>
                                </ul>
                                <a href="#" className="primary-btn">Proceed to checkout</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Shopping Cart Section End */}
            <Footer /> {/* Nhúng Header vào đây */}

        </div>
    );
};

export default ShoppingCart;
