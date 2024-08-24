import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeroVideo from "../assets/images/inner_page_bg.mp4";
import { Header } from '../Components/Header';
import { Col, Container, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Eye from '../assets/images/eye.svg';
import EyeOff from '../assets/images/Eyeoff.svg';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ButtonArrowIcon from '../assets/images/errow_icon.svg';
import { Footer } from '../Components/Footer';

function Signup() {
    const navigate = useNavigate();
    const videoRef = useRef(null);
    const [value, setValue] = useState();
    const [startDate, setStartDate] = useState(new Date());

    const [password1, setPassword1] = useState("");
    const [type1, setType1] = useState('password');
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

    const goToOtp = () => {
        navigate('/VerifyOtp');
    };

    const handleToggle1 = () => {
        setType1(type1 === 'password' ? 'text' : 'password');
    };

    const handleToggle2 = () => {
        setType2(type2 === 'password' ? 'text' : 'password');
    };

    return (
        <>
            <Header />
            <section className='hero-inner_page_sec' style={{paddingBottom: "120px"}}>
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
                                <h2>Create an Account</h2>
                            </div>

                            <Form className='form_sec'>
                                <div className='form_field'>
                                    <Form.Control type="text" placeholder='Enter Your First Name' />
                                </div>

                                <div className='form_field'>
                                    <Form.Control type="text" placeholder='Enter Your Last Name' />
                                </div>

                                <div className='form_field'>
                                    <Form.Control type="text" placeholder='Enter your Email' />
                                </div>

                                <div className='form_field'>
                                    <input className='form-control'
                                        type={type1}
                                        name="password1"
                                        placeholder="Password"
                                        value={password1}
                                        onChange={(e) => setPassword1(e.target.value)}
                                        autoComplete="current-password"
                                    />
                                    <div className="password_icon" onClick={handleToggle1}>
                                        <img className="" src={type1 === 'text' ? Eye : EyeOff} alt="Toggle visibility" />
                                    </div>
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
                                </div>

                                <div className='form_field'>
                                    <PhoneInput
                                        className='mobile_input'
                                        placeholder="Enter phone number"
                                        value={value}
                                        onChange={setValue}
                                        defaultCountry="US"
                                    />
                                </div>

                                <div className='form_field'>
                                    <DatePicker
                                        className='date_picker'
                                        selected={startDate}
                                        onChange={(date) => setStartDate(date)}
                                    />
                                </div>

                                <div className=''>
                                    <button type="button" className='w-100 comnn_btn' onClick={goToOtp}>
                                        Create an Account <img src={ButtonArrowIcon} className='button-hover-img' alt="" />
                                    </button>
                                </div>

                                <div className='text_signup'>
                                    <span></span>
                                    <p>Already a Member?</p>
                                    <span></span>
                                </div>

                                <div className=''>
                                    <button type="button" className='w-100 comnn_btn bg-transparent'>
                                        Login <img src={ButtonArrowIcon} alt="" className='button-hover-img' />
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

export default Signup;
