import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import HeroVideo from "../assets/images/inner_page_bg.mp4";
import { Header } from '../Components/Header';
import { Col, Container, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import DatePicker from "react-datepicker";
import Eye from '../assets/images/eye.svg';
import EyeOff from '../assets/images/Eyeoff.svg';
import "react-datepicker/dist/react-datepicker.css";
import ButtonArrowIcon from '../assets/images/errow_icon.svg';
import User from '../assets/images/user.svg';
import { Footer } from '../Components/Footer';

function Login() {

    const navigate = useNavigate();
    const videoRef = useRef(null);
    const [value, setValue] = useState();
    const [startDate, setStartDate] = useState(new Date());
    const [password2, setPassword2] = useState("");
    const [type2, setType2] = useState('password');

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            video.muted = true;
            video.play().catch(error => {
                console.error('Autoplay was prevented:', error);
            });
        }
    }, []);

    const goToSignup = () => {
        navigate('/Signup');
    };
 

  const linkClick = () => {
    navigate('/');
  };

  const handleToggle2 = () => {
    setType2(type2 === 'password' ? 'text' : 'password');
};

    return (
        <>
            <Header />
            <section className='hero-inner_page_sec2'>
                <div className='video-hero'>
                    <video
                        ref={videoRef}
                        loop={true}
                        controls={false}
                        src={HeroVideo}
                        type="video/mp4"
                    />
                </div>

                <Container>
                    <Row className='justify-content-end'>
                        <Col xxl={4} xl={5} lg={5} >
                            <div className='main_title'>
                                <h2>Login</h2>
                            </div>

                            <Form className='form_sec'>
                                <div className='form_field'>
                                    <Form.Control type="text" placeholder='Enter your Email' />

                                 

                                </div>

                                <div className='form_field'>
                                    <input className='form-control'
                                        type={type2}
                                        name="password2"
                                        placeholder="Confirm Password"
                                        value={password2}
                                        onChange={(e) => setPassword2(e.target.value)}
                                        autoComplete="current-password"
                                    />
                                    <div className="password_icon" onClick={handleToggle2}>
                                        <img className="" src={type2 === 'text' ? Eye : EyeOff} alt="Toggle visibility" />
                                    </div>
                                    <div className='login_form_check_sec'>
                                  <div className='login_form_check'>
                                        <Form.Check className='mb-3 mt-3'

                                            type="checkbox"
                                            label="Take me to my Account after login"
                                            id="check"
                                        />

                                        <Form.Check

                                            type="checkbox"
                                            label="Keep me logged in"
                                            id="check2"
                                        />

                                    </div>
                                    
                                    <Link to='/Resetpassword'>Forgot Password?</Link>
                                  </div>
                                </div>

                                <div className=''>
                                    <button type="button" className='w-100 comnn_btn' onClick={linkClick} >
                                        Login <img src={ButtonArrowIcon} alt="" className='button-hover-img' />
                                    </button>
                                </div>

                                <div className='text_signup'>
                                    <span></span>
                                    <p className='opacity-50'>Not a Member?</p>
                                    <span></span>
                                </div>

                                <div className=''>
                                    <button type="button" className='w-100 btn_normal' onClick={goToSignup}>
                                    <img src={User} alt="" className='me-3' />Create an Account 
                                    </button>
                                </div>

                            </Form>
                        </Col>
                        <Col md={2}></Col>
                    </Row>
                </Container>
            </section>

            <Footer />
        </>
    );
}

export default Login;
