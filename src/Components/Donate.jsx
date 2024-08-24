import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import DonateImg from "../assets/images/donate-img.svg"
import ButtonArrow from "../assets/images/button-arrow.svg"


export const Donate = () => {
  return (
    <>
      <div className='donate-section'>
        <Container>
          <div className='dtl-donater'>
            <img src={DonateImg} className='img-fluid' alt="" />
            <p>Your Contribution to our food aid initiative will provide nourishing meals and transform lives throughout Africa. Together, we can offer sustenance and instill hope in communities in need!</p>
            <button className='comn-btn'>Get Prophecy <img src={ButtonArrow} className='button-hover-img' alt="" /></button>
          </div>
        </Container>
      </div>
    </>
  )
}
