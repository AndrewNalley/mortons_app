
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { trayArray } from '../assets/PhotoDump';

export default function TraySwiper() {

  const photo = trayArray[0]
  const photo1 = trayArray[1]
  const photo2 = trayArray[2]
  const photo3 = trayArray[3]
  const photo4 = trayArray[4]
  const photo5 = trayArray[5]
  const photo6 = trayArray[6]
  const photo7 = trayArray[7]
  const photo8 = trayArray[8]
  const photo9 = trayArray[9]
  const photo10 = trayArray[10]
  const photo11 = trayArray[11]
  const photo12 = trayArray[12]
  const photo13 = trayArray[13]
  const photo14 = trayArray[14]
  const photo15 = trayArray[15]
  const photo16 = trayArray[16]
  const photo17 = trayArray[17]
  const photo18 = trayArray[18]
  const photo19 = trayArray[19]
  const photo20 = trayArray[20]
  const photo21 = trayArray[21]

  return (
    <section>
      <h4 className='page-header'>Trays</h4>
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
      </Swiper>
    </section>
  );
};