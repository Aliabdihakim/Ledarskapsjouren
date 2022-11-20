import React from 'react'
import "./Experts.css"

const Experts = () => {
  return (
    <div>
        {/*<---------- SECTION 1 ---------->*/}
        <section className='section1-expert'> 
            <div style={{textAlign:"center"}}> 
                <h1 className='experts-section1-title'>Expert kvalificeringsprocess</h1>
                <p className='experts-section1-text'>
                Våra experter väljs ut enligt en omfattande urvalsprocess och bedöms kontinuerligt i deras coachningspraxis genom omdömen och recensioner.
                </p>
            </div>
            <div className='experts-icon-div'>
                <div className='expert-icon'>
                    <img src={require('../../assets/expert-icon1.png')} className="expert-icon-img"/>
                    <h3 className='expert-icon-title'>Kandidatscreening</h3>
                    <p className='expert-icon-text'>Från ett stort antal ansökningar väljer vi noggrant coacher enligt våra kvalitetsstandarder och kontrollerar noggrant att varje kandidat uppfyller våra kriterier.</p>
                </div>

                <div className='expert-icon'>
                    <img src={require('../../assets/expert-icon2.png')} className="expert-icon-img"/>
                    <h3 className='expert-icon-title'>Personlig intervju</h3>
                    <p className='expert-icon-text'>Erfarenhet, kommunikation och personlighet testas i en omfattande liveintervju. Här fokuserar vi särskilt på coachens personlighet och deras kunskaper.</p>
                </div>

                <div className='expert-icon'>
                    <img src={require('../../assets/expert-icon3.png')} className="expert-icon-img"/>
                    <h3 className='expert-icon-title'>Kontinuerlig kvalitetssäkring</h3>
                    <p className='expert-icon-text'>Genom bedömningar och recensioner utvärderas coacherna för att säkerställa kvalitet.  löpande säkerställa kvalitet.</p>
                </div>
            </div>
        </section>

        {/*<---------- SECTION 2 ---------->*/}

        <section className='section2-experts'>
            <h1 style={{textAlign:"center", fontSize:"2rem", padding:"100px 0"}}>Se ett urval av våra expert</h1>
            <div className='section2-experts-div'>
                <img src={require('../../assets/jenny.png')} className="experts-section2-img"/>
                <div className='section2-expert-item-div'>
                    <h1>Jenny Lundström</h1>
                    <p style={{paddingRight:"200px", lineHeight:"2"}}>Jenny Lundström har arbetat som VD och har bred erfarenhet inom sälj och affärsutveckling från storbolag såväl som tillväxtbolag. Hon har erfarenhet inom områden såsom IT, sjukvård, konsultbranschen och besöksnäringen. I dag arbetar hon som coach och rådgivare inom ledarskap, affärsutveckling, försäljning och förändringsarbete. Jenny är ACC-certifierad ledarskapscoach enligt ICF.</p>
                </div>
            </div>

            <div className='section2-experts-div'>
                <div style={{padding:"10px 100px"}} className='section2-expert-item-div'>
                    <h1>Jenny Lundström</h1>
                    <p style={{paddingRight:"20px", lineHeight:"2"}}>Jenny Lundström har arbetat som VD och har bred erfarenhet inom sälj och affärsutveckling från storbolag såväl som tillväxtbolag. Hon har erfarenhet inom områden såsom IT, sjukvård, konsultbranschen och besöksnäringen. I dag arbetar hon som coach och rådgivare inom ledarskap, affärsutveckling, försäljning och förändringsarbete. Jenny är ACC-certifierad ledarskapscoach enligt ICF.</p>
                </div>
                <img style={{justifySelf:"end"}} src={require('../../assets/jenny.png')} className="experts-section2-img"/>
            </div>

            <div className='section2-experts-div'>
                <img src={require('../../assets/jenny.png')} className="experts-section2-img"/>
                <div className='section2-expert-item-div'>
                    <h1>Jenny Lundström</h1>
                    <p style={{paddingRight:"200px", lineHeight:"2"}}>Jenny Lundström har arbetat som VD och har bred erfarenhet inom sälj och affärsutveckling från storbolag såväl som tillväxtbolag. Hon har erfarenhet inom områden såsom IT, sjukvård, konsultbranschen och besöksnäringen. I dag arbetar hon som coach och rådgivare inom ledarskap, affärsutveckling, försäljning och förändringsarbete. Jenny är ACC-certifierad ledarskapscoach enligt ICF.</p>
                </div>
            </div>

            <div className='section2-experts-div'>
                <div style={{padding:"10px 100px"}} className='section2-expert-item-div'>
                    <h1>Jenny Lundström</h1>
                    <p style={{paddingRight:"20px", lineHeight:"2"}}>Jenny Lundström har arbetat som VD och har bred erfarenhet inom sälj och affärsutveckling från storbolag såväl som tillväxtbolag. Hon har erfarenhet inom områden såsom IT, sjukvård, konsultbranschen och besöksnäringen. I dag arbetar hon som coach och rådgivare inom ledarskap, affärsutveckling, försäljning och förändringsarbete. Jenny är ACC-certifierad ledarskapscoach enligt ICF.</p>
                </div>
                <img style={{justifySelf:"end"}} src={require('../../assets/jenny.png')} className="experts-section2-img"/>
            </div>

            <div className='section2-experts-div'>
                <img src={require('../../assets/jenny.png')} className="experts-section2-img"/>
                <div className='section2-expert-item-div'>
                    <h1>Jenny Lundström</h1>
                    <p style={{paddingRight:"200px", lineHeight:"2"}}>Jenny Lundström har arbetat som VD och har bred erfarenhet inom sälj och affärsutveckling från storbolag såväl som tillväxtbolag. Hon har erfarenhet inom områden såsom IT, sjukvård, konsultbranschen och besöksnäringen. I dag arbetar hon som coach och rådgivare inom ledarskap, affärsutveckling, försäljning och förändringsarbete. Jenny är ACC-certifierad ledarskapscoach enligt ICF.</p>
                </div>
            </div>


        </section>
      
    </div>
  )
}

export default Experts
