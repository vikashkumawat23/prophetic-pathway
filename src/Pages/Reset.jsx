import React, { useState, useRef, useEffect } from 'react'; 
import HeroVideo from "../assets/images/inner_page_bg.mp4";
import { Header } from '../Components/Header';
import {  Button, Col, Container, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import "react-datepicker/dist/react-datepicker.css";
import ButoonErrowicon from '../assets/images/errow_icon.svg'
import { Footer } from '../Components/Footer';
import { Link } from 'react-router-dom';
import Eye from '../assets/images/eye.svg';
import EyeOff from '../assets/images/Eyeoff.svg';
import Check from '../assets/images/tick_87932 1.svg';
import Check2 from '../assets/images/tick_879323.svg';
import Succesfull from '../Components/Modal/Succesfull';

export default function Reset() {
    const [modalShow, setModalShow] = React.useState(false);
    const videoRef = useRef(null);
    const [password1, setPassword1] = useState("");
    const [type1, setType1] = useState('password');
    const [password2, setPassword2] = useState("");
    const [type2, setType2] = useState('password');

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            video.muted = true; // Ensure it's muted for autoplay to work
            video.play().catch(error => {
                console.error('Autoplay was prevented:', error);
            });
        }
    }, []);

    const [otp, setOtp] = useState(''); 

    const handleToggle1 = () => {
        setType1(type1 === 'password' ? 'text' : 'password');
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
                        <Col xxl={4} xl={5} lg={5} md={7}>
                            <div className='main_title'>
                                <h2>Reset Password</h2>
                                
                            </div>

                            <Form className='form_sec'>
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

                        

                                    <div className='successful_item'>
                                       <span> <img src={Check} alt="" /> Minimum 8 characters</span>
                                       <span> <img src={Check} alt="" /> Minimum 8 characters</span>
                                       <span> <img src={Check2} alt="" /> Minimum 8 characters</span>
                                       <span> <img src={Check2} alt="" /> Minimum 8 characters</span>
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
                           

                    
                                <div className='cmn_btn'>
                                <Link className='w-100 Link_btn' onClick={() => setModalShow(true)}>Reset</Link>
                                </div>
                        

                            </Form>
                        </Col>
                        <Col md={2}></Col>
                    </Row>
                </Container>
            </section>

<Footer />



      <Succesfull
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

        </>
    )
}
