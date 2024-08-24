import React, { useState, useRef, useEffect } from 'react'; 
import HeroVideo from "../assets/images/inner_page_bg.mp4";
import { Header } from '../Components/Header';
import {  Button, Col, Container, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import "react-datepicker/dist/react-datepicker.css";
import ButoonErrowicon from '../assets/images/errow_icon.svg'
import { Footer } from '../Components/Footer';
import { Link } from 'react-router-dom';
import EmailLink from '../Components/Modal/EmailLink';

export default function Resetpassword() {
    const [modalShow, setModalShow] = React.useState(false);
    const videoRef = useRef(null);

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
                                <p className='title mb-5 mt-3'>Enter your email address to reset password</p>
                            </div>

                            <Form className='form_sec'>
                                <div className='form_field'>
                                    <Form.Control type="text" placeholder='Email Address *' />
                                    {/* <span>Please enter your email</span> */}
                                </div>

                    
                                <div className=''>
                                    <Link className='w-100 Link_btn' onClick={() => setModalShow(true)} >Request a reset link</Link>
                                </div>
                        

                            </Form>
                        </Col>
                        <Col md={2}></Col>
                    </Row>
                </Container>
            </section>

<Footer />



      <EmailLink
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

        </>
    )
}
