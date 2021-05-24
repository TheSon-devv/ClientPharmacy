import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom'
import '../css/style.css'
import { decreaseQuantity, deleteCart, getTotalCart, increaseQuantity } from '../store/actions/cart';

const Cart = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const data = useSelector(state => state.cart);
    let ListCart = [];
    let TotalCart = 0;
    Object.keys(data.listCart).forEach(function (item) {
        TotalCart += data.listCart[item].quantity * data.listCart[item].pricePharmacy
        ListCart.push(data.listCart[item])
    })

    function TotalPrice(quantity, price) {
        return Number(quantity * price)
    }
    return (
        <div>
            <div className="ps-content pt-80 pb-80">
                <div className="ps-container">
                    <div className="ps-cart-listing">
                        <table className="table ps-cart__table">
                            <thead>
                                <tr>
                                    <th>Danh mục sản phẩm</th>
                                    <th>Đơn giá</th>
                                    <th>Số lượng</th>
                                    <th>Tổng </th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    ListCart.map((item, key) => {
                                        return (
                                            <tr key={item._id}>
                                                <td>
                                                    <a className="ps-product__preview" href="product-detail.html">
                                                        <img className="mr-15" src="images/product/cart-preview/1.jpg" alt="" /> {item.namePharmacy}</a>
                                                </td>
                                                <td>{item.pricePharmacy}</td>
                                                <td>
                                                    <div className="form-group--number">
                                                        <button className="minus" onClick={() => dispatch(decreaseQuantity(key))}><span>-</span></button>
                                                        <input className="form-control" type="text" value={item.quantity} readOnly />
                                                        <button className="plus" onClick={() => dispatch(increaseQuantity(key))}><span>+</span></button>
                                                    </div>
                                                </td>
                                                <td>{TotalPrice(item.quantity, item.pricePharmacy)}</td>
                                                <td>
                                                    <div className="ps-remove" onClick={() => dispatch(deleteCart(key))}></div>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                        <div className="ps-cart__actions">
                            <div className="ps-cart__promotion">
                                <div className="form-group">
                                   
                                </div>
                                <div className="form-group">
                                    <button className="ps-btn ps-btn--gray" onClick={() => history.push('/')}>Tiếp tục mua sắm</button>
                                </div>
                            </div>
                            <div className="ps-cart__total" onClick={() => dispatch(getTotalCart(Number(TotalCart)))}>
                                <h3>Tổng tiền: <span>{Number(TotalCart)} VND</span></h3>
                                <Link
                                    className="ps-btn"
                                    style={{ textDecoration: 'none' }}
                                    to="/checkOut"
                                >Quy trình thanh toán<i className="fa fa-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
