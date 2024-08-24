import React, { useState, useRef, useEffect } from 'react'; // Import useRef and useEffect
import { Button, Col, Container, Row } from 'react-bootstrap';
import OtpInput from 'react-otp-input';
import HeroVideo from "../assets/images/inner_page_bg.mp4";
import { Header } from '../Components/Header';
import { Footer } from '../Components/Footer';
import ButoonErrowicon from '../assets/images/errow_icon.svg'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
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
    const navigate = useNavigate();
    const goToverify = () => {
        navigate('/VerifyOtp');
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
                            <div className='main_title2'>
                                <h2>Enter Verification Code</h2>
                                <p className='title'>We have received a code to</p>
                                <p className='title'>XXXXX01@gmail.com</p>
                            </div>

                            <div className='otp_filed_sec'>
                                <OtpInput 
                                    value={otp}
                                    onChange={setOtp}
                                    numInputs={4}
                                
                                    renderInput={(props) => <input {...props} />}
                                />
                            {/* <span className='error_fileld'>This field required</span> */}
                             
                            </div>
                            <div className='d-flex justify-content-center mb-5'>
                                    <button className='btn_medium comnn_btn'  onClick={goToverify}>Create an Account <img className='button-hover-img new_img' src={ButoonErrowicon} alt="" /></button>
                                </div>
                                

                               <div className='footer_signup'>
                               <p className='title2 text-center'>We have received a code to</p> 
                               <Link to='' >Resend Code</Link>
                               </div>

                        </Col>
                        <Col md={2}></Col>
                    </Row>
                </Container>
            </section>

            <Footer />
        </>
    );
}
