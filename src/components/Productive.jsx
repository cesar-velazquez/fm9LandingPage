import React from 'react'
import { IconArrow } from '../Icons/Icons'

const Productive = () => {
    return (
        <section className='sm:flex items-center gap-2 '>
            <div className='p-4 pt-16 pb-8 flex justify-center' >
                <img src="/images/stay-productive.png" alt="Ilustración 2" />
            </div>
            <section className='text-white px-4 text-center '>
                <h1 className='p-3 font-bold font-Raleway
                sm:text-[2rem] sm:w-[300px] sm: '>Stay productive, wherever you are</h1>
                <p className='text-xs text-left px-4 leading-4 font-Open
                sm:text-[1rem] sm:w-[560px]   '>
                    Never let location be an issue when accessing your files. Fylo has you covered for all of your file
                    storage needs.
                    <br /> <br />
                    Securely share files and folders with friends, family and colleagues for live collaboration. No email
                    attachments required.
                </p>

                <div className=' '>
                    <a className='flex justify-start text-xs text-cyan-500 p-4
                    underline underline-offset-4 
                    sm:text-[1rem] ' href="#">See how Fylo works  <span className=' px-1 border-b border-cyan-500 pb-[1px] ' > <IconArrow /> </span> </a>
                </div>
            </section>
        </section>
    )
}

export default Productive