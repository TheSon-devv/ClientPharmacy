import React, { useEffect, useState } from 'react'
import '../css/style.css'
import brandHot from "../asset/brandHot.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { addCart, addCheckOut, getProduct } from '../store/actions/cart';
import { totalPage } from '../store/actions/pagination';
import AddSuccess from '../UI/AddSuccess/AddSuccess';
import axios from 'axios';

const CategoryProduct = () => {

    const dispatch = useDispatch();
    const dataProduct = useSelector(state => state.cart.listProduct)
    const [show, setShow] = useState(false)
    const [dataSale, setDataSale] = useState([])

    useEffect(() => {
        dispatch(getProduct())
        axios.get(`http://localhost:4000/pharmacy/topSale`)
            .then(res => {
                setDataSale(res.data.getPharmacySale)
            })
            .catch(err => console.log(err))
    }, [])

    function PricePromotion(price, promotion) {
        return (Number(price * promotion) / 100);
    }
    const showButton = () => {
        setShow(true)
        setTimeout(() => {
            setShow(false)
        }, 2000)
    }

    const resultData = () => {
        dispatch(totalPage(Math.ceil(dataProduct.length / 8)))
        const indexLastPost = 1 * 8;
        const indexFirstPost = indexLastPost - 8;
        const pageSlice = dataProduct.slice(indexFirstPost, indexLastPost)
        if (dataProduct && dataProduct.length) {
            let sttAcc = 0;
            return pageSlice.map((item) => {
                sttAcc++;
                return (
                    <div className="grid-item kids col-md-3 col-sm-6 col-xs-6" key={item._id}>
                        <div className="grid-item__content-wrapper">
                            <div className="ps-shoe mb-30">
                                <div className="ps-shoe__thumbnail">
                                    {item.status === "New" ? (
                                        <div className="ps-badge"><span>Mới</span></div>
                                    ) : null}
                                    {
                                        item.promotion ? (
                                            <div className="ps-badge ps-badge--sale ps-badge--2nd">
                                                <span>-{item.promotion}%</span>
                                            </div>
                                        ) : null
                                    }
                                    <a className="ps-shoe__favorite" href="#"><i className="fa fa-heart"></i></a>
                                    <img src={item.pharmacyImage} alt="" width="700" height="350" />
                                    <Link className="ps-shoe__overlay" to={`/detailProduct/${item._id}`}></Link>
                                </div>
                                <div className="ps-shoe__content">
                                    <div className="ps-shoe__variants" style={{marginTop:10}}>
                                        <button
                                            onClick={() => {
                                                dispatch(addCart(item));
                                                dispatch(addCheckOut(item._id));
                                                showButton()
                                            }}
                                            style={{ border: 'none',display:'flex',width:'100%',justifyContent:'center',padding:20,backgroundColor:'#242A61',color:'#fff'}}
                                        >Thêm vào giỏ hàng</button>
                                    </div>
                                    <div className="ps-shoe__detail"><a className="ps-shoe__name" href="#">{item.namePharmacy}</a>
                                        <p className="ps-shoe__categories">
                                            {
                                                item.typePharmacy.map(item => {
                                                    return (
                                                        <a href="#" key={item._id}>{item.nameTypePharmacy}</a>
                                                    )
                                                })
                                            }
                                        </p>

                                        {
                                            item.promotion ? (
                                                <span className="ps-shoe__price">
                                                    <del style={{ marginRight: 10 }}>{item.pricePharmacy}$</del>{item.totalPromotion}$
                                                </span>
                                            ) : (
                                                <span className="ps-shoe__price">
                                                    {item.totalPromotion}$
                                                </span>
                                            )
                                        }

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        }
        else {
            // this.props.getTotalPage(0)
            return (
                <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
                    <p
                        style={{
                            fontSize: "18px",
                            textAlign: "center",
                            margin: "20px 0 0 0",
                        }}
                    >
                        Không có dữ liệu ! .
                    </p>
                </div>
            );
        }
    }

    return (
        <main className="ps-main" style={{ backgroundSize: '100% auto', backgroundImage: `url(${brandHot})`, backgroundPosition: '0 0', backgroundRepeat: 'no-repeat' }}>
            {
                show ? <AddSuccess title="Đã thêm vào giỏ hàng !" /> : null
            }
            <div className="ps-section--features-product ps-section masonry-root pt-100 pb-100">
                <div className="ps-container">
                    <div className="ps-section__header mb-50">
                        <h3 className="ps-section__title" style={{ color: 'rgb(0, 145, 212)' }}>SẢN PHẨM NỔI BẬT</h3>
                        {/* <div >
                            <ul className="ps-masonry__filter">
                                <li className="current"><a href="#" data-filter="*">All <sup>8</sup></a></li>
                                <li><a href="#" data-filter=".nike">Nike <sup>1</sup></a></li>
                                <li><a href="#" data-filter=".adidas">Adidas <sup>1</sup></a></li>
                                <li><a href="#" data-filter=".men">Men <sup>1</sup></a></li>
                                <li><a href="#" data-filter=".women">Women <sup>1</sup></a></li>
                                <li><a href="#" data-filter=".kids">Kids <sup>4</sup></a></li>
                            </ul>
                        </div> */}
                    </div>
                    <div className="ps-section__content pb-50">
                        <div className="masonry-wrapper">
                            <div className="ps-masonry row">
                                {/* <div className="grid-sizer"></div> */}
                                {resultData()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        </main>
    )
}

export default CategoryProduct
