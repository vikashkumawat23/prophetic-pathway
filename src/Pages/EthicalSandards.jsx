import React from 'react'
import { Header } from '../Components/Header'
import { Footer } from '../Components/Footer'
import { Col, Container, Row } from 'react-bootstrap'


import Img2 from "../assets/images/img-2.png" 
import Icon34 from "../assets/images/icon-34.svg"
import Icon35 from "../assets/images/icon-35.svg"
import Icon36 from "../assets/images/icon-36.svg"
import Icon37 from "../assets/images/icon-37.svg"
import Icon38 from "../assets/images/icon-38.svg"
import Icon39 from "../assets/images/icon-39.svg"
import Icon40 from "../assets/images/icon-40.svg"
import shades from "../assets/images/shades.png"
import Ellipse from "../assets/images/ellipse-3.png"
import HandImg from "../assets/images/hand-img.png"
import ButtonArrow from "../assets/images/button-arrow.svg"

import { Link } from 'react-router-dom'
import { Donate } from '../Components/Donate'

const EthicalSandards = () => {


  return (
    <>
      <Header />
      <section className='hero-section-2 sandards-hero' >
        <Container>
          <Row>
            <Col lg={7}>
              <div className='page-hero text-start'>
                <h1 className='text-start'>Consultants’ Ethical Standards</h1>
                <p className='text-start'>At Prophetic Pathway, we are committed to upholding the highest ethical standards in our prophetic consultation services. Our advisors adhere to the following principles to ensure the integrity, respect, and well-being of our clients:</p>
              </div>
            </Col>
          </Row>
        </Container>
        {/* <img src={Img2} className='vactor-img-5' alt="" /> */}
        
      </section>

      <section className='prophecy-section'>
        {/* <div className='section-inner-hdng text-center'>
          <h2>At Prophetic Pathway</h2>
          <p>We envision that:</p>
        </div> */}
        <Container>

          <Row>
            <Col md={6}>
              <div className="flip-card" tabIndex="0" >
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <div>
                      <img className='img-fluid' src={Icon34} alt="" />
                      <Link to="/">Confidentiality and Privacy</Link>
                    </div>
                  </div>
                  <div className="flip-card-back align-items-center">
                    <div>

                      <p> Advisors must strictly protect client confidentiality and privacy. This entails safeguarding all client information, securely maintaining records, and refraining from disclosing sensitive details without the client's explicit consent, unless legally required to do so.</p>

                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="flip-card" tabIndex="0" >
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <div>
                      <img className='img-fluid' src={Icon35} alt="" />
                      <Link to="/">Boundaries and Professionalism</Link>
                    </div>
                  </div>
                  <div className="flip-card-back align-items-center">
                    <div>

                      <p> Advisors are required to uphold strict professional boundaries with clients, abstaining from any inappropriate or unethical conduct, such as requesting personal favors, directly requesting money from our clients, soliciting external business opportunities or pursuing romantic/sexual relationships. All services must be provided exclusively through Prophetic Pathway to ensure the security and protection of clients.</p>

                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="flip-card" tabIndex="0" >
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <div>
                      <img className='img-fluid' src={Icon36} alt="" />
                      <Link to="/">Continuing Education and Professional Development</Link>
                    </div>
                  </div>
                  <div className="flip-card-back align-items-center">
                    <div>

                      <p>Advisors are encouraged to continuously pursue continuing education and professional development opportunities to enhance their knowledge, skills, and effectiveness as spiritual advisors. They should consistently seek to improve their abilities, knowledge, and ethical understanding through ongoing education, training, and self-reflection. Advisors should stay informed about developments in relevant fields and adhere to best practices in prophetic consultation. Prophetic Pathway may provide resources, training, or support to facilitate this ongoing growth and learning.</p>

                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="flip-card" tabIndex="0" >
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <div>
                      <img className='img-fluid' src={Icon37} alt="" />
                      <Link to="/">Referral and Collaboration</Link>
                    </div>
                  </div>
                  <div className="flip-card-back align-items-center">
                    <div>

                      <p>Advisors must acknowledge the bounds of their expertise and direct clients to suitable specialists when required. Furthermore, they should welcome collaborative relationships with other advisors to promote their clients' overall well-being.</p>

                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="flip-card" tabIndex="0" >
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <div>
                      <img className='img-fluid' src={Icon38} alt="" />
                      <Link to="/">Non-Discrimination and Inclusivity</Link>
                    </div>
                  </div>
                  <div className="flip-card-back align-items-center">
                    <div>

                      <p>Prophetic consultation services must be equally accessible, without discrimination based on race, ethnicity, gender identity, sexual orientation, religion, or socioeconomic background. Advisors are prohibited from refusing services to any individual on the basis of these factors.</p>

                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="flip-card" tabIndex="0" >
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <div>
                      <img className='img-fluid' src={Icon39} alt="" />
                      <Link to="/">Honesty and Integrity</Link>
                    </div>
                  </div>
                  <div className="flip-card-back align-items-center">
                    <div>

                      <p>their abilities, refraining from making false promises or guarantees about specific outcomes. Additionally, they should never exploit vulnerable individuals for personal gain.</p>

                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={12}>
              <div className="flip-card" tabIndex="0" >
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <div>
                      <img className='img-fluid' src={Icon40} alt="" />
                      <Link to="/">Cultural Sensitivity and Respect</Link>
                    </div>
                  </div>
                  <div className="flip-card-back align-items-center">
                    <div>

                      <p>Advisors should demonstrate cultural competence and sensitivity to the diverse backgrounds and beliefs of their clients. They should avoid imposing their own cultural or religious biases and respect the beliefs and practices of others.</p>

                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='prenare-section text-center mb-5'>
        <Container>
          <Row className='justify-content-center '>
            <Col md={10}> 
              <p>By adhering to these ethical standards, Prophetic Pathway advisors strive to provide compassionate, respectful, and empowering prophetic consultation services to support the spiritual journey and well-being of our clients.</p>
            </Col>
          </Row>
        </Container>
      </section>

      

      <Footer />
    </>
  )
}

export default EthicalSandards