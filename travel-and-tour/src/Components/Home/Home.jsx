import React, {useEffect} from 'react'
import video from '../../Assets/video.mp4'
import { FaLocationArrow } from 'react-icons/fa'
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineSearch } from 'react-icons/ai'
import { SiTripadvisor } from 'react-icons/si'
import { BsListTask } from 'react-icons/bs'
import { TbApps } from 'react-icons/tb'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Home = () => {

    useEffect(()=>{
        Aos.init({duration: 2000})
    }, [])
    return (
      <section className='home'>
        <div className="overlay"></div>
        <video src={video} muted autoPlay loop type="video/mp4"></video>

        <div className="homeContent container">
            <div className="textDiv">
                <span data-aos="fade-up" className="smallText">
                    Our Packages
                </span>
                <h1 data-aos="fade-up" className="homeTitle">
                    Find your Vacation 
                </h1>
            </div>
            <div data-aos="fade-up" className="cardDiv grid">
             <div className="destinationInput">
                <label htmlFor="city"> Search your destination:</label>
                <div className="input flex">
                    <input type="text" placeholder='Search...'  style={{color: "rgba(14, 47, 82, 0.904)", fontSize: "15px", cursor: "pointer" }}/>
                    <FaLocationArrow className="iconcard" style={{color: "rgba(14, 47, 82, 0.904)", fontSize: "20px", cursor: "pointer" }}/>
                </div>
             </div>
             <div className="dateInput">
                <label htmlFor="city"> Select your date:</label>
                <div className="input flex">
                    <input type="date"  style={{color: "rgba(14, 47, 82, 0.904)", fontSize: "15px", cursor: "pointer" }} />
                </div>
             </div>
             <div className="priceInput">
                <div className="label_total flex">
                <label htmlFor="price">  Max price:</label>
                <h3 className="total">$5000</h3>
             </div>
             <div className="input flex">
                 <input type="range" max="5000" min="1000"  style={{color: "rgba(14, 47, 82, 0.904)", fontSize: "20px", cursor: "pointer" }} />
             </div>
             
             <div className="searchOptions flex">
              <AiOutlineSearch className="iconcard"/>
              <span>SEARCH</span>
             </div>

        
             </div>
            </div>
            <div data-aos="fade-up" className="homeFooterIcons flex">
                <div className="rightIcons">
                  <AiOutlineFacebook className="icon"/>
                  <AiOutlineInstagram className="icon"/>
                  <SiTripadvisor className="icon"/>
                </div>

                <div className="leftIcons">
                    <BsListTask className="icon"/>
                    <TbApps className="icon"/>


                </div>

            </div>
        </div>
      </section>
    )
}

export default Home 