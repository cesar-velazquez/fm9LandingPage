import React from 'react'

const Body = () => {
    return (
        <section className='bg-DarkBlueMainBackGround '>
            <div className='p-4 flex justify-center sm:w-[500px] sm:m-auto ' >
                <img src="/images/illustration-intro.png" alt="Ilustración 1" />
            </div>
            <article>
                <h1 className='text-white text-center p-4 text-[1.5rem] font-Raleway
                sm:m-auto sm:w-[600px] sm:text-[1.7rem] sm:px-8 sm:py-1 sm:font-bold  '>
                    All your files in one secure location, accessible anywhere.
                </h1>
                <p className='text-white px-8 text-[.8rem] leading-[1.3rem] text-center py-4
                sm:text-lg w-[600px] sm:m-auto sm:mb-4 '>
                    Fylo stores all your most important files in one secure location. Access them wherever
                    you need, share and collaborate with friends family, and co-workers.
                </p>
                <button 
                className='text-white py-2 px-4 w-[90%] mx-4 
                flex justify-center bg-cyan-400
                rounded-3xl
                sm:w-[200px] sm:m-auto ' >Get Started</button>
            </article>
        </section>
    )
}

export default Body