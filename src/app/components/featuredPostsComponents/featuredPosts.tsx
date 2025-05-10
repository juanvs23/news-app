'use client'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { categories } from '@/src/routes/categories';
import { RouteItem } from '@/src/types/routes';
import FeaturedPosItem from './featuredPosItem';


export default  function FeaturedPosts() {
     
    return(
        <section id="featured-posts" className="featured-posts section">
             <div className="container section-title" data-aos="fade-up">
                <h2>Lea las </h2>
                <div>
                    <span>noticias </span> 
                    <span className="description-title">Mas destacadas aquí</span>
                </div>
            </div>
            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <div className="blog-posts-slider">
                <Swiper
                    slidesPerView={3}
                    speed={800}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    loop={true}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    breakpoints={
                        {
                            "320": {
                              "slidesPerView": 1,
                              "spaceBetween": 20
                            },
                            "768": {
                              "slidesPerView": 2,
                              "spaceBetween": 20
                            },
                            "1200": {
                              "slidesPerView": 3,
                              "spaceBetween": 30
                            }
                          }
                    }
                >
                    {
                        categories.map((category:RouteItem)=>(
                            <SwiperSlide key={category.id}>
                                <FeaturedPosItem  category={category} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                </div>
            </div>
        </section>
    )
}