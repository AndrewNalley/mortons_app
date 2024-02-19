
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { popularArray } from '../assets/PhotoDump';

export default function PopularSwiper() {

    const photo = popularArray[0]
    const photo1 = popularArray[1]
    const photo2 = popularArray[2]
    const photo3 = popularArray[3]
    const photo4 = popularArray[4]
    const photo5 = popularArray[5]
    const photo6 = popularArray[6]
    const photo7 = popularArray[7]
    const photo8 = popularArray[8]
    const photo9 = popularArray[9]
    const photo10 = popularArray[10]
    const photo11 = popularArray[11]
    const photo12 = popularArray[12]
    const photo13 = popularArray[13]

    return (
        <section>
            <h4 className='page-header'>Popular Items</h4>
            <Swiper
                spaceBetween={30}
                pagination={{
                    type: 'progressbar',
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"

            >
                <SwiperSlide><img src={photo.src} alt={photo.title} title={photo.title} />{photo.title}</SwiperSlide>
                <SwiperSlide><img src={photo1.src} alt={photo1.title} title={photo1.title} />{photo1.title}</SwiperSlide>
                <SwiperSlide><img src={photo2.src} alt={photo2.title} title={photo2.title} />{photo2.title}</SwiperSlide>
                <SwiperSlide><img src={photo3.src} alt={photo3.title} title={photo3.title} />{photo3.title}</SwiperSlide>
                <SwiperSlide><img src={photo4.src} alt={photo4.title} title={photo4.title} />{photo4.title}</SwiperSlide>
                <SwiperSlide><img src={photo5.src} alt={photo5.title} title={photo5.title} />{photo5.title}</SwiperSlide>
                <SwiperSlide><img src={photo6.src} alt={photo6.title} title={photo6.title} />{photo6.title}</SwiperSlide>
                <SwiperSlide><img src={photo7.src} alt={photo7.title} title={photo7.title} />{photo7.title}</SwiperSlide>
                <SwiperSlide><img src={photo8.src} alt={photo8.title} title={photo8.title} />{photo8.title}</SwiperSlide>
                <SwiperSlide><img src={photo9.src} alt={photo9.title} title={photo9.title} />{photo9.title}</SwiperSlide>
                <SwiperSlide><img src={photo10.src} alt={photo10.title} title={photo10.title} />{photo10.title}</SwiperSlide>
                <SwiperSlide><img src={photo11.src} alt={photo11.title} title={photo11.title} />{photo11.title}</SwiperSlide>
                <SwiperSlide><img src={photo12.src} alt={photo12.title} title={photo12.title} />{photo12.title}</SwiperSlide>
                <SwiperSlide><img src={photo13.src} alt={photo13.title} title={photo13.title} />{photo13.title}</SwiperSlide>

            </Swiper>
        </section>
    );
};