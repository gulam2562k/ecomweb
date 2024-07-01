import React from 'react'
import BrandLogo from './BrandLogo'
import { Link } from 'react-router-dom'

export default function About() {
	return (
		<>

			{/* <!-- featured section --> */}
			<div className="feature-bg"> 
				<div className="container">
					<div className="row">
						<div className="col-lg-7">
							<div className="featured-text">
								<h2 className="pb-3">Why <span className="orange-text">GMART</span></h2>
								<div className="row">
									<div className="col-lg-6 col-md-6 mb-4 mb-md-5">
										<div className="list-box d-flex">
											<div className="list-icon">
												<i className="fas fa-shipping-fast"></i>
											</div>
											<div className="content">
												<h3>Home Delivery</h3>
												<p>At GMART, we understand the importance of convenience and efficiency when it comes to receiving your purchases. That's why we offer a reliable home delivery service designed to get your items to you as quickly and safely as possible.</p>
											</div>
										</div>
									</div>
									<div className="col-lg-6 col-md-6 mb-5 mb-md-5">
										<div className="list-box d-flex">
											<div className="list-icon">
												<i className="fas fa-money-bill-alt"></i>
											</div>
											<div className="content">
												<h3>Best Price</h3>
												<p>At GMART, we are committed to providing you with the best value for your money. Our Best Price Guarantee ensures that you get the most competitive prices on all our products, every time you shop with us.</p>
											</div>
										</div>
									</div>
									<div className="col-lg-6 col-md-6 mb-5 mb-md-5">
										<div className="list-box d-flex">
											<div className="list-icon">
												<i className="fas fa-briefcase"></i>
											</div>
											<div className="content">
												<h3>Custom Box</h3>
												<p>At GMART, we believe in adding a personal touch to your shopping experience. Our Custom Box service allows you to tailor your orders with personalized packaging, making your purchases feel extra special.</p>
											</div>
										</div>
									</div>
									<div className="col-lg-6 col-md-6">
										<div className="list-box d-flex">
											<div className="list-icon">
												<i className="fas fa-sync-alt"></i>
											</div>
											<div className="content">
												<h3>Quick Refund</h3>
												<p>At GMART, we prioritize your satisfaction and convenience. Our Quick Refund policy ensures that you can shop with confidence, knowing that if something isn’t right, we’ve got you covered.</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- end featured section --> */}

			{/* <!-- shop banner --> */}
			<section className="shop-banner">
				<div className="container">
					<h3>December sale is on! <br /> with big <span className="orange-text">Discount...</span></h3>
					<div className="sale-percent"><span>Sale! <br /> Upto</span>50% <span>off</span></div>
					<a href="shop.html" className="cart-btn btn-lg">Shop Now</a>
				</div>
			</section>
			{/* <!-- end shop banner --> */}

			{/* <!-- team section --> */}
			<div className="mt-150">
				<div className="container">
					<div className="row">
						<div className="col-lg-8 offset-lg-2 text-center">
							<div className="section-title">
								<h3>Our <span className="orange-text">Team</span></h3>
								<p>Meet the talented individuals behind our success</p>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-4 col-md-6">
							<div className="single-team-item">
								<div className="team-bg team-bg-1"></div>
								<h4>Jimmy Doe <span>Farmer</span></h4>
								<ul className="social-link-team">
									<li><a href="#" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
									<li><a href="#" target="_blank"><i className="fab fa-twitter"></i></a></li>
									<li><a href="#" target="_blank"><i className="fab fa-instagram"></i></a></li>
								</ul>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="single-team-item">
								<div className="team-bg team-bg-2"></div>
								<h4>Marry Doe <span>Farmer</span></h4>
								<ul className="social-link-team">
									<li><a href="#" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
									<li><a href="#" target="_blank"><i className="fab fa-twitter"></i></a></li>
									<li><a href="#" target="_blank"><i className="fab fa-instagram"></i></a></li>
								</ul>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
							<div className="single-team-item">
								<div className="team-bg team-bg-3"></div>
								<h4>Simon Joe <span>Farmer</span></h4>
								<ul className="social-link-team">
									<li><a href="#" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
									<li><a href="#" target="_blank"><i className="fab fa-twitter"></i></a></li>
									<li><a href="#" target="_blank"><i className="fab fa-instagram"></i></a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- end team section --> */}

			<BrandLogo />
		</>
	)
}
