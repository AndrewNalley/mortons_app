
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { coasterArray } from '../assets/PhotoDump';

export default function CoasterSwiper() {

    const photo = coasterArray[0]
    const photo1 = coasterArray[1]
    const photo2 = coasterArray[2]
    const photo3 = coasterArray[3]
    const photo4 = coasterArray[4]
    const photo5 = coasterArray[5]
    const photo6 = coasterArray[6]
    const photo7 = coasterArray[7]
    const photo8 = coasterArray[8]
    const photo9 = coasterArray[9]
    const photo10 = coasterArray[10]
    const photo11 = coasterArray[11]
    const photo12 = coasterArray[12]
    const photo13 = coasterArray[13]
    const photo14 = coasterArray[14]
    const photo15 = coasterArray[15]
    const photo16 = coasterArray[16]
    const photo17 = coasterArray[17]
    const photo18 = coasterArray[18]
    const photo19 = coasterArray[19]
    const photo20 = coasterArray[20]
    const photo21 = coasterArray[21]
    const photo22 = coasterArray[22]
    const photo23 = coasterArray[23]
    const photo24 = coasterArray[24]
    const photo25 = coasterArray[25]
    const photo26 = coasterArray[26]
    const photo27 = coasterArray[27]
    const photo28 = coasterArray[28]
    const photo29 = coasterArray[29]

    return (
        <section>
            <h4 className='page-header'>Coasters</h4>
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
                <SwiperSlide><img src={photo14.src} alt={photo14.title} title={photo14.title} />{photo14.title}</SwiperSlide>
                <SwiperSlide><img src={photo15.src} alt={photo15.title} title={photo15.title} />{photo15.title}</SwiperSlide>
                <SwiperSlide><img src={photo16.src} alt={photo16.title} title={photo16.title} />{photo16.title}</SwiperSlide>
                <SwiperSlide><img src={photo17.src} alt={photo17.title} title={photo17.title} />{photo17.title}</SwiperSlide>
                <SwiperSlide><img src={photo18.src} alt={photo18.title} title={photo18.title} />{photo18.title}</SwiperSlide>
                <SwiperSlide><img src={photo19.src} alt={photo19.title} title={photo19.title} />{photo19.title}</SwiperSlide>
                <SwiperSlide><img src={photo20.src} alt={photo20.title} title={photo20.title} />{photo20.title}</SwiperSlide>
                <SwiperSlide><img src={photo21.src} alt={photo21.title} title={photo21.title} />{photo21.title}</SwiperSlide>
                <SwiperSlide><img src={photo22.src} alt={photo22.title} title={photo22.title} />{photo22.title}</SwiperSlide>
                <SwiperSlide><img src={photo23.src} alt={photo23.title} title={photo23.title} />{photo23.title}</SwiperSlide>
                <SwiperSlide><img src={photo24.src} alt={photo24.title} title={photo24.title} />{photo24.title}</SwiperSlide>
                <SwiperSlide><img src={photo25.src} alt={photo25.title} title={photo25.title} />{photo25.title}</SwiperSlide>
                <SwiperSlide><img src={photo26.src} alt={photo26.title} title={photo26.title} />{photo26.title}</SwiperSlide>
                <SwiperSlide><img src={photo27.src} alt={photo27.title} title={photo27.title} />{photo27.title}</SwiperSlide>
                <SwiperSlide><img src={photo28.src} alt={photo28.title} title={photo28.title} />{photo28.title}</SwiperSlide>
                <SwiperSlide><img src={photo29.src} alt={photo29.title} title={photo29.title} />{photo29.title}</SwiperSlide>

            </Swiper>
        </section>
    );
};