import React from 'react'
import { Header } from '../Components/Header'
import { Footer } from '../Components/Footer'
import { Col, Container, Row } from 'react-bootstrap'


import Img2 from "../assets/images/img-2.png"
import FoodaidImg from "../assets/images/foodaid-img.png"
import Foodaid1 from "../assets/images/foodaid-1.png"
import Foodaid2 from "../assets/images/foodaid-2.png"
import Foodaid3 from "../assets/images/foodaid-3.png"
import ButtonArrow from "../assets/images/button-arrow.svg"

import { Link } from 'react-router-dom'
import { Donate } from '../Components/Donate'

const FoodAid = () => {


  return (
    <>
      <Header />
      <section className='hero-section-2 foodaid-section' >
        <Container>
          <Row>
            <Col lg={12} className='text-center'>
              <div className='page-hero text-center'>
                <h1>Support Prophetic Pathway</h1>
                <p>Help Us Feed the Hungry</p>
              </div>
              <div className='aid-imges-vt d-inline-block'>
                <img src={FoodaidImg} className='img-fluid' alt="" />
              </div>
            </Col>
          </Row>
        </Container>
        <img src={Img2} className='vactor-img-5' alt="" />

      </section>

      <section className='food-aid-service'>
        <Container>
          <Row className='align-items-center'>
            <Col md={6}>
              <div className='food-srimg'>
                <img src={Foodaid1} className='img-fluid' alt="" />
              </div>
            </Col>
            <Col md={6}>
              <h2>Make a Difference Today, Join Us in Our Mission to End Hunger</h2>
              <p>At Prophetic Pathway, we are dedicated to addressing the critical issue of hunger and malnutrition in Nigeria. Every day, millions of Nigerians struggle with food insecurity, facing the daunting challenge of finding enough to eat. Your generous donations enable us to provide essential food assistance to those in need, offering hope and sustenance to families affected by hunger.</p>
            </Col>

            <Col md={6}>
              <h2>The Hunger Crisis in Nigeria</h2>
              <p>Nigeria, Africa's most populous nation, is currently grappling with a severe hunger crisis. Economic difficulties, armed conflicts, climate change, and the lingering effects of the COVID-19 pandemic have exacerbated food shortages, leaving many families in dire need. Vulnerable populations, especially children, women, and the elderly, are particularly affected.</p>
            </Col>

            <Col md={6}>
              <div className='food-srimg'>
                <img src={Foodaid2} className='img-fluid' alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>



      <section className='prophetic-session text-center'>
        <Container>
          <h2>How Your Donation Makes a Difference</h2>
          <p>At Prophetic Pathway, we believe that no one should go hungry. With your support, we can make a significant difference in the lives of those facing hunger in Nigeria. By contributing to our life-saving food programs, you are directly helping the most affected communities. Your support enables us to provide immediate food assistance to families affected by conflict, natural disasters, and economic hardships. Your donation ensures that essential food supplies reach those most in need during times of crisis, delivering vital sustenance to communities in distress. </p>
          <div className='text-center mt-4'>
            {/* <button className='comn-btn'>Get Prophecy <img src={ButtonArrow} className='button-hover-img' alt="" /></button> */}
          </div>
        </Container>
      </section>


      <section className='donation-helps prophetic-session text-center '>
        <Container>
          <div className='outr-box-helps'>
            <Row>
              <Col md={12} className='mb-4'>
                <h2>How Your Donation Helps</h2>
                <p>Your donation, regardless of the amount, can have a profound impact:</p>
              </Col>
              <Col md={4}>
                <h2>$10</h2>
                <p>Can provide a week’s worth of nutritious meals for a child.</p>
              </Col>
              <Col md={4}>
                <h2>$50</h2>
                <p>Can supply a family with essential food items for one week.</p>
              </Col>
              <Col md={4}>
                <h2>Any Amount</h2>
                <p>Every dollar counts. Your contribution, no matter the size, helps us feed more hungry individuals and families.</p>
              </Col>
            </Row>
          </div>
        </Container>
      </section>


      <section className='food-aid-service mt-5'>
        <Container>
          <Row className='align-items-center'>
            <Col md={6}>
              <div className='text-center'>
                <h2>How to Donate</h2>
                <p>Supporting Prophetic Pathway’s mission is simple and secure.</p>
                <button className='comn-btn mt-4'>Donate <img src={ButtonArrow} className='button-hover-img' alt="" /></button>
                <p>via our secure online portal.</p>
              </div>
            </Col>
            <Col md={6}>
              <div className='food-srimg'>
                <img src={Foodaid3} className='img-fluid' alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>


      <section className='prophetic-session text-center'>
        <Container>
          <h2>Other Way to Get Involved</h2>
          <p><strong>Spread the Word</strong></p>
          <p>Share our mission with your friends and family on social media. Follow us on <Link className='hyper-link'>Instagram</Link>, <br /> <Link className='hyper-link'>Facebook,</Link> <Link className='hyper-link'>Twitter,</Link> <Link className='hyper-link'>TikTok</Link> and help us raise awareness about the hunger crisis in Nigeria.</p>
          <div className='text-center mt-4'>
            {/* <button className='comn-btn'>Get Prophecy <img src={ButtonArrow} className='button-hover-img' alt="" /></button> */}
          </div>
        </Container>
      </section>

      <section className='prophetic-session text-center'>
        <Container>
          <h2>Contact Us</h2> 
          <p>If you have any questions or would like more information about our programs and how you <br /> can help, please don’t hesitate to get in touch. Together, we can make a difference and <br /> work towards a hunger-free Nigeria.</p>
          <div className='text-center mt-4'>
            <button className='comn-btn'>Contact Us <img src={ButtonArrow} className='button-hover-img' alt="" /></button>
          </div>
        </Container>
      </section>
      <section className='prophetic-session text-center pt-5 mb-5'>
        <Container>
          <p>Your donation can transform lives and bring hope to those who need it most. Join us in our <br /> mission to feed the hungry in Nigeria. Together, we can create a brighter, healthier future <br /> for all.</p>
        </Container>
      </section>







      <Footer />
    </>
  )
}

export default FoodAid