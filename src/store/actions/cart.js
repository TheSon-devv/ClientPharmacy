import axios from 'axios';
import { headerAuthorization } from '../../header';
import * as actionType from './actionType';

export const getStart = () => {
    return {
        type: actionType.AUTH_START
    }
}
export const Success = (payload) => {
    return {
        type: actionType.GET_PRODUCT,
        payload
    }
}
export const TypeProduct = (payload) => {
    return {
        type: actionType.GET_TYPE_PRODUCT,
        payload
    }
}
export const orderSucces = (payload) => {
    return {
        type: actionType.GET_ORDER,
        payload
    }
}

export const getOrder = (userId) => {
    return dispatch => {
        axios.get(`http://localhost:4000/checkout/${userId}`,headerAuthorization())
            .then(res => {
                console.log(res.data.getCheckout)
                dispatch(orderSucces(res.data.getCheckout))
            })
            .catch(err => console.log(err))
    }
}

export const getProduct = () => {
    return dispatch => {
        axios.get('http://localhost:4000/pharmacy')
            .then(res => {
                dispatch(Success(res.data.getPharmacy))
            })
            .catch(err => console.log(err))
    }
}

export const getTypeProduct = () => {
    return dispatch => {
        axios.get(`http://localhost:4000/typePharmacy`)
            .then(res => {
                if (res.data.code === 200) {
                    dispatch(TypeProduct(res.data.getTypePharmacy))
                }
                if (res.data.code === 401) {
                    alert('Loi roi')
                }
            })
            .catch(err => console.log(err))
    }
}


export const addCart = (payload) => {
    return {
        type: actionType.ADD_CART,
        payload
    }
}
export const addCartPayPal = (payload) => {
    return {
        type: actionType.ADD_CART_PAYPAL,
        payload
    }
}
export const addCheckOut = (payload) => {
    return {
        type: actionType.ADD_CHECKOUT,
        payload
    }
}

export const getTotalCart = (payload) => {
    return {
        type: actionType.GET_TOTAL_CART,
        payload
    }
}

export const reloadCart = () => {
    return {
        type: actionType.RELOAD_CART
    }
}

export const saveCart = () => {
    return {
        type: actionType.SAVE_CART
    }
}

export const updateCart = (payload) => {
    return {
        type: actionType.UPDATE_CART,
        payload
    }
}

export const deleteCart = (payload) => {
    return {
        type: actionType.DELETE_CART,
        payload
    }
}

export const increaseQuantity = (payload) => {
    return {
        type: actionType.INCREASE_QUANTITY,
        payload
    }
}

export const decreaseQuantity = (payload) => {
    return {
        type: actionType.DECREASE_QUANTITY,
        payload
    }
}
