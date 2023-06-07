import './Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import Dashboard from '../../img/dashboard.png'
import Tenzies from '../../img/Tenzies.png'
import animationPortfolio from '../../img/portfolio.png'
import counter from '../../img/counterVue.png'
import weatherForecast from '../../img/Screenshot from 2023-04-07 12-23-36.png'
import memeGenarator from '../../img/Screenshot from 2023-04-07 12-26-57.png'
import 'swiper/css'

function Portfolio(){
    return(
        <div className='portfolio' id='portfolio'>
            <span>Recent Projects</span>
            <span>Portfolio</span>
            <Swiper 
            spaceBetween={10} 
            slidesPerView={4} 
            grabCursor={true} 
            className='portfolio-slider'>
                <SwiperSlide>
                    <a href="https://responsive-react-dashboard.vercel.app/"> <img src={Dashboard} alt="" /></a>
               
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://meriles-tenzies-game.netlify.app/"> <img src={Tenzies} alt="" /></a>
                
                </SwiperSlide>{" "}
                <SwiperSlide>
                    <a href="https://my-portfolio-with-animation.netlify.app/"> <img src={animationPortfolio} alt="" /></a>
               
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://alt-school-counter-exam-vue.vercel.app/">   <img src={counter} alt="" /></a>
             
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://react-weather-blond-phi.vercel.app/">  <img src={weatherForecast} alt="" /></a>
              
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://gorgeous-choux-cd7b62.netlify.app/">  <img src={memeGenarator} alt="" /></a>
               
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Portfolio;