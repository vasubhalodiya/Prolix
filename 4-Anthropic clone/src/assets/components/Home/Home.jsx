import './Home.css'
import React from 'react'
import Navbar from '../Navbar/Navbar'
import Button from '../Button/Button'
import Footer from '../Footer/Footer'
import header_img from '../../images/header-img.svg';
import video_img from '../../images/video-img.jpg';
import tech_img1 from '../../images/tech-img-1.svg';
import tech_img2 from '../../images/tech-img-2.svg';
import tech_img3 from '../../images/tech-img-3.svg';

const Home = () => {
  return (
    <>
        {/* <Navbar /> */}
        <div className="container">
          <header className='header'>
            <div className='grid-container'>
              <div className="header-txt column-8">
                <h1>AI <span>research</span> and <span>products</span> that put safety at the frontier</h1>
                <div className="grid-column-2">
                  <div className="headcard ">
                    <h5 className='headcard-mini'>Claude.ai</h5>
                    <h4 className='headcard-title'>Meet Claude 3.7 Sonnet</h4>
                    <h5 className='headcard-paragraph'>Claude 3.7 Sonnet, our most intelligent AI model, is now available.</h5>
                    <Button title="Talk to Claude"/>
                  </div>
                  <div className="headcard ">
                    <h5 className='headcard-mini'>API</h5>
                    <h4 className='headcard-title'>Build with Claude</h4>
                    <h5 className='headcard-paragraph'>Create AI-powered applications and custom experiences using Claude.</h5>
                    <Button title="Learn More" className="btn-light"/>
                  </div>
                </div>
              </div>
              <div className="header-img">
                <img src={header_img} alt="Header Image" className='header-img' />
              </div>
            </div>
          </header>
          <div className="video">
            <div className="grid-container">
              <div className="video-img column-8">
                <img src={video_img} alt="Logo" className="video-img" />
              </div>
              <div className="video-txt column-4">
                <h3>If knowledge is power and we're building machines that have more knowledge than us, what will happen between us and the machines?</h3>
                <p>Deep Ganguli</p>
                <p>Research Lead, Societal Impacts</p>
              </div>
            </div>
          </div>
          <div className="tech">
            <div className="grid-container">
              <div className="tech-txt-title column-4">
                <h1>At Anthropic, we build AI to serve humanity’s long-term well-being.</h1>
              </div>
              <div className="tech-txt-para column-8">
                <h3>While no one can foresee every outcome AI will have on society, we do know that designing powerful technologies requires both bold steps forward and intentional pauses to consider the effects.</h3>
                <h3>That’s why we focus on building tools with human benefit at their foundation, like Claude.Through our daily research, policy work, and product design, we aim to show what responsible AI development looks like in practice.</h3>
              </div>
              <div className="techcard column-4">
                <div className="techcard-body red">
                  <div className="techcard-img">
                    <img src={tech_img1} alt="Header Image" />
                  </div>
                  <h3>Core Views on AI Safety</h3>
                </div>
              </div>
              <div className="techcard column-4">
                <div className="techcard-body green">
                  <div className="techcard-img">
                    <img src={tech_img2} alt="Header Image" />
                  </div>
                  <h3>Anthropic's Responsible Scalling Policy</h3>
                </div>
              </div>
              <div className="techcard column-4">
                <div className="techcard-body blue">
                  <div className="techcard-img">
                    <img src={tech_img3} alt="Header Image" />
                  </div>
                  <h3>Anthropic Acadamy: <br />Learn to build with Claude</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="help">
            <div className="help-body">
              <div className="help-txt">
                <h1>Want to help us build the future of safe AI?</h1>
                <div className="help-btns">
                  <Button title="See open roles"/>
                  <Button title="Speak with sales"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/* <Footer /> */}
    </>
  )
}

export default Home