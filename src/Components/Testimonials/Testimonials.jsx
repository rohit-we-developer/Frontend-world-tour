import React from 'react'
import Slider from 'react-slick'
import ava01 from "../../assets/images/ava-1.jpg"
import ava02 from "../../assets/images/ava-2.jpg"
import ava03 from "../../assets/images/ava-3.jpg"

const Testimonials = () => {

    const settings = {
        dots:true,
        infinite:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow:3,

        responsive:[
            {
                breakpoint: 992,
                settings:{
                    slidesToShow:2,
                    slideToScroll:1,
                    dots:true,
                    infinite:true,
                },
            },
            {
                breakpoint:576,
                settings: {
                    slidesToShow:1,
                    slideToScroll:2,
                },
            }
        ]
    }

  return (
    <Slider {...settings}>
        <div className="testimonials py-4 px-3">
            <p>"I recently booked a 7-day trip to Bali with [travel-world], and it was an amazing experience from start to finish The booking process was super smooth,
                and their team was very responsive on WhatsApp. ⭐⭐⭐⭐⭐!"
            </p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava01} className="w-25 h-25 rounded-2" alt="" />
                <div>
                    <h6 className="mb-0 mt-3">John Doe</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        <div className="testimonials py-4 px-3">
            <p> this is the amazing trip or Our itinerary was well-planned, with a perfect mix of adventure and relaxation. The hotels they chose were top-notch,
            and the local guides were knowledgeable and friendly ⭐⭐⭐⭐⭐
            </p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
                <div>
                    <h6 className="mb-0 mt-3">Lia Frank</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        <div className="testimonials py-4 px-3">
            <p>I recently booked a 7-day trip to Bali with [travel-world], and it was an amazing experience from start to finish The booking process was super smooth,
            and their team was very responsive on WhatsApp. ⭐⭐⭐⭐⭐!"
            </p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
                <div>
                    <h6 className="mb-0 mt-3">Stefan Hawking</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        <div className="testimonials py-4 px-3">
            <p>I recently booked a 7-day trip to Bali with [travel-world], and it was an amazing experience from start to finish The booking process was super smooth,
            and their team was very responsive on WhatsApp. ⭐⭐⭐⭐⭐!"
            </p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
                <div>
                    <h6 className="mb-0 mt-3">Stefan Hawking</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        <div className="testimonials py-4 px-3">
            <p>this is the amazing trip or Our itinerary was well-planned, with a perfect mix of adventure and relaxation. The hotels they chose were top-notch,
            and the local guides were knowledgeable and friendly⭐⭐⭐⭐⭐
            </p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
                <div>
                    <h6 className="mb-0 mt-3">Stefan Hawking</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
    </Slider>
  )
}

export default Testimonials