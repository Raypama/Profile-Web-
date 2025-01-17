// import React from 'react'
import { FaApple } from 'react-icons/fa6'
import Button from '../components/atoms/Button'
import MainLayout from '../components/templates/MainLayout'


function Home() {
    return (
        <MainLayout pageTitle='Home-dev'  >
            <div className="h-screen px-10 bg-[url('/src/assets/home-assets/mainBG.png')] bg-cover bg-center">
                        <img src="/src/assets/home-assets/lingkaranBesar.png" className=" absolute opacity-25 left-0 z-50 h-4/5 " />
                <div className='grid  text-white grid-cols-2  h-full justify-center'>
                    <div className='flex flex-col justify-center gap-2 z-50 '>
                        <h2 className='font-semibold text-2xl'>Hello im, Rey</h2>
                        <h1 className='font-bold text-4xl mb-2 '>FrontEnd and Backend / Fullstack.jr</h1>
                        <p className='text-xl pb-6 '>Freelancer FullStack in the world,  Lets work and <br /> eazy going code...</p>
                        <div>
                        <Button  textButton1='Hire Me' textButton2='Get Cv'/>
                        </div>

                    </div>
                    <div className='relative flex flex-col justify-center'>
                        <img src="/src/assets/home-assets/lingkaran kecil.png" className="w-1/3 -right-10 opacity-25  z-0 absolute" />
                        <img src="/src/assets/home-assets/hero-img.png" className="w-full z-10" />
                        <div className='absolute z-30 left-64 bottom-72'>
                        <FaApple size={60}/>
                        </div>
                    </div>

                </div>
            </div>
        </MainLayout>
    )
}

export default Home