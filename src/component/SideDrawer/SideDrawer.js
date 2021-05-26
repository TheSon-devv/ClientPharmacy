import React, { useState } from 'react';
import classes from "./SideDrawer.module.css";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logOut } from '../../store/actions/auth';

const SideDrawer = (props) => {
    const dispatch = useDispatch()
    const [show, setShow] = useState(false);
    let attachedClasses = [classes.SideDrawer, classes.Close];

    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
        // console.log(props.open, 'props')
    }
    return (
        <>

            <div className={attachedClasses.join(' ')}>
                {/* <div style={{ color: 'black' }}>
                    <button onClick={() => setShow(true)}>X</button>
                </div> */}
                <div className={classes.Navbar}>
                    <div className={classes.Link}>
                        <Link to="/" style={{ display: 'flex', textDecoration: 'none', padding: '10px', color: 'black' }}>Home</Link>
                    </div>
                    <div className={classes.Link}>
                        <Link to="/blog" style={{ display: 'flex', textDecoration: 'none', padding: '10px', color: 'black' }}>Tin tức</Link>
                    </div>
                    <div className={classes.Link}>
                        <Link to="/contact" style={{ display: 'flex', textDecoration: 'none', padding: '10px', color: 'black' }}>Liên hệ</Link>
                    </div>
                    <div className={classes.Link}>
                        <Link to="/detailUser" style={{ display: 'flex', textDecoration: 'none', padding: '10px', color: 'black' }}>Cá nhân</Link>
                    </div>
                    <div className={classes.Link}>
                        <Link to="/order" style={{ display: 'flex', textDecoration: 'none', padding: '10px', color: 'black' }}>Lịch sử mua hàng</Link>
                    </div>
                    <div className={classes.Link} onClick={() => dispatch(logOut())}>
                        <Link to="/" style={{ display: 'flex', textDecoration: 'none', padding: '10px', color: 'black' }}>Đăng xuất</Link>
                    </div>

                </div>
            </div>
        </>

    )
}

export default SideDrawer
