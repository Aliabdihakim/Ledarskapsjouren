import React, { useState } from 'react'
import "./Home.css"
import ReviewBanner from '../../components/ReviewBanner/ReviewBanner'
import videoBg from "../../assets/ledarskapsjouren-vid.mp4"
import breakit from "../../assets/breakit.png"
import chef from "../../assets/chef.png"
import digital from "../../assets/digital.png"
import naringsliv from "../../assets/naringsliv.png"
import helpData from './helpData'


const Home = () => {

  return (
    <>
      {/*<---------- SECTION 1 ----------> */}
      <div className='home-section1-div'>
      <section className='home-section1'>
        <div className='home-section1-video-div'>
          <video src={videoBg} autoPlay loop muted className='home-section1-video'></video>
        </div>
        <div className='home-section-header-button'>
          <h1 className='home-section1-header'>Utveckla era chefer så utvecklar de er verksamhet.</h1>
          <button className='home-section1-button'>Boka demo</button>
        </div>
      </section>
        <ReviewBanner/>
        <div style={{height:"100px", backgroundColor:"#ffe4d4"}}></div>
      </div>

      {/*<---------- SECTION 2 ----------> */}
      <div className='section2-div'>
        <img className='section2-img' src={require=(breakit)} alt="breakit"/>
        <img className='section2-img' src={require=(chef)} alt="chef"/>
        <img className='section2-img' src={require=(digital)} alt="digital"/>
        <img className='section2-img' src={require=(naringsliv)} alt="naringsliv"/>
      </div>


      {/*<---------- SECTION 3 ----------> */}
      <div>
        <h1 style={{textAlign:"center", padding:"100px"}}>Vad Ledarskapsjouren hjälper till med?</h1>
        <div className='all-help-div'>
          {helpData.map(item => {
            return(
              <div className='help-div'>
                <div className='help-icon'>{item.icon}</div>
                <h3 className='help-title'>{item.title}</h3>
              </div>
            )
          })}
        </div>
      </div>

       {/*<---------- SECTION 4 ----------> */}
       <div className='home-section4-div'>
        <h1 style={{textAlign:"center", color:"#f85c8c", padding:"100px"}}>Utvecklad för chefer i varje steg</h1>
        <div>
          <h3>Unga chefer och framtida ledare.</h3>
        </div>
        <div>
          <h3>Erfarna chefer med personal.</h3>
        </div>
        <div>
          <h3>Chefer i tider av förändring och övergång.</h3>
        </div>
       </div>

    </>
  )
}

export default Home
