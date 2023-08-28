import React, {useEffect} from 'react'
import {HiLocationMarker} from 'react-icons/hi'
import bora from '../../Assets/bora.jpeg'
import peru from '../../Assets/peru.jpeg'
import reef from '../../Assets/reef.jpeg'
import turkey from '../../Assets/turkey.jpeg'
import mexico from '../../Assets/mexico.jpeg'
import playa from '../../Assets/playa.jpeg'
import aspen from '../../Assets/aspen.jpeg'
import newyork from '../../Assets/newyork.jpeg'
import norway from '../../Assets/norway.jpeg'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [


  
    {
        id: 1,
        imgSrc: bora,
        destTitle: 'Bora Bora',
        location: 'New Zealand',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous activities.'
        
    },
    { 
        id: 2,
        imgSrc: peru,
        destTitle: 'Machu Picchu',
        location: 'Peru',
        grade: 'CULTURAL RELAX',
        fees: '$600',
        description: 'It is perched above the Urubamba River valley in a narrow saddle between two sharp peaks—Machu Picchu (“Old Peak”) and Huayna Picchu (“New Peak”)—at an elevation of 7,710 feet (2,350 metres). One of the few major pre-Columbian ruins found nearly intact, Machu Picchu was designated a UNESCO World Heritage site in 1983.'
        },
        {
            id: 3,
            imgSrc: reef,
            destTitle: 'Great Barrier Reef',
            location: 'Australia',
            grade: 'CULTURAL RELAX',
            fees: '$700',
            description: 'The Great Barrier Reef is unique as it extends over 14 degrees of latitude, from shallow estuarine areas to deep oceanic waters. Within this vast expanse is a unique range of ecological communities, habitats and species – all of which make the Reef one of the most complex natural ecosystems in the world.'
            
        },
        {
            id: 4,
            imgSrc: turkey,
            destTitle: 'Cappadocia',
            location: 'Turkey',
            grade: 'CULTURAL RELAX',
            fees: '$800',
            description: 'The landscape is a honeycomb of man made caves, places to live, work, and worship. Entire towns were formed by tunnel complexes. There are many popular attractions in Cappadocia such as fresco adorned churches chiselled out of rock, fairy chimneys, as well as the open air museum in Goreme.'
            
        },
        {
            id: 5,
            imgSrc: mexico,
            destTitle: 'Guanajuato',
            location: 'Mexico',
            grade: 'CULTURAL RELAX',
            fees: '$1100',
            description: 'Guanajuato, city, capital of Guanajuato estado (state), central Mexico. Situated on the Mesa Central, it is spread over steep hillsides at the junction of three ravines at an average elevation of about 6,725 feet (2,050 metres) above sea level. Guanajuato was founded in 1554 and given city status in 1741.'
            
        },
        {
            id: 6,
            imgSrc: playa,
            destTitle: 'Playa Del Carmen',
            location: 'Mexico',
            grade: 'CULTURAL RELAX',
            fees: '$1000',
            description: 'Playa del Carmen, located on the Riviera Maya, sits in the heart of the Mexican Caribbean and features an impressive 75 miles of stunning, sandy shoreline. Getting from Cancun to Playa del Carmen is easy since the Cancun International Airport lies just 45 minutes north.'
            
        },
        {
            id: 7,
            imgSrc: aspen,
            destTitle: 'Aspen',
            location: 'Colorado',
            grade: 'CULTURAL RELAX',
            fees: '$600',
            description: 'Aspen is a home rule municipality that is the county seat and the most populous municipality of Pitkin County, Colorado, United States.[5][6] The city population was 7,004 at the 2020 United States Census.[4] Aspen is in a remote area of the Rocky Mountains Sawatch Range and Elk Mountains, along the Roaring Fork River at an elevation just below 8,000 feet (2,400 m) above sea level on the Western Slope, 11 miles (18 km) west of the Continental Divide. Aspen is now a part of the Glenwood Springs, CO Micropolitan Statistical Area.'
            
        },
        {
            id: 8,
            imgSrc: newyork,
            destTitle: 'Ney York',
            location: 'New York',
            grade: 'CULTURAL RELAX',
            fees: '$800',
            description: 'New York is composed of five boroughs – Brooklyn, the Bronx, Manhattan, Queens and Staten Island - is home to 8.4 million people who speak more than 200 languages, hail from every corner of the globe, and, together, are the heart and soul of the most dynamic city in the world.'
            
        },
        {
            id: 9,
            imgSrc: norway,
            destTitle: 'Skibotn',
            location: 'Norway',
            grade: 'CULTURAL RELAX',
            fees: '$1200',
            description: 'Skibotn (Northern Sami: Ivgubahta, Kven: Yykeänperä) is a village in Storfjord Municipality in Troms og Finnmark county, Norway. It is located on the southeastern shore of the Lyngen fjord in Northern Norway. The village area is located at the crossroads of the European route E6 and European route E8 highways.'
            
        },
        

 ]

const Main = () => {

    useEffect(()=>{
        Aos.init({duration: 2000})
    }, [])
    return (
        <section className="main container section">
           <div className="secTitle">
            <h3 data-aos="fade-up"className="title">
                 Destinations
            </h3>
           </div>
            <div className="secContent grid">

    {
            Data.map(({id, imgSrc, destTitle, location, grade, fees, description})=>{
                return(

                <div key={id}
                data-aos="fade-up" className="singleDestination">


               
                <div className="imageDiv">
                    <img src={imgSrc} alt={destTitle} />
                </div>

                <div className="cardInfo">
                    <h4 className="destTitle">{destTitle}</h4>
                    <span className="content flex">
                         <HiLocationMarker className='icon' style={{color: "rgba(14, 47, 82, 0.904)"}}/>  
                            <span className="name">{location} </span>
                            </span>
                         <div className="fees flex">
                           <div className="grade">
                            <span>{grade}<small>+1</small></span>
                           </div>
                           <div className="price">
                            <h5>{fees}</h5>
                           </div>
                         </div>
                         <div className="desc">
                            <p>{description}</p>
                         </div>

                         <button className="btn flex" style={{color: "white", marginTop: "1rem"}}>
                            View Trip
                         </button>

                   
                </div>
                </div>
            )

            })
        }

            </div>

            </section>
    )
}
 



export default Main