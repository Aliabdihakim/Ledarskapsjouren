import React from 'react'
import "./ReviewBanner.css"

const ReviewBanner = () => {

  return (
    <>
        <div className='review-div'>
            <div className='reviewitem-div'>
                <h3>Mycket bra och proffsig coaching.</h3>
                <p style={{fontSize:"1.2rem", padding:"0 50px 0 0"}}>Mycket bra och proffsig coach, matnyttiga samtal, enkelt och funktionellt verktyg. - Magnus</p>
            </div>

            <div className='review-customer reviewitem-div'>
                <h1 style={{paddingRight:"10px"}}>4.7</h1>
                <div style={{textAlign:"center"}}>
                    <p className='review-kund-header'>Kundnöjdhet</p>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                </div>
            </div>

            <div className='review-satisfaction reviewitem-div'>
                <h1 style={{padding:"0 0 0 30px"}}>100%</h1>
                <div style={{textAlign:"center", padding:"0 10px"}}>
                    <p className='review-kund-header'>upplever förbättrad självledarskaps och motivation</p>
                    <div className='review-progressbar'></div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ReviewBanner
