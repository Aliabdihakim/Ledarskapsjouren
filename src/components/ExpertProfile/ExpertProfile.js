import React from 'react'

const ExpertProfile = ({id, name, text, img}) => {
    
    const styleEven = {
        padding: id%2==0 ? "0" : "10px 100px"
    }

  return (
    <>
        <div style={{styleEven, padding:"60px 0"}} className='section2-experts-div'>
            {id%2!=0 && <img src={img} className="experts-section2-img"/>}
            <div className='section2-expert-item-div'>
            {id%2==1 && 
            <div>
                <h1>{name}</h1>
                <p style={{paddingRight:"200px", lineHeight:"2"}}>{text}</p>
             </div>
             }
             {id%2==0 && 
            <div style={{paddingLeft:"100px"}}>
                <h1>{name}</h1>
                <p style={{lineHeight:"2"}}>{text}</p>
             </div>
             }
             
            </div>
            {id%2==0 && <img style={{justifySelf:"end"}} src={img} className="experts-section2-img"/>}
        </div>
    </>
  )
}

export default ExpertProfile
