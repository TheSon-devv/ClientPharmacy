import React from 'react'
import { Link } from 'react-router-dom'
import '../css/style.css'

const Cart = () => {
    return (
        <div>
                <div class="ps-content pt-80 pb-80">
                    <div class="ps-container">
                        <div class="ps-cart-listing">
                            <table class="table ps-cart__table">
                                <thead>
                                    <tr>
                                        <th>All Products</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><a class="ps-product__preview" href="product-detail.html"><img class="mr-15" src="images/product/cart-preview/1.jpg" alt="" /> air jordan One mid</a></td>
                                        <td>$150</td>
                                        <td>
                                            <div class="form-group--number">
                                                <button class="minus"><span>-</span></button>
                                                <input class="form-control" type="text" value="2" />
                                                <button class="plus"><span>+</span></button>
                                            </div>
                                        </td>
                                        <td>$300</td>
                                        <td>
                                            <div class="ps-remove"></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><a class="ps-product__preview" href="product-detail.html"><img class="mr-15" src="images/product/cart-preview/2.jpg" alt="" /> The Crusty Croissant</a></td>
                                        <td>$150</td>
                                        <td>
                                            <div class="form-group--number">
                                                <button class="minus"><span>-</span></button>
                                                <input class="form-control" type="text" value="2" />
                                                <button class="plus"><span>+</span></button>
                                            </div>
                                        </td>
                                        <td>$300</td>
                                        <td>
                                            <div class="ps-remove"></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><a class="ps-product__preview" href="product-detail.html"><img class="mr-15" src="images/product/cart-preview/3.jpg" alt="" />The Rolling Pin</a></td>
                                        <td>$150</td>
                                        <td>
                                            <div class="form-group--number">
                                                <button class="minus"><span>-</span></button>
                                                <input class="form-control" type="text" value="2" />
                                                <button class="plus"><span>+</span></button>
                                            </div>
                                        </td>
                                        <td>$300</td>
                                        <td>
                                            <div class="ps-remove"></div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class="ps-cart__actions">
                                <div class="ps-cart__promotion">
                                    <div class="form-group">
                                        <div class="ps-form--icon"><i class="fa fa-angle-right"></i>
                                            <input class="form-control" type="text" placeholder="Promo Code" />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <button class="ps-btn ps-btn--gray">Continue Shopping</button>
                                    </div>
                                </div>
                                <div class="ps-cart__total">
                                    <h3>Total Price: <span> 2599.00 $</span></h3><Link class="ps-btn" style={{textDecoration:'none'}} to="/checkOut">Process to checkout<i class="ps-icon-next"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Cart
