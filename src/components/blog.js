import React from 'react';

import '../assets/css/bootstrap.min.css';

import Header from './Header'; // Import Header component
import Footer from './Footer'; // Import Footer component


import imageLogo from '../assets/img/logo.png';

import searchIcon from '../assets/img/icon/search.png';
import iconHeart from '../assets/img/icon/heart.png';
import iconCart from '../assets/img/icon/cart.png';

import imageHero1 from '../assets/img/hero/hero-1.jpg';
import imageHero2 from '../assets/img/hero/hero-2.jpg';

import imageBanner1 from '../assets/img/banner/banner-1.jpg';
import imageBanner2 from '../assets/img/banner/banner-2.jpg';
import imageBanner3 from '../assets/img/banner/banner-3.jpg';

import imageProduct1 from '../assets/img/product/product-1.jpg';
import imageProduct2 from '../assets/img/product/product-2.jpg';
import imageProduct3 from '../assets/img/product/product-3.jpg';
import imageProduct4 from '../assets/img/product/product-4.jpg';
import imageProduct5 from '../assets/img/product/product-5.jpg';
import imageProduct6 from '../assets/img/product/product-6.jpg';
import imageProduct7 from '../assets/img/product/product-7.jpg';

import imageProduct10 from '../assets/img/product/product-10.jpg';
import imageProduct11 from '../assets/img/product/product-11.jpg';
import imageProduct12 from '../assets/img/product/product-12.jpg';
import imageProduct13 from '../assets/img/product/product-13.jpg';
import imageProduct14 from '../assets/img/product/product-14.jpg';

import imageProduct_sale from '../assets/img/product-sale.png';

import imageInstagram1 from '../assets/img/instagram/instagram-1.jpg';
import imageInstagram2 from '../assets/img/instagram/instagram-2.jpg';
import imageInstagram3 from '../assets/img/instagram/instagram-3.jpg';
import imageInstagram4 from '../assets/img/instagram/instagram-4.jpg';
import imageInstagram5 from '../assets/img/instagram/instagram-5.jpg';

import imageBlog1 from '../assets/img/blog/blog-1.jpg';
import imageBlog2 from '../assets/img/blog/blog-2.jpg';
import imageBlog3 from '../assets/img/blog/blog-3.jpg';
import imageBlog4 from '../assets/img/blog/blog-4.jpg';
import imageBlog5 from '../assets/img/blog/blog-5.jpg';
import imageBlog6 from '../assets/img/blog/blog-6.jpg';
import imageBlog7 from '../assets/img/blog/blog-7.jpg';

import imagePayment from '../assets/img/payment.png';


import imageBreadCrumb from '../assets/img/breadcrumb-bg.jpg';


import '../assets/css/blog.css';

import { Link } from 'react-router-dom';
const App = () => {
    return (
        <div>
            <Header /> {/* Nhúng Header vào đây */}
            {/* Breadcrumb Section Begin */}
            <section className="breadcrumb-blog">
                <img src={imageBreadCrumb} alt="Breadcrumb Background" className="breadcrumb-blog__image" />
                {/* Nội dung bên trong */}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>Our Blog</h2>
                        </div>
                    </div>
                </div>
            </section>
            {/* Breadcrumb Section End */}

            {/* Blog Section Begin */}
            <section className="blog spad">
                <div className="container">
                    <div className="row">
                        {/* Blog Items */}
                        {[
                            { date: '16 February 2020', title: 'What Curling Irons Are The Best Ones', img: imageBlog1 },
                            { date: '21 February 2020', title: 'Eternity Bands Do Last Forever', img: imageBlog1 },
                            { date: '28 February 2020', title: 'The Health Benefits Of Sunglasses', img: imageBlog2 },
                            { date: '16 February 2020', title: 'Aiming For Higher The Mastopexy', img: imageBlog3 },
                            { date: '21 February 2020', title: 'Wedding Rings A Gift For A Lifetime', img: imageBlog4 },
                            { date: '28 February 2020', title: 'The Different Methods Of Hair Removal', img: imageBlog5 },
                            { date: '16 February 2020', title: 'Hoop Earrings A Style From History', img: imageBlog6 },
                            { date: '21 February 2020', title: 'Lasik Eye Surgery Are You Ready', img: imageBlog7 },
                        ].map((blog, index) => (
                            <div key={index} className="col-lg-4 col-md-6 col-sm-6">
                                <div className="blog__item">
                                    <div className="blog__item__pic">
                                        <img src={blog.img} alt={blog.title} />
                                    </div>
                                    <div className="blog__item__text">
                                        <span><img src="img/icon/calendar.png" alt="" /> {blog.date}</span>
                                        <h5>{blog.title}</h5>
                                        <a href="#">Read More</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Blog Section End */}

            <Footer /> {/* Nhúng Header vào đây */}

        </div >
    );
};

export default App;
