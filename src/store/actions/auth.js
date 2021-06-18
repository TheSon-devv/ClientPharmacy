import * as actionType from "./actionType";
import axios from 'axios'
import { saveCart } from "./cart";

export const logOut = () => {
    localStorage.removeItem('expiresIn');
    localStorage.removeItem('userId');
    localStorage.removeItem('userToken');
    localStorage.removeItem('email');
    localStorage.removeItem('name');
    localStorage.removeItem('idCart');
    // localStorage.removeItem('imageUrl');
    // window.location.reload();
    return {
        type: actionType.LOG_OUT
    }
}

export const authLogOut = (exTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logOut())
        }, exTime * 100)
    }
}

export const authFail = (payload) => {
    return {
        type: actionType.AUTH_FAIL,
        payload
    }
}
export const authStart = () => {
    return {
        type: actionType.AUTH_START
    }
}

export const authSuccess = (token, userId) => {
    return {
        type: actionType.AUTH_SUCCESS,
        userToken: token,
        userId: userId
    }
}


export const setListCart = () => {
    return {
        type: actionType.SET_LIST_CART
    }
}

export const getNumberCart = () => {
    return {
        type: actionType.GET_NUMBER_CART
    }
}

export const auth = (email, password) => {
    return dispatch => {
        dispatch(authStart())
        const authData = {
            email: email,
            password: password
        }
        axios.post(`http://localhost:4000/customer/login`, authData)
            .then(res => {
                if (res.data.code === 200) {
                    console.log(res.data);
                    const expriesTime = new Date(new Date().getTime() + (res.data.dataLogin.expiresIn * 100))
                    localStorage.setItem('userToken', res.data.dataLogin.accessToken);
                    localStorage.setItem('expiresIn', expriesTime);
                    localStorage.setItem('userId', res.data.dataLogin.userId);
                    localStorage.setItem('email', res.data.dataLogin.email);
                    localStorage.setItem('name', res.data.dataLogin.nameKH);
                    localStorage.setItem('listCart', []);

                    dispatch(authSuccess(res.data.dataLogin.accessToken, res.data.dataLogin.userId));
                    dispatch(authLogOut(res.data.dataLogin.expiresIn));
                    // dispatch(setListCart())
                    // setTimeout(() => {
                    //     dispatch(getNumberCart())
                    // },2000)
                }
                else {
                    dispatch(authFail("Tài khoản hoặc mật khẩu không chính xác !"))
                }
            })
            .catch(error => alert(error))
    }
}


export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('userToken');
        if (!token) {
            dispatch(logOut())
        }
        else {
            const expirationDate = new Date(localStorage.getItem('expiresIn'));
            console.log(expirationDate, 'expirationDate')
            if (expirationDate <= new Date()) {
                dispatch(logOut());
                alert("Hết phiên đăng nhập . Vui lòng đăng nhập lại !");
                window.location.reload();
            }
            else {
                const userId = localStorage.getItem('userId');
                // dispatch(setListCart())
                // setTimeout(() => {
                //     dispatch(getNumberCart())
                // },1000)
                // let noneCart = [];
                // const listCart = localStorage.getItem('listCart') ? JSON.parse(localStorage.getItem('listCart')) : noneCart;
                dispatch(authSuccess(token, userId));
                dispatch(authLogOut((expirationDate.getTime() - new Date().getTime()) / 100));
                // dispatch(setListCart(listCart));
                // console.log(listCart,'listCart')
            }
        }
    }
}



