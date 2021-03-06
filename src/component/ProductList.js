import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { addCart, addCheckOut, getProduct, getTypeProduct } from '../store/actions/cart';
import { getPage, totalPage } from '../store/actions/pagination';
import axios from 'axios';
import PaginationTable from './Pagination/PaginationTable';
import AddSuccess from '../UI/AddSuccess/AddSuccess';

const ProductList = () => {
    const dispatch = useDispatch();
    const dataProduct = useSelector(state => state.cart.listProduct)
    const typeProduct = useSelector(state => state.cart.typeProduct)
    const [typePharmacy, setTypePharmacy] = useState("")
    const [dataReload, setDataReload] = useState([])
    const [dataCheck, setDataCheck] = useState(false)
    const currentPage = useSelector(state => state.pagination.currentPage)
    const perPageList = useSelector(state => state.pagination.perPageList)
    const [show, setShow] = useState(false)
    const [dataFilter, setDataFilter] = useState("")
    const [search, setDataSearch] = useState("")

    const handleChangeType = (value) => {
        setTypePharmacy(value);
        setDataCheck(o => !o)

    }
    useEffect(() => {
        dispatch(getTypeProduct())
        dispatch(getProduct())
        dispatch(getPage(1))
        const getDataReload = async () => {
            if (typePharmacy) {
                await axios.get(`http://localhost:4000/typePharmacy/${typePharmacy}`)
                    .then(res => {
                        // console.log(typePharmacy, 'typePharmacy');
                        setDataReload(res.data.getTypePharmacy)
                    })
                    .catch(err => console.log(err))
            }
            else {
                setDataReload(dataProduct)
            }
        }
        console.log('reload')
        getDataReload()
        setDataSearch("")
    }, [typePharmacy])


    const showButton = () => {
        setShow(true)
        setTimeout(() => {
            setShow(false)
        }, 2000)
    }

    const resultData = () => {
        dispatch(totalPage(Math.ceil(dataReload.length / perPageList)))
        const indexLastPost = currentPage * perPageList;
        const indexFirstPost = indexLastPost - perPageList;
        const pageSlice = dataReload.slice(indexFirstPost, indexLastPost)
        if (dataReload && dataReload.length) {
            let sttAcc = 0;
            return pageSlice.filter(val => {
                if (search === "") {
                    return val
                } else if (val.namePharmacy.toLowerCase().includes(search.toLowerCase())) {
                    return val
                }
            }).map((item) => {
                sttAcc++;
                return (
                    <div className="grid-item kids col-lg-3 col-sm-6 col-xs-6 px-3" key={item._id} style={{zIndex:1}}>
                        <div className="grid-item__content-wrapper">
                            <div className="ps-shoe mb-30">
                                <div className="ps-shoe__thumbnail">
                                    {item.status === "New" ? (
                                        <div className="ps-badge"><span>M???i</span></div>
                                    ) : null}
                                    {
                                        item.promotion ? (
                                            <div className="ps-badge ps-badge--sale ps-badge--2nd">
                                                <span>-{item.promotion}%</span>
                                            </div>
                                        ) : null
                                    }
                                    <a className="ps-shoe__favorite" href="#"><i className="fa fa-heart"></i></a>
                                    <img src={item.pharmacyImage} alt="" width="800" height="350" />
                                    <Link className="ps-shoe__overlay" to={`/detailProduct/${item._id}`}></Link>
                                </div>
                                <div className="ps-shoe__content">
                                    <div className="ps-shoe__variants" >
                                        <button
                                            onClick={() => {
                                                dispatch(addCart(item));
                                                dispatch(addCheckOut(item._id));
                                                showButton()
                                            }}
                                            style={{ border: 'none', display: 'flex', width: '100%', justifyContent: 'center', padding: 20, backgroundColor: '#242A61', color: '#fff' }}
                                        >Th??m v??o gi??? h??ng</button>
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
                                                    <del style={{ marginRight: 10 }}>{item.pricePharmacy} $</del>{item.totalPromotion} $
                                                </span>
                                            ) : (
                                                <span className="ps-shoe__price">
                                                    {item.totalPromotion} $
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
                        Kh??ng c?? d??? li???u ! .
                    </p>
                </div>
            );
        }
    }
    return (
        <div className="row px-3 mt-30">
            {
                show ? <AddSuccess title="???? th??m v??o gi??? h??ng !" /> : null
            }
            <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                <div className="ps-sidebar" data-mh="product-listing">
                    <aside className="ps-widget--sidebar ps-widget--category">
                        <div className="ps-widget__header">
                            <h3>Danh m???c s???n ph???m</h3>
                        </div>
                        <div className="ps-widget__content">
                            <ul className="ps-list--checked">
                                {
                                    typeProduct.map(item => {
                                        return (
                                            <li key={item._id} className="textProduct">
                                                <a href="#"
                                                    onClick={() => handleChangeType(item._id)}
                                                    style={{ textDecoration: 'none' }}
                                                >
                                                    <p className="textProduct">{item.nameTypePharmacy}</p>
                                                    {item.total}
                                                </a>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </aside>
                </div>
            </div>

            <div className="col-lg-9 col-md-12 col-sm-12 mb-20">
                <div className="mb-50">
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div className="searchProduct row">
                            <div style={{ marginRight: '20px' }}>T??m ki???m s???n ph???m: </div>
                            <input
                                value={dataFilter}
                                onChange={e => setDataFilter(e.target.value)}
                                className="formControl"
                            />
                            <div className="ml-20">
                                <button className="btn btn-info" onClick={() => setDataSearch(dataFilter)}>T??m ki???m</button>
                            </div>
                        </div>
                        <PaginationTable />
                    </div>
                </div>
                <div className="ps-section__content pb-50">
                    <div className="masonry-wrapper">
                        <div className="ps-masonry row">
                            {resultData()}
                        </div>
                    </div>
                </div>

                <div className="mt-30">
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <PaginationTable />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductList
