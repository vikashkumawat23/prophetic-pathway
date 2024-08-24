import React from 'react'
import { Header } from '../Components/Header'
import { Footer } from '../Components/Footer'
import { Col, Container, Row } from 'react-bootstrap'


import Img2 from "../assets/images/img-2.png"
import Icon30 from "../assets/images/icon-30.svg"
import Icon31 from "../assets/images/icon-31.svg"
import Icon32 from "../assets/images/icon-32.svg"
import Icon33 from "../assets/images/icon-33.svg"
import ServiceBg from "../assets/images/service-bg.png"
import Ellipse from "../assets/images/ellipse-3.png"
import HandImg from "../assets/images/hand-img.png"
import ButtonArrow from "../assets/images/button-arrow.svg"

import { Link } from 'react-router-dom'
import { Donate } from '../Components/Donate'

const Services = () => {


  return (
    <>
      <Header />
      <section className='hero-section-2 service-hero' >
        <Container>
          <Row>
            <Col lg={6}>
              <div className='page-hero text-start'>
                <h1 className='text-start'>Our Services</h1>
                <p className='text-start'>At Prophetic Pathway, our seasoned team of advisors are dedicated to helping you discern God's voice and find healing, deliverance, restoration, and direction for your life. Through personalized prophetic messages and insights, we empower you to walk in the fullness and confidently of God's plan for your life. Our services are designed to guide you on your journey in life and unlock the blessings of prosperity and abundance that come through the gift of prophecy. Explore our offerings below.</p>
              </div>
            </Col>
          </Row>
        </Container>
        {/* <img src={Img2} className='vactor-img-5' alt="" /> */}
        <img src={ServiceBg} className='vactor-img-6 mode-cange' alt="" />
        <img src={Ellipse} className='vactor-img-6 ' alt="" />
      </section>

      <section className='prophecy-section'>
        {/* <div className='section-inner-hdng text-center'>
          <h2>At Prophetic Pathway</h2>
          <p>We envision that:</p>
        </div> */}
        <Container>

          <Row>
            <Col md={12}>
              <div className="flip-card" tabIndex="0" >
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <div>
                      <img className='img-fluid' src={Icon30} alt="" />
                      <Link to="/">Prophetic Consultations & Counseling</Link>
                    </div>
                  </div>
                  <div className="flip-card-back">
                    <div>

                      <p> At Prophetic Pathway, our prophetic consultations offer profound benefits, guided by the Holy Spirit, to support your spiritual journey. Our gifted consultants are dedicated to seeking divine revelation to deliver personalized insight and guidance tailored specifically to your unique circumstances. Through these one-on-one sessions, you receive accurate and timely messages that address your needs and concerns.</p>

                      <p>Our consultations go beyond mere advice; they provide holistic support including healing, deliverance, and liberation from spiritual strongholds and demonic oppression. Whether you are facing challenges, bondage, or seeking freedom from deep-rooted issues, our consultants are equipped to facilitate your spiritual breakthrough.</p>

                      <p>By engaging in prophetic consultations, you gain access to powerful, divinely inspired wisdom and strategies that are designed to bring clarity, peace, and transformation into your life. Each session is an opportunity to receive targeted support and encouragement, ensuring that you are empowered to overcome obstacles and move forward in your spiritual journey with confidence and grace.</p>

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
                      <img className='img-fluid' src={Icon31} alt="" />
                      <Link to="/">Prophetic Prayer and Intercession</Link>
                    </div>
                  </div>
                  <div className="flip-card-back">
                    <div>
                      <p>At Prophetic Pathway, we are honored to offer the powerful support of our consultants, who are empowered by the Holy Spirit to serve as dedicated Prophetic Prayer Warriors and Intercessors. Our consultants are committed to providing heartfelt and effective prayer for those in need, ensuring that every request is met with divine compassion and strength.</p>

                      <p>In these transformative sessions, our consultants stand in the gap, interceding on your behalf with fervent prayers that are guided by spiritual insight and divine revelation. Whether you are facing personal challenges, seeking clarity, or needing breakthrough in specific areas of your life, our intercessors are here to provide the spiritual support and encouragement you need.</p>

                      <p>With their deep spiritual connection and commitment to prayer, our consultants bring a unique level of understanding and guidance. Their prayers are tailored to address your specific needs, helping to invoke God's power and intervention in your life. Trust in their ability to uplift and support you through powerful intercession, facilitating profound healing and change.</p>
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
                      <img className='img-fluid' src={Icon32} alt="" />
                      <Link to="/">Prophetic Mentorship</Link>
                    </div>
                  </div>
                  <div className="flip-card-back">
                    <div>
                      <p>At Prophetic Pathway, we proudly offer the expertise of our consultants, who are empowered by the Holy Spirit to act as Prophetic Mentors. If you are eager to activate and develop your spiritual gifts, our mentors are here to guide you every step of the way.</p>

                      <p>Our consultant provides personalized support to help you uncover and enhance your unique spiritual abilities. Whether you're seeking to awaken dormant gifts or deepen your current talents, they offer divine insight, practical guidance, and encouragement tailored to your journey.</p>

                      <p>With their profound spiritual wisdom and experience, our mentors are dedicated to facilitating your growth and ensuring you maximize your potential. Embrace this opportunity to be guided by those who are spiritually equipped to mentor and inspire you on your path to greater spiritual fulfillment.</p>
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
                      <img className='img-fluid' src={Icon33} alt="" />
                      <Link to="/">Interpretation of Dreams, Visions & <br /> Prophetic Tongues</Link>
                    </div>
                  </div>
                  <div className="flip-card-back">
                    <div>
                      <p>At Prophetic Pathway, we are blessed to have a team of consultants uniquely empowered by the Holy Spirit, equipped with the profound gifts of interpreting tongues, dreams, and spiritual visions. Our consultants are dedicated to helping you unlock the full potential of your spiritual experiences.</p>

                      <p>If you find yourself puzzled by your dreams, just connect with our consultants, they are here to offer insightful and accurate interpretations, bringing clarity to your nighttime messages. For those who speak in tongues but struggle to understand the messages, our consultants provide meaningful interpretations that will help you grasp the divine messages being conveyed.</p>

                      <p>Additionally, if you see visions and need assistance in decoding their significance, our team is ready to guide you. They will help you interpret and understand the deeper meanings of your visions, ensuring that you receive the guidance and revelation intended for you.</p>

                      <p>With personalized attention and divine insight, our consultants are committed to helping you navigate your spiritual journey with clarity and purpose. Trust Prophetic Pathway to assist you in uncovering and embracing the full scope of your spiritual gifts.</p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>


          </Row>
        </Container>
      </section>

      <section className='prenare-section text-center'>
        <Container>
          <Row className='justify-content-center'>
            <Col md={10}>
              <h2>How to Prepare for Your Prophetic Session</h2>
              <p>Before your session, take time to pray, asking God to help get your heart and mind ready to receive. Approach the session with an open, receptive spirit, prepared to receive the Holy Spirit's guidance. Identify any specific questions or areas where you need direction, so you can discuss them during the session. Afterwards, reflect carefully on the prophetic words you received, and seek God's wisdom for applying them to your life.</p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='prophetic-session '>
        <Container>
          <h2>Schedule Your Prophetic Session <br /> Today with Prophetic Pathway</h2>
          <p>At Prophetic Pathway, our mission is to empower you through the transformative power of God's prophetic word. Our team of gifted consultants provides personalized guidance, healing, deliverance, counseling, and prophetic training - all delivered with love, compassion, accuracy, and deep spiritual insight.</p>
          <div className='text-center mt-4'>
          <button className='comn-btn'>Get Prophecy <img src={ButtonArrow} className='button-hover-img' alt="" /></button>
          </div>
        </Container>
      </section>

      <Donate />


      <Footer />
    </>
  )
}

export default Services