import React, { useEffect, useState } from 'react'
import PaginationTable from "../component/Pagination/PaginationTable";
import '../css/style.css'
import quyet from "../asset/quyet.jpg";
import { changeStateChat } from '../store/actions/chat';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import anhTuan from "../asset/anh-tuan.jpg";
import doDuyTrong from "../asset/do-duy-trong.jpg";
const Doctor = () => {
    const dispatch = useDispatch();
    const id = useParams();
    const [dataDetail, setDataDetail] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:4000/blog/${id.id}`)
            .then(res => {
                console.log(res.data)
                setDataDetail(res.data.data)
            })
            .catch(err => console.log(err))
    }, [])
    const convertDate = (date) => {
        let todayTime = new Date(date);
        let month = todayTime.getMonth() + 1;
        let day = todayTime.getDate();
        let year = todayTime.getFullYear();
        let hours = todayTime.getHours();
        let minutes = todayTime.getMinutes();
        let seconds = todayTime.getSeconds();
        if (day < 10) {
            day = "0" + day;
        }
        if (month < 10) {
            month = "0" + month;
        }
        if (hours < 10) {
            hours = "0" + hours;
        }
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        return `${day}/${month}/${year} - ${hours}:${minutes}:${seconds}`;
    };
    return (
        <>
            {
                dataDetail.map(item => {
                    return (
                        <div class="ps-blog-grid pt-80 pb-80" key={item._id}>
                            <div class="ps-container">
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                                    <div class="ps-post--detail">
                                        <div class="ps-post__thumbnail"><img src="images/blog/11.png" alt="" /></div>
                                        <div class="ps-post__header">
                                            <h3 class="ps-post__title">{item.nameBlog}</h3>
                                            <p class="ps-post__meta">Đăng tải  vào lúc {convertDate(item.dateCreate)}</p>
                                        </div>
                                        <div class="ps-post__content">
                                            <pre style={{ fontFamily: 'Montserrat', fontSize: 16 }}>
                                                {item.information}
                                            </pre>
                                        </div>
                                        <div class="ps-post__footer">
                                            <p class="ps-post__tags"><i class="fa fa-tags"></i><a href="blog-list.html">Blog</a></p>
                                            <div class="ps-post__actions"><span><i class="fa fa-comments"></i> 23 Comments</span><span><i class="fa fa-heart"></i>  likes</span>
                                                <div class="ps-post__social"><i class="fa fa-share-alt"></i><a href="#">Share</a>
                                                    <ul>
                                                        <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                                        <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                                        <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="ps-author">
                                        <div class="ps-author__thumbnail"><img src={anhTuan} alt="" /></div>
                                        <div class="ps-author__content">
                                            <header>
                                                <h4>BS Anh Tuấn</h4>
                                                <p>Gần 10 năm kinh nghiệm</p>
                                            </header>
                                            <p>Có 18 năm kinh nghiệm nghiên cứu và điều trị các bệnh da, hoa liễu khác như:
                                            Các bệnh trẻ em: Viêm da cơ địa ở trẻ, mề đay....
                                            Các bệnh dị ứng, tự miễn như vẩy nến.....
                                            Các bệnh STI bệnh lây truyền qua đường tình dục như Lậu, Giang mai, Sùi mào gà.....
                                            </p>
                                        </div>
                                    </div>
                                    <div class="ps-comments">
                                        <h3>Bình luận(3)</h3>
                                        <div class="ps-comment">
                                            <div class="ps-comment__thumbnail"><img src="images/user/2.jpg" alt="" /></div>
                                            <div class="ps-comment__content">
                                                <header>
                                                    <h4>Lưu Đình Kiên<span>(15 phút trước)</span></h4><a href="#">Trả lời<i class="ps-icon-arrow-left"></i></a>
                                                </header>
                                                <p>Mình cũng đang bị triệu chứng như vậy :( Mong được các bác sỹ tư vấn</p>
                                            </div>
                                        </div>
                                        <div class="ps-comment ps-comment--reply">
                                            <div class="ps-comment__thumbnail"><img src="images/user/3.jpg" alt="" /></div>
                                            <div class="ps-comment__content">
                                                <header>
                                                    <h4>BS Anh Tuấn <span>(8 phút trước)</span></h4><a href="#">Trả lời<i class="ps-icon-arrow-left"></i></a>
                                                </header>
                                                <p>Cháu có thể để lại số điện thoại để chú tư vấn cho nhé !</p>
                                            </div>
                                        </div>
                                        <div class="ps-comment">
                                            <div class="ps-comment__thumbnail"><img src="images/user/4.jpg" alt="" /></div>
                                            <div class="ps-comment__content">
                                                <header>
                                                    <h4>Phan Minh Hải<span>(1 ngày trước)</span></h4><a href="#">Trả lời<i class="ps-icon-arrow-left"></i></a>
                                                </header>
                                                <p>Bệnh này có nguy hiểm k ạ , và nếu bị thì phải giải quyết ra sao bác sỹ ?</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <form class="ps-form--comment" action="do_action" method="post">
                                        <h3>LEAVE A COMMENT</h3>
                                        <div class="row">
                                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 ">
                                                <div class="form-group">
                                                    <input class="form-control" type="text" placeholder="Your Name" />
                                                </div>
                                            </div>
                                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 ">
                                                <div class="form-group">
                                                    <input class="form-control" type="email" placeholder="E-mail" />
                                                </div>
                                            </div>
                                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 ">
                                                <div class="form-group">
                                                    <input class="form-control" type="text" placeholder="Subject" />
                                                </div>
                                            </div>
                                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 ">
                                                <div class="form-group">
                                                    <input class="form-control" type="text" placeholder="Phone Number" />
                                                </div>
                                            </div>
                                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                                                <div class="form-group">
                                                    <textarea class="form-control" rows="6" placeholder="Text your message here..."></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <button class="ps-btn ps-btn--sm ps-contact__submit">Send Message<i class="ps-icon-next"></i></button>
                                        </div>
                                    </form> */}
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Doctor
