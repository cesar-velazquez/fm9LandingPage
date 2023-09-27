import React from 'react'
import { IconEmail, IconLocation, IconLogo, IconPhone } from '../Icons/Icons'

const Footer = () => {
    return (
        <footer className='pt-40 bg-DarkBlueFooter text-white pb-5'>
            <section className='sm:flex sm:justify-center'>
                <section className='p-4 pt-6 sm:flex sm:items-center'>
                    <div className='px-6 grid gap-4'>
                        <div className='px-1'>
                            <IconLogo />
                        </div>
                        <div className='flex gap-4'>
                            <div className=''>
                                <IconLocation />
                            </div>
                            <p className='sm:w-[300px] '>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua
                            </p>
                        </div>
                    </div>

                    <div>
                        <div className='px-6 py-2 flex gap-4 '>
                            <div className=''>
                                <IconPhone />
                            </div>
                            <p className=' '>
                                +1-543-123-4567
                            </p>
                        </div>

                        <div className='px-6 py-2 flex items-center gap-4 '>
                            <div className=''>
                                <IconEmail />
                            </div>
                            <p className=' '>
                                example@fylo.com
                            </p>
                        </div>
                    </div>

                    <section className='grid gap-8 px-6 py-8 '>
                        <ul className='leading-7'>
                            <li>About Us</li>
                            <li>Jobs</li>
                            <li>Press</li>
                            <li>Blog</li>
                        </ul>
                    </section>

                    <section className='grid gap-8 px-6 py-8 '>
                        <ul className='leading-7'>
                            <li>Contact Us</li>
                            <li>Terms</li>
                            <li>Privacy</li>
                        </ul>
                    </section>

                    <section>
                        <ul className='flex justify-center gap-4'>
                            <li><i className='border rounded-full p-2  bx bxl-facebook-circle'></i></li>
                            <li><i className='border rounded-full p-2 bx bxl-google'></i></li>
                            <li><i className='border rounded-full p-2 bx bxl-instagram'></i></li>
                        </ul>
                    </section>
                </section>

                {/* <div className='sm:flex sm:m-auto '> */}
                {/* <section className='grid gap-8 px-6 py-8 '>
                    <ul className='leading-7'>
                        <li>About Us</li>
                        <li>Jobs</li>
                        <li>Press</li>
                        <li>Blog</li>
                    </ul>
                </section>

                <section className='grid gap-8 px-6 py-8 '>
                    <ul className='leading-7'>
                        <li>Contact Us</li>
                        <li>Terms</li>
                        <li>Privacy</li>
                    </ul>
                </section>

                <section>
                    <ul className='flex justify-center gap-4'>
                        <li><i className='border rounded-full p-2  bx bxl-facebook-circle'></i></li>
                        <li><i className='border rounded-full p-2 bx bxl-google'></i></li>
                        <li><i className='border rounded-full p-2 bx bxl-instagram'></i></li>
                    </ul>
                </section> */}
                {/* </div> */}
            </section>
        </footer>
    )
}

export default Footer