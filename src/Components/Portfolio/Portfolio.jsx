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
        <div className='portfolio' id='Portfolio'>
            <span>Recent Projects</span>
            <span>Portfolio</span>
            <Swiper 
            spaceBetween={10} 
            slidesPerView={4} 
            grabCursor={true} 
            className='portfolio-slider'>
                <SwiperSlide>
                <img src={Dashboard} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                <img src={Tenzies} alt="" />
                </SwiperSlide>{" "}
                <SwiperSlide>
                <img src={animationPortfolio} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                <img src={counter} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                <img src={weatherForecast} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                <img src={memeGenarator} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Portfolio;