import React from 'react'
import "./ExpertProfile.css"
import { useMediaQuery } from 'react-responsive'

const ExpertProfile = ({id, name, text, img}) => {
    
    const styleEven = {padding: id%2==0 ? "0" : "10px 100px"}
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1000px)' })

    return (
        <>
            <div style={{styleEven, padding:"60px 0"}} className='section2-experts-div'>
                {id%2!=0 && <img src={img} className="experts-section2-img"/>}
                <div className='section2-expert-item-div'>
                    {id%2==1 && 
                    <div className='expert-profile-text-div'>
                        <h1>{name}</h1>
                        <p className='expert-profile-text'>{text}</p>
                    </div>
                    }

                    {id%2==0 && isTabletOrMobile && <img style={{justifySelf:"end"}} src={img} className="experts-section2-img"/>}
                    {id%2==0 && 
                    <div className='expert-profile-text-div'>
                        <h1>{name}</h1>
                        <p className='expert-profile-text'>{text}</p>
                    </div> 
                    }
                </div>
                {id%2==0 && !isTabletOrMobile && <img style={{justifySelf:"end"}} src={img} className="experts-section2-img"/>}
            </div>
        </>
    )
}

export default ExpertProfile
