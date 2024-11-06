import React from 'react';
import '../assets/css/bootstrap.min.css';
import '../assets/css/about.css';
import Header from './Header'; // Import Header component
import Footer from './Footer'; // Import Footer component

import aboutImage from '../assets/img/about/about-us.jpg'; // Adjust the path as needed
import testimonialAuthorImage from '../assets/img/about/testimonial-author.jpg'; // Adjust the path as needed
import testimonialPic from '../assets/img/about/testimonial-pic.jpg'; // Adjust the path as needed

import team1 from '../assets/img/about/team-1.jpg';
import team2 from '../assets/img/about/team-2.jpg';
import team3 from '../assets/img/about/team-3.jpg';
import team4 from '../assets/img/about/team-4.jpg';

import clients1 from '../assets/img/clients/client-1.png';
import clients2 from '../assets/img/clients/client-2.png';
import clients3 from '../assets/img/clients/client-3.png';
import clients4 from '../assets/img/clients/client-4.png';
import clients5 from '../assets/img/clients/client-5.png';
import clients6 from '../assets/img/clients/client-6.png';
import clients7 from '../assets/img/clients/client-7.png';
import clients8 from '../assets/img/clients/client-8.png';

const AboutUs = () => {
    const clients = [clients1, clients2, clients3, clients4, clients5, clients6, clients7, clients8];

    return (
        <div>
            <Header /> {/* Nhúng Header vào đây */}

            {/* Breadcrumb Section Begin */}
            <section className="breadcrumb-option">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb__text">
                                <h4>About Us</h4>
                                <div className="breadcrumb__links">
                                    <a href="./index.html">Home</a>
                                    <span>About Us</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Breadcrumb Section End */}

            {/* About Section Begin */}
            <section className="about spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="about__pic">
                                <img src={aboutImage} alt="About Us" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="about__item">
                                <h4>Who We Are?</h4>
                                <p>Contextual advertising programs sometimes have strict policies that need to be adhered to.
                                    Let’s take Google as an example.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="about__item">
                                <h4>What We Do?</h4>
                                <p>In this digital generation where information can be easily obtained within seconds, business
                                    cards still have retained their importance.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="about__item">
                                <h4>Why Choose Us</h4>
                                <p>A two or three storey house is the ideal way to maximise the piece of earth on which our home
                                    sits, but for older or infirm people.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* About Section End */}

            {/* Testimonial Section Begin */}
            <section className="testimonial">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 p-0">
                            <div className="testimonial__text">
                                <span className="icon_quotations"></span>
                                <p>“Going out after work? Take your butane curling iron with you to the office, heat it up,
                                    style your hair before you leave the office and you won’t have to make a trip back home.”
                                </p>
                                <div className="testimonial__author">
                                    <div className="testimonial__author__pic">
                                        <img src={testimonialAuthorImage} alt="Testimonial Author" />
                                    </div>
                                    <div className="testimonial__author__text">
                                        <h5>Augusta Schultz</h5>
                                        <p>Fashion Design</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 p-0">
                            <div className="testimonial__pic set-bg" style={{ backgroundImage: `url(${testimonialPic})` }}></div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Testimonial Section End */}

            {/* Counter Section Begin */}
            <section className="counter spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="counter__item">
                                <div className="counter__item__number">
                                    <h2 className="cn_num">102</h2>
                                </div>
                                <span>Our <br />Clients</span>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="counter__item">
                                <div className="counter__item__number">
                                    <h2 className="cn_num">30</h2>
                                </div>
                                <span>Total <br />Categories</span>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="counter__item">
                                <div className="counter__item__number">
                                    <h2 className="cn_num">102</h2>
                                </div>
                                <span>In <br />Country</span>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="counter__item">
                                <div className="counter__item__number">
                                    <h2 className="cn_num">98</h2>
                                    <strong>%</strong>
                                </div>
                                <span>Happy <br />Customer</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Counter Section End */}

            {/* Team Section Begin */}
            <section className="team spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <span>Our Team</span>
                                <h2>Meet Our Team</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {[
                            { img: team1, name: "John Smith", role: "Fashion Design" },
                            { img: team2, name: "Christine Wise", role: "C.E.O" },
                            { img: team3, name: "Sean Robbins", role: "Manager" },
                            { img: team4, name: "Lucy Myers", role: "Delivery" }
                        ].map((member, index) => (
                            <div key={index} className="col-lg-3 col-md-6 col-sm-6">
                                <div className="team__item">
                                    <img src={member.img} alt={member.name} />
                                    <h4>{member.name}</h4>
                                    <span>{member.role}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Team Section End */}

            {/* Client Section Begin */}
            <section className="clients spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <span>Partner</span>
                                <h2>Happy Clients</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {clients.map((clientImg, index) => (
                            <div key={index} className="col-lg-3 col-md-4 col-sm-4 col-6">
                                <a href="#" className="client__item">
                                    <img src={clientImg} alt={`Client ${index + 1}`} />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Client Section End */}

            <Footer /> {/* Nhúng Footer vào đây */}
        </div>
    );
};

export default AboutUs;
