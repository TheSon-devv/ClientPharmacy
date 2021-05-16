import React from 'react'
import '../css/style.css'

const Checkout = () => {
    return (
        <>
            <main className="ps-main">
                <div className="ps-checkout pt-80 pb-80">
                    <div className="ps-container">
                        <form className="ps-checkout__form">
                            <div className="row">
                                <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                                    <div className="ps-checkout__billing">
                                        <h3>Billing Detail</h3>
                                        <div className="form-group form-group--inline">
                                            <label>First Name<span>*</span>
                                            </label>
                                            <input className="form-control" type="text" />
                                        </div>
                                        <div className="form-group form-group--inline">
                                            <label>Last Name<span>*</span>
                                            </label>
                                            <input className="form-control" type="text" />
                                        </div>
                                        <div className="form-group form-group--inline">
                                            <label>Company Name<span>*</span>
                                            </label>
                                            <input className="form-control" type="text" />
                                        </div>
                                        <div className="form-group form-group--inline">
                                            <label>Email Address<span>*</span>
                                            </label>
                                            <input className="form-control" type="email" />
                                        </div>
                                        <div className="form-group form-group--inline">
                                            <label>Company Name<span>*</span>
                                            </label>
                                            <input className="form-control" type="text" />
                                        </div>
                                        <div className="form-group form-group--inline">
                                            <label>Phone<span>*</span>
                                            </label>
                                            <input className="form-control" type="text" />
                                        </div>
                                        <div className="form-group form-group--inline">
                                            <label>Address<span>*</span>
                                            </label>
                                            <input className="form-control" type="text" />
                                        </div>
                                        <div className="form-group">
                                            <div className="ps-checkbox">
                                                <input className="form-control" type="checkbox" id="cb01" />
                                                <label for="cb01">Create an account?</label>
                                            </div>
                                        </div>
                                        <h3 className="mt-40"> Addition information</h3>
                                        <div className="form-group form-group--inline textarea">
                                            <label>Order Notes</label>
                                            <textarea className="form-control" rows="5" placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
                                        </div>
                                    </div>
                                </div>


                                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                    <div className="ps-checkout__order">
                                        <header>
                                            <h3>Your Order</h3>
                                        </header>
                                        <div className="content">
                                            <table className="table ps-checkout__products">
                                                <thead>
                                                    <tr>
                                                        <th className="text-uppercase">Product</th>
                                                        <th className="text-uppercase">Total</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>HABITANT x1</td>
                                                        <td>$300.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Card Subtitle</td>
                                                        <td>$300.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Order Total</td>
                                                        <td>$300.00</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <footer>
                                            <h3>Payment Method</h3>
                                            <div className="form-group cheque">
                                                <div className="ps-radio">
                                                    <input className="form-control" type="radio" id="rdo01" name="payment" checked />
                                                    <label for="rdo01">Thanh toán khi nhận hàng</label>

                                                </div>
                                            </div>
                                            <div className="form-group paypal">
                                                <div className="ps-radio ps-radio--inline">
                                                    <input className="form-control" type="radio" name="payment" id="rdo02" />
                                                    <label for="rdo02">Paypal</label>
                                                </div>
                                                <ul className="ps-payment-method">
                                                    <li><a href="#"><img src="images/payment/1.png" alt="" /></a></li>
                                                    <li><a href="#"><img src="images/payment/2.png" alt="" /></a></li>
                                                    <li><a href="#"><img src="images/payment/3.png" alt="" /></a></li>
                                                </ul>
                                                <button className="ps-btn ps-btn--fullwidth">Place Order<i className="ps-icon-next"></i></button>
                                            </div>
                                        </footer>
                                    </div>
                                    <div className="ps-shipping">
                                        <h3>FREE SHIPPING</h3>
                                        <p>YOUR ORDER QUALIFIES FOR FREE SHIPPING.<br /> <a href="#"> Singup </a> for free shipping on every order, every time.</p>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </main>
        </>
    )
}

export default Checkout
