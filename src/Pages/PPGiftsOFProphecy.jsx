import React from 'react'
import { Header } from '../Components/Header'
import { Footer } from '../Components/Footer'
import { Col, Container, Row } from 'react-bootstrap'


import HeroVideo from "../assets/images/hero-bg.mp4"
import Img2 from "../assets/images/img-2.png"
import CloudImg from "../assets/images/cloud-img.png"
import Icon7 from "../assets/images/icon-7.svg"
import Icon8 from "../assets/images/icon-8.svg"
import Icon9 from "../assets/images/icon-9.svg"
import Icon10 from "../assets/images/icon-10.svg"
import Icon11 from "../assets/images/icon-11.svg"
import ButoonErrowicon from "../assets/images/butoon-errow-icon.svg"
import { Link } from 'react-router-dom'

const PPGiftsOFProphecy = () => {


  return (
    <>
      <Header />
      <section className='hero-section-2'>
        <Container>
          <div className='page-hero'>
            <h1>Distinction between the gift of <br /> prophecy and psychic abilities</h1>
            <img className='img-fluid cloud-img' src={CloudImg} alt="" />
          </div>
        </Container>
        <img src={Img2} className='vactor-img-5' alt="" />
      </section>

      <section className='prophecy-section'>
        <Container>
          <div className='main-heading'>
            <h2>Prophecy is a divine gift, originated from God.</h2>
            <p>Bestowed by the Holy Spirit, the gift of prophecy is a powerful, scripture-rooted spiritual gift that God uses to edify, encourage, exhort, comfort, and guide his people. Through this divine gift, God conveys messages filled with wisdom, insight, and direction, with the purpose of building up, strengthening, and drawing individuals closer to him.</p>
          </div>
          <Row>
            <Col md={6}>
              <div className="flip-card" tabIndex="0" >
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <div>
                      <img className='img-fluid' src={Icon7} alt="" />
                      <Link to="/">Biblical Foundation of Prophecy</Link>
                    </div>
                  </div>
                  <div className="flip-card-back">
                    <div>
                      <ul>
                        <li>1 Corinthians 12:4-11: Prophecy is listed among the gifts of the Holy Spirit, emphasizing that these gifts are given by the Spirit for the common good.</li>
                        <li>1 Corinthians 14:1: Believers are encouraged and urged to pursue love and eagerly desire spiritual gifts, especially the gift of prophecy.</li>
                        <li>Acts 2:17-18: In Peter’s sermon, he quotes the prophet Joel, indicating that in the last days, God will pour out His Spirit and people will prophesy.</li>
                      </ul>
                      <p>
                        True prophecy originates from God, always aligns with His Word, and brings edification, comfort, and encouragement to believers. Individuals with the gift of prophecy, through their divinely inspired messages, foster spiritual growth, healing, and restoration.</p>
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
                      <img className='img-fluid' src={Icon8} alt="" />
                      <Link to="/">Characteristics of True Prophecy</Link>
                    </div>
                  </div>
                  <div className="flip-card-back">
                    <div>
                      <ul>
                        <ul>
                          <li>  Divine Source: True prophecy originates from the Holy Spirit.</li>
                          <li>Alignment with Scripture: Genuine prophetic messages will always align with the teachings of the scriptures.</li>
                          <li>Edification: Prophecy aims to build up, encourage, and comfort the God’s people.</li>
                          <li>Fruit of the Spirit: Individuals with the gift of prophecy should exhibit the fruit of the Spirit, such as love, joy, peace, and self-control (Galatians 5:22-23).</li>
                        </ul>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='prophecy-section mt-0'>
        <Container>
          <div className='main-heading'>
            <h2>The Deception of Psychic abilities</h2>
            <p>Psychic practices like fortune-telling, astrology, and mediumship are rooted in occultism, not divine gifts. The Bible explicitly warns against engaging in these activities, as they can lead individuals away from God and into spiritual deception. Seeking answers from psychics opens the door to demonic influence and bondage. While the allure of quick answers and mystical experiences may be tempting, the risks are grave. It is essential to recognize the dangers of these occult practices and avoid them entirely.</p>
          </div>
          <Row className='align-items-center'>
            <Col md={6}>
              <div className="flip-card" tabIndex="0" >
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <div>
                      <img className='img-fluid' src={Icon9} alt="" />
                      <Link to="/">Biblical Warnings Against Psychic Practices</Link>
                    </div>
                  </div>
                  <div className="flip-card-back">
                    <div>
                      <ul>
                        <li>Deuteronomy 18:10-12: Practices like divination, sorcery, consulting with spirits, witchcraft, and other similar practices are deemed detestable to the Lord.</li>
                        <li>Leviticus 19:31: God instructs His people to avoid mediums and spiritists, as they defile those who seek them.</li>
                        <li>Acts 16:16-18: Paul encounters a slave girl possessed by a spirit of divination. He casts out the spirit, demonstrating its demonic nature.</li>
                        <li>Psychic practices are inherently deceptive. While they may provide some accurate information, the source is malevolent, intending to mislead and ensnare individuals. The outcomes of engaging with psychics are often destructive, leading to spiritual, emotional, and even physical harm.</li>
                      </ul>
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
                      <img className='img-fluid' src={Icon10} alt="" />
                      <Link to="/">Characteristics of Psychic Gifts</Link>
                    </div>
                  </div>
                  <div className="flip-card-back">
                    <div>
                      <ul>
                        <li>Divine Source: True prophecy originates from the Holy Spirit.</li>
                        <li>Alignment with Scripture: Genuine prophetic messages will always align with the teachings of the scriptures.</li>
                        <li>Edification: Prophecy aims to build up, encourage, and comfort the God’s people.</li>
                        <li>Demonic Source: Psychic abilities are believed to be influenced by demonic spirits, not by God.</li>
                        <li>Contrary to Scripture: Psychic practices often contradict biblical teachings and lead people away from reliance on God.</li>
                        <li>Deception: Psychics may provide accurate information, but the source is deceptive and intended to entrap individuals spiritually.</li>
                        <li>Destructive Outcomes: Engaging in psychic practices can lead to spiritual bondage and separation from God. </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className='main-heading text-start'>
                <h2>The Path to True Freedom: Prophetic Pathway</h2>
                <p>Prophetic Pathway offers a clear and divinely inspired alternative to the deceit of psychic practices. Our prophetic consultants, empowered by the Holy Spirit, provide true guidance, healing, and deliverance. Through God’s prophetic word, you can break free from spiritual bondage and experience genuine transformation.</p>
              </div>
            </Col>
            <Col md={6}>
              <div className="flip-card" tabIndex="0" >
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <div>
                      <img className='img-fluid' src={Icon11} alt="" />
                      <Link to="/">Why Choose Prophetic Pathway</Link>
                    </div>
                  </div>
                  <div className="flip-card-back">
                    <div>
                      <ul>
                        <li>Divine Guidance: Receive insights directly from God, aligned with biblical truths.</li>
                        <li>Healing and Deliverance: Experience emotional, spiritual, and physical healing through the power of prophecy.</li>
                        <li>Spiritual Growth: Deepen your relationship with God and grow in your faith.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={12}>
              <div className='main-heading'>
                <p>The gift of prophecy, a divine empowerment, is meant to uplift and guide believers according to God's will. In contrast, psychic gifts are viewed as demonic deceptions that lead individuals astray from the truth of God's word. It is crucial for believers to discern the source of spiritual insights, remaining grounded in biblical truth and seeking only those gifts that originate from the Holy Spirit. By understanding these distinctions, individuals can navigate their spiritual journeys more effectively, embracing the gifts that truly come from God while avoiding those that deviate from His divine purpose.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='take-action-modal'>
        <Container>
          <div className='outer-tack'>
            <h2>Take Action Now:</h2>
            <p>Don’t let the deception of psychics destroy your life. Visit our consultants page and schedule a call with one of our gifted prophetic consultants today. Experience the power of true prophecy and step into your divine destiny.</p>
            <p>Prophetic Pathway—Where Divine Power Meets Your Life.</p>
          </div>
        </Container>
      </section>

      <div className='text-center mb-5'>
      <button className='comnn_btn' >Get Prophecy <img className='button-hover-img' src={ButoonErrowicon} alt="" /></button>
      </div>

      <Footer />
    </>
  )
}

export default PPGiftsOFProphecy