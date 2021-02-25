import React from 'react';
import image from './pexels-pixabay-247399.jpg';

const Home = () => {
    return (
        <main>
            <img
                src={image}
                alt='web design'
                className='absolute object-cover w-full h-full opacity-1'
            />
            <section className='relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8'>
                <h1 className='text-6xl text-red-100 font-bold cursive leading-none lg:leading-snug home-name'>
                    Hello there
                </h1>
            </section>
        </main>
    );
};

export default Home;
