import axios from "axios";
import React, { useRef, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { headerAuthorization } from "../header";
import { reloadCart } from '../store/actions/cart'


export default function Paypal() {
    const paypal = useRef();
    const history = useHistory();
    const dispatch = useDispatch();
    const listCartPaypal = useSelector(state => state.cart.listCartPaypal)
    const shipping = useSelector(state => state.cart.shipping)
    const handling = useSelector(state => state.cart.handling)
    const shipping_discount = useSelector(state => state.cart.shipping_discount)
    const listCheckout = useSelector(state => state.cart.listCheckout)
    const quantityCheckout = useSelector(state => state.cart.quantityCheckout)

    const totalCart = useSelector(state => state.cart.totalCart)
    let totalCartPayPal = Number(Number(totalCart) + shipping + handling - shipping_discount).toFixed(2)

    useEffect(() => {
        window.paypal
            .Buttons({
                createOrder: (data, actions, err) => {
                    return actions.order.create({
                        intent: "CAPTURE",
                        purchase_units: [
                            {
                                description: "Paypal Order",
                                amount: {
                                    currency_code: "USD",
                                    value: totalCartPayPal,
                                    "breakdown": {
                                        "item_total": {
                                            "currency_code": "USD",
                                            "value": Number(totalCart).toFixed(2)
                                        },
                                        "shipping": {
                                            "currency_code": "USD",
                                            "value": shipping.toFixed(2)
                                        },
                                        "handling": {
                                            "currency_code": "USD",
                                            "value": handling.toFixed(2)
                                        },
                                        "shipping_discount": {
                                            "currency_code": "USD",
                                            "value": shipping_discount
                                        }
                                    }
                                },
                                "items": listCartPaypal
                            }
                        ],
                    });
                },
                onApprove: async (data, actions) => {
                    const order = await actions.order.capture();
                    console.log(order);

                    if (order.status === "COMPLETED") {
                        const data = {
                            userId: localStorage.getItem('userId'),
                            quantity: quantityCheckout,
                            totalPrice: totalCartPayPal,
                            details: listCheckout,
                            checkoutPaypal: "PayPal",
                            nameCustomer: localStorage.getItem('name')
                        }
                        axios.post(`http://localhost:4000/checkout`, data, headerAuthorization())
                            .then(res => {
                                console.log(res.data.saveCheckout);
                                alert('Thanh toán thành công ! Tiếp tục mua sắm nhé')
                                dispatch(reloadCart())
                            })
                            .catch(err => console.log(err))
                        let dataCart = {
                            userId: localStorage.getItem('userId'),
                            listCart: [],
                            listCartPaypal: [],
                            listCheckout: [],
                            numberCart: 0,
                        }
                        axios.put(`http://localhost:4000/cart/${localStorage.getItem('idCart')}`, dataCart)
                            .then(res => {
                                console.log(res.data, 'put')
                            })
                            .catch(err => console.log(err))
                        history.push('/')
                        window.location.reload()
                    }
                    else {
                        alert("Thanh toán thất bại !")
                    }

                },
                onError: (err) => {
                    alert("Thanh toán thất bại !")
                },
            })
            .render(paypal.current);
    }, []);

    return (
        <div>
            <div ref={paypal}></div>
        </div>
    );
}