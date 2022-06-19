import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-cards'
import { EffectCards } from 'swiper'
import Navigation from './navigation'

export default function SwiperSection () {

    const [mySwiper, setMySwiper] = useState(null)

    const [isBeginning, setIsBeginning] = useState(true)

    const [isEnd, setIsEnd] = useState(false)

    const onSlideChange = (swiper) => {
        setIsEnd(swiper.isEnd)
        setIsBeginning(swiper.isBeginning) 
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 pt-[3rem] pb-[1.5rem] gap-y-10">
            <div className="flex justify-center items-center">
                <Navigation mySwiper={mySwiper} isBeginning={isBeginning} isEnd={isEnd} />
            </div>

            <div className="md:mx-[4rem] overflow-hidden md:overflow-visible">
                <Swiper
                    onSwiper={swiper => setMySwiper(swiper)}
                    onSlideChange={onSlideChange}
                    effect={"cards"}
                    grabCursor={true}
                    Navigation
                    modules={[EffectCards, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide className="bg-white dark:bg-gray-800 rounded-lg">
                        <div className="px-10 py-24 select-none">
                            <h4 className="text-lg text-gray-400">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطر</h4>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="bg-white dark:bg-gray-800 rounded-lg">
                        <div className="px-10 py-24 select-none">
                            <h4 className="text-lg text-gray-400">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطر</h4>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="bg-white dark:bg-gray-800 rounded-lg">
                        <div className="px-10 py-24 select-none">
                            <h4 className="text-lg text-gray-400">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطر</h4>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}