import React, { useState } from 'react'
import "./Experts.css"
import ExpertProfile from '../../components/ExpertProfile/ExpertProfile'
import expertData from './expertData'

const Experts = () => {

    const [addExpert, setAddExpert] = useState({
        firstName:"",
        lastName:"",
        email:"",
        phone:"",
        more:"",
    })
    

    const handleChange = (e) => {
        setAddExpert(prev => {
            return({
                ...prev,
                [e.target.name]:e.target.value
            })
        })
    }

    console.log(addExpert);

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

            {expertData.map(expert => {
                return(
                    <ExpertProfile 
                    key={expert.id}
                    id={expert.id}
                    name={expert.name}
                    text={expert.text}
                    img={expert.img}
                    />
                )
            })}
        </section>

        {/*<---------- SECTION 3 ---------->*/}

        <section className='expert-section3'>
            <div>

            </div>
            <h1 className='expert3-title'>Vill du bli expert hos Ledarskapsjouren?</h1>
            <div className='expert3-buttons'>
                <button className='expert3-button'>Läs mer</button>
                <button className='expert3-button' style={{backgroundColor:"#f45f8c",color:"white"}}>Ansök</button>
            </div>
        </section>

        {/*<---------- SECTION 4 ---------->*/}

        <section>
            <div className='expert4-div'>
                <div className='expert4-img-div'>
                    <img className='expert4-img' src={require('../../assets/expert-info1.png')}/>
                </div>
                <div className='expert4-info'>
                    <h2>Skapa meningsfull påverkan</h2>
                    <p className=''>
                    Ledarskapsjouren gör det möjligt för människor att dra nytta av coachning så tidigt som möjligt i sin karriär för att uppnå störst effekt.
                    <br />
                    Använd den senaste coachningstekniken för att förändra dina kunders tillväxt och utveckling.
                    </p>
                    <button className='expert3-button' style={{backgroundColor:"#f45f8c",color:"white"}}>Ansök</button>
                </div>
            </div>

            <div className='expert4-div'>
                <div className='expert4-info'>
                    <h2>Helt flexibelt</h2>
                    <p className=''>
                    Våra Coacher arbetar 100% flexibelt. De väljer själv sina tillgängliga timmar och arbetar när de kan.
                    </p>
                    <button className='expert3-button' style={{backgroundColor:"#f45f8c",color:"white"}}>Ansök</button>
                </div>
                <div className='expert4-img-div' style={{backgroundColor:"#ffe4d4"}}>
                    <img className='expert4-img' src={require('../../assets/expert-info2.png')} style={{borderColor:"white"}}/>
                </div>
            </div>
        </section>

        {/*<---------- SECTION 5 ---------->*/}

        <section className='expert-add-form-section'>
            <form className='expert-add-form'>
                <h1>Gå med som expert</h1>
                <p>
                Fyll i detta formulär så kontaktar vi dig för att prata om din ansökan
                </p>

                <div className='expert-form-row'>
                    <div className='expert-form-single'>
                        <p><label className='expert-form-label' htmlFor='firstName'>Förnamn</label></p>
                        <input 
                        className='expert-input'
                        id="firstName"
                        name="firstName"
                        value={addExpert.firstName}
                        onChange={handleChange}
                        height="1000px"
                        />
                    </div>

                    <div className='expert-form-single'>
                        <p><label className='expert-form-label' htmlFor='lastName'>Efternamn</label></p>
                        <input 
                        className='expert-input'
                        id="lastName"
                        name="lastName"
                        value={addExpert.lastName}
                        onChange={handleChange}
                        />
                    </div>
                </div>

                <div className='expert-form-row'>
                    <div className='expert-form-single'>
                        <p><label className='expert-form-label' htmlFor='email'>Epost</label></p>
                        <input 
                        className='expert-input'
                        id="email"
                        type="email"
                        name="email"
                        value={addExpert.email}
                        onChange={handleChange}
                        />
                    </div>

                    <div className='expert-form-single'>
                        <p><label className='expert-form-label' htmlFor='phone'>Telefon</label></p>
                        <input 
                        className='expert-input'
                        id="phone"
                        type="number"
                        name="phone"
                        value={addExpert.phone}
                        onChange={handleChange}
                        />
                    </div>
                </div>

                <div className='expert-form-single'>
                    <p><label className='expert-form-label' htmlFor='more'>Mer om dig</label></p>
                    <input 
                    className='expert-input'
                    id="more"
                    name="more"
                    value={addExpert.more}
                    onChange={handleChange}
                    size="55"
                    style={{padding:"60px 0"}}
                    />
                </div>
                <button className='expert-form-button'>Skicka</button>
            </form>

        </section>

    </div>
  )
}

export default Experts
