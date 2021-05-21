import * as actions from "../actions/actionType";

const initState = {
    listCart: [],
    listProduct: [],
    numberCart: 0,
    listCheckout: []
}

export const cart = (state = initState, action) => {
    switch (action.type) {
        case actions.GET_PRODUCT:
            return {
                ...state,
                listProduct: [...action.payload]
            }
        case actions.ADD_CART:
            if (state.numberCart === 0) {
                let cart = {
                    _id: action.payload._id,
                    namePharmacy: action.payload.namePharmacy,
                    pricePharmacy: action.payload.pricePharmacy,
                    information: action.payload.information,
                    status: action.payload.status,
                    promotion: action.payload.promotion,
                    pharmacyImage: action.payload.pharmacyImage,
                    quantity: 1
                }
                state.listCart.push(cart)
            }
            else {
                let check = false;
                state.listCart.map((item, key) => {
                    if (item._id === action.payload._id) {
                        state.listCart[key].quantity++;
                        check = true;
                    }
                    // return (
                    //     <></>
                    // )
                });
                if (!check) {
                    let _cart = {
                        _id: action.payload._id,
                        namePharmacy: action.payload.namePharmacy,
                        pricePharmacy: action.payload.pricePharmacy,
                        information: action.payload.information,
                        status: action.payload.status,
                        promotion: action.payload.promotion,
                        pharmacyImage: action.payload.pharmacyImage,
                        quantity: 1
                    }
                    state.listCart.push(_cart);
                }

            }

            return {
                ...state,
                numberCart: state.listCart.length
            }
        case actions.ADD_CHECKOUT:
            let check = true;
            state.listCheckout.map((item, key) => {
                if (item.pharmacyId === action.payload) {
                    check = false
                }
            })
            if (check === true) {
                let list = {
                    pharmacyId: action.payload
                }
                state.listCheckout.push(list)
            }
            return {
                ...state,
                quantityCheckout: state.listCheckout.length
            }
        case actions.GET_NUMBER_CART:
            return {
                ...state,
                // numberCart : state.listCart.length 
            }
        case actions.GET_TOTAL_CART:
            return {
                ...state,
                totalCart: action.payload
            }
        case actions.RELOAD_CART:
            return {
                ...state,
                listCart: [],
                numberCart: 0,
                listCheckout: []
            }
        case actions.INCREASE_QUANTITY:
            state.listCart[action.payload].quantity++;
            return {
                ...state
            }
        case actions.DECREASE_QUANTITY:
            let quantity = state.listCart[action.payload].quantity;
            if (quantity > 1) {
                state.listCart[action.payload].quantity--;
            }
            return {
                ...state
            }
        case actions.DELETE_CART:
            let quantity_ = state.listCart[action.payload].quantity;
            return {
                ...state,
                numberCart: state.listCart.length - 1,
                listCart: state.listCart.filter(item => {
                    return item._id !== state.listCart[action.payload]._id
                })

            }
        default:
            return state;
    }
}