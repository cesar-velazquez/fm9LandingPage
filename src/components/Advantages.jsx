import React from 'react'
import { IconColaboration, IconComputer, IconSecurity, IconStore } from '../Icons/Icons'

const Advantages = () => {
    return (
        <section className='font-Raleway 
        sm:grid sm:grid-cols-2 sm:pb-8'>
            <div>
                <div className='text-white grid justify-center mt-8 
                pt-8 p-4' >
                    <IconComputer />
                </div>
                <div className='text-white text-center'>
                    <h3 className='font-bold text-[17px] sm:text-[20px] ' >Access your files, anywhere</h3>
                    <p className='text-xs px-5 py-3
                    sm:w-[390px] sm:m-auto sm:text-[14px] '>
                        The ability to use a smartphone, tablet, or computer to access your account means your
                        files follow you everywhere.
                    </p>
                </div>
            </div>

            <div>
                <div className='text-white grid justify-center mt-8 pt-8 p-4  ' >
                    <IconSecurity />
                </div>
                <div className='text-white text-center'>
                    <h3 className='font-bold text-[17px] sm:text-[20px]' >Security you can trust</h3>
                    <p className='text-xs px-5 py-3 
                    sm:w-[390px] sm:m-auto sm:text-[14px]'>
                        2-factor authentication and user-controlled encryption are just a couple of the security
                        features we allow to help secure your files.
                    </p>
                </div>
            </div>

            <div>
                <div className='text-white grid justify-center mt-8 pt-8 p-4  ' >
                    <IconColaboration />
                </div>
                <div className='text-white text-center'>
                    <h3 className='font-bold text-[17px] sm:text-[20px]' >Real-time collaboration</h3>
                    <p className='text-xs px-5 py-3
                    sm:w-[390px] sm:m-auto sm:text-[14px]'>
                        Securely share files and folders with friends, family and colleagues for live collaboration.
                        No email attachments required.
                    </p>
                </div>
            </div>

            <div>
                <div className='text-white grid justify-center mt-8 pt-8 p-4  ' >
                    <IconStore />
                </div>
                <div className='text-white text-center'>
                    <h3 className='font-bold text-[17px] sm:text-[20px]' >Store any type of file</h3>
                    <p className='text-xs px-5 py-3
                    sm:w-[390px] sm:m-auto sm:text-[14px]'>
                        Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all
                        file types to be securely stored and shared.
                    </p>
                </div>
            </div>


        </section>
    )
}

export default Advantages