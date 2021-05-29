import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import imgSignUp from "../../asset/imgSignUp.png";


function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                VietSkin
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignUp() {
    const history = useHistory()
    const classes = useStyles();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const dataRegister = {
            email: data.email,
            password: data.password,
            nameKH: data.nameKH
        }
        axios.post('http://localhost:4000/customer/register', data)
            .then(res => {
                console.log(res.data);
                if (res.data.code === 200) {
                    alert("Đăng ký tài khoản thành công ! Đăng nhập ngay nhé")
                    history.push('/signIn')
                }
                if (res.data.code === 401 || res.data.code === 400) {
                    alert("Tài khoản đã tồn tại !")
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <div style={{backgroundImage:`url(${imgSignUp})`,display:'flex',height:'935px'}}>
            <Container component="main" maxWidth="xs" >
                <CssBaseline />
                <div className={classes.paper} >
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                </Typography>
                    <form className={classes.form} noValidate onSubmit={handleSubmit(onSubmit)}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    autoComplete="name"
                                    name="name"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="name"
                                    label="Tên"
                                    autoFocus
                                    inputProps={{ ...register("nameKH", { required: true }) }}
                                />
                                <div style={{ width: '100%', height: 20, paddingLeft: 10, paddingTop: 5 }}>
                                    {errors.nameKH && <p style={{ color: 'red' }}>Vui lòng nhập tên !!!</p>}
                                </div>
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    inputProps={{ ...register("email", { required: true }) }}
                                />
                                <div style={{ width: '100%', height: 20, paddingLeft: 10, paddingTop: 5 }}>
                                    {errors.email && <p style={{ color: 'red' }}>Vui lòng nhập email !!!</p>}
                                </div>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    inputProps={{ ...register("password", { required: true, minLength: 6, maxLength: 10 }) }}
                                />
                                <div style={{ width: '100%', height: 20, paddingLeft: 10, paddingTop: 5 }}>
                                    {errors.password && <p style={{ color: 'red' }}>Vui lòng nhập password !!!</p>}
                                </div>
                            </Grid>
                            {/* <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary" />}
                                label="I want to receive inspiration, marketing promotions and updates via email."
                            />
                        </Grid> */}
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Sign Up
                    </Button>
                        <Grid container justify="flex-end">
                            <Grid item>
                                Bạn đã có tài khoản ? <Link to="/signIn" style={{ textDecoration: 'none', color: 'red' }}>Đăng nhập ngay</Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
                <Box mt={5}>
                    <Copyright />
                </Box>
            </Container>
        </div>
    );
}