import './Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import Dashboard from '../../img/dashboard.png'
import Afroverse from '../../img/afroverse.png'
import Dashify from '../../img/dashify.png'
import Tenzies from '../../img/Tenzies.png'
import templete from '../../img/templete.png'
import carefinder from '../../img/templete.png'
import fistregisters from '../../img/firstregistars.png'
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
                    <a href="https://orah-ui-marketplace.vercel.app/"> <img src={templete} alt="" /></a>
               
                </SwiperSlide>
                   <SwiperSlide>
                    <a href="https://website-verse.netlify.app/"> <img src={Afroverse} alt="" /></a>
               
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://dashify-template.vercel.app/"> <img src={Dashify} alt="" /></a>
               
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://carefinder-project.vercel.app/"> <img src={carefinder} alt="" /></a>
               
                </SwiperSlide>
                <SwiperSlide>
                    <a href=" https://admin.firstregistrarsapi.com/"> <img src={fistregisters} alt="" /></a>
               
                </SwiperSlide>
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