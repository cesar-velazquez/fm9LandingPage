import React from 'react'
import { IconLogo } from '../Icons/Icons'

const Contact = () => {
    return (
        <section className='mt-8 pb-8 font-Open h-[135px] relative '>
            <div className='absolute bg-DarkBlueIntroandEmail mx-4 
            rounded-xl p-4 text-white left-1/2 transform -translate-x-1/2'>
                <h1 className='font-bold text-center'>Get early access today</h1>
                <p className='p-4 text-[.7rem] text-center 
                '>
                    It only takes a minute to sign up and our free starter tier is extremely generous. If you have any
                    questions, our support team would be happy to help you.
                </p>
                <form action=""
                className='sm:flex'>
                    <input
                        type="email"
                        className='flex m-auto py-2 px-4 rounded-3xl
                        '
                        placeholder='email@example.com' />
                    <button className='flex justify-center m-auto py-2 px-4 rounded-3xl font-bold 
                    bg-cyan-500 my-4 w-[90%]'>Get Started For Free</button>
                </form>
            </div>
        </section>
    )
}

export default Contact