import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Consultation from '../assets/images/details_consultation.png';
import RatingStar from "../assets/images/ratingblck.svg"
import Callicon1 from "../assets/images/call-icon.svg"
import { Link } from 'react-router-dom';
import { Header } from '../Components/Header';

export default function PPConsultationDetails() {

    const heartclick = () => {
        setActive(!active);
    };

    return (

        <>
            <Header />
            <section className='hero_page_bg'>
                <Container>
                    <Row>
                        <div className='main_title2'>
                            <h2>Our Consultant</h2>
                        </div>
                        <Col lg={8}>
                            <div className='details_cart'>
                                <div className='details_cart_inner'>
                                    <img src={Consultation} alt="" />
                                    <div className='heart-icon' onClick={heartclick}>
                                        <img className='img-fluid' src={active ? HeartIcon : 
                            
                        } alt="" />
                                    </div>
                                    <div className='cart_title'>
                                        <h3>Melody x7909</h3>
                                        <p>I’m Available - Until 8:00 am EST</p>

                                        <div className='cart_btn'>
                                            <button className='call-btn'> <img src={Callicon1} alt="" /> Call Me</button>
                                            <button className='Link_btn btn_small'> Appoinments</button>



                                        </div>
                                        <div className='Listen_messge'> <Link to=''>Listen to Message</Link></div>

                                    </div>
                                    <div className='deatail_cart_rating'>
                                        <img className='rating-str' src={RatingStar} alt="" />

                                    </div>


                                </div>
                                <div className='about_box'>
                                    <div className='main_title'>
                                        <h2>About Melody</h2>
                                        <span>Specialties: Deliverance, Healing and Interpretation of Dreams
                                            Years of Experience : 17</span>

                                        <p>Hi, I'm Melody, and I've been working as a psychic for 41 years. I have a variety of skills, including Clairaudience,
                                            Career Psychic insights, Clairsentience, Clairvoyance, Energy Healing, and the ability to provide readings without using any
                                            tools. I also use Numerology, Angel Cards, Astrology, and Crystals to give you a well-rounded perspective on your life. </p>

                                        <p> In my readings, I'm direct and honest, always aiming to provide clear and straightforward messages.
                                            I strongly believe in being compassionate and encouraging when helping people navigate through life's challenges. </p>

                                        <p> My journey as a psychic started when I began reading tarot cards at 18, but my connection to the psychic realm began even earlier. At the age of three, I began having
                                            dreams about future events that would later come true.</p>

                                        <p> I'm particularly dedicated to helping with relationship issues and career challenges. I'm a people person and
                                            can deeply understand your feelings. My main goal is to genuinely support you in overcoming any obstacles that might be blocking
                                            your path to a fulfilling life.</p>

                                        <p>With my extensive experience, compassionate nature, and encouraging approach, I'm here to help you find clarity,
                                            peace, and empowerment on your life's journey. Don't hesitate to reach out, and together, we can explore the possibilities.</p>


                                    </div>
                                </div>

                            </div>
                        </Col>
                    </Row>

                </Container>
            </section>
        </>

    )
}
