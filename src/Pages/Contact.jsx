import React, { useEffect, useState } from 'react'
import { Header } from '../Components/Header'
import { Footer } from '../Components/Footer'
import { Accordion, Col, Container, Nav, Row, Tab } from 'react-bootstrap'


import Img2 from "../assets/images/img-2.png"
import CallIcon1 from "../assets/images/call-icon-1.svg"
import MailIcon from "../assets/images/mail-icon.svg"
import Desc from "../assets/images/desc.svg"
import ContactCustomer from "../assets/images/contact-customer.png"
import ButtonArrow from "../assets/images/button-arrow.svg"
import ServiceBg from "../assets/images/service-bg.png"
import Contactmain from "../assets/images/contact-main.png"

import { Link } from 'react-router-dom'
import { Donate } from '../Components/Donate'

const Contact = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust this value based on your breakpoint
    };
  
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check
  
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  

  return (
    <>
      <Header />
      <section className='hero-section-2 service-hero' >
        <Container>
          <Row>
            <Col lg={6}>
              <div className='page-hero text-start'>
                <h1 className='text-start'>Contact us</h1>
                <p className='text-start'>Welcome to Prophetic Pathway's Contact Us page. We value your interest and are here to assist you in any way we can. Whether you have questions about our services, need assistance with scheduling a consultation, or have feedback to share, our dedicated team is ready to help</p>
              </div>
            </Col>
          </Row>
        </Container>
        <img src={Img2} className='vactor-img-5' alt="" />
        <img src={Contactmain} className='contact-vatco' alt="" />
        {/* <img src={Ellipse} className='vactor-img-6 ' alt="" /> */}
      </section>

      <section className='why-choose-section contact-faq pt-0 pb-5'>
        <Container>
          <div className='section-heading text-start'>
            <h2 className='text-start'>Why Choose Prophetic Pathway?</h2>
          </div>
          {!isMobile ? (

            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Row className='align-items-center tab-event'>
                <Col md={4} className='border-right py-5'>
                  <Nav variant="pills" className="flex-column why-choose">
                    <Nav.Item>
                      <Nav.Link eventKey="first">How Can We Assist You?</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Scheduling Consultations</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Feedback and Suggestions</Nav.Link>
                    </Nav.Item>
                     
                  </Nav>
                </Col>
                <Col md={8}>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <div className='tbs-dtl'>
                        <p>If you have inquiries regarding our prophetic services, our team of knowledgeable representatives is available to provide detailed information. We understand that each individual's spiritual journey is unique, and we are committed to offering personalized guidance that meets your specific needs.</p>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <div className='tbs-dtl'>
                        <p>We recognize the unique nature of each individual's ministry calling. That's why we offer personalized guidance to support your specific needs and circumstances as you seek to grow, develop your spiritual gifts, and answer the call to ministry.</p>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <div className='tbs-dtl'>
                        <p>Unlock the secrets of your future and experience the life-changing power of prophetic insight. Gain clarity, direction, and confidence to shape your path ahead.</p>
                      </div>
                    </Tab.Pane>
                       
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          ) : (
            <div className='accrodn-mange'>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>How Can We Assist You?</Accordion.Header>
                  <Accordion.Body>
                    <p>Our team of seasoned consultants, empowered by the Holy Spirit, guide individuals to find clarity and direction in their lives.</p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Personalized Guidance</Accordion.Header>
                  <Accordion.Body>
                    <p>We recognize the unique nature of each individual's ministry calling. That's why we offer personalized guidance to support your specific needs and circumstances as you seek to grow, develop your spiritual gifts, and answer the call to ministry.</p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                  <Accordion.Header>Scheduling Consultations</Accordion.Header>
                  <Accordion.Body>
                    <p>Unlock the secrets of your future and experience the life-changing power of prophetic insight. Gain clarity, direction, and confidence to shape your path ahead.</p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header> Feedback and Suggestions</Accordion.Header>
                  <Accordion.Body>
                   <p> At Prophetic Pathway, we prioritize confidentiality and compassion, ensuring you receive the support and guidance you need in a safe, caring environment you can trust.</p>
                  </Accordion.Body>
                </Accordion.Item>
                 


              </Accordion>
            </div>
          )}
        </Container>
        {/* <img className='light-secont' src={LightningSkyLight2} alt="" /> */}
      </section>


      <section className='donation-helps prophetic-session text-center '>
        <Container>
          <div className='outr-box-helps'>
            <Row>
              <Col md={12} className='mb-4'>
                <h2>Contact Information</h2>
                <p>For assistance or inquiries, please contact us using the following methods:</p>
              </Col>
              <Col md={4}>
                <h2><img className='height-man' src={CallIcon1} alt="" /></h2>
                <p><Link className='hyper-link'>+1(555) 123 - 4567</Link></p>
              </Col>
              <Col md={4}>
                <h2><img src={MailIcon} className='height-man' alt="" /></h2>
                <p><Link className='hyper-link'>info@propheticpathway.com</Link></p>
              </Col>
              <Col md={4}>
                <h2><img className='height-man' src={Desc} alt="" /></h2>
                <p><Link className='hyper-link'>Connect with us on <br /> Instagram, Facebook and <br /> TikTok</Link></p>
              </Col>
            </Row>
          </div>
        </Container>
      </section>


   

      <section className='food-aid-service mt-5'>
        <Container>
          <Row className='align-items-center'>
           
            <Col md={6}>
              <div className='food-srimg'>
                <img src={ContactCustomer} className='img-fluid' alt="" />
              </div>
            </Col>
            <Col md={6}>
              <div className=''> 
                <p>Our customer service team is available to answer your questions and assist you with any concerns you may have. We are committed to providing timely and professional support to ensure your experience with Prophetic Pathway is positive and enriching.
          <br /><br />
Feel free to reach out to us at any time. Your spiritual well-being is our priority, and we are honored to be a part of your journey.</p>  
              </div>
            </Col>
          </Row>
        </Container>
      </section>


      <section className='prophetic-session text-center'>
        <Container>
          <h2>Other Way to Get Involved</h2>
          <p><strong>Spread the Word</strong></p>
          <p>Share our mission with your friends and family on social media. Follow us on <Link className='hyper-link'>Instagram</Link>, <Link className='hyper-link'>Facebook,</Link> <Link className='hyper-link'>Twitter,</Link> <Link className='hyper-link'>TikTok</Link> and help us raise awareness about the hunger crisis in Nigeria.</p>
          <div className='text-center mt-4'>
            {/* <button className='comn-btn'>Get Prophecy <img src={ButtonArrow} className='button-hover-img' alt="" /></button> */}
          </div>
        </Container>
      </section>

      <section className='prophetic-session text-center'>
        <Container>
          <h2>Contact Us</h2> 
          <p>If you have any questions or would like more information about our programs and how you can help, please don’t hesitate to get in touch. Together, we can make a difference and work towards a hunger-free Nigeria.</p>
          <div className='text-center mt-4'>
            <button className='comn-btn'>Contact Us <img src={ButtonArrow} className='button-hover-img' alt="" /></button>
          </div>
        </Container>
      </section>
      <section className='prophetic-session text-center pt-4 mb-5'>
        <Container>
          <p>Your donation can transform lives and bring hope to those who need it most. Join us in our mission to feed the hungry in Nigeria. Together, we can create a brighter, healthier future for all.</p>
        </Container>
      </section>







      <Footer />
    </>
  )
}

export default Contact