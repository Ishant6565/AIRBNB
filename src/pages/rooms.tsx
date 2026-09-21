import Head from 'next/head';
import { useRouter } from 'next/router'
import React from 'react'
import { PropertiesType } from '../types/Categories.type';
import { InferGetStaticPropsType } from 'next';
import Header from '../components/Header';
import { StarIcon } from '@heroicons/react/solid';
const airCover = '/assets/cover.png'
import {ListImage} from '../../styles/styles'
import Footer from '../components/Footer';
import { propertiesData } from './api/Properties'

const FALLBACK_IMAGE = '/assets/banner-airbnb.png';
const INR_RATE = 14.5;

const getImageUrl = (images: { url?: string }[] = [], index = 0) => {
  const url = images[index]?.url;
  return url && url.trim() ? url : FALLBACK_IMAGE;
};

const formatInr = (value: number) => new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  maximumFractionDigits: 0,
}).format(value * INR_RATE);

export default function Rooms({searchResults}: InferGetStaticPropsType<typeof getStaticProps>) {
    const router = useRouter()
    const { name, id } = router.query;
    
  return (
    <div>
        <Header />
        {searchResults.map((result: PropertiesType) => (
        <>
        <Head>
            <title>{name}</title>

            <meta name='description' content={result.name} />
            <meta property='og:title' content={result.name} />
            <meta property='og:description' content={result.description} />
            <meta property='og:type' content='website' />
            <meta property="og:image" content={result.images[0].url} />
        </Head>
                <div className=''>
                        {result.id.toString() === id ? (
                            <div className="places flex flex-col w-321px h-400px md:p-5 flex justify-center">
                                    {/* images no mobile */}
                                    <div className="cursor-pointer md:p-5 flex justify-center md:hidden">
                                        <img
                                          className='w-full max-w-[500px] h-[305px] object-cover'
                                          src={getImageUrl(result.images, 0)}
                                          alt={result.name}
                                          onError={(event) => {
                                            const target = event.currentTarget as HTMLImageElement;
                                            if (target.src !== window.location.origin + FALLBACK_IMAGE) {
                                              target.src = FALLBACK_IMAGE;
                                            }
                                          }}
                                        />
                                        <div className="counter absolute right-5 top-350 bg-zinc-600 opacity-50 rounded-md sm:hidden">
                                        <p className='text-white pl-3 pr-3 opacity-100'>1 / {result.images.length}</p>
                                        </div>
                                    </div>
                                    {/* images no web */}
                                    <div className="cursor-pointer flex-col w-full md:p-5 justify-center hidden md:flex gap-2 items-center">
                                          <div className="flex flex-col w-3/4 justify-left">
                                                <h1 className='text-2xl font-medium'>
                                                    {result.name}
                                                </h1>
                                                <div className="rating flex items-center">
                                                {result.rating ? 
                                                <>
                                                <StarIcon className='h-4 text-black pl-1 pr-1' />
                                                <p>{result?.rating}</p>
                                                </>
                                                    : <>
                                                        <p className=''>No reviews</p>
                                                    </>}
                                                </div>

                                                <p className='underline pb-5'>{result.localization}</p>
                                        </div>
                                        <ListImage id='room-image' className="flex ">
                                        {result.images.map((e, index) => (
                                             <img
                                               key={`${result.id}-${index}`}
                                               className={' image'+ e.id?.toString()} 
                                               src={getImageUrl(result.images, index)}
                                               alt={result.name}
                                               onError={(event) => {
                                                 const target = event.currentTarget as HTMLImageElement;
                                                 if (target.src !== window.location.origin + FALLBACK_IMAGE) {
                                                   target.src = FALLBACK_IMAGE;
                                                 }
                                               }}
                                             />
                                             ))}
                                        </ListImage>
                                    </div>


                                    <main className='p-5 md:grid grid-cols-3 gap-20'>
                                        <div className="title border-b-2 border-black-800 md:hidden ">
                                        <h1 className='text-2xl font-medium'>
                                            {result.name}
                                        </h1>
                                        <div className="rating flex items-center">
                                        {result.rating ? 
                                        <>
                                        <StarIcon className='h-4 text-black pl-1 pr-1' />
                                        <p>{result?.rating}</p>
                                        </>
                                            : <>
                                                <p className=''>No reviews</p>
                                            </>}
                                        </div>

                                        <p className='underline pb-5'>{result.localization}</p>
                                        </div>
                                        <div className="content col-span-2">
                                        <div className="host pt-5 pb-5 border-b-2 border-black-800">
                                            <img src={airCover} width={123} height={26} alt="AirCover" />
                                            <p>All reservations include free protection against host cancellations, inaccurate listing information, check-in issues, and more.</p>
                                            <h5 className='underline'>Learn more</h5>
                                        </div>
                                        <div className="">
                                        <p  className='pb-5 pt-5'>{result.description}</p>
                                        </div>
                                        </div>
                                        {/* Buy on desktop */}
                                                <div className="buy h-350 sticky top-40 hidden md:flex flex-col drop-shadow-lg flex justify-between  border-2 border-black-800 rounded-md ">
                                                    <div className="head w-full flex justify-between items-center p-4">
                                                        <h5>{formatInr(result.price)}
                                                        / night
                                                        </h5>
                                                        <div className="rating flex items-center">
                                                            {result.rating ? 
                                                                <>
                                                                <StarIcon className='h-4 text-black pl-1 pr-1' />
                                                                <p>{result?.rating}</p>
                                                                </>
                                                            : <>
                                                                <p className=''>No reviews</p>
                                                            </>}
                                                        </div>
                                                       </div>

                                                        <div className="p-5 flex flex-col justify-center items-center">
                                                        <button className='w-full'>
                                                        <h5 className='w-full flex items-center justify-center py-3 border 
                                                        border-transparent text-base font-xl rounded-md text-white bg-gradient-to-r from-red-500 to-red-600 alo hover:bg-red-500 md:py-4 md:text-lg md:px-10 active:scale-90 transition duration-150'> 
                                                        Book 
                                                        </h5>
                                                        </button>
                                                        <p className='pt-5'>You won’t be charged yet</p>
                                                        </div>

                                                        <div className="checkout p-5 flex flex-col gap-3">
                                                            <div className="5 flex justify-between">
                                                          <p className='underline'> {result.price} x 5 nights </p>
                                                          <p>{formatInr(result.price * 5)}</p>
                                                          </div>
                                                                <div className="clean flex justify-between">
                                                            <p>Cleaning fee</p>                                                            
                                                            <p>{formatInr(136)}</p>
                                                            </div>
                                                                <div className="service flex justify-between pb-3 border-b-2 border-black-800">
                                                            <p>Service fee</p>
                                                            <p>{formatInr(0)}</p>
                                                            </div>
                                                            <div className="taxes flex justify-between">
                                                            <h1>Total before taxes</h1>
                                                            <h1>{formatInr((result.price * 5) + 136)}</h1>
                                                            </div>
                                                        </div>
                                                </div>
                                    </main>
                                        {/* price on mobile */}
                                        <div className="flex h-300 drop-shadow-lg bg-white sticky bottom-0 items-center justify-between border-t-2 border-black-800
                                        md:hidden">
                                        <div className="price flex items-center">
                                        <h5 className='pl-5 '>
                                        {formatInr(result.price)}
                                            </h5> / night
                                        </div>
                                        <button className='p-5'>
                                        <h5 className='w-full p-5 flex items-center justify-center py-3 border 
                                        border-transparent text-base font-xl rounded-md text-white bg-red-600 hover:bg-red-500 md:py-4 md:text-lg md:px-10 active:scale-90 transition duration-150'> 
                                        Book 
                                        </h5>
                                        </button>

                                        </div>
                            </div>
                        )
                            : ''}
                    </div>
        </>
       )
       )}
       <Footer/>
    </div>
  )
}

export const getStaticProps = async () => {
    return {
        props: {
            searchResults: propertiesData,
        },
    };
  }
  
  