import React, { useEffect, useState } from 'react'
const Hero = '/assets/Airbnb_Logo.jpg'
import {
    SearchIcon,
    UserCircleIcon,
    GlobeAltIcon,
    MenuIcon,
    PlusSmIcon,
    MinusIcon,
    XIcon
    ,MoonIcon
    ,SunIcon
} from '@heroicons/react/solid'
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/router';

export default function Header() {
    // counters:
    const [adult, setAdult] = useState(0);
    const [children, setChildren] = useState(0);
    const [baby, setBaby] = useState(0);
    const [animal, setAnimals] = useState(0);


    const [searchInput, setSearchInput] = useState('');
    const [startDate, SetStartDate] = useState(new Date())
    const [endDate, SetEndDate] = useState(new Date())
    const [darkMode, setDarkMode] = useState(false)

    const router = useRouter()

    useEffect(() => {
        const savedTheme = window.localStorage.getItem('airbnb-theme')
        setDarkMode(savedTheme === 'dark')
    }, [])

    useEffect(() => {
        document.documentElement.classList.toggle('dark', darkMode)
        window.localStorage.setItem('airbnb-theme', darkMode ? 'dark' : 'light')
    }, [darkMode])

    function handleSelect  (ranges: { selection: { startDate: React.SetStateAction<Date>; endDate: React.SetStateAction<Date>; }; }) {
        SetStartDate(ranges.selection.startDate)
        SetEndDate(ranges.selection.endDate)
    }

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection'
    }
  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 dark:bg-black 
    // Media querry:
    md:px-10
    '>

        <div className="hero relative flex items-center h-10 cursor-pointer my-auto">
            <img onClick={() => {router.push('/')}} className="h-10 w-auto object-contain object-left" src={Hero} alt="Airbnb logo" />
        </div>

        <div className="search flex items-center sm:border-2 rounded-full py-2 md:shadow-sm">
            <input 
                className='flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600' 
                type="text" 
                placeholder='Search your stay' 
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                />
             <XIcon onClick={()=> {
                setSearchInput('')
             }} className='hidden h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer
            md:inline-flex md:mx-2'
            aria-label='Clear'
            />   
            <SearchIcon className='hidden h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer
            md:inline-flex md:mx-2'
            aria-label='Search'
            />
        </div>

        <div className="config flex items-center space-x-2 justify-end text-gray-500">
            <button
                type="button"
                onClick={() => setDarkMode((enabled) => !enabled)}
                className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-gray-200 transition hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700"
                aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                title={darkMode ? 'Light mode' : 'Dark mode'}
            >
                {darkMode ? <SunIcon className="h-5 w-5 text-yellow-300" /> : <MoonIcon className="h-5 w-5" />}
            </button>
            <p className='hidden md:inline cursor-pointer'>
                Become a host
            </p>
            <GlobeAltIcon className='h-6 cursor-pointer hidden sm:visible'/>
            <div className="user flex items-center space-x-2 border-2 p-2 rounded-full cursor-pointer">
                <MenuIcon className='h-6'/>
                <UserCircleIcon className='h-6'/>
            </div>
        </div>

        {searchInput && (
            <>

            <div 
            className="flex items-center col-span-3 mx-auto mt-10 md:flex-row border-solid border h-1/2 border-gray-400 rounded-full p-3 text-sm hover:bg-slate-200">
                <div className="where ml-5 pr-5 border-r border-gray-400">
                    <p>Where</p>
                    <p>{searchInput} </p>
                </div>

                <div className="check-in ml-5 pr-5 border-r border-gray-400">
                   <p>Check-in</p> 
                   <p>{startDate.getDate()} of {startDate.getMonth() + 1}</p>
                </div>

                <div className="checkout ml-5 pr-5 border-r border-gray-400">
                   <p>Check-out</p> 
                   <p>{endDate.getDate()} of {endDate.getMonth() + 1}</p>
                </div>
                <div className="checkout ml-5 pr-5">
                   <p>Guests</p> 
                   <p>{adult+children+baby} guests</p>
                 
                </div>
            </div>


            <div className="flex items-center col-span-3 mx-auto mt-10 gap-10  md:flex-row">
                <div id='calendar' className="border-2 rounded-lg xl:p-5 lg:p-0 mx-auto mt-2">
                    <DateRangePicker
                    ranges={[selectionRange]}
                    minDate={new Date()}
                    rangeColors={['#FD5B61']}
                    // @ts-ignore
                    onChange={handleSelect}
                    className=''
                    />
                    <div className='mt-3 sm:mt-0 flex lg:hidden'>
                        <a onClick={() => {
                            document.getElementById('guests')!.className  = 'display';
                            document.getElementById('calendar')!.className  = 'hidden';
                        }} className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-500 hover:bg-red-600 md:py-4 md:text-lg md:px-10'>
                            Select guests
                        </a>
                    </div>
                </div>
                <div id='guests' className="guests border-2 rounded-md xl:p-5 gap-5 hidden lg:inline">
                    
                <div className="grid grid-cols-2 p-3">
                        <div className="animals">
                            <h1>Adults</h1>
                            <p>13 years and above</p>
                        </div>
                    <div className="flex justify-end  gap-2">
                            <MinusIcon onClick={() => {
                                if (adult === 0) return
                                setAdult(adult - 1)
                            }}  
                            className='h-6 w-6 border-2 rounded-xl cursor-pointer' />
                            <p>{adult}</p>
                            <PlusSmIcon onClick={() => {
                                setAdult(adult + 1)
                            }} 
                            className='h-6 w-6 border-2 rounded-xl cursor-pointer'/>
                    </div>
                    </div>
                

                    <div className="grid grid-cols-2 p-3 select-none">
                        <div className="animals">
                            <h1>Children</h1>
                            <p>Age 2-12</p>
                        </div>
                    <div className="flex justify-end  gap-2">
                            <MinusIcon onClick={() => {
                                if (children === 0) return
                                setChildren(children - 1)
                            }}  
                            className='h-6 w-6 border-2 rounded-xl cursor-pointer' />
                            <p>{children}</p>
                            <PlusSmIcon onClick={() => {
                                setChildren(children + 1)
                            }} 
                            className='h-6 w-6 border-2 rounded-xl cursor-pointer'/>
                    </div>
                    </div>
                

                    <div className="grid grid-cols-2 p-3">
                        <div className="animals">
                            <h1>Babies</h1>
                            <p>Under 2 years</p>
                        </div>
                    <div className="flex justify-end  gap-2">
                            <MinusIcon 
                            onClick={() => {
                                if (baby === 0) return
                                setBaby(baby - 1)
                            }}  
                            className='h-6 w-6 border-2 rounded-xl cursor-pointer' />
                            <p>{baby}</p>
                            <PlusSmIcon onClick={() => {
                                setBaby(baby + 1)
                            }} 
                            className='h-6 w-6 border-2 rounded-xl cursor-pointer'/>
                    </div>
                    </div>

                    <div className="grid grid-cols-2 p-3">
                        <div className="animals">
                            <h1>Pets</h1>
                            <p>Are you bringing a service animal?</p>
                        </div>
                    <div className="flex justify-end gap-2">
                    <MinusIcon
                            onClick={() => {
                                if (animal === 0) return
                                setAnimals(animal - 1)
                            }}
                            className='h-6 w-6 border-2 rounded-xl cursor-pointer' />
                            <p>{animal}</p>
                            <PlusSmIcon
                            onClick={() => {
                                setAnimals(animal + 1)
                            }} 
                            className='h-6 w-6 border-2 rounded-xl cursor-pointer '/>
                        
                    </div>
                    </div>

                    <div className='mt-3 sm:mt-0 sm:ml-3'>
                    <a onClick={() => {
                        router.push({
                            pathname: '/search',
                            query: {
                                location: searchInput,
                                startDate: startDate.toISOString(),
                                endDate: endDate.toISOString(),
                                guests: adult + children + baby + animal
                            }
                        })
                        setSearchInput('')
                    }} 
                    className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-500 hover:bg-red-600 md:py-4 md:text-lg md:px-10'> Buscar </a>
                    </div>
                </div>
            </div>
            </>
        )
        }

    </header>
  )
}
