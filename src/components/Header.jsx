import React from 'react'
import { IconLogo } from '../Icons/Icons'

const Header = () => {
    return (
        <section className='text-white font-Raleway flex 
        justify-between p-4 items-center sm:p-8 '>
            <section>
                <IconLogo/>
            </section>

            <section >
                <ul className='flex gap-2 text-xs sm:text-lg '>
                    <li>Features</li>
                    <li>Team</li>
                    <li>Sign In</li>
                </ul>
            </section>
        </section>
    )
}

export default Header