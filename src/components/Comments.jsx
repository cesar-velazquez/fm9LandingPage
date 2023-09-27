import React from 'react'

const Comments = () => {
    return (
        <section className='
        sm:max-w-[1200px] sm:m-auto  ' >
            <div className='pt-4 px-8  '>
                <img className='w-[20px]' src="/images/bg-quotes.png" alt="Quotes" />
            </div>
            <section className='grid gap-8 
            sm:flex sm:gap-0 sm:justify-center' >
                <article
                    className='text-white px-5 bg-DarkBlueTestimonials
                mx-4 rounded-md 
                sm:w-[350px] sm:h-auto sm:mb-4 sm:p-2 '>
                    <p className='py-6 p-2 text-[11px] text-left 
                    sm:text-sm sm:pt-4'>
                        Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has
                        become a well-oiled collaboration machine.
                    </p>

                    <div className='flex items-center gap-4'>
                        <div>
                            <img className='w-[50px] aspect-square rounded-full' src="/images/profile-1.jpg" alt="Profile 1" />
                        </div>
                        <div className='text-[11px] p-6 
                        sm:p-1 '>
                            <h4>Satish Patel</h4>
                            <span>Founder & CEO, Huddle</span>
                        </div>
                    </div>
                </article>

                <article
                    className='text-white px-5 bg-DarkBlueTestimonials
                mx-4 rounded-md 
                sm:w-[350px] sm:mb-4 sm:p-2 sm:h-auto '>
                    <p className='py-6 p-2 text-[11px] text-left 
                    sm:text-sm sm:pt-4'>
                        Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has
                        become a well-oiled collaboration machine.
                    </p>

                    <div className='flex items-center gap-4'>
                        <div>
                            <img className='w-[50px] aspect-square rounded-full' src="/images/profile-2.jpg" alt="Profile 1" />
                        </div>
                        <div className='text-[11px] p-6 
                        sm:p-1'>
                            <h4>Bruce McKenzie</h4>
                            <span>Founder & CEO, Huddle</span>
                        </div>
                    </div>
                </article>

                <article
                    className='text-white px-5 bg-DarkBlueTestimonials
                mx-4 rounded-md 
                sm:w-[350px] sm:mb-8 sm:p-2 sm:h-auto '>
                    <p className='py-6 p-2 text-[11px] text-left 
                    sm:text-sm sm:pt-4'>
                        Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has
                        become a well-oiled collaboration machine.
                    </p>

                    <div className='flex items-center gap-4'>
                        <div>
                            <img className='w-[50px] aspect-square rounded-full' src="/images/profile-3.jpg" alt="Profile 1" />
                        </div>
                        <div className='text-[11px] p-6
                        sm:p-1'>
                            <h4>Iva Boyd</h4>
                            <span>Founder & CEO, Huddle</span>
                        </div>
                    </div>
                </article>

            </section>
        </section>
    )
}

export default Comments