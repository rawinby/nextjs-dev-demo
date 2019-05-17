import React , { Component } from "react";
import { Link, Router } from "../../../router/routes";


const linkStyle = {
  margin: '0 10px 0 0'
}

class Header extends Component { 
  constructor(props) {
    super(props);
  }

  render(){
    const { pathname, authenticated, query = false } = this.props;
    // console.log(pathname);
    return(

      <header className="header">
          <div className="header-top">
              <div className="container">
                  <div className="header-left header-dropdowns">
                      <div className="header-search">
                          <a href="#" className="search-toggle" role="button"><i className="icon-search"></i><span>Search</span></a>
                          <form action="#" method="get">
                              <div className="header-search-wrapper">
                                  
                                  <input type="search" className="form-control" name="q" id="q" placeholder="Search..." required></input>
                                  <div className="select-custom">
                                      <select id="cat" name="cat">
                                          <option value="">All Categories</option>
                                          <option value="4">Fashion</option>
                                          <option value="12">- Women</option>
                                          <option value="13">- Men</option>
                                          <option value="66">- Jewellery</option>
                                          <option value="67">- Kids Fashion</option>
                                          <option value="5">Electronics</option>
                                          <option value="21">- Smart TVs</option>
                                          <option value="22">- Cameras</option>
                                          <option value="63">- Games</option>
                                          <option value="7">Home &amp; Garden</option>
                                          <option value="11">Motors</option>
                                          <option value="31">- Cars and Trucks</option>
                                          <option value="32">- Motorcycles &amp; Powersports</option>
                                          <option value="33">- Parts &amp; Accessories</option>
                                          <option value="34">- Boats</option>
                                          <option value="57">- Auto Tools &amp; Supplies</option>
                                      </select>
                                  </div>
                                  <button className="btn" type="submit"><i className="icon-search"></i></button>
                              </div>
                          </form>
                      </div>

                      <div className="header-dropdown">
                          <a href="#">USD</a>
                          <div className="header-menu">
                              <ul>
                                  <li><a href="#">EUR</a></li>
                                  <li><a href="#">USD</a></li>
                              </ul>
                          </div>
                      </div>

                      <div className="header-dropdown">
                          <a href="#">ENG</a>
                          <div className="header-menu">
                              <ul>
                                  <li><a href="#">ENG</a></li>
                                  <li><a href="#">FRE</a></li>
                              </ul>
                          </div>
                      </div>
                  </div>

                  <div className="header-right">
                      <div className="header-contact">
                          <i className="icon-phone-1"></i>
                          <a href="tel:#">+123 5678 890</a>
                      </div>

                      <div className="header-dropdown">
                          <a href="#">Links</a>
                          <div className="header-menu">
                              <ul>
                                  <li><a href="my-account.html">MY ACCOUNT </a></li>
                                  <li><a href="#">DAILY DEAL</a></li>
                                  <li><a href="#">MY WISHLIST </a></li>
                                  <li><a href="blog.html">BLOG</a></li>
                                  <li><a href="contact.html">Contact</a></li>
                                  <li><a href="#" className="login-link">LOG IN</a></li>
                              </ul>
                          </div>
                      </div>

                      <div className="dropdown cart-dropdown">
                          <a href="#" className="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static">
                              <span className="cart-count">2</span>
                          </a>

                          <div className="dropdown-menu" >
                              <div className="dropdownmenu-wrapper">
                                  <div className="dropdown-cart-header">
                                      <span>2 Items</span>

                                      <a href="cart.html">View Cart</a>
                                  </div>
                                  <div className="dropdown-cart-products">
                                      <div className="product">
                                          <div className="product-details">
                                              <h4 className="product-title">
                                                  <a href="product.html">Woman Ring</a>
                                              </h4>

                                              <span className="cart-product-info">
                                                  <span className="cart-product-qty">1</span>
                                                  x $99.00
                                              </span>
                                          </div>

                                          <figure className="product-image-container">
                                              <a href="product.html" className="product-image">
                                                  <img src="assets/images/products/cart/product-1.jpg" alt="product"></img>
                                              </a>
                                              <a href="#" className="btn-remove" title="Remove Product"><i className="icon-cancel"></i></a>
                                          </figure>
                                      </div>

                                      <div className="product">
                                          <div className="product-details">
                                              <h4 className="product-title">
                                                  <a href="product.html">Woman Necklace</a>
                                              </h4>

                                              <span className="cart-product-info">
                                                  <span className="cart-product-qty">1</span>
                                                  x $35.00
                                              </span>
                                          </div>

                                          <figure className="product-image-container">
                                              <a href="product.html" className="product-image">
                                                  <img src="assets/images/products/cart/product-2.jpg" alt="product"></img>
                                              </a>
                                              <a href="#" className="btn-remove" title="Remove Product"><i className="icon-cancel"></i></a>
                                          </figure>
                                      </div>
                                  </div>

                                  <div className="dropdown-cart-total">
                                      <span>Total</span>

                                      <span className="cart-total-price">$134.00</span>
                                  </div>

                                  <div className="dropdown-cart-action">
                                      <a href="checkout-shipping.html" className="btn btn-block">Checkout</a>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div className="header-middle sticky-header">
              <div className="container">
                  <div className="header-left">
                      <ul className="menu sf-arrows">
                          <li className="active"><a href="index.html">Home</a></li>
                          <li>
                              <a href="category.html" className="sf-with-ul">Categories</a>
                              <div className="megamenu megamenu-fixed-width">
                                  <div className="row">
                                      <div className="col-lg-8">
                                          <div className="row">
                                              <div className="col-lg-6">
                                                  <div className="menu-title">
                                                      <a href="#">Variations 1<span className="tip tip-new">New!</span></a>
                                                  </div>
                                                  <ul>
                                                      <li><a href="category-banner-full-width.html">Fullwidth Banner<span className="tip tip-hot">Hot!</span></a></li>
                                                      <li><a href="category-banner-boxed-slider.html">Boxed Slider Banner</a></li>
                                                      <li><a href="category-banner-boxed-image.html">Boxed Image Banner</a></li>
                                                      <li><a href="category-sidebar-left.html">Left Sidebar</a></li>
                                                      <li><a href="category-sidebar-right.html">Right Sidebar</a></li>
                                                      <li><a href="category-flex-grid.html">Product Flex Grid</a></li>
                                                      <li><a href="category-horizontal-filter1.html">Horizontal Filter1</a></li>
                                                      <li><a href="category-horizontal-filter2.html">Horizontal Filter2</a></li>
                                                  </ul>
                                              </div>
                                              <div className="col-lg-6">
                                                  <div className="menu-title">
                                                      <a href="#">Variations 2</a>
                                                  </div>
                                                  <ul>
                                                      <li><a href="#">Product List Item Types</a></li>
                                                      <li><a href="category-infinite-scroll.html">Ajax Infinite Scroll</a></li>
                                                      <li><a href="category-3col.html">3 Columns Products</a></li>
                                                      <li><a href="category-4col.html">4 Columns Products <span className="tip tip-new">New</span></a></li>
                                                      <li><a href="category-5col.html">5 Columns Products</a></li>
                                                      <li><a href="category-6col.html">6 Columns Products</a></li>
                                                      <li><a href="category-7col.html">7 Columns Products</a></li>
                                                      <li><a href="category-8col.html">8 Columns Products</a></li>
                                                  </ul>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="col-lg-4">
                                          <div className="banner">
                                              <a href="#">
                                                  <img src="assets/images/menu-banner-2.jpg" alt="Menu banner"></img>
                                              </a>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </li>
                          <li className="megamenu-container">
                              <a href="product.html" className="sf-with-ul">Products</a>
                              <div className="megamenu">
                                  <div className="row">
                                      <div className="col-lg-8">
                                          <div className="row">
                                              <div className="col-lg-4">
                                                  <div className="menu-title">
                                                      <a href="#">Variations</a>
                                                  </div>
                                                  <ul>
                                                      <li><a href="product.html">Horizontal Thumbnails</a></li>
                                                      <li><a href="product-full-width.html">Vertical Thumbnails<span className="tip tip-hot">Hot!</span></a></li>
                                                      <li><a href="product.html">Inner Zoom</a></li>
                                                      <li><a href="product-addcart-sticky.html">Addtocart Sticky</a></li>
                                                      <li><a href="product-sidebar-left.html">Accordion Tabs</a></li>
                                                  </ul>
                                              </div>
                                              <div className="col-lg-4">
                                                  <div className="menu-title">
                                                      <a href="#">Variations</a>
                                                  </div>
                                                  <ul>
                                                      <li><a href="product-sticky-tab.html">Sticky Tabs</a></li>
                                                      <li><a href="product-simple.html">Simple Product</a></li>
                                                      <li><a href="product-sidebar-left.html">With Left Sidebar</a></li>
                                                  </ul>
                                              </div>
                                              <div className="col-lg-4">
                                                  <div className="menu-title">
                                                      <a href="#">Product Layout Types</a>
                                                  </div>
                                                  <ul>
                                                      <li><a href="product.html">Default Layout</a></li>
                                                      <li><a href="product-extended-layout.html">Extended Layout</a></li>
                                                      <li><a href="product-full-width.html">Full Width Layout</a></li>
                                                      <li><a href="product-grid-layout.html">Grid Images Layout</a></li>
                                                      <li><a href="product-sticky-both.html">Sticky Both Side Info<span className="tip tip-hot">Hot!</span></a></li>
                                                      <li><a href="product-sticky-info.html">Sticky Right Side Info</a></li>
                                                  </ul>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="col-lg-4">
                                          <div className="banner">
                                              <a href="#">
                                                  <img src="assets/images/menu-banner.jpg" alt="Menu banner" className="product-promo"></img>
                                              </a>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </li>
                          <li>
                              <a href="#" className="sf-with-ul">Pages</a>

                              <ul>
                                  <li><a href="cart.html">Shopping Cart</a></li>
                                  <li><a href="#">Checkout</a>
                                      <ul>
                                          <li><a href="checkout-shipping.html">Checkout Shipping</a></li>
                                          <li><a href="checkout-shipping-2.html">Checkout Shipping 2</a></li>
                                          <li><a href="checkout-review.html">Checkout Review</a></li>
                                      </ul>
                                  </li>
                                  <li><a href="#">Dashboard</a>
                                      <ul>
                                          <li><a href="dashboard.html">Dashboard</a></li>
                                          <li><a href="my-account.html">My Account</a></li>
                                      </ul>
                                  </li>
                                  <li><a href="about.html">About Us</a></li>
                                  <li><a href="#">Blog</a>
                                      <ul>
                                          <li><a href="blog.html">Blog</a></li>
                                          <li><a href="single.html">Blog Post</a></li>
                                      </ul>
                                  </li>
                                  <li><a href="contact.html">Contact Us</a></li>
                                  <li><a href="#" className="login-link">Login</a></li>
                                  <li><a href="forgot-password.html">Forgot Password</a></li>
                              </ul>
                          </li>
                      </ul>
                  </div>

                  <div className="header-center">
                    <Link prefetch href='/'><img src="static/images/theme/logo/logo_vertical_v3_white.png" alt="Shop1781" className="img-fluid d-block" /></Link>
                  </div>

                  <div className="header-right">
                      <ul className="menu sf-arrows">
                          <li>
                              <a href="#" className="sf-with-ul">Features</a>
                              
                              <ul>
                                  <li><a href="#">Header Types</a></li>
                                  <li><a href="#">Footer Types</a></li>
                                  <li><a href="#">Homepage Variants</a></li>
                              </ul>
                          </li>
                          <li><a href="#">Special Offer!</a></li>
                          <li><a href="#">Buy Porto!</a></li>
                      </ul>

                      <button className="mobile-menu-toggler" type="button">
                          <i className="icon-menu"></i>
                      </button>
                  </div>
              </div>
          </div>



      </header>
    )
  }
        
}
  
export default Header;
