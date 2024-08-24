import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'


import AppStore from "../assets/images/app-store.svg"
import Googleplay from "../assets/images/google-play.svg"
import Twitter from "../assets/images/twitter.svg"
import Tiktok from "../assets/images/tik-tok.svg"
import Facebook from "../assets/images/facebook.svg"
import Insta from "../assets/images/insta.svg"
import Youtube from "../assets/images/youtube.svg"
import ApplyNow from "../assets/images/apply.svg"


export const Footer = () => {
  return (
    <>
      <footer>
        <Container>
          <Row className='align-items-center'>
            <Col md={4} className='ordrd'>
              <div className='app-logo-link'>
                <div className='mb-4'>
                  <img className='img-fluid' src={AppStore} alt="" />
                </div>
                <div>
                  <img className='img-fluid' src={Googleplay} alt="" />
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className=''>
                <ul className='social-icon-mange'>
                  <li>
                    <Link> <img className='img-fluid' src={Twitter} alt="" /></Link>
                  </li>
                  <li>
                    <Link> <img className='img-fluid' src={Tiktok} alt="" /></Link>
                  </li>
                  <li>
                    <Link> <img className='img-fluid' src={Facebook} alt="" /></Link>
                  </li>
                  <li>
                    <Link> <img className='img-fluid' src={Insta} alt="" /></Link>
                  </li>
                  <li>
                    <Link> <img className='img-fluid' src={Youtube} alt="" /></Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={4} className='text-end'>
              <div className='hero-dtl ftr-btn-man  '>
                <span>Consultant?</span>
                <button>Apply Now <img src={ApplyNow} alt="" /></button>
              </div>
            </Col>
          </Row>
          <div className='bottom-ftr'>
            <Row>
              <Col md={6}>
                <p>© 2024 Inc. All rights reserved by Prophetic Pathway</p>
              </Col>
              <Col md={6} className='text-end order-md-mang'>
                <div className='pric-text'>
                  <Link>Privacy Policy</Link>
                  <Link>Terms & Conditions</Link>
                  <Link>Site Maps</Link>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </footer>
    </>
  )
}
