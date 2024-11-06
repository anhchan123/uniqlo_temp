import React from 'react';
import Header from './Header'; // Import Header component
import Footer from './Footer'; // Import Footer component
const Shop = () => {
    return (
        <div>
            <Header /> {/* Nhúng Header vào đây */}
            {/* Breadcrumb Section Begin */}
            <section className="breadcrumb-option">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb__text">
                                <h4>Shop</h4>
                                <div className="breadcrumb__links">
                                    <a href="./index.html">Home</a>
                                    <span>Shop</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Breadcrumb Section End */}

            {/* Shop Section Begin */}
            <section className="shop spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="shop__sidebar">
                                <div className="shop__sidebar__search">
                                    <form action="#">
                                        <input type="text" placeholder="Search..." />
                                        <button type="submit"><span className="icon_search"></span></button>
                                    </form>
                                </div>
                                <div className="shop__sidebar__accordion">
                                    <div className="accordion" id="accordionExample">
                                        <div className="card">
                                            <div className="card-heading">
                                                <a data-toggle="collapse" href="#collapseOne">Categories</a>
                                            </div>
                                            <div id="collapseOne" className="collapse show" data-parent="#accordionExample">
                                                <div className="card-body">
                                                    <div className="shop__sidebar__categories">
                                                        <ul className="nice-scroll">
                                                            <li><a href="#">Men (20)</a></li>
                                                            <li><a href="#">Women (20)</a></li>
                                                            <li><a href="#">Bags (20)</a></li>
                                                            <li><a href="#">Clothing (20)</a></li>
                                                            <li><a href="#">Shoes (20)</a></li>
                                                            <li><a href="#">Accessories (20)</a></li>
                                                            <li><a href="#">Kids (20)</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-heading">
                                                <a data-toggle="collapse" href="#collapseTwo">Branding</a>
                                            </div>
                                            <div id="collapseTwo" className="collapse show" data-parent="#accordionExample">
                                                <div className="card-body">
                                                    <div className="shop__sidebar__brand">
                                                        <ul>
                                                            <li><a href="#">Louis Vuitton</a></li>
                                                            <li><a href="#">Chanel</a></li>
                                                            <li><a href="#">Hermes</a></li>
                                                            <li><a href="#">Gucci</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-heading">
                                                <a data-toggle="collapse" href="#collapseThree">Filter Price</a>
                                            </div>
                                            <div id="collapseThree" className="collapse show" data-parent="#accordionExample">
                                                <div className="card-body">
                                                    <div className="shop__sidebar__price">
                                                        <ul>
                                                            <li><a href="#">$0.00 - $50.00</a></li>
                                                            <li><a href="#">$50.00 - $100.00</a></li>
                                                            <li><a href="#">$100.00 - $150.00</a></li>
                                                            <li><a href="#">$150.00 - $200.00</a></li>
                                                            <li><a href="#">$200.00 - $250.00</a></li>
                                                            <li><a href="#">250.00+</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Tương tự chuyển các phần còn lại của sidebar */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="shop__product__option">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div className="shop__product__option__left">
                                            <p>Showing 1–12 of 126 results</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div className="shop__product__option__right">
                                            <p>Sort by Price:</p>
                                            <select>
                                                <option value="">Low To High</option>
                                                <option value="">$0 - $55</option>
                                                <option value="">$55 - $100</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                {/* Thêm các sản phẩm */}
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="product__item">
                                        <div className="product__item__pic set-bg" data-setbg="img/product/product-2.jpg">
                                            <ul className="product__hover">
                                                <li><a href="#"><img src="img/icon/heart.png" alt="" /></a></li>
                                                <li><a href="#"><img src="img/icon/compare.png" alt="" /> <span>Compare</span></a></li>
                                                <li><a href="#"><img src="img/icon/search.png" alt="" /></a></li>
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
                                            <div className="product__color__select">
                                                <label htmlFor="pc-4">
                                                    <input type="radio" id="pc-4" />
                                                </label>
                                                <label className="active black" htmlFor="pc-5">
                                                    <input type="radio" id="pc-5" />
                                                </label>
                                                <label className="grey" htmlFor="pc-6">
                                                    <input type="radio" id="pc-6" />
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Tiếp tục thêm các sản phẩm khác */}
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="product__pagination">
                                        <a className="active" href="#">1</a>
                                        <a href="#">2</a>
                                        <a href="#">3</a>
                                        <span>...</span>
                                        <a href="#">21</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Shop Section End */}
            <Footer /> {/* Nhúng Footer vào đây */}

        </div>
    );
};

export default Shop;
