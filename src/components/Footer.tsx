import React from 'react'

export default function Footer() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 space-y-10 px-32 py-14 bg-gray-100 text-gray-600'>
        <div className="atendimento space-y-4 text-xs text-gray-800">
            <h5 className='font-extrabold '>Customer Service</h5>
            <p className='cursor-pointer'>Help Center</p>
            <p className='cursor-pointer'>Air Cover</p>
            <p className='cursor-pointer'>Safety information</p>
            <p className='cursor-pointer'>Support people with disabilities</p>
            <p className='cursor-pointer'>Cancellation options</p>
            <p className='cursor-pointer'>Our response to the COVID-19 pandemic</p>
            <p className='cursor-pointer'>Report a neighborhood problem</p>
        </div>

        <div className="comunidade space-y-4 text-xs text-gray-800">
            <h5 className='font-extrabold '>Community</h5>
            <p className='cursor-pointer'>Airbnb.org: disaster relief</p>
            <p className='cursor-pointer'>Support Afghan refugees</p>
            <p className='cursor-pointer'>Combating discrimination</p>

        </div>

        <div className="hospedagem space-y-4 text-xs text-gray-800">
            <h5 className='font-extrabold '>Hosting</h5>
            <p className="cursor-pointer">Try hosting</p>
            <p className="cursor-pointer">AirCover for hosts</p>
            <p className="cursor-pointer">Explore hosting resources</p>
            <p className="cursor-pointer">Visit the community forum</p>
            <p className="cursor-pointer">Host responsibly</p>

        </div>

        <div className="airbnb space-y-4 text-xs text-gray-800">
            <h5 className='font-bold'>Airbnb</h5>
            <p className="cursor-pointer">Newsroom</p>
            <p className="cursor-pointer">Discover new features</p>
            <p className="cursor-pointer">Letter from our founders</p>
            <p className="cursor-pointer">Careers</p>
            <p className="cursor-pointer">Investors</p>
        </div>
    </div>
  )
}
