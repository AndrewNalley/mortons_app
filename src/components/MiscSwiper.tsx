
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { miscArray } from '../assets/PhotoDump';

export default function MiscSwiper() {

    const photo = miscArray[0]
    const photo1 = miscArray[1]
    const photo2 = miscArray[2]
    const photo3 = miscArray[3]
    const photo4 = miscArray[4]
    const photo5 = miscArray[5]
    const photo6 = miscArray[6]
    const photo7 = miscArray[7]
    const photo8 = miscArray[8]
    const photo9 = miscArray[9]
    const photo10 = miscArray[10]
    const photo11 = miscArray[11]

    return (
        <section>
            <h4 className='page-header'>Miscellaneous Items</h4>
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

            </Swiper>
        </section>
    );
};