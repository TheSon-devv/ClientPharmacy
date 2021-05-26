import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link, useHistory } from "react-router-dom";
import visibility from "../../asset/visibility.png";
import visibility_hide from "../../asset/visibility_hide.png";
import { useForm } from "react-hook-form";

import { Button } from "@material-ui/core";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../store/actions/auth";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright © "}
            <Link color="inherit" to="/">
                Restaurant
            </Link>{" "}
            {new Date().getFullYear()}
            {""}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        height: "100vh",
    },
    image: {
        backgroundImage: "url(https://images.pexels.com/photos/545014/pexels-photo-545014.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)",
        backgroundRepeat: "no-repeat",
        backgroundColor:
            theme.palette.type === "light"
                ? theme.palette.grey[50]
                : theme.palette.grey[900],
        backgroundSize: "cover",
        backgroundPosition: "center",
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        paddingTop: 10,
        paddingBottom: 10
    },
    showPassword: {
        padding: '5px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        marginLeft: '-45px',
    }
}));

const SignIn = ({ ...props }) => {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    const error = useSelector(state => state.auth.message);
    const loading = useSelector(state => state.auth.loading);
    const [show, setShow] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        dispatch(auth(data.email, data.password))
    }

    return (
        <>
            <Grid container component="main" className={classes.root}>
                <CssBaseline />
                <Grid item xs={false} sm={4} md={7} className={classes.image} />
                <Grid item xs={12} sm={8} md={5} >
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                            <div className="row px-3 py-2">
                                <input type="text" placeholder="Email (*)" {...register("email", { required: true })}
                                    className="w-100 form-control focus-remove-shadow"
                                    style={{ boxShadow: "none !important", paddingTop: 25, paddingBottom: 25 }}
                                />
                                <div style={{ width: '100%', height: 20, paddingLeft: 10, paddingTop: 5 }}>
                                    {errors.email && <p style={{ color: 'red' }}>Vui lòng nhập email !!!</p>}
                                </div>
                            </div>
                            <div className="row px-3 py-2" style={{ display: 'flex' }}>

                                <input type={show ? "text" : "password"} placeholder="Mật khẩu (*)" {...register("password", { required: true })}
                                    className="w-100 form-control focus-remove-shadow"
                                    style={{ boxShadow: "none !important", paddingTop: 25, paddingBottom: 25 }}
                                    maxLength="15"
                                />
                                <span onClick={() => setShow(!show)} className={classes.showPassword}>
                                    {show ? <img src={visibility} alt="show" /> : <img src={visibility_hide} alt="hide" />}
                                </span>
                                <div style={{ width: '100%', height: 20, paddingLeft: 10, paddingTop: 5 }}>
                                    {errors.password && <p style={{ color: 'red' }}>Vui lòng nhập mật khẩu !!!</p>}
                                </div>
                            </div>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Sign In
                            </Button>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <p>Bạn chưa có tài khoản ?<Link to="/signUp" style={{textDecoration:'none'}}> Đăng ký tại đây</Link></p>
                            </div>

                            <div style={{ width: '100%', height: 380 }}>
                                {
                                    error !== null ? (
                                        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 50 }}>
                                            <p style={{ color: 'red', fontWeight: '700', fontSize: 18 }}>{error}</p>
                                        </div>
                                    ) : null
                                }
                            </div>
                            <Box mt={5}>
                                <Copyright />
                            </Box>
                        </form>

                    </div>
                </Grid>
            </Grid>
        </>
    );
};

export default SignIn;

{/* <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
    Bạn chưa có tài khoản ? <Link to="/signUp" style={{ textDecoration: 'none', color: 'red' }}>Đăng ký tại đây</Link>
</div> */}
