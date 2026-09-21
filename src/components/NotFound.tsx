import React from 'react'
const Banner = '/assets/banner-airbnb.png'

export default function NotFound() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px]
        xl:h-[600px] 2xl:h-[700px] font-sans">
            <img src={Banner} className="w-full h-full object-cover" alt="Airbnb banner" />

            <div className="absolute top-1/2 w-full text-center" >
                <p className="bannerText" > No places to rent, choose another category. </p>
            </div>
        </div>
  )
}
