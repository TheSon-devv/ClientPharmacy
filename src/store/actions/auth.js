import * as actionType from "./actionType";
import axios from 'axios'

export const logOut = () => {
    localStorage.removeItem('expiresIn');
    localStorage.removeItem('userId');
    localStorage.removeItem('userToken');
    localStorage.removeItem('email');
    // localStorage.removeItem('name');
    // localStorage.removeItem('imageUrl');
    window.location.reload();
    return {
        type: actionType.LOG_OUT
    }
}

export const authLogOut = (exTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logOut())
        }, exTime)
    }
}
export const authFail = (payload) => {
    return {
        type: actionType.AUTH_FAIL,
        payload
    }
}

export const authSuccess = (token, userId) => {
    return {
        type: actionType.AUTH_SUCCESS,
        userToken: token,
        userId: userId
    }
}

export const auth = (email, password) => {
    return dispatch => {
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
                    localStorage.setItem('expiresIn', res.data.dataLogin.expiresIn);
                    localStorage.setItem('userId', res.data.dataLogin.userId);
                    localStorage.setItem('email', res.data.dataLogin.email);

                    dispatch(authSuccess(res.data.dataLogin.accessToken, res.data.dataLogin.userId));
                    dispatch(authLogOut(res.data.dataLogin.expiresIn));
                    window.location.reload();
                }
                else {
                    dispatch(authFail("Tài khoản hoặc mật khẩu không chính xác !"))
                }
            })
            .catch(error => alert(error))
    }
}


// export const authCheckState = () => {
//     return dispatch => {
//         const token = localStorage.getItem('token');
//         if (!token) {
//             dispatch(logOut())
//         }
//         else {
//             const expirationDate = new Date(localStorage.getItem('expiresIn'));
//             if (expirationDate <= new Date()) {
//                 dispatch(logOut())
//             }
//             else {
//                 const userId = localStorage.getItem('userId');
//                 dispatch(authSuccess(token, userId));
//                 dispatch(authLogOut());
//             }
//         }
//     }
// }



