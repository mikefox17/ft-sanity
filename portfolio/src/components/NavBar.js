import React from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

const NavBar = () => {
    return (
        <header className='bg-red-600'>
            <div className='container mx-auto flex justify-between'>
                <nav className='flex'>
                    <NavLink
                        activeClassName='text-white'
                        to='/'
                        exact
                        className='inline-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-black text-4xl font-bold cursive tracking-widest'
                    >
                        Foxtree
                    </NavLink>
                    <NavLink
                        activeClassName='text-white'
                        to='/post'
                        className='inline-flex items-center py-6 px-3 text-red-100 hover:text-black text-2l font-bold '
                    >
                        Blog
                    </NavLink>
                    <NavLink
                        activeClassName='text-white'
                        to='/project'
                        className='inline-flex items-center py-6 px-3 text-red-100 hover:text-black text-2l font-bold '
                    >
                        Projects
                    </NavLink>
                    <NavLink
                        activeClassName='text-white bg-red-700'
                        to='/about'
                        className='inline-flex rounded items-center py-6 px-3 text-red-100 hover:text-black text-2l font-bold '
                    >
                        About
                    </NavLink>
                </nav>
                <div className='inline-flex items-center py-3 my-3 '>
                    <SocialIcon
                        url='https://twitter.com/foxdownstairs'
                        className='mr-4'
                        target='_blank'
                        fgColor='#fff'
                        style={{ height: 35, width: 35 }}
                    />
                    <SocialIcon
                        url='https://www.instagram.com/thefoxdownstairs/?hl=en'
                        className='mr-4'
                        target='_blank'
                        fgColor='#fff'
                        style={{ height: 35, width: 35 }}
                    />
                    <SocialIcon
                        url='https://www.linkedin.com/in/mikefox17/'
                        className='mr-4'
                        target='_blank'
                        fgColor='#fff'
                        style={{ height: 35, width: 35 }}
                    />
                </div>
            </div>
        </header>
    );
};

export default NavBar;
