import React from 'react'
"./ExpertProfile.css"

const ExpertProfile = (props) => {
  return (
    <div>
        <div className='section2-experts-div'>
                <img src={require('../../assets/jenny.png')} className="experts-section2-img"/>
                <div className='section2-expert-item-div'>
                    <h1>Jenny Lundström</h1>
                    <p style={{paddingRight:"200px", lineHeight:"2"}}>Jenny Lundström har arbetat som VD och har bred erfarenhet inom sälj och affärsutveckling från storbolag såväl som tillväxtbolag. Hon har erfarenhet inom områden såsom IT, sjukvård, konsultbranschen och besöksnäringen. I dag arbetar hon som coach och rådgivare inom ledarskap, affärsutveckling, försäljning och förändringsarbete. Jenny är ACC-certifierad ledarskapscoach enligt ICF.</p>
                </div>
            </div>
    </div>
  )
}

export default ExpertProfile
