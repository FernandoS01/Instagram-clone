import { ReactNode } from 'react'
import { Swiper, SwiperProps } from 'swiper/react' 

interface SliderProps {
    settings: SwiperProps;
    children: ReactNode;
}

export default function Slider({settings, children}:SliderProps){
    return (
        <Swiper {...settings}>
            {children}
        </Swiper>
    )
}