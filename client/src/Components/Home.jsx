import React, { useEffect, useState } from 'react'
import OwlCarousel from 'react-owl-carousel';
import BrandLogo from './BrandLogo';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from "../Store/ActionCreators/ProductActionCreators"

export default function Home() {
    let [products, setProducts] = useState([])
    let dispatch = useDispatch()
    let allProductStateData = useSelector(state => state.ProductStateData)

    function getAPIData() {
        dispatch(getProduct())
        if (allProductStateData.length) {
            setProducts(allProductStateData.slice(0, 6))
        }
    }

    useEffect(() => {
        getAPIData()
    }, [allProductStateData.length])

    return (
        <>
            {/* home page slider */}
            <OwlCarousel className='owl-theme' loop margin={1} items={1} nav>
                {/* single home slider */}
                {[
                    { bg: "homepage-bg-6", subtitle: "Female Fashion", shopLink: "/shop/All/All/All", title: "Get More Than 90% Discount" },
                    { bg: "homepage-bg-1", subtitle: "Male Fashion", shopLink: "/shop/Male/All/All", title: "Get More Than 90% Discount" },
                    { bg: "homepage-bg-2", subtitle: "Female Fashion", shopLink: "/shop/Female/All/All", title: "Get More Than 90% Discount" },
                    { bg: "homepage-bg-4", subtitle: "Kids Fashion", shopLink: "/shop/Kids/All/All", title: "Get More Than 90% Discount" },
                    { bg: "homepage-bg-3", subtitle: "Female Fashion", shopLink: "/shop/All/All/All", title: "Get More Than 90% Discount" },
                    { bg: "homepage-bg-5", subtitle: "Female Fashion", shopLink: "/shop/All/All/All", title: "Get More Than 90% Discount" },
                    { bg: "homepage-bg-7", subtitle: "Male Fashion", shopLink: "/shop/All/All/All", title: "Get More Than 90% Discount" },
                    { bg: "homepage-bg-8", subtitle: "Female Fashion", shopLink: "/shop/All/All/All", title: "Get More Than 90% Discount" },
                    { bg: "homepage-bg-9", subtitle: "Female Fashion", shopLink: "/shop/All/All/All", title: "Get More Than 90% Discount" },
                    { bg: "homepage-bg-10", subtitle: "Female Fashion", shopLink: "/shop/All/All/All", title: "Get More Than 90% Discount" }
                ].map((slide, index) => (
                    <div key={index} className={`single-homepage-slider ${slide.bg}`} style={{ height: "500px" }}>
                        <div className="container h-100 d-flex justify-content-center align-items-center">
                            <div className="row w-100">
                                <div className="col-md-12 col-lg-7 offset-lg-1 offset-xl-0">
                                    <div className="hero-text text-center" style={{ marginTop: "200px" }}>
                                        <div className="hero-text-tablecell">
                                            <p className="subtitle">{slide.subtitle}</p>
                                            <h1 className="paragraph">{slide.title}</h1>
                                            <div className="hero-btns d-flex justify-content-center">
                                                <Link to={slide.shopLink} className="bordered-btn mx-2">Shop Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </OwlCarousel>

            {/* features list section */}
            <div className="list-section py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                            <div className="list-box d-flex align-items-center">
                                <div className="list-icon">
                                    <i className="fas fa-shipping-fast"></i>
                                </div>
                                <div className="content">
                                    <h3>Free Shipping</h3>
                                    <p>When order over ₹500</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                            <div className="list-box d-flex align-items-center">
                                <div className="list-icon">
                                    <i className="fas fa-phone-volume"></i>
                                </div>
                                <div className="content">
                                    <h3>24/7 Support</h3>
                                    <p>Get support all day</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="list-box d-flex align-items-center">
                                <div className="list-icon">
                                    <i className="fas fa-sync"></i>
                                </div>
                                <div className="content">
                                    <h3>Refund</h3>
                                    <p>Get refund within 3 days!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* product section */}
            <div className="product-section my-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <div className="section-title">
                                <h3><span className="orange-text">Latest</span> Products</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {products.map((item, index) => (
                            <div key={index} className="col-lg-4 col-md-6 text-center">
                                <div className="single-product-item">
                                    <div className="product-image">
                                        <Link to={`/single-product/${item._id}`}><img src={`/public/products/${item.pic1}`} height="200px" alt="" /></Link>
                                    </div>
                                    <h3>{item.name}</h3>
                                    <h3 className=""><del className='text-danger'>&#8377;{item.baseprice}</del> &#8377;{item.finalprice}</h3>
                                    <h3 className="text-success">{item.discount}% Off</h3>
                                    <Link to={`/single-product/${item._id}`} className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to Cart</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="w-25 m-auto">
                        <Link to="/shop/All/All/All" className='cart-btn w-100 text-center'>Load More</Link>
                    </div>
                </div>
            </div>

            {/* shop banner */}
            <section className="shop-banner p-5">
                <div className="container">
                    <h3>Sale is on! <br /> with big <span className="orange-text">Discount...</span></h3>
                    <div className="sale-percent"><span>Sale! <br /> Upto</span>90% <span>off</span></div>
                    <Link to="/shop/All/All/All" className="cart-btn btn-lg">Shop Now</Link>
                </div>
            </section>

            <BrandLogo />
        </>
    )
}
