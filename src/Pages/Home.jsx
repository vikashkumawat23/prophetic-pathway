import React, { useEffect, useRef, useState } from 'react'
import { Accordion, Card, Col, Container, Nav, Row, Tab } from 'react-bootstrap'
import { Header } from '../Components/Header'
import { useNavigate } from 'react-router-dom'
import { Footer } from '../Components/Footer'


import HeroVideo from "../assets/images/hero-bg.mp4"
import VideoImg from "../assets/images/video-img.png"
import Step1 from "../assets/images/step-1.png"
import Step2 from "../assets/images/step-2.png"
import Step3 from "../assets/images/step-3.png"
import Lightningsky from "../assets/images/lightning-sky.png"
import PpHand from "../assets/images/pp-hand.png"
import PlayBtn from "../assets/images/play-btn.svg"
import Icon1 from "../assets/images/icon-1.svg"
import Icon2 from "../assets/images/icon-2.svg"
import Icon3 from "../assets/images/icon-3.svg"
import Icon4 from "../assets/images/icon-4.svg"
import Icon5 from "../assets/images/icon-5.svg"
import Icon6 from "../assets/images/icon-6.svg"
import ButtonArrow from "../assets/images/button-arrow.svg"
import Vactor from "../assets/images/vactor.svg"
import RatingStar from "../assets/images/rating-star.svg"
import Callicon1 from "../assets/images/call-icon.svg"
import Consultation1 from "../assets/images/consultation-1.png"
import Consultation2 from "../assets/images/consultation-2.png"
import Consultation3 from "../assets/images/consultation-3.png"
import Consultation4 from "../assets/images/consultation-4.png"
import LightningSkyLight from "../assets/images/lightning-sky-1.png"
import LightningSkyLight2 from "../assets/images/lightning-sky-2.png"
import Handlight from "../assets/images/hand-light.png"
import Vactor1 from "../assets/images/vactor-1.png"
import Blurimg from "../assets/images/blur-img.svg"
import HeartIcon from "../assets/images/heart-icon.svg"
import HeartIcon1 from "../assets/images/heart-icon-1.svg"

const Home = () => {
  const navigate = useNavigate();
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

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust this value based on your breakpoint
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const linkClick = () => {
    navigate('/login');
  };
  const consultationLink = () => {
    navigate('/PP-consultation');
  };

  const [active, setActive] = useState(false);

  const heartclick = () => {
    setActive(!active);
  };

  
  return (
    <>
      <Header />
      <section className='hero-section'>
        <div className='video-hero'>
          <video
            ref={videoRef}
            loop={true}
            controls={false}
            src={HeroVideo}
          >
          </video>
        </div>
        <div className='hero-dtl'>
          <h1>Illuminate your path with <br />
            Prophetic Guidances</h1>
          <p>For the testimony of Jesus is the spirit of prophecy</p>
          <button onClick={consultationLink}>Get Prophecy <img className='button-hover-img' src={ButtonArrow} alt="" /></button>
        </div>

      </section>

      <section className='video-about-section'>
        <img className='vactor-2' src={Blurimg} alt="" />
        <Container>
          <Row className='align-items-center'>
            <Col md={6}>
              <div className='modal-video'>
                <img className='vide-thum' src={VideoImg} alt="" />
                <button className='play-btn'>
                  <img src={PlayBtn} alt="" />
                </button>
              </div>
            </Col>
            <Col md={6}>
              <h3>At Prophetic Pathway</h3>
              <p>we connect you with gifted consultants, empowered by the Holy Spirit, to deliver profound insights and guidance. Through the gift of prophecy, they provide clarity, guidance, direction, deliverance, breakthrough, healing, and wisdom, empowering you to navigate life's journey with unwavering confidence and absolute freedom.”</p>
            </Col>
          </Row>
        </Container>
        <img className='vactor-img' src={Handlight} alt="" />
      </section>

      <section className='consultants-section'>
        <Container>
          <div className='section-heading'>
            <h2>Our team of consultants will</h2>
          </div>

          <Row>
            <Col lg={4} md={6}>
              <div className='consultants-box'>
                <img src={Icon1} alt="" />
                <p>Cultivate your prosperity and breakthrough through the unstoppable and mighty power of the Holy Spirit. </p>
              </div>
            </Col>
            <Col lg={4} md={6}>
              <div className='consultants-box'>
                <img src={Icon2} alt="" />
                <p>Unveil and claim your destiny with authoritative and unwavering prophetic wisdom. </p>
              </div>
            </Col>
            <Col lg={4} md={6}>
              <div className='consultants-box'>
                <img src={Icon3} alt="" />
                <p>Unleash your God-given gifts through the undeniable and irresistible power of the Holy Spirit. </p>
              </div>
            </Col>
            <Col lg={4} md={6}>
              <div className='consultants-box'>
                <img src={Icon4} alt="" />
                <p>Command and seize the power for you to live a life of undisputed triumph!</p>
              </div>
            </Col>
            <Col lg={4} md={6}>
              <div className='consultants-box'>
                <img src={Icon5} alt="" />
                <p>Facilitate your healing through the commanding and unmatching power of the Holy Spirit. </p>
              </div>
            </Col>
            <Col lg={4} md={6}>
              <div className='consultants-box'>
                <img src={Icon6} alt="" />
                <p>Effectuate deliverance and freedom through the commanding and unstoppable power of the Holy Spirit.</p>
              </div>
            </Col>
          </Row>
        </Container>

        <img className='vactor-1' src={Vactor1} alt="" />
      </section>



      <section className='steps-section bg-color'>
        <Container>
          <div className='vector-img text-center'>
            <img className='img-fluid' src={Vactor} alt="" />
          </div>
          <div className='section-heading'>
            <h2>Get your prophetic word in just 3 easy steps:</h2>
          </div>
          <Row className='justify-content-center '>
            <Col xl={3} lg={4}>
              <div className='step-box top-manrge'>
                <div className='step-img'>
                  <img src={Step1} alt="" />
                </div>
                <span onClick={linkClick}>
                  <b>Step 1</b>
                </span>
                <h3 onClick={linkClick}>Create Your Account</h3>
                <p>Enter your information</p>
              </div>
            </Col>
            <Col xl={3} lg={4}>
              <div className='step-box bottom-manrge order-mange'>
                <div className='order-mange-mb w-100'>
                  <span>
                    <b>Step 2</b>
                  </span>
                  <h3>Select a Consultant</h3>
                  <p>Select a gifted consultant</p>
                </div>
                <div className='step-img order-mange'>
                  <img src={Step2} alt="" />
                </div>
              </div>
            </Col>
            <Col xl={3} lg={4}>
              <div className='step-box top-manrge bfro-none'>
                <div className='step-img'>
                  <img src={Step3} alt="" /> <br />
                </div>
                <span>
                  <b>Step 3</b>
                </span>
                <h3>Get Connected</h3>
                <p>Connect with a gifted consultant via Online Voice Call</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>



      <section className='consultation-section bg-color'>
        <Container>
          <div className='section-heading'>
            <h2>Select A Gifted Consultant For an online Voice Call Consultation. </h2>
            <p>For almost a decade, we have commanded the realm of prophetic consultation.</p>
          </div>
          <Row>
            <Col lg={3} md={4} className='d-sm-none d-md-none d-lg-block'>
              <div className='consultation-box'>
                <img className='consultation-img' src={Consultation1} alt="" />
                <h3>Melody x7909</h3>
                <img className='rating-str' src={RatingStar} alt="" />
                <button className='call-btn'> <img src={Callicon1} alt="" /> Call Me</button>
                {/* <span>30-mins</span> */}
                <div className='heart-icon' onClick={heartclick}>
                  <img className='img-fluid' src={active ? HeartIcon : HeartIcon1}   alt="" />
                </div>
              </div>
            </Col>
            <Col lg={3} md={4} className='d-sm-none d-md-none d-lg-block'>
              <div className='consultation-box'>
                <img className='consultation-img' src={Consultation2} alt="" />
                <h3>Melody x7909</h3>
                <img className='rating-str' src={RatingStar} alt="" />
                <button className='call-btn'> <img src={Callicon1} alt="" /> Call Me</button>
                {/* <span>30-mins</span> */}
                <div className='heart-icon'>
                  <img className='img-fluid' src={HeartIcon} alt="" />
                </div>
              </div>
            </Col>
            <Col lg={3} md={4} className='d-sm-none d-md-none d-lg-block'>
              <div className='consultation-box'>
                <img className='consultation-img' src={Consultation3} alt="" />
                <h3>Melody x7909</h3>
                <img className='rating-str' src={RatingStar} alt="" />
                <button className='call-btn'> <img src={Callicon1} alt="" /> Call Me</button>
                {/* <span>30-mins</span> */}
                <div className='heart-icon'>
                  <img className='img-fluid' src={HeartIcon} alt="" />
                </div>
              </div>
            </Col>
            <Col lg={3} md={6}  >
              <div className='consultation-box'>
                <img className='consultation-img' src={Consultation4} alt="" />
                <h3>Melody x7909</h3>
                <img className='rating-str' src={RatingStar} alt="" />
                <button className='call-btn'> <img src={Callicon1} alt="" /> Call Me</button>
                {/* <span>30-mins</span> */}
                <div className='heart-icon'>
                  <img className='img-fluid' src={HeartIcon} alt="" />
                </div>
              </div>
            </Col>
          </Row>
          <div className='consultants-available'>
            <p>46 of 300 Consultants are available</p>
          </div>
          <div className='view-all-btn'>
            <button>View All</button>
          </div>

        </Container>
      </section>


      <section className='application-consultation bg-color pb-5'>
        <Container>
          <div className='section-heading text-center'>
            <h2>Consultants’ application and re-evaluation process: <br />
              Stringent and non-negotiable</h2>
            <p>Applicants are subject to a rigorous live interview as the initial step in our application process. Only those demonstrating exceptional prophetic abilities proceed to be evaluated by our seasoned team of consultants. Successful candidates must conclusively demonstrate precise insight into a client's past, present, and future. However, we consider more than just prophetic abilities - we also evaluate an applicant's unique style, personality, and overall spiritual aptitude before welcoming them into our community.
              Consultants at Prophetic Pathway undergo relentless re-evaluation to uphold the stringent standards and unwavering demonstration of spiritual abilities essential for this role. Rest assured, regardless of your chosen consultant, they stand among the most seasoned and capable prophetic guides available.</p>
          </div>
        </Container>

        <img className='light-night' src={LightningSkyLight} alt="" />
      </section>

      <section className='bg-color why-choose-section'>
        <Container>
          <div className='section-heading text-start'>
            <h2 className='text-start'>Why Choose Prophetic Pathway?</h2>
          </div>
          {!isMobile ? (

            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Row className='align-items-center tab-event'>
                <Col md={4} className='border-right'>
                  <Nav variant="pills" className="flex-column why-choose">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Experienced Consultants</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Personalized Guidance</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Life-Changing Results</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="four">Confidentiality and Compassion</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="five">Spiritual Authority</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="six">Compassionate Support</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="seven">Victorious Living</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col md={8}>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <div className='tbs-dtl'>
                        <p>Our team of seasoned consultants, empowered by the Holy Spirit, guide individuals to find clarity and direction in their lives.</p>
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
                    <Tab.Pane eventKey="four">
                      <div className='tbs-dtl'>
                        <p>At Prophetic Pathway, we prioritize confidentiality and compassion, ensuring you receive the support and guidance you need in a safe, caring environment you can trust.</p>
                      </div>
                    </Tab.Pane>

                    <Tab.Pane eventKey="five">
                      <div className='tbs-dtl'>
                        <p>Our team of seasoned consultants possess the gift of prophecy, enabling them to guide and deliver people from the forces of evil.</p>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="six">
                      <div className='tbs-dtl'>
                        <p>We empathize with the challenges you face, and we're committed to providing you with compassionate support and guidance throughout this process.</p>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="seven">
                      <div className='tbs-dtl'>
                        <p>The Prophetic can liberate you from spiritual oppression and empower you to walk in the freedom and triumph that Christ offers.</p>
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
                  <Accordion.Header>Experienced Consultants</Accordion.Header>
                  <Accordion.Body>
                    Our team of seasoned consultants, empowered by the Holy Spirit, guide individuals to find clarity and direction in their lives.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Personalized Guidance</Accordion.Header>
                  <Accordion.Body>
                    We recognize the unique nature of each individual's ministry calling. That's why we offer personalized guidance to support your specific needs and circumstances as you seek to grow, develop your spiritual gifts, and answer the call to ministry.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                  <Accordion.Header>Life-Changing Results</Accordion.Header>
                  <Accordion.Body>
                    Unlock the secrets of your future and experience the life-changing power of prophetic insight. Gain clarity, direction, and confidence to shape your path ahead.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header> Confidentiality and Compassion</Accordion.Header>
                  <Accordion.Body>
                    At Prophetic Pathway, we prioritize confidentiality and compassion, ensuring you receive the support and guidance you need in a safe, caring environment you can trust.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header> Spiritual Authority</Accordion.Header>
                  <Accordion.Body>
                    Our team of seasoned consultants possess the gift of prophecy, enabling them to guide and deliver people from the forces of evil.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                  <Accordion.Header> Compassionate Support</Accordion.Header>
                  <Accordion.Body>
                    We empathize with the challenges you face, and we're committed to providing you with compassionate support and guidance throughout this process.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                  <Accordion.Header>Victorious Living</Accordion.Header>
                  <Accordion.Body>
                    The Prophetic can liberate you from spiritual oppression and empower you to walk in the freedom and triumph that Christ offers.
                  </Accordion.Body>
                </Accordion.Item>


              </Accordion>
            </div>
          )}
        </Container>
        <img className='light-secont' src={LightningSkyLight2} alt="" />
      </section>
      <Footer />
    </>
  )
}

export default Home