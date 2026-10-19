import React, { useState } from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
const [open, setOpen] = useState(false);

  return (
    <main className='items-center bg-[#1A1918] text-sm font-serif'>
        <div className="text-sm tracking-wide">
            <h1 className='text-[#F9F6F0] animate-marquee text-xs uppercase font-bold text-center'>
                ✦Curated collection of modern furniture & decor ✦ Handcrafted chairs, tables,
                 vases & wall art ✦ Free shipping on orders over $150 ✦
            </h1>
        </div>

        <div className="uppercase bg-[#F9F6F0] font-bold justify-between flex">
            <Link to='/' className='cursor-pointer text-[#1A1918] py-2 hover:text-[#6E6B65] hover:underline'>
            vusumzipicks
            </Link>

            <div className="hidden md:flex text-[#6E6B65] gap-3 m-4">
                <Link to='/' className='hover:text-[#C86D51]'>Home</Link>
                <Link to='/shop' className='hover:text-[#C86D51]'>Shop</Link>
                <Link to='/about' className='hover:text-[#C86D51]'>Our Story</Link>
                <Link to='/contact' className='hover:text-[#C86D51]'>Contact us</Link>
                  <div>
                    <Link to='/login' className='bg-[#6E6B65] px-4 py-2 rounded cursor-pointer text-[#FFFFFF] hover:bg-purple-400 '>
                        Login
                    </Link>
                    <Link to='/cart' className='px-2 py-2' >
                          🛒
                    </Link>
                </div>
              
            </div>
              <button className='md:hidden flex text-2xl font-bold cursor-pointer m-3'
                onClick={()=>setOpen(!open)}>
                  {open ? '→':'←'}
                </button>
                {open && (
                  <div className="absolute bg-[#6E6B65] items-center p-4 text-[#FFFFFF] gap-2 top-14 right-0 md:hidden flex flex-col">
                          <Link to='/' className='hover:text-[#C86D51]'>Home</Link>
                <Link to='/shop' className='hover:text-[#C86D51]'>Shop</Link>
                <Link to='/about' className='hover:text-[#C86D51]'>Our Story</Link>
                <Link to='/contact' className='hover:text-[#C86D51]'>Contact us</Link>
                 
                    <Link to='/login' className='bg-[#1A1918] px-4 py-2 rounded cursor-pointer text-[#FFFFFF] hover:bg-purple-400 '>
                        Login
                    </Link>
                    <Link to='/cart' className='px-2 py-2' >
                          🛒
                    </Link>
                </div>
                )

                }

        </div>

    </main>
  )
}

export default Navbar
