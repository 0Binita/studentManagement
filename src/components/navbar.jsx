import React from 'react';


const Navbar = () =>{
    return (
        <div>
            <nav className='flex justify-between bg-slate-300 text-black h-20 pt-6 pl-12 w-full text-xl font-medium tracking-wide'>
                <div>
                <a href='/'>Logo</a>
                </div>
                <div className='px-12 space-x-16'>
                <a href='/'>Home</a>
                <a href='/table'>Table</a>
                <a href='/form'>Form</a>
                <a href='/course'>Course</a>

              

                </div>
            </nav>
        </div>
    )
};

export default Navbar;

