import React from 'react';
import { Header } from '../Components/Header';
import { Col, Container, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import "react-datepicker/dist/react-datepicker.css";
import { Footer } from '../Components/Footer';
import Accordion from 'react-bootstrap/Accordion';
import RatingStar from "../assets/images/ratingblck.svg"
import Consultation1 from "../assets/images/consultation_img.png"
import Callicon1 from "../assets/images/call-icon.svg"
import Heart from "../assets/images/Heart.svg"

function PPConsultation() {
    const type = 'radio'; // or 'checkbox', depending on what you need

    return (
        <>
            <Header />
            <section className='hero_page_bg'>
                <Container>
                    
                    <Row className=' g-5 justify-content-center main_section_cns'>
                        <Col xl={4} lg={4} >
                            <div className='sidebar_sec'>
                                <div className='sidebar_item'>
                                    <div className='header_sidebar'>
                                        <Form.Control type="text" placeholder='Search By Name' />
                                    </div>
                                    <div className='sidebar_main'>
                                        <div className='sidebar_title'>
                                            <h3>Sort By</h3>
                                        </div>
                                        <Form className='sidebar_check'>
                                            <Form.Check
                                                inline
                                                label="Available"
                                                name="group1"
                                                type={type}
                                                id={`inline-${type}-1`}
                                            />
                                            <Form.Check
                                                inline
                                                label="Busy"
                                                name="group1"
                                                type={type}
                                                id={`inline-${type}-2`}
                                            />
                                            <Form.Check
                                                inline
                                                label="New"
                                                name="group1"
                                                type={type}
                                                id={`inline-${type}-3`}
                                            />
                                            <Form.Check
                                                inline
                                                label="Star Rating"
                                                name="group1"
                                                type={type}
                                                id={`inline-${type}-4`}
                                            />

                                            <Form.Check
                                                inline
                                                label="Alpabetical"
                                                name="group1"
                                                type={type}
                                                id={`inline-${type}-5
                                        `}
                                            />


                                        </Form>
                                    </div>
                                </div>


                                <div className='sidebar_item2'>
                                    <Accordion defaultActiveKey="0">
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>Specialty</Accordion.Header>
                                            <Accordion.Body>
                                                <Form className='sidebar_check'>
                                                    <Form.Check
                                                        type="checkbox"
                                                        label="Deliverance"
                                                        id="check"
                                                    />

                                                    <Form.Check
                                                        type="checkbox"
                                                        label="Healing"
                                                        id="check2"
                                                    />
                                                    <Form.Check
                                                        type="checkbox"
                                                        label="Interpretation of Dreams"
                                                        id="check3"
                                                    />

                                                    <Form.Check
                                                        type="checkbox"
                                                        label="Interpretation of Visions"
                                                        id="check4"
                                                    />

                                                    <Form.Check
                                                        type="checkbox"
                                                        label="Interpretation of Tongues"
                                                        id="check5"
                                                    />

                                                    <Form.Check
                                                        type="checkbox"
                                                        label="Counseling"
                                                        id="check6"
                                                    />
                                                    <Form.Check
                                                        type="checkbox"
                                                        label="Prayer and Intercession"
                                                        id="check7"
                                                    />
                                                    <Form.Check
                                                        type="checkbox"
                                                        label="Spiritual Gift Activation & Mentorship"
                                                        id="check8"
                                                    />

                                                </Form>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </div>

                            </div>

                            <div className='sidebar_btn'>
                                <button className='clear_btn'>Clear</button>
                                <button className='clear_btn'>Filter</button>
                            </div>




                        </Col>

                        <Col xl={7} lg={8}>
                            <div>
                                <div className='sec_title mb-38'>
                                    <h2>
                                        Consultants Available
                                    </h2>
                                    <p className='sub_title'>We thoroughly vet our consultants to ensure their authenticity and expertise.</p>
                                </div>

                            </div>

                            <Row className='g-5 mb-5'>
                                <Col lg={6}>
                                    <div className='consultation-cart'>
                                        <img className='consultation-cart-img' src={Consultation1} alt="" />
                                        <h3>Melody x7909</h3>
                                        <img className='rating-str' src={RatingStar} alt="" />
                                        <span>Available till 7:30 pm EST</span>
                                        <button className='call-btn'> <img src={Callicon1} alt="" /> Call Me</button>
                                        
                                        <div className='mt-4'> <button className='Link_btn btn_small'> Appoinments</button></div>
                                        <div className='heart_icon'>
                                            <img src={Heart} alt="" />
                                        </div>

                                    </div>
                                </Col>

                                <Col lg={6}>
                                    <div className='consultation-cart'>
                                        <img className='consultation-cart-img' src={Consultation1} alt="" />
                                        <h3>Melody x7909</h3>
                                        <img className='rating-str' src={RatingStar} alt="" />
                                        <span>Available till 7:30 pm EST</span>
                                        <button className='call-btn'> <img src={Callicon1} alt="" /> Call Me</button>
                                        {/* <span>30-mins</span> */}
                                        <div className='mt-4'> <button className='Link_btn btn_small'> Appoinments</button></div>
                                        <div className='heart_icon'>
                                            <img src={Heart} alt="" />
                                        </div>
                                    </div>
                                </Col>

                            </Row>

                            <Row className='g-5 mb-5'>
                                <Col lg={6}>
                                    <div className='consultation-cart'>
                                        <img className='consultation-cart-img' src={Consultation1} alt="" />
                                        <h3>Melody x7909</h3>
                                        <img className='rating-str' src={RatingStar} alt="" />
                                        <span>Available till 7:30 pm EST</span>
                                        <button className='call-btn'> <img src={Callicon1} alt="" /> Call Me</button>
                                        {/* <span>30-mins</span> */}
                                        <div className='mt-4'> <button className='Link_btn btn_small'> Appoinments</button></div>
                                        <div className='heart_icon'>
                                            <img src={Heart} alt="" />
                                        </div>

                                    </div>
                                </Col>

                                <Col lg={6}>
                                    <div className='consultation-cart'>
                                        <img className='consultation-cart-img' src={Consultation1} alt="" />
                                        <h3>Melody x7909</h3>
                                        <img className='rating-str' src={RatingStar} alt="" />
                                        <span>Available till 7:30 pm EST</span>
                                        <button className='call-btn'> <img src={Callicon1} alt="" /> Call Me</button>
                                        {/* <span>30-mins</span> */}
                                        <div className='mt-4'> <button className='Link_btn btn_small'> Appoinments</button></div>
                                        <div className='heart_icon'>
                                            <img src={Heart} alt="" />
                                        </div>
                                    </div>
                                </Col>

                            </Row>
                            <Row className='g-5 mb-5'>
                                <Col lg={6}>
                                    <div className='consultation-cart'>
                                        <img className='consultation-cart-img' src={Consultation1} alt="" />
                                        <h3>Melody x7909</h3>
                                        <img className='rating-str' src={RatingStar} alt="" />
                                        <span>Available till 7:30 pm EST</span>
                                        <button className='call-btn'> <img src={Callicon1} alt="" /> Call Me</button>
                                        {/* <span>30-mins</span> */}
                                        <div className='mt-4'> <button className='Link_btn btn_small'> Appoinments</button></div>
                                        <div className='heart_icon'>
                                            <img src={Heart} alt="" />
                                        </div>

                                    </div>
                                </Col>

                                <Col lg={6}>
                                    <div className='consultation-cart'>
                                        <img className='consultation-cart-img' src={Consultation1} alt="" />
                                        <h3>Melody x7909</h3>
                                        <img className='rating-str' src={RatingStar} alt="" />
                                        <span>Available till 7:30 pm EST</span>
                                        <button className='call-btn'> <img src={Callicon1} alt="" /> Call Me</button>
                                        {/* <span>30-mins</span> */}
                                        <div className='mt-4'> <button className='Link_btn btn_small'> Appoinments</button></div>
                                        <div className='heart_icon'>
                                            <img src={Heart} alt="" />
                                        </div>
                                    </div>
                                </Col>

                            </Row>
                        </Col>

                    </Row>
                </Container>
            </section>
            <Footer />
        </>
    );
}

export default PPConsultation;
