import * as actions from "../actions/actionType";

const initState = {
    listCart: [],
    listProduct: [],
    numberCart: 0,
    listCheckout: [],
    typeProduct: [],
    item_total: 0,
    shipping: 1.00,
    handling: 1.00,
    shipping_discount: 1,
    listCartPaypal: [],
    listOrder : [],
    loading : false,
    quantityCheckout : 0
}

export const cart = (state = initState, action) => {
    switch (action.type) {
        case actions.GET_PRODUCT:
            return {
                ...state,
                listProduct: [...action.payload]
            }
        case actions.GET_ORDER:
            return {
                ...state,
                listOrder: [...action.payload]
            }
        case actions.GET_TYPE_PRODUCT:
            return {
                ...state,
                typeProduct: [...action.payload]
            }
        case actions.ADD_CART:
            if (state.numberCart === 0) {
                let cart = {
                    _id: action.payload._id,
                    namePharmacy: action.payload.namePharmacy,
                    pricePharmacy: action.payload.promotion ? action.payload.totalPromotion : action.payload.pricePharmacy,
                    information: action.payload.information,
                    status: action.payload.status,
                    promotion: action.payload.promotion,
                    pharmacyImage: action.payload.pharmacyImage,
                    quantity: 1
                }
                let cartPayPal = {
                    name: action.payload.namePharmacy,
                    unit_amount: {
                        currency_code: "USD",
                        value: action.payload.promotion ? action.payload.totalPromotion : action.payload.pricePharmacy
                    },
                    quantity: 1,
                }
                state.listCart.push(cart)
                state.listCartPaypal.push(cartPayPal)
            }
            else {
                let check = false;
                state.listCart.map((item, key) => {
                    if (item._id === action.payload._id) {
                        state.listCart[key].quantity++;
                        state.listCartPaypal[key].quantity++;
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
                        pricePharmacy: action.payload.promotion ? action.payload.totalPromotion : action.payload.pricePharmacy,
                        information: action.payload.information,
                        status: action.payload.status,
                        promotion: action.payload.promotion,
                        pharmacyImage: action.payload.pharmacyImage,
                        quantity: 1,
                    }
                    let _cartPayPal = {
                        name: action.payload.namePharmacy,
                        unit_amount: {
                            currency_code: "USD",
                            value: action.payload.promotion ? action.payload.totalPromotion : action.payload.pricePharmacy
                        },
                        quantity: 1,
                    }
                    state.listCart.push(_cart);
                    state.listCartPaypal.push(_cartPayPal)
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
                listCheckout: [],
                listCartPaypal: [],
                quantityCheckout : 0
            }
        case actions.INCREASE_QUANTITY:
            state.listCart[action.payload].quantity++;
            state.listCartPaypal[action.payload].quantity++;
            return {
                ...state
            }
        case actions.DECREASE_QUANTITY:
            let quantity = state.listCart[action.payload].quantity;
            if (quantity > 1) {
                state.listCart[action.payload].quantity--;
            }
            let quantityPayPal = state.listCartPaypal[action.payload].quantity;
            if (quantityPayPal > 1) {
                state.listCartPaypal[action.payload].quantity--;
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
                }),
                listCheckout: state.listCheckout.filter(item => {
                    return item.pharmacyId !== state.listCheckout[action.payload].pharmacyId
                }),
                listCartPaypal: state.listCartPaypal.filter(item => {
                    return item.name !== state.listCartPaypal[action.payload].name
                }),
                quantityCheckout: state.listCheckout.length - 1
            }
        default:
            return state;
    }
}